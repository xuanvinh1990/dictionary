import React, { useState } from 'react';
import { Volume2, Book, ExternalLink, Copy, Check } from 'lucide-react';
import { DictionaryExercise, IPADetails } from '../data/globalSuccessCurriculum';
import { deriveIPADetails, playEnglishAudio } from '../utils/ipaDictionaryApi';
import {
  DICTIONARY_SOURCES,
  DictionarySourceId,
  resolveDictionarySourceId,
} from '../utils/dictionarySources';
import {
  copyToClipboard,
  formatKeywordInfoText,
  KeywordCopyMode,
} from '../utils/copyExport';

interface DictionaryCardProps {
  exercise: DictionaryExercise;
  isLookingUp?: boolean;
}

export const DictionaryCard: React.FC<DictionaryCardProps> = ({
  exercise,
  isLookingUp = false,
}) => {
  const [playingAccent, setPlayingAccent] = useState<'UK' | 'US' | 'sentence' | null>(null);
  const [copiedMode, setCopiedMode] = useState<KeywordCopyMode | null>(null);

  // Derive IPA Details across Cambridge, Oxford, and Longman
  const ipaData: IPADetails =
    exercise.ipaDetails || deriveIPADetails(exercise.keyword, exercise.ipa);

  const activeSourceId = resolveDictionarySourceId(exercise.dictionarySource);
  const activeSourceInfo = DICTIONARY_SOURCES[activeSourceId];

  const displayedIPA =
    exercise.ipa ||
    (activeSourceId === 'oxford'
      ? ipaData.oxford?.uk
      : activeSourceId === 'ldoce'
      ? ipaData.longman?.uk
      : ipaData.cambridge?.uk);

  const primarySourceUrl =
    exercise.sourceUrl ||
    (activeSourceId === 'cambridge' && exercise.cambridgeUrl) ||
    activeSourceInfo.buildEntryUrl(exercise.keyword);

  const handlePlayAudio = (accent: 'UK' | 'US') => {
    const sourceAudio =
      accent === 'UK'
        ? ipaData[activeSourceId === 'ldoce' ? 'longman' : activeSourceId]?.audioUk
        : ipaData[activeSourceId === 'ldoce' ? 'longman' : activeSourceId]?.audioUs;
    const audioUrl =
      sourceAudio || (accent === 'UK' ? ipaData.audioUrlUk : ipaData.audioUrlUs);
    playEnglishAudio(
      exercise.keyword,
      accent,
      audioUrl,
      () => setPlayingAccent(accent),
      () => setPlayingAccent(null)
    );
  };

  const handlePlaySentence = (sentence: string) => {
    playEnglishAudio(
      sentence,
      'UK',
      undefined,
      () => setPlayingAccent('sentence'),
      () => setPlayingAccent(null)
    );
  };

  const handleCopyKeywordField = async (mode: KeywordCopyMode) => {
    const formatted = formatKeywordInfoText(
      { ...exercise, ipa: displayedIPA || exercise.ipa },
      mode
    );
    const ok = await copyToClipboard(formatted);
    if (ok) {
      setCopiedMode(mode);
      setTimeout(() => setCopiedMode(null), 2200);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3.5">
      {/* Top Banner with active dictionary source badge and direct link */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <Book className="w-4 h-4 text-blue-700" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Thông tin từ khóa & Mục từ tra cứu
          </span>
          {isLookingUp && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 animate-pulse">
              Đang đồng bộ online...
            </span>
          )}
        </div>
        <a
          href={primarySourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 transition-colors shadow-2xs"
          title={`Mở trực tiếp trang mục từ trên ${activeSourceInfo.domain}`}
        >
          <span>Nguồn: {activeSourceInfo.domain}</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
        </a>
      </div>

      {/* Quick Copy Bar for Definition, Part of Speech & IPA (matches PDF requirement) */}
      <div className="p-2.5 bg-slate-50 border border-slate-200/90 rounded-xl flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-bold text-slate-700">
          Copy nhanh từ khóa:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleCopyKeywordField('ipa')}
            className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-md border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors cursor-pointer"
            title={`Copy phiên âm IPA: ${displayedIPA}`}
          >
            {copiedMode === 'ipa' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Đã copy IPA</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-500" />
                <span>Copy IPA</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleCopyKeywordField('pos')}
            className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-md border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors cursor-pointer"
            title={`Copy từ loại: ${exercise.partOfSpeech}`}
          >
            {copiedMode === 'pos' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Đã copy từ loại</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-500" />
                <span>Copy từ loại</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleCopyKeywordField('definition')}
            className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-md border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors cursor-pointer"
            title="Copy định nghĩa (definition) của từ khóa"
          >
            {copiedMode === 'definition' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Đã copy định nghĩa</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-500" />
                <span>Copy định nghĩa</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleCopyKeywordField('all')}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-md border border-blue-700 bg-blue-700 hover:bg-blue-800 text-white transition-colors shadow-2xs cursor-pointer"
            title="Copy trọn bộ IPA, từ loại và định nghĩa của từ khóa"
          >
            {copiedMode === 'all' ? (
              <>
                <Check className="w-3 h-3 text-emerald-300" />
                <span>Đã copy trọn bộ!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-blue-100" />
                <span>Copy IPA + Từ loại + Định nghĩa</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* The EXACT Bordered Box from the Exam Paper */}
      <div className="border-[1.5px] border-slate-900 p-4 sm:p-5 bg-white font-sans text-slate-900">
        {/* Headword & IPA & Dual Audio Buttons */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="text-2xl font-bold tracking-tight text-slate-950">
              {exercise.keyword}
            </span>
            <span className="text-base font-bold text-slate-900 font-mono tracking-tight">
              {displayedIPA}
            </span>
          </div>

          {/* Quick Dual Audio Play Buttons: UK & US */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handlePlayAudio('UK')}
              className={`px-2 py-0.5 text-[11px] font-bold rounded border flex items-center gap-1 transition-all cursor-pointer ${
                playingAccent === 'UK'
                  ? 'bg-blue-700 text-white border-blue-700 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-800'
              }`}
              title={`Phát âm chuẩn Anh - Anh (UK - ${activeSourceInfo.shortName})`}
            >
              <span>UK</span>
              <Volume2 className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => handlePlayAudio('US')}
              className={`px-2 py-0.5 text-[11px] font-bold rounded border flex items-center gap-1 transition-all cursor-pointer ${
                playingAccent === 'US'
                  ? 'bg-blue-700 text-white border-blue-700 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-800'
              }`}
              title={`Phát âm chuẩn Anh - Mỹ (US - ${activeSourceInfo.shortName})`}
            >
              <span>US</span>
              <Volume2 className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Part of Speech */}
        <div className="italic text-sm text-slate-800 ml-4 mb-2">
          {exercise.partOfSpeech}
        </div>

        {/* Definition Number & Grammar Tag & Definition */}
        <div className="text-sm leading-relaxed text-slate-900 mb-3">
          <span className="font-semibold mr-1">{exercise.definitionNumber || '1.'}</span>
          {exercise.grammarTag && (
            <span className="italic font-medium text-slate-800 mr-1.5">
              {exercise.grammarTag}
            </span>
          )}
          <span>{exercise.definitionText}</span>
        </div>

        {/* Example Sentences with Hollow Bullet Point and Bold-Italic Phrases */}
        <div className="space-y-1.5 ml-4 sm:ml-6 text-sm leading-relaxed">
          {exercise.examples.map((ex, idx) => {
            const sentence = ex.fullSentence;
            const boldPhrase = ex.boldPhrase;

            // Highlight bold phrase matching the PDF entry
            const parts = boldPhrase ? sentence.split(boldPhrase) : [sentence];

            return (
              <div key={idx} className="flex items-start gap-2.5 group">
                <span className="text-slate-700 font-sans select-none text-xs mt-1 leading-none">
                  o
                </span>
                <p className="italic text-slate-900 flex-1">
                  {parts.length > 1 ? (
                    <>
                      <span>{parts[0]}</span>
                      <strong className="font-bold italic text-slate-950">
                        {boldPhrase}
                      </strong>
                      <span>{parts.slice(1).join(boldPhrase)}</span>
                    </>
                  ) : (
                    sentence
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => handlePlaySentence(sentence)}
                  className="opacity-35 group-hover:opacity-100 p-0.5 text-slate-500 hover:text-blue-700 transition-opacity cursor-pointer"
                  title="Nghe đọc cả câu ví dụ"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-0.5 gap-2">
        <span>* Khung từ điển chuẩn định dạng đề thi mẫu đính kèm</span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400">Đối chiếu online:</span>
          {(['cambridge', 'oxford', 'ldoce'] as DictionarySourceId[]).map((id) => {
            const src = DICTIONARY_SOURCES[id];
            const isActive = activeSourceId === id;
            return (
              <a
                key={id}
                href={src.buildEntryUrl(exercise.keyword)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 hover:underline ${
                  isActive ? 'text-blue-800 font-bold' : 'text-blue-600 hover:text-blue-800 font-medium'
                }`}
                title={`Đối chiếu mục từ "${exercise.keyword}" trên ${src.baseUrl}`}
              >
                <span>{src.shortName}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
