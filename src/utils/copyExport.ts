import { DictionaryExercise } from '../data/globalSuccessCurriculum';
import { DICTIONARY_SOURCES, resolveDictionarySourceId } from './dictionarySources';

export type KeywordCopyMode = 'all' | 'ipa' | 'pos' | 'definition';

export function formatKeywordInfoText(
  exercise: DictionaryExercise,
  mode: KeywordCopyMode = 'all'
): string {
  const ipa = (exercise.ipa || '').trim();
  const pos = [exercise.partOfSpeech, exercise.grammarTag]
    .filter(Boolean)
    .join(' ')
    .trim();
  const definition = `${exercise.definitionNumber || '1.'} ${
    exercise.grammarTag ? `${exercise.grammarTag} ` : ''
  }${exercise.definitionText}`.trim();

  if (mode === 'ipa') return ipa;
  if (mode === 'pos') return pos || exercise.partOfSpeech;
  if (mode === 'definition') return exercise.definitionText;

  return `${exercise.keyword} ${ipa} (${exercise.partOfSpeech})\n${definition}`;
}

export function formatExerciseText(
  exercise: DictionaryExercise,
  includeAnswers: boolean = false
): string {
  const sourceId = resolveDictionarySourceId(exercise.dictionarySource);
  const sourceInfo = DICTIONARY_SOURCES[sourceId];
  const sourceUrl = exercise.sourceUrl || sourceInfo.buildEntryUrl(exercise.keyword);
  let content = '';

  content += `VI. ${exercise.instructionEn} ${exercise.pointsTotal} ${exercise.instructionVi}\n\n`;

  // Dictionary box representation
  content += `┌─────────────────────────────────────────────────────────────\n`;
  content += `│ ${exercise.keyword}  ${exercise.ipa}\n`;
  content += `│   ${exercise.partOfSpeech}\n`;
  content += `│ ${exercise.definitionNumber || '1.'} ${exercise.grammarTag ? `${exercise.grammarTag} ` : ''}${exercise.definitionText}\n`;

  exercise.examples.forEach((ex) => {
    content += `│   o ${ex.fullSentence}\n`;
  });
  content += `└─────────────────────────────────────────────────────────────\n`;
  content += `* Nguồn từ điển: ${sourceInfo.name} (${sourceUrl})\n\n`;

  content += `[ANSWERS]\n`;
  exercise.questions.forEach((q) => {
    content += `${q.questionNumber}. ${q.sentenceBefore}________________________${q.sentenceAfter}\n`;
  });

  if (includeAnswers) {
    content += `\n=============================================================\n`;
    content += `ĐÁP ÁN & LỜI GIẢI CHI TIẾT (ANSWER KEY & EXPLANATIONS)\n`;
    content += `=============================================================\n`;
    exercise.questions.forEach((q) => {
      content += `Câu ${q.questionNumber}: ${q.answer}\n`;
      content += `-> Câu hoàn chỉnh: ${q.sentenceBefore}${q.answer}${q.sentenceAfter}\n`;
      content += `-> Dịch nghĩa: ${q.vietnameseMeaning}\n`;
      content += `-> Giải thích: ${q.explanation}\n\n`;
    });
  }

  return content;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}
