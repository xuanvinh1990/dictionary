import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// AI Studio dev server runs on port 3000
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry User-Agent as required by skill
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

interface GenerateRequest {
  keyword: string;
  grade: number;
  unit: number;
  unitTitle?: string;
  dictionarySource?: string;
  questionCount?: number;
  startQuestionNum?: number;
  maxWords?: number;
  variationSeed?: number;
}

import {
  DICTIONARY_SOURCES,
  DictionarySourceId,
  resolveDictionarySourceId,
} from './src/utils/dictionarySources';

// Lazy-load large curriculum & vocabulary modules so port 3000 binds immediately on startup
let ipaUtilsPromise: Promise<typeof import('./src/utils/ipaDictionaryApi')> | null = null;
function getIpaUtils() {
  if (!ipaUtilsPromise) {
    ipaUtilsPromise = import('./src/utils/ipaDictionaryApi');
  }
  return ipaUtilsPromise;
}

let exerciseGeneratorPromise: Promise<typeof import('./src/utils/exerciseGenerator')> | null = null;
function getExerciseGenerator() {
  if (!exerciseGeneratorPromise) {
    exerciseGeneratorPromise = import('./src/utils/exerciseGenerator');
  }
  return exerciseGeneratorPromise;
}

interface OnlineDictionaryResult {
  sourceId: DictionarySourceId;
  keyword: string;
  ukIpa: string;
  usIpa: string;
  ukAudio?: string;
  usAudio?: string;
  pos: string;
  grammarTag: string;
  defText: string;
  examples: string[];
  examplePairs?: { fullSentence: string; boldPhrase: string }[];
  syllables?: string;
  sourceUrl: string;
  isGenericFallback?: boolean;
}

const BROWSER_FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

/**
 * Fetch and parse authentic live entry directly from https://dictionary.cambridge.org/
 */
async function fetchCambridgeDictionaryOnline(word: string): Promise<OnlineDictionaryResult | null> {
  const url = DICTIONARY_SOURCES.cambridge.buildEntryUrl(word);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: BROWSER_FETCH_HEADERS,
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const html = await res.text();

    const ukIpaMatch = html.match(/class="uk dpron-i\s*".*?class="ipa dipa[^"]*">([^<]+)<\/span>/s);
    const usIpaMatch = html.match(/class="us dpron-i\s*".*?class="ipa dipa[^"]*">([^<]+)<\/span>/s);
    const ukAudioMatch = html.match(/class="uk dpron-i\s*".*?src="(\/media\/english\/uk_pron\/[^"]+\.mp3)"/s);
    const usAudioMatch = html.match(/class="us dpron-i\s*".*?src="(\/media\/english\/us_pron\/[^"]+\.mp3)"/s);
    const posMatch = html.match(/class="pos dpos"[^>]*>([^<]+)<\/span>/);
    const gramMatch = html.match(/<span class="gram dgram"><a[^>]*>\[\s*<span class="gc dgc">([^<]+)<\/span>\s*\]<\/a><\/span>/);
    const defMatch = html.match(/<div class="def ddef_d db">([\s\S]*?)<\/div>/);
    let defText = defMatch
      ? decodeHtmlEntities(defMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
      : '';
    if (defText.endsWith(':')) defText = defText.slice(0, -1).trim();

    const exMatches = [...html.matchAll(/<span class="eg deg">([\s\S]*?)<\/span>/g)];
    const examples = exMatches
      .map((m) => decodeHtmlEntities(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()))
      .filter((s) => s.length > 5)
      .slice(0, 6);

    let ukIpa = ukIpaMatch ? `/${ukIpaMatch[1].trim()}/` : '';
    let usIpa = usIpaMatch ? `/${usIpaMatch[1].trim()}/` : ukIpa;

    ukIpa = ukIpa.replace(/·/g, '.');
    usIpa = usIpa.replace(/·/g, '.');

    if (!ukIpa && !usIpa) return null;

    return {
      sourceId: 'cambridge',
      keyword: word,
      ukIpa,
      usIpa,
      ukAudio: ukAudioMatch ? `https://dictionary.cambridge.org${ukAudioMatch[1]}` : undefined,
      usAudio: usAudioMatch ? `https://dictionary.cambridge.org${usAudioMatch[1]}` : undefined,
      pos: posMatch ? posMatch[1].trim() : 'noun',
      grammarTag: gramMatch ? `[${gramMatch[1].trim()}]` : '[countable]',
      defText,
      examples,
      sourceUrl: url,
    };
  } catch {
    return null;
  }
}

/**
 * Fetch and parse authentic live entry directly from https://www.oxfordlearnersdictionaries.com/
 */
async function fetchOxfordDictionaryOnline(word: string): Promise<OnlineDictionaryResult | null> {
  const url = DICTIONARY_SOURCES.oxford.buildEntryUrl(word);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: BROWSER_FETCH_HEADERS,
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const html = await res.text();

    const phonMatches = [...html.matchAll(/class="phon"[^>]*>([^<]+)<\/span>/g)];
    const rawUkIpa = phonMatches[0]?.[1]?.trim() || '';
    const rawUsIpa = phonMatches[1]?.[1]?.trim() || rawUkIpa;

    const normalizeSlashes = (ipa: string) => {
      if (!ipa) return '';
      const stripped = ipa.replace(/^\/+|\/+$/g, '').trim();
      return stripped ? `/${stripped}/` : '';
    };

    const ukIpa = normalizeSlashes(rawUkIpa);
    const usIpa = normalizeSlashes(rawUsIpa) || ukIpa;

    const audioMatches = [...html.matchAll(/data-src-mp3="([^"]+)"/g)].map((m) => m[1]);
    const ukAudio = audioMatches.find((u) => u.includes('__gb_') || u.includes('uk_pron')) || audioMatches[0];
    const usAudio = audioMatches.find((u) => u.includes('__us_') || u.includes('us_pron')) || audioMatches[1];

    const posMatch = html.match(/class="pos"[^>]*>([^<]+)<\/span>/);
    const gramMatch = html.match(/class="grammar"[^>]*>([^<]+)<\/span>/);
    let grammarTag = gramMatch ? decodeHtmlEntities(gramMatch[1].trim()) : '';
    if (grammarTag && !grammarTag.startsWith('[')) {
      grammarTag = `[${grammarTag}]`;
    }

    const defMatch = html.match(/class="def"[^>]*>([\s\S]*?)<\/span>/);
    let defText = defMatch
      ? decodeHtmlEntities(defMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
      : '';
    if (defText.endsWith(':')) defText = defText.slice(0, -1).trim();

    const liMatches = [...html.matchAll(/<li[^>]*>[\s\S]*?<span class="x"[^>]*>([\s\S]*?)<\/li>/g)].slice(0, 6);
    const examplePairs: { fullSentence: string; boldPhrase: string }[] = [];
    const examples: string[] = [];

    for (const m of liMatches) {
      const block = m[1];
      const clMatch = block.match(/<span class="cl"[^>]*>([\s\S]*?)<\/span>/);
      const boldPhrase = clMatch
        ? decodeHtmlEntities(clMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
        : '';
      const fullSentence = decodeHtmlEntities(
        block
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .replace(/\s+([.,;!?])/g, '$1')
          .trim()
      );
      if (fullSentence.length > 5) {
        examples.push(fullSentence);
        if (boldPhrase) {
          examplePairs.push({ fullSentence, boldPhrase });
        }
      }
    }

    if (!ukIpa && !defText) return null;

    return {
      sourceId: 'oxford',
      keyword: word,
      ukIpa,
      usIpa,
      ukAudio,
      usAudio,
      pos: posMatch ? posMatch[1].trim() : 'noun',
      grammarTag: grammarTag || '[countable]',
      defText,
      examples,
      examplePairs: examplePairs.length > 0 ? examplePairs : undefined,
      sourceUrl: url,
    };
  } catch {
    return null;
  }
}

/**
 * Fetch and parse authentic live entry directly from https://www.ldoceonline.com/
 */
async function fetchLongmanDictionaryOnline(word: string): Promise<OnlineDictionaryResult | null> {
  const url = DICTIONARY_SOURCES.ldoce.buildEntryUrl(word);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: BROWSER_FETCH_HEADERS,
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const html = await res.text();

    const pronMatch = html.match(/class="PRON"[^>]*>([^<]+)<\/span>/);
    const ameMatch = html.match(/class="AMEVARPRON"[^>]*>([\s\S]*?)<\/span>/);
    const hyphenMatch = html.match(/class="HYPHENATION"[^>]*>([^<]+)<\/span>/);

    const normalizeSlashes = (ipa: string) => {
      const cleaned = ipa.replace(/^\$\s*/, '').replace(/^\/+|\/+$/g, '').trim();
      return cleaned ? `/${cleaned}/` : '';
    };

    const ukIpa = normalizeSlashes(pronMatch ? decodeHtmlEntities(pronMatch[1]) : '');
    const rawUs = ameMatch ? decodeHtmlEntities(ameMatch[1].replace(/<[^>]+>/g, '')) : '';
    const usIpa = normalizeSlashes(rawUs) || ukIpa;

    const audioMatches = [...html.matchAll(/data-src-mp3="([^"]+)"/g)].map((m) => m[1]);
    const ukAudio = audioMatches.find((u) => u.includes('breProns')) || audioMatches[0];
    const usAudio = audioMatches.find((u) => u.includes('ameProns')) || audioMatches[1];

    const posMatch = html.match(/class="POS"[^>]*>([^<]+)<\/span>/);
    const gramMatch = html.match(/<span class="GRAM"[^>]*>([\s\S]*?)<\/span>(?=\s*<\/span>|\s*<span class="(?:DEF|ACTIV|SENSE|EXAMPLE|REGISTERLAB|GEO)")/);
    let grammarTag = gramMatch
      ? decodeHtmlEntities(gramMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
      : '';
    if (grammarTag === '[' || grammarTag === ']') grammarTag = '';
    if (grammarTag && !grammarTag.startsWith('[')) {
      grammarTag = `[${grammarTag}]`;
    }
    if (grammarTag.startsWith('[') && !grammarTag.endsWith(']')) {
      grammarTag = `${grammarTag}]`;
    }

    const defMatch = html.match(/class="DEF"[^>]*>([\s\S]*?)<\/span>/);
    let defText = defMatch
      ? decodeHtmlEntities(defMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
      : '';
    if (defText.endsWith(':')) defText = defText.slice(0, -1).trim();

    const cleanedHtml = html.replace(/<span[^>]*class="speaker[^"]*"[^>]*>[\s\S]*?<\/span>/g, '');
    const exMatches = [...cleanedHtml.matchAll(/<span class="EXAMPLE"[^>]*>([\s\S]*?)<\/span>/g)];
    const examples = exMatches
      .map((m) =>
        decodeHtmlEntities(
          m[1]
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .replace(/\s+([.,;!?])/g, '$1')
            .trim()
        )
      )
      .filter((s) => s.length > 5)
      .slice(0, 6);

    if (!ukIpa && !defText) return null;

    return {
      sourceId: 'ldoce',
      keyword: word,
      ukIpa,
      usIpa,
      ukAudio,
      usAudio,
      pos: posMatch ? posMatch[1].trim() : 'noun',
      grammarTag: grammarTag || '[countable]',
      defText,
      examples,
      syllables: hyphenMatch ? decodeHtmlEntities(hyphenMatch[1].trim()) : undefined,
      sourceUrl: url,
    };
  } catch {
    return null;
  }
}

interface DictionaryApiDevResult {
  ukIpa: string;
  usIpa: string;
  ukAudio?: string;
  usAudio?: string;
  pos: string;
  grammarTag: string;
  defText: string;
  examples: string[];
}

/**
 * Reliable JSON dictionary API fallback (https://dictionaryapi.dev/)
 * Used when Cambridge/Oxford/LDOCE HTML scraping is blocked or missing definition/POS fields.
 */
async function fetchDictionaryApiDevFallback(word: string): Promise<DictionaryApiDevResult | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res.ok) return null;

    const data = await res.json();
    if (!Array.isArray(data) || !data[0]) return null;
    const entry = data[0];

    let ukIpa = '';
    let usIpa = '';
    let ukAudio: string | undefined;
    let usAudio: string | undefined;

    if (typeof entry.phonetic === 'string' && entry.phonetic.trim()) {
      ukIpa = entry.phonetic.trim();
    }

    if (Array.isArray(entry.phonetics)) {
      for (const p of entry.phonetics) {
        const audio = typeof p.audio === 'string' ? p.audio.trim() : '';
        const text = typeof p.text === 'string' ? p.text.trim() : '';
        if (audio) {
          if (audio.includes('-uk') || audio.includes('en-uk')) {
            ukAudio = audio;
            if (text) ukIpa = text;
          } else if (audio.includes('-us') || audio.includes('en-us')) {
            usAudio = audio;
            if (text) usIpa = text;
          } else if (!ukAudio) {
            ukAudio = audio;
          }
        }
        if (text && !ukIpa) {
          ukIpa = text;
        }
      }
    }

    if (ukIpa && !ukIpa.startsWith('/')) ukIpa = `/${ukIpa.replace(/^\/+|\/+$/g, '')}/`;
    if (usIpa && !usIpa.startsWith('/')) usIpa = `/${usIpa.replace(/^\/+|\/+$/g, '')}/`;
    if (!usIpa) usIpa = ukIpa;

    const meanings = Array.isArray(entry.meanings) ? entry.meanings : [];
    const primaryMeaning = meanings[0];
    const pos =
      typeof primaryMeaning?.partOfSpeech === 'string' && primaryMeaning.partOfSpeech.trim()
        ? primaryMeaning.partOfSpeech.trim().toLowerCase()
        : 'noun';

    let defText = '';
    const examples: string[] = [];

    for (const m of meanings) {
      const defs = Array.isArray(m.definitions) ? m.definitions : [];
      for (const d of defs) {
        if (!defText && typeof d.definition === 'string' && d.definition.trim()) {
          defText = d.definition.trim();
        }
        if (typeof d.example === 'string' && d.example.trim().length > 5) {
          examples.push(d.example.trim());
        }
      }
    }

    if (!defText && !ukIpa) return null;

    const grammarTag =
      pos === 'verb'
        ? '[transitive, intransitive]'
        : pos === 'adjective'
        ? '[adjective]'
        : pos === 'adverb'
        ? '[adverb]'
        : '[countable, uncountable]';

    return {
      ukIpa,
      usIpa,
      ukAudio,
      usAudio,
      pos,
      grammarTag,
      defText,
      examples: examples.slice(0, 6),
    };
  } catch {
    return null;
  }
}

async function fetchDictionaryOnlineBySource(
  word: string,
  preferredSourceId: DictionarySourceId
): Promise<OnlineDictionaryResult | null> {
  const fetcherMap: Record<DictionarySourceId, (w: string) => Promise<OnlineDictionaryResult | null>> = {
    cambridge: fetchCambridgeDictionaryOnline,
    oxford: fetchOxfordDictionaryOnline,
    ldoce: fetchLongmanDictionaryOnline,
  };

  const order: DictionarySourceId[] = [
    preferredSourceId,
    ...(['cambridge', 'oxford', 'ldoce'] as DictionarySourceId[]).filter(
      (id) => id !== preferredSourceId
    ),
  ];

  let scraperResult: OnlineDictionaryResult | null = null;
  for (const id of order) {
    const result = await fetcherMap[id](word);
    if (result) {
      scraperResult = result;
      break;
    }
  }

  // If scraper got partial data (e.g. missing definition or examples), or returned null, query dictionaryapi.dev
  if (!scraperResult || !scraperResult.defText || scraperResult.examples.length === 0) {
    const apiDev = await fetchDictionaryApiDevFallback(word);
    if (scraperResult) {
      if (apiDev) {
        if (!scraperResult.defText && apiDev.defText) scraperResult.defText = apiDev.defText;
        if (!scraperResult.pos && apiDev.pos) scraperResult.pos = apiDev.pos;
        if (!scraperResult.ukIpa && apiDev.ukIpa) scraperResult.ukIpa = apiDev.ukIpa;
        if (!scraperResult.usIpa && apiDev.usIpa) scraperResult.usIpa = apiDev.usIpa;
        if (!scraperResult.ukAudio && apiDev.ukAudio) scraperResult.ukAudio = apiDev.ukAudio;
        if (!scraperResult.usAudio && apiDev.usAudio) scraperResult.usAudio = apiDev.usAudio;
        if (scraperResult.examples.length === 0 && apiDev.examples.length > 0) {
          scraperResult.examples = apiDev.examples;
        }
      }
      return scraperResult;
    }

    if (apiDev) {
      return {
        sourceId: preferredSourceId,
        keyword: word,
        ukIpa: apiDev.ukIpa,
        usIpa: apiDev.usIpa,
        ukAudio: apiDev.ukAudio,
        usAudio: apiDev.usAudio,
        pos: apiDev.pos,
        grammarTag: apiDev.grammarTag,
        defText: apiDev.defText,
        examples: apiDev.examples,
        sourceUrl: DICTIONARY_SOURCES[preferredSourceId].buildEntryUrl(word),
        isGenericFallback: true,
      };
    }
  }

  return scraperResult;
}

app.get('/api/health', (_req: Request, res: Response) => {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  const hasValidKey = apiKey.startsWith('AIza') && apiKey.length >= 30;
  res.json({ status: 'ok', hasApiKey: hasValidKey });
});

app.get('/api/dictionary-ipa', async (req: Request, res: Response) => {
  const word = (req.query.word as string || '').trim().toLowerCase();
  const sourceParam = (req.query.source as string) || '';
  const sourceId = resolveDictionarySourceId(sourceParam);

  if (!word) {
    return res.status(400).json({ error: 'Thiếu tham số word' });
  }

  try {
    const { deriveIPADetails } = await getIpaUtils();
    const details = deriveIPADetails(word);

    // 1. Fetch live directly from the selected dictionary source (Cambridge / Oxford / Longman + dictionaryapi.dev fallback)
    const liveOnline = await fetchDictionaryOnlineBySource(word, sourceId);
    if (liveOnline) {
      if (liveOnline.sourceId === 'cambridge') {
        if (liveOnline.ukIpa) details.cambridge.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) details.cambridge.us = liveOnline.usIpa;
        if (liveOnline.ukAudio) details.cambridge.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) details.cambridge.audioUs = liveOnline.usAudio;
      } else if (liveOnline.sourceId === 'oxford') {
        if (liveOnline.ukIpa) details.oxford.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) details.oxford.us = liveOnline.usIpa;
        if (liveOnline.ukAudio) details.oxford.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) details.oxford.audioUs = liveOnline.usAudio;
      } else if (liveOnline.sourceId === 'ldoce') {
        if (liveOnline.ukIpa) details.longman.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) details.longman.us = liveOnline.usIpa;
        if (liveOnline.syllables) {
          details.longman.syllables = liveOnline.syllables;
          details.syllables = liveOnline.syllables;
        }
        if (liveOnline.ukAudio) details.longman.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) details.longman.audioUs = liveOnline.usAudio;
      }

      if (liveOnline.ukAudio) {
        details.audioUrlUk = liveOnline.ukAudio;
      }
      if (liveOnline.usAudio) {
        details.audioUrlUs = liveOnline.usAudio;
      }
      return res.json({
        ...details,
        keyword: word,
        pos: liveOnline.pos,
        grammarTag: liveOnline.grammarTag,
        defText: liveOnline.defText,
        examples: liveOnline.examples,
        sourceUrl: liveOnline.sourceUrl,
        activeSourceId: liveOnline.sourceId,
        isOnlineLive: true,
      });
    }

    return res.json({
      ...details,
      keyword: word,
      sourceUrl: DICTIONARY_SOURCES[sourceId].buildEntryUrl(word),
      activeSourceId: sourceId,
      isOnlineLive: false,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Lỗi tra cứu IPA' });
  }
});

app.post('/api/generate-exercise', async (req: Request, res: Response) => {
  console.log('Received /api/generate-exercise request:', req.body);
  try {
    const {
      keyword,
      grade = 8,
      unit = 6,
      unitTitle = 'Lifestyles',
      dictionarySource = 'Cambridge Advanced Learner\'s Dictionary',
      questionCount = 2,
      startQuestionNum = 35,
      maxWords = 3,
      variationSeed = 0,
    }: GenerateRequest = req.body;

    if (!keyword || typeof keyword !== 'string' || keyword.trim() === '') {
      return res.status(400).json({ error: 'Vui lòng cung cấp từ khóa (keyword).' });
    }

    const cleanKeyword = keyword.trim().toLowerCase();
    const sourceId = resolveDictionarySourceId(dictionarySource);
    const sourceInfo = DICTIONARY_SOURCES[sourceId];

    // 1. Fetch live dictionary entry directly from the chosen dictionary source
    const liveOnline = await fetchDictionaryOnlineBySource(cleanKeyword, sourceId);

    let dictionaryContext = '';
    if (liveOnline) {
      dictionaryContext = `
DỮ LIỆU GỐC TRA CỨU TRỰC TIẾP TỪ TRANG NGUỒN CHÍNH THỨC ${liveOnline.sourceUrl} (${sourceInfo.name}):
- Headword: "${liveOnline.keyword}"
- Phiên âm chuẩn UK (${sourceInfo.shortName}): "${liveOnline.ukIpa}"
- Phiên âm chuẩn US (${sourceInfo.shortName}): "${liveOnline.usIpa}"
- Từ loại (Part of Speech): "${liveOnline.pos}"
- Nhãn ngữ pháp: "${liveOnline.grammarTag}"
- Định nghĩa gốc từ từ điển: "${liveOnline.defText}"
- Các câu ví dụ gốc từ trang từ điển:
${liveOnline.examples.map((ex) => `  * ${ex}`).join('\n')}

LƯU Ý QUAN TRỌNG: Hãy sử dụng CHÍNH XÁC phiên âm IPA "${liveOnline.ukIpa}" và định nghĩa gốc này. Trích xuất các cụm từ (collocations) từ các ví dụ trên để làm đáp án chuẩn cho học sinh.
`;
    }

    const gradeDifficultyGuidelines: Record<number, string> = {
      6: `YÊU CẦU ĐỘ KHÓ DÀNH CHO KHỐI LỚP 6 (Trình độ A1 - Cơ bản):
- Ngữ pháp: Câu đơn ngắn (dưới 10 từ), thì Hiện tại đơn (is/am/are, V-s/es), Hiện tại tiếp diễn (is/are + V-ing), động từ khiếm khuyết đơn giản (can, should, must), cấu trúc sở thích (like/love/enjoy + V-ing, There is/are).
- Ngữ cảnh: Đời sống học đường, lớp học mới, bạn bè, đồ dùng học tập, gia đình, nhà ở, hoạt động hàng ngày.
- Chỗ trống: Điền cụm từ ngắn (1-2 từ, hoặc 3 từ rất dễ), có từ tín hiệu gợi ý rõ ràng ngay trước/sau chỗ trống.
- Lời giải thích: Đơn giản, dễ hiểu, chỉ rõ từ loại và vị trí trong câu cho học sinh lớp 6.`,
      7: `YÊU CẦU ĐỘ KHÓ DÀNH CHO KHỐI LỚP 7 (Trình độ A2- - Mở rộng câu ghép):
- Ngữ pháp: Câu ghép kết hợp liên từ (and, but, so, because), thì Quá khứ đơn (was/were, V-ed), Tương lai đơn (will), so sánh hơn/kém của tính từ, câu mệnh lệnh.
- Ngữ cảnh: Hoạt động cộng đồng, thiện nguyện, sở thích lành mạnh, âm nhạc nghệ thuật, thói quen ăn uống, sức khỏe học đường, an toàn giao thông.
- Chỗ trống: Cụm từ 2-3 từ làm bổ ngữ hoặc chủ ngữ trong câu ghép.
- Lời giải thích: Phân tích liên từ và cách nối 2 mệnh đề trong câu ghép.`,
      8: `YÊU CẦU ĐỘ KHÓ DÀNH CHO KHỐI LỚP 8 (Trình độ A2+ - Nâng cao cơ sở / Câu phức):
- Ngữ pháp: Câu phức có mệnh đề trạng ngữ (although, even though, while, when), Câu điều kiện Loại 1, Câu bị động cơ bản, động từ chỉ sự yêu thích (fancy, detest, adore, prefer) + V-ing.
- Ngữ cảnh: Phong cách sống (lifestyles), bảo tồn văn hóa và nghề truyền thống của các dân tộc, thảm họa thiên nhiên, mua sắm và công nghệ.
- Chỗ trống: Cụm collocations tự nhiên 2-3 từ đòi hỏi học sinh nhận biết sự kết hợp từ chặt chẽ.
- Lời giải thích: Phân tích mệnh đề phụ và cấu trúc câu phức.`,
      9: `YÊU CẦU ĐỘ KHÓ DÀNH CHO KHỐI LỚP 9 (Trình độ B1 - TRỌNG TÂM LUYỆN THI TUYỂN SINH VÀO LỚP 10 THPT):
- Ngữ pháp: Chuẩn cấu trúc đề thi Tuyển sinh vào Lớp 10 THPT chính thức (như đề thi Sở GD&ĐT TP.HCM / Hà Nội). Câu phức đa mệnh đề, Mệnh đề quan hệ (who, which, that, where, whose), Câu điều kiện Loại 2, Câu tường thuật, Câu bị động nâng cao, Cụm phân từ (participle clauses), Phrasal verbs và collocations nâng cao.
- Ngữ cảnh: Đề tài học thuật, di sản văn hóa, phát triển cộng đồng bền vững, định hướng nghề nghiệp tương lai, tiếng Anh toàn cầu.
- Chỗ trống: Collocation học thuật 2-3 từ mang tính phân hóa cao, đòi hỏi học sinh phân tích ngữ cảnh sâu sắc để không bị bẫy ngữ pháp.
- Lời giải thích: Chuyên sâu sư phạm, phân tích cấu trúc đề thi tuyển sinh lớp 10, chỉ ra điểm mấu chốt để đạt trọn vẹn điểm.`,
    };

    const prompt = `
Bạn là chuyên gia khảo thí và giáo viên Tiếng Anh nhiều kinh nghiệm chuyên luyện thi tuyển sinh vào lớp 10 và giảng dạy giáo trình Global Success (Bộ GD&ĐT) khối ${grade}.
Nhiệm vụ: Tạo một câu hỏi bài tập tra cứu từ điển dạng "Dictionary Entry Sentence Completion" (như đề thi tuyển sinh lớp 10 TP.HCM / đề kiểm tra định kỳ Global Success) cho từ khóa: "${cleanKeyword}".
Trang nguồn tra cứu mục từ điển: "${sourceInfo.baseUrl}" (${sourceInfo.name})
Chủ đề liên quan: Tiếng Anh ${grade} - Unit ${unit}: ${unitTitle}.
${dictionaryContext}

${gradeDifficultyGuidelines[grade] || gradeDifficultyGuidelines[8]}

YÊU CẦU ĐẶC BIỆT THEO CHUẨN ĐỀ THI:
1. Tra cứu định nghĩa và phiên âm chuẩn từ điển ${sourceInfo.name} (${sourceInfo.baseUrl}):
   - Headword: "${cleanKeyword}"
   - IPA chuẩn xác theo ${sourceInfo.shortName} (ví dụ: ${liveOnline?.ukIpa || '/ˈhæb.ɪt/'})
   - Từ loại chính xác (${liveOnline?.pos || 'noun, verb, adjective, etc.'})
   - Định nghĩa xúc tích, chuẩn xác, có ghi nhãn ngữ pháp như ${liveOnline?.grammarTag || '[countable], [uncountable], [transitive]'}, etc.
   - Danh sách 4 đến 5 câu ví dụ thực tế chuẩn từ điển ${sourceInfo.shortName}.
   - Trong mỗi câu ví dụ, hãy chỉ rõ cụm từ/collocation quan trọng (độ dài 2-3 từ) để làm đáp án tiềm năng. Ví dụ với "habit": "eating habits", "develop the habit", "break the habit", "let it become a habit".

2. Tạo đúng ${questionCount} câu hỏi bài tập điền khuyết:
   - Đánh số thứ tự bắt đầu từ câu số ${startQuestionNum} (ví dụ: ${startQuestionNum}, ${startQuestionNum + 1}).
   - Mỗi câu bài tập PHẢI tuân thủ chính xác mức độ khó và cấu trúc ngữ pháp của Khối lớp ${grade} đã nêu ở trên.
   - CHÍNH XÁC VỀ NGỮ NGHĨA (SEMANTICALLY): Câu hỏi phải đúng ngữ cảnh thực tế của từ "${cleanKeyword}" (ví dụ: uniform là trang phục trường học/lễ chào cờ, artisan là nghệ nhân làm đồ gốm/thủ công, habit là thói quen ăn uống/sinh hoạt, craft là nghề truyền thống, recycle là rác thải/bảo vệ môi trường). Tuyệt đối không tạo câu vô nghĩa.
   - CHÍNH XÁC VỀ NGỮ PHÁP (GRAMMATICALLY): Khi điền đáp án vào chỗ trống (sentenceBefore + answer + sentenceAfter), câu hoàn chỉnh phải là câu tiếng Anh chuẩn 100%. Vị trí sau "must/should/to" phải là cụm động từ nguyên mẫu; vị trí làm chủ ngữ hoặc sau tính từ phải là cụm danh từ; vị trí sau to be/linking verbs có thể là cụm tính từ.
   - Chỗ trống phải được điền CHÍNH XÁC bằng một cụm từ (phrases) xuất hiện in đậm (boldPhrase) trong các câu ví dụ của bảng từ điển trên.
   - Đáp án không được vượt quá ${maxWords} từ ("Do not use more than ${maxWords === 3 ? 'THREE' : maxWords} words for each phrase").
   - Cung cấp dịch nghĩa tiếng Việt chi tiết và lời giải thích ngắn gọn, sư phạm cho giáo viên và học sinh.
${variationSeed > 0 ? `\n3. YÊU CẦU ĐỔI BỘ CÂU HỎI MỚI (Biến thể số ${variationSeed + 1}):\n   - Tạo các câu hỏi hoàn toàn mới với ngữ cảnh, cấu trúc câu và cụm collocation mục tiêu khác với những lần tạo trước cho từ "${cleanKeyword}".` : ''}
`;

    let response: any = null;
    const rawApiKey = (process.env.GEMINI_API_KEY || '').trim();
    const hasValidGeminiKey = rawApiKey.startsWith('AIza') && rawApiKey.length >= 30;

    if (hasValidGeminiKey) {
      try {
        // Call Gemini with 6s timeout so teachers never wait indefinitely
        const geminiCall = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction: `You are a professional ESL test designer and senior English teacher specializing in Vietnam's Ministry of Education "Global Success" curriculum (Grades 6-9) and Grade 10 High School Entrance Exams (Tuyển sinh lớp 10). Return strictly valid JSON conforming to the requested schema. Ensure authentic ${sourceInfo.name} (${sourceInfo.domain}) style IPA transcription and high pedagogical precision.`,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                keyword: { type: Type.STRING },
                ipa: { type: Type.STRING, description: `Phonetic transcription according to ${sourceInfo.name} standard` },
                partOfSpeech: { type: Type.STRING, description: 'e.g. noun, verb, adjective' },
                dictionarySource: { type: Type.STRING },
                definitionNumber: { type: Type.STRING, description: 'e.g. 1.' },
                grammarTag: { type: Type.STRING, description: 'e.g. [countable], [uncountable], [transitive]' },
                definitionText: { type: Type.STRING, description: 'Clear dictionary definition' },
                examples: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      fullSentence: { type: Type.STRING, description: 'The complete example sentence' },
                      boldPhrase: { type: Type.STRING, description: 'The collocation or key phrase in the example that should be bolded, e.g. break the habit' },
                    },
                    required: ['fullSentence', 'boldPhrase'],
                  },
                },
                instructionEn: {
                  type: Type.STRING,
                  description: 'Standard English instruction, e.g. Look at the entry of the word "habit" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
                },
                instructionVi: {
                  type: Type.STRING,
                  description: 'Standard Vietnamese instruction, e.g. Dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.',
                },
                pointsTotal: { type: Type.STRING, description: 'e.g. (0.5 pt)' },
                questions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      questionNumber: { type: Type.INTEGER },
                      sentenceBefore: { type: Type.STRING, description: 'Text before the blank, e.g. "I\'m trying to "' },
                      sentenceAfter: { type: Type.STRING, description: 'Text after the blank, e.g. " of staying up too late."' },
                      answer: { type: Type.STRING, description: 'The exact phrase matching the entry, e.g. "break the habit"' },
                      vietnameseMeaning: { type: Type.STRING, description: 'Full Vietnamese translation of the completed sentence' },
                      explanation: { type: Type.STRING, description: 'Clear rationale pointing to the dictionary entry phrase and grammatical collocations' },
                    },
                    required: ['questionNumber', 'sentenceBefore', 'sentenceAfter', 'answer', 'vietnameseMeaning', 'explanation'],
                  },
                },
              },
              required: [
                'keyword',
                'ipa',
                'partOfSpeech',
                'dictionarySource',
                'definitionText',
                'examples',
                'instructionEn',
                'instructionVi',
                'pointsTotal',
                'questions',
              ],
            },
          },
        });

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('TIMEOUT_AI')), 6500)
        );

        response = await Promise.race([geminiCall, timeoutPromise]);
      } catch {
        // Fallback seamlessly to the Cambridge curriculum generator without logging unauthenticated RPC blobs
      }
    }

    if (!response || !response.text) {
      console.log(`Using fallback generator for "${cleanKeyword}" due to API unavailability`);
      const fallbackData = await createCurriculumFallback(
        cleanKeyword,
        grade,
        unit,
        unitTitle,
        dictionarySource,
        questionCount,
        startQuestionNum,
        maxWords,
        liveOnline,
        variationSeed
      );
      return res.json(fallbackData);
    }

    const parsedData = JSON.parse(response.text);
    const { deriveIPADetails } = await getIpaUtils();
    const ipaDetails = deriveIPADetails(cleanKeyword, parsedData.ipa);

    if (liveOnline) {
      parsedData.ipa = liveOnline.ukIpa || parsedData.ipa;
      if (liveOnline.sourceId === 'cambridge') {
        if (liveOnline.ukIpa) ipaDetails.cambridge.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) ipaDetails.cambridge.us = liveOnline.usIpa;
        if (liveOnline.ukAudio) ipaDetails.cambridge.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) ipaDetails.cambridge.audioUs = liveOnline.usAudio;
      } else if (liveOnline.sourceId === 'oxford') {
        if (liveOnline.ukIpa) ipaDetails.oxford.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) ipaDetails.oxford.us = liveOnline.usIpa;
        if (liveOnline.ukAudio) ipaDetails.oxford.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) ipaDetails.oxford.audioUs = liveOnline.usAudio;
      } else if (liveOnline.sourceId === 'ldoce') {
        if (liveOnline.ukIpa) ipaDetails.longman.uk = liveOnline.ukIpa;
        if (liveOnline.usIpa) ipaDetails.longman.us = liveOnline.usIpa;
        if (liveOnline.syllables) {
          ipaDetails.longman.syllables = liveOnline.syllables;
          ipaDetails.syllables = liveOnline.syllables;
        }
        if (liveOnline.ukAudio) ipaDetails.longman.audioUk = liveOnline.ukAudio;
        if (liveOnline.usAudio) ipaDetails.longman.audioUs = liveOnline.usAudio;
      }

      if (liveOnline.ukAudio) {
        ipaDetails.audioUrlUk = liveOnline.ukAudio;
      }
      if (liveOnline.usAudio) {
        ipaDetails.audioUrlUs = liveOnline.usAudio;
      }
    } else {
      parsedData.ipa =
        sourceId === 'oxford'
          ? ipaDetails.oxford.uk
          : sourceId === 'ldoce'
          ? ipaDetails.longman.uk
          : ipaDetails.cambridge.uk;
    }

    parsedData.ipaDetails = ipaDetails;
    const entryUrl = liveOnline?.sourceUrl || sourceInfo.buildEntryUrl(cleanKeyword);
    parsedData.sourceUrl = entryUrl;
    parsedData.cambridgeUrl = DICTIONARY_SOURCES.cambridge.buildEntryUrl(cleanKeyword);
    parsedData.dictionarySource = `${sourceInfo.name} (${sourceInfo.domain})`;
    return res.json(parsedData);
  } catch {
    try {
      const cleanWord = (req.body.keyword || 'habit').trim().toLowerCase();
      const fallbackData = await createCurriculumFallback(
        cleanWord,
        req.body.grade || 8,
        req.body.unit || 6,
        req.body.unitTitle || 'Lifestyles',
        req.body.dictionarySource || "Cambridge Advanced Learner's Dictionary",
        req.body.questionCount || 2,
        req.body.startQuestionNum || 35,
        req.body.maxWords || 3,
        null,
        req.body.variationSeed || 0
      );
      return res.json(fallbackData);
    } catch (fallbackErr: any) {
      return res.status(500).json({
        error: fallbackErr?.message || 'Lỗi khi tra cứu và tạo bài tập. Vui lòng thử lại.',
      });
    }
  }
});

// Built-in intelligent dictionary bank & fallback generator
async function createCurriculumFallback(
  word: string,
  grade: number,
  unit: number,
  unitTitle: string,
  source: string,
  questionCount: number,
  startNum: number,
  maxWords: number,
  liveOnline?: OnlineDictionaryResult | null,
  variationSeed: number = 0
) {
  const sourceId = resolveDictionarySourceId(source);
  const sourceInfo = DICTIONARY_SOURCES[sourceId];
  const { generateExerciseForKeyword } = await getExerciseGenerator();

  // Delegate to generateExerciseForKeyword for 100% semantic, topic-aware, and grammatical precision
  const exercise = generateExerciseForKeyword(
    word,
    grade,
    unit,
    unitTitle,
    questionCount,
    startNum,
    maxWords,
    source,
    liveOnline
      ? {
          examples: liveOnline.examples,
          examplePairs: liveOnline.examplePairs,
          pos: liveOnline.pos,
          grammarTag: liveOnline.grammarTag,
          defText: liveOnline.defText,
        }
      : undefined,
    variationSeed
  );

  // If live online dictionary data was successfully retrieved, enrich exercise
  if (liveOnline) {
    if (liveOnline.ukIpa) {
      exercise.ipa = liveOnline.ukIpa;
      if (exercise.ipaDetails) {
        if (liveOnline.sourceId === 'cambridge') {
          exercise.ipaDetails.cambridge.uk = liveOnline.ukIpa;
        } else if (liveOnline.sourceId === 'oxford') {
          exercise.ipaDetails.oxford.uk = liveOnline.ukIpa;
        } else if (liveOnline.sourceId === 'ldoce') {
          exercise.ipaDetails.longman.uk = liveOnline.ukIpa;
          if (liveOnline.syllables) {
            exercise.ipaDetails.longman.syllables = liveOnline.syllables;
            exercise.ipaDetails.syllables = liveOnline.syllables;
          }
        }
      }
    }
    if (liveOnline.usIpa && exercise.ipaDetails) {
      if (liveOnline.sourceId === 'cambridge') {
        exercise.ipaDetails.cambridge.us = liveOnline.usIpa;
      } else if (liveOnline.sourceId === 'oxford') {
        exercise.ipaDetails.oxford.us = liveOnline.usIpa;
      } else if (liveOnline.sourceId === 'ldoce') {
        exercise.ipaDetails.longman.us = liveOnline.usIpa;
      }
    }
    if (liveOnline.ukAudio && exercise.ipaDetails) {
      exercise.ipaDetails.audioUrlUk = liveOnline.ukAudio;
      if (liveOnline.sourceId === 'cambridge') exercise.ipaDetails.cambridge.audioUk = liveOnline.ukAudio;
      if (liveOnline.sourceId === 'oxford') exercise.ipaDetails.oxford.audioUk = liveOnline.ukAudio;
      if (liveOnline.sourceId === 'ldoce') exercise.ipaDetails.longman.audioUk = liveOnline.ukAudio;
    }
    if (liveOnline.usAudio && exercise.ipaDetails) {
      exercise.ipaDetails.audioUrlUs = liveOnline.usAudio;
      if (liveOnline.sourceId === 'cambridge') exercise.ipaDetails.cambridge.audioUs = liveOnline.usAudio;
      if (liveOnline.sourceId === 'oxford') exercise.ipaDetails.oxford.audioUs = liveOnline.usAudio;
      if (liveOnline.sourceId === 'ldoce') exercise.ipaDetails.longman.audioUs = liveOnline.usAudio;
    }
    if (liveOnline.pos && !liveOnline.isGenericFallback) {
      exercise.partOfSpeech = liveOnline.pos;
    }
    if (liveOnline.grammarTag && !liveOnline.isGenericFallback) {
      exercise.grammarTag = liveOnline.grammarTag;
    }
    if (liveOnline.defText && liveOnline.defText.length > 8) {
      // Only overwrite curated definition if fetched live from Cambridge/Oxford/Longman, or if non-curated
      if (!liveOnline.isGenericFallback || !exercise.definitionText || exercise.definitionText.includes('used ')) {
        exercise.definitionText = liveOnline.defText;
      }
    }
    if (liveOnline.sourceUrl) {
      exercise.sourceUrl = liveOnline.sourceUrl;
    }
  }

  exercise.dictionarySource = `${sourceInfo.name} (${sourceInfo.domain})`;
  exercise.sourceUrl = exercise.sourceUrl || sourceInfo.buildEntryUrl(word);
  exercise.cambridgeUrl = DICTIONARY_SOURCES.cambridge.buildEntryUrl(word);

  return exercise;
}


// Production or Dev server setup
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
