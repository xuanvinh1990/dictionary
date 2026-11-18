export type DictionarySourceId = 'cambridge' | 'oxford' | 'ldoce';

export interface DictionarySourceInfo {
  id: DictionarySourceId;
  name: string;
  shortName: string;
  domain: string;
  baseUrl: string;
  buildEntryUrl: (word: string) => string;
}

function normalizeOxfordSlug(word: string): string {
  return encodeURIComponent(word.trim().toLowerCase().replace(/\s+/g, '-'));
}

function normalizeLongmanSlug(word: string): string {
  return encodeURIComponent(word.trim().toLowerCase().replace(/\s+/g, '-'));
}

function normalizeCambridgeSlug(word: string): string {
  return encodeURIComponent(word.trim().toLowerCase().replace(/\s+/g, '-'));
}

export const DICTIONARY_SOURCES: Record<DictionarySourceId, DictionarySourceInfo> = {
  cambridge: {
    id: 'cambridge',
    name: "Cambridge Advanced Learner's Dictionary",
    shortName: 'Cambridge (CALD)',
    domain: 'dictionary.cambridge.org',
    baseUrl: 'https://dictionary.cambridge.org/',
    buildEntryUrl: (word: string) =>
      `https://dictionary.cambridge.org/dictionary/english/${normalizeCambridgeSlug(word)}`,
  },
  oxford: {
    id: 'oxford',
    name: "Oxford Advanced Learner's Dictionary",
    shortName: 'Oxford (OALD)',
    domain: 'www.oxfordlearnersdictionaries.com',
    baseUrl: 'https://www.oxfordlearnersdictionaries.com/',
    buildEntryUrl: (word: string) =>
      `https://www.oxfordlearnersdictionaries.com/definition/english/${normalizeOxfordSlug(word)}`,
  },
  ldoce: {
    id: 'ldoce',
    name: 'Longman Dictionary of Contemporary English',
    shortName: 'Longman (LDOCE)',
    domain: 'www.ldoceonline.com',
    baseUrl: 'https://www.ldoceonline.com/',
    buildEntryUrl: (word: string) =>
      `https://www.ldoceonline.com/dictionary/${normalizeLongmanSlug(word)}`,
  },
};

export function resolveDictionarySourceId(source?: string): DictionarySourceId {
  const s = (source || '').toLowerCase();
  if (s.includes('oxford') || s.includes('oald')) return 'oxford';
  if (s.includes('longman') || s.includes('ldoce')) return 'ldoce';
  return 'cambridge';
}
