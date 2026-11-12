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
}

import { deriveIPADetails } from './src/utils/ipaDictionaryApi';
import { GLOBAL_SUCCESS_CURRICULUM } from './src/data/globalSuccessCurriculum';
import { findOxfordWord } from './src/data/oxfordVocabulary3000';
import { generateExerciseForKeyword } from './src/utils/exerciseGenerator';

interface CambridgeOnlineResult {
  keyword: string;
  ukIpa: string;
  usIpa: string;
  ukAudio?: string;
  usAudio?: string;
  pos: string;
  grammarTag: string;
  defText: string;
  examples: string[];
  sourceUrl: string;
}

/**
 * Fetch and parse authentic live entry directly from https://dictionary.cambridge.org/
 */
async function fetchCambridgeDictionaryOnline(word: string): Promise<CambridgeOnlineResult | null> {
  const clean = encodeURIComponent(word.trim().toLowerCase());
  const url = `https://dictionary.cambridge.org/dictionary/english/${clean}`;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
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
    let defText = defMatch ? defMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
    if (defText.endsWith(':')) defText = defText.slice(0, -1).trim();

    const exMatches = [...html.matchAll(/<span class="eg deg">([\s\S]*?)<\/span>/g)];
    const examples = exMatches
      .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
      .filter((s) => s.length > 5)
      .slice(0, 6);

    let ukIpa = ukIpaMatch ? `/${ukIpaMatch[1].trim()}/` : '';
    let usIpa = usIpaMatch ? `/${usIpaMatch[1].trim()}/` : ukIpa;

    // Normalize mid-dots if needed to Cambridge syllable dot
    ukIpa = ukIpa.replace(/·/g, '.');
    usIpa = usIpa.replace(/·/g, '.');

    if (!ukIpa && !usIpa) return null;

    return {
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

app.get('/api/health', (_req: Request, res: Response) => {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  const hasValidKey = apiKey.startsWith('AIza') && apiKey.length >= 30;
  res.json({ status: 'ok', hasApiKey: hasValidKey });
});

app.get('/api/dictionary-ipa', async (req: Request, res: Response) => {
  const word = (req.query.word as string || '').trim().toLowerCase();
  if (!word) {
    return res.status(400).json({ error: 'Thiếu tham số word' });
  }

  try {
    const details = deriveIPADetails(word);

    // 1. First priority: Fetch live directly from https://dictionary.cambridge.org/
    const cambridgeLive = await fetchCambridgeDictionaryOnline(word);
    if (cambridgeLive) {
      if (cambridgeLive.ukIpa) {
        details.cambridge.uk = cambridgeLive.ukIpa;
        details.oxford.uk = cambridgeLive.ukIpa.replace(/\./g, '');
        details.longman.uk = cambridgeLive.ukIpa.replace(/\./g, '');
      }
      if (cambridgeLive.usIpa) {
        details.cambridge.us = cambridgeLive.usIpa;
        details.oxford.us = cambridgeLive.usIpa.replace(/\./g, '');
        details.longman.us = cambridgeLive.usIpa.replace(/\./g, '');
      }
      if (cambridgeLive.ukAudio) {
        details.audioUrlUk = cambridgeLive.ukAudio;
        details.cambridge.audioUk = cambridgeLive.ukAudio;
      }
      if (cambridgeLive.usAudio) {
        details.audioUrlUs = cambridgeLive.usAudio;
        details.cambridge.audioUs = cambridgeLive.usAudio;
      }
      (details as any).sourceUrl = cambridgeLive.sourceUrl;
      (details as any).defText = cambridgeLive.defText;
      (details as any).grammarTag = cambridgeLive.grammarTag;
      return res.json(details);
    }

    // 2. Fallback: Try fetching public audio recordings
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1800);
      const onlineRes = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);

      if (onlineRes.ok) {
        const data = await onlineRes.json();
        if (Array.isArray(data) && data[0] && Array.isArray(data[0].phonetics)) {
          for (const p of data[0].phonetics) {
            if (p.audio) {
              if (p.audio.includes('-uk') || p.audio.includes('en-uk')) {
                details.audioUrlUk = p.audio;
                details.cambridge.audioUk = p.audio;
              } else if (p.audio.includes('-us') || p.audio.includes('en-us') || !details.audioUrlUs) {
                details.audioUrlUs = p.audio;
                details.cambridge.audioUs = p.audio;
              }
            }
          }
        }
      }
    } catch {
      // Ignore network timeout
    }

    return res.json(details);
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
    }: GenerateRequest = req.body;

    if (!keyword || typeof keyword !== 'string' || keyword.trim() === '') {
      return res.status(400).json({ error: 'Vui lòng cung cấp từ khóa (keyword).' });
    }

    const cleanKeyword = keyword.trim().toLowerCase();

    // 1. Fetch live dictionary entry directly from https://dictionary.cambridge.org/
    const cambridgeOnline = await fetchCambridgeDictionaryOnline(cleanKeyword);

    let cambridgeContext = '';
    if (cambridgeOnline) {
      cambridgeContext = `
DỮ LIỆU GỐC TRA CỨU TRỰC TIẾP TỪ TRANG NGUỒN CHÍNH THỨC https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(cleanKeyword)}:
- Headword: "${cambridgeOnline.keyword}"
- Phiên âm chuẩn Cambridge UK: "${cambridgeOnline.ukIpa}"
- Phiên âm chuẩn Cambridge US: "${cambridgeOnline.usIpa}"
- Từ loại (Part of Speech): "${cambridgeOnline.pos}"
- Nhãn ngữ pháp: "${cambridgeOnline.grammarTag}"
- Định nghĩa gốc từ Cambridge: "${cambridgeOnline.defText}"
- Các câu ví dụ gốc từ trang từ điển Cambridge:
${cambridgeOnline.examples.map((ex) => `  * ${ex}`).join('\n')}

LƯU Ý QUAN TRỌNG: Hãy sử dụng CHÍNH XÁC phiên âm IPA của Cambridge "${cambridgeOnline.ukIpa}" và định nghĩa gốc này. Trích xuất các cụm từ (collocations) từ các ví dụ trên để làm đáp án chuẩn cho học sinh.
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
Trang nguồn tra cứu mục từ điển: "https://dictionary.cambridge.org/"
Chủ đề liên quan: Tiếng Anh ${grade} - Unit ${unit}: ${unitTitle}.
${cambridgeContext}

${gradeDifficultyGuidelines[grade] || gradeDifficultyGuidelines[8]}

YÊU CẦU ĐẶC BIỆT THEO CHUẨN ĐỀ THI:
1. Tra cứu định nghĩa và phiên âm chuẩn từ điển Cambridge (Cambridge Advanced Learner's Dictionary - CALD - https://dictionary.cambridge.org/):
   - Headword: "${cleanKeyword}"
   - IPA chuẩn xác theo từ điển Cambridge (CALD) có dấu chấm phân chia âm tiết đầy đủ (ví dụ: ${cambridgeOnline?.ukIpa || '/ˈhæb.ɪt/'})
   - Từ loại chính xác (${cambridgeOnline?.pos || 'noun, verb, adjective, etc.'})
   - Định nghĩa xúc tích, chuẩn xác, có ghi nhãn ngữ pháp như ${cambridgeOnline?.grammarTag || '[countable], [uncountable], [transitive]'}, etc.
   - Danh sách 4 đến 5 câu ví dụ thực tế chuẩn từ điển Cambridge.
   - Trong mỗi câu ví dụ, hãy chỉ rõ cụm từ/collocation quan trọng (độ dài 2-3 từ) để làm đáp án tiềm năng. Ví dụ với "habit": "eating habits", "develop the habit", "break the habit", "let it become a habit".

2. Tạo đúng ${questionCount} câu hỏi bài tập điền khuyết:
   - Đánh số thứ tự bắt đầu từ câu số ${startQuestionNum} (ví dụ: ${startQuestionNum}, ${startQuestionNum + 1}).
   - Mỗi câu bài tập PHẢI tuân thủ chính xác mức độ khó và cấu trúc ngữ pháp của Khối lớp ${grade} đã nêu ở trên.
   - CHÍNH XÁC VỀ NGỮ NGHĨA (SEMANTICALLY): Câu hỏi phải đúng ngữ cảnh thực tế của từ "${cleanKeyword}" (ví dụ: uniform là trang phục trường học/lễ chào cờ, artisan là nghệ nhân làm đồ gốm/thủ công, habit là thói quen ăn uống/sinh hoạt, craft là nghề truyền thống, recycle là rác thải/bảo vệ môi trường). Tuyệt đối không tạo câu vô nghĩa.
   - CHÍNH XÁC VỀ NGỮ PHÁP (GRAMMATICALLY): Khi điền đáp án vào chỗ trống (sentenceBefore + answer + sentenceAfter), câu hoàn chỉnh phải là câu tiếng Anh chuẩn 100%. Vị trí sau "must/should/to" phải là cụm động từ nguyên mẫu; vị trí làm chủ ngữ hoặc sau tính từ phải là cụm danh từ; vị trí sau to be/linking verbs có thể là cụm tính từ.
   - Chỗ trống phải được điền CHÍNH XÁC bằng một cụm từ (phrases) xuất hiện in đậm (boldPhrase) trong các câu ví dụ của bảng từ điển trên.
   - Đáp án không được vượt quá ${maxWords} từ ("Do not use more than ${maxWords === 3 ? 'THREE' : maxWords} words for each phrase").
   - Cung cấp dịch nghĩa tiếng Việt chi tiết và lời giải thích ngắn gọn, sư phạm cho giáo viên và học sinh.
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
            systemInstruction: `You are a professional ESL test designer and senior English teacher specializing in Vietnam's Ministry of Education "Global Success" curriculum (Grades 6-9) and Grade 10 High School Entrance Exams (Tuyển sinh lớp 10). Return strictly valid JSON conforming to the requested schema. Ensure authentic Cambridge Advanced Learner's Dictionary (CALD) style with syllable-divided IPA transcription and high pedagogical precision.`,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                keyword: { type: Type.STRING },
                ipa: { type: Type.STRING, description: 'Phonetic transcription according to Cambridge Dictionary standard with syllable dots, e.g. /ˈhæb.ɪt/' },
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
      const fallbackData = createCurriculumFallback(
        cleanKeyword,
        grade,
        unit,
        unitTitle,
        dictionarySource,
        questionCount,
        startQuestionNum,
        maxWords,
        cambridgeOnline
      );
      return res.json(fallbackData);
    }

    const parsedData = JSON.parse(response.text);
    const ipaDetails = deriveIPADetails(cleanKeyword, parsedData.ipa);

    if (cambridgeOnline) {
      parsedData.ipa = cambridgeOnline.ukIpa;
      ipaDetails.cambridge.uk = cambridgeOnline.ukIpa;
      ipaDetails.cambridge.us = cambridgeOnline.usIpa;
      if (cambridgeOnline.ukAudio) {
        ipaDetails.audioUrlUk = cambridgeOnline.ukAudio;
        ipaDetails.cambridge.audioUk = cambridgeOnline.ukAudio;
      }
      if (cambridgeOnline.usAudio) {
        ipaDetails.audioUrlUs = cambridgeOnline.usAudio;
        ipaDetails.cambridge.audioUs = cambridgeOnline.usAudio;
      }
    } else {
      parsedData.ipa = ipaDetails.cambridge.uk;
    }

    parsedData.ipaDetails = ipaDetails;
    parsedData.cambridgeUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(cleanKeyword)}`;
    parsedData.dictionarySource = "Cambridge Advanced Learner's Dictionary (dictionary.cambridge.org)";
    return res.json(parsedData);
  } catch {
    try {
      const cleanWord = (req.body.keyword || 'habit').trim().toLowerCase();
      const fallbackData = createCurriculumFallback(
        cleanWord,
        req.body.grade || 8,
        req.body.unit || 6,
        req.body.unitTitle || 'Lifestyles',
        req.body.dictionarySource || "Cambridge Advanced Learner's Dictionary",
        req.body.questionCount || 2,
        req.body.startQuestionNum || 35,
        req.body.maxWords || 3
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
function createCurriculumFallback(
  word: string,
  grade: number,
  unit: number,
  unitTitle: string,
  source: string,
  questionCount: number,
  startNum: number,
  maxWords: number,
  cambridgeOnline?: CambridgeOnlineResult | null
) {
  // Delegate to generateExerciseForKeyword for 100% semantic and grammatical precision
  const exercise = generateExerciseForKeyword(
    word,
    grade,
    unit,
    unitTitle,
    questionCount,
    startNum,
    maxWords
  );

  // If live Cambridge Online data was successfully retrieved, enrich exercise
  if (cambridgeOnline) {
    if (cambridgeOnline.ukIpa) {
      exercise.ipa = cambridgeOnline.ukIpa;
      if (exercise.ipaDetails) {
        exercise.ipaDetails.cambridge.uk = cambridgeOnline.ukIpa;
        exercise.ipaDetails.oxford.uk = cambridgeOnline.ukIpa.replace(/\./g, '');
        exercise.ipaDetails.longman.uk = cambridgeOnline.ukIpa.replace(/\./g, '');
      }
    }
    if (cambridgeOnline.usIpa && exercise.ipaDetails) {
      exercise.ipaDetails.cambridge.us = cambridgeOnline.usIpa;
      exercise.ipaDetails.oxford.us = cambridgeOnline.usIpa.replace(/\./g, '');
      exercise.ipaDetails.longman.us = cambridgeOnline.usIpa.replace(/\./g, '');
    }
    if (cambridgeOnline.ukAudio && exercise.ipaDetails) {
      exercise.ipaDetails.audioUrlUk = cambridgeOnline.ukAudio;
      exercise.ipaDetails.cambridge.audioUk = cambridgeOnline.ukAudio;
    }
    if (cambridgeOnline.usAudio && exercise.ipaDetails) {
      exercise.ipaDetails.audioUrlUs = cambridgeOnline.usAudio;
      exercise.ipaDetails.cambridge.audioUs = cambridgeOnline.usAudio;
    }
    if (cambridgeOnline.pos) {
      exercise.partOfSpeech = cambridgeOnline.pos;
    }
    if (cambridgeOnline.grammarTag) {
      exercise.grammarTag = cambridgeOnline.grammarTag;
    }
    if (cambridgeOnline.defText && cambridgeOnline.defText.length > 8) {
      exercise.definitionText = cambridgeOnline.defText;
    }
    if (cambridgeOnline.sourceUrl) {
      exercise.cambridgeUrl = cambridgeOnline.sourceUrl;
    }
  }

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

startServer();
