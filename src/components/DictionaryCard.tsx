import React, { useState } from 'react';
import { Volume2, Book, ExternalLink } from 'lucide-react';
import { DictionaryExercise, IPADetails } from '../data/globalSuccessCurriculum';
import { deriveIPADetails, playEnglishAudio } from '../utils/ipaDictionaryApi';

interface DictionaryCardProps {
  exercise: DictionaryExercise;
}

export const DictionaryCard: React.FC<DictionaryCardProps> = ({ exercise }) => {
  const [playingAccent, setPlayingAccent] = useState<'UK' | 'US' | 'sentence' | null>(null);

  // Derive Cambridge IPA Details
  const ipaData: IPADetails =
    exercise.ipaDetails || deriveIPADetails(exercise.keyword, exercise.ipa);

  // Strictly Cambridge Dictionary IPA standard (e.g. /ˈhæb.ɪt/)
  const cambridgeIPA = ipaData.cambridge?.uk || exercise.ipa;
  const cambridgeUrl =
    exercise.cambridgeUrl ||
    `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(exercise.keyword.trim().toLowerCase())}`;

  const handlePlayAudio = (accent: 'UK' | 'US') => {
    const audioUrl = accent === 'UK' ? ipaData.audioUrlUk : ipaData.audioUrlUs;
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

  return (
    <div className="bg-white rounded-xl shadow-xs space-y-3">
      {/* Top Banner with Cambridge source badge and direct link */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <Book className="w-4 h-4 text-blue-700" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Mục từ tra cứu (Dictionary Entry Box)
          </span>
        </div>
        <a
          href={cambridgeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 transition-colors shadow-2xs"
          title="Mở trực tiếp trang mục từ trên dictionary.cambridge.org"
        >
          <span>Nguồn: dictionary.cambridge.org</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
        </a>
      </div>

      {/* The EXACT Bordered Box from the Exam Paper */}
      <div className="border-2 border-slate-900 rounded-md p-5 bg-white font-sans text-slate-900">
        {/* Headword & Cambridge IPA & Dual Audio Buttons */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
              {exercise.keyword}
            </span>
            <span className="text-base sm:text-lg font-bold text-blue-900 font-mono tracking-tight">
              {cambridgeIPA}
            </span>
          </div>

          {/* Quick Dual Audio Play Buttons: 🇬🇧 UK & 🇺🇸 US */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handlePlayAudio('UK')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md border flex items-center gap-1 transition-all ${
                playingAccent === 'UK'
                  ? 'bg-blue-700 text-white border-blue-700 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-800'
              }`}
              title="Phát âm chuẩn Anh - Anh (UK - Cambridge Dictionary)"
            >
              <span>🇬🇧 UK</span>
              <Volume2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => handlePlayAudio('US')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md border flex items-center gap-1 transition-all ${
                playingAccent === 'US'
                  ? 'bg-blue-700 text-white border-blue-700 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-800'
              }`}
              title="Phát âm chuẩn Anh - Mỹ (US - Cambridge Dictionary)"
            >
              <span>🇺🇸 US</span>
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Part of Speech */}
        <div className="italic text-sm text-slate-700 ml-4 mb-2 font-serif">
          {exercise.partOfSpeech}
        </div>

        {/* Definition Number & Grammar Tag & Definition */}
        <div className="text-sm leading-relaxed text-slate-900 mb-3">
          <span className="font-semibold mr-1">{exercise.definitionNumber || '1.'}</span>
          {exercise.grammarTag && (
            <span className="italic font-medium text-slate-700 mr-1.5">
              {exercise.grammarTag}
            </span>
          )}
          <span>{exercise.definitionText}</span>
        </div>

        {/* Example Sentences with Bullet Point and Bold Phrases */}
        <div className="space-y-1.5 ml-3 sm:ml-5 text-sm leading-relaxed">
          {exercise.examples.map((ex, idx) => {
            const sentence = ex.fullSentence;
            const boldPhrase = ex.boldPhrase;

            // Highlight bold phrase
            const parts = boldPhrase ? sentence.split(boldPhrase) : [sentence];

            return (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-slate-500 font-bold select-none text-xs mt-0.5">o</span>
                <p className="italic text-slate-800 flex-1">
                  {parts.length > 1 ? (
                    <>
                      <span>{parts[0]}</span>
                      <strong className="font-bold text-slate-950 not-italic sm:italic">
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
                  className="opacity-40 hover:opacity-100 p-0.5 text-slate-500 hover:text-blue-700 transition-opacity"
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
        <span>* Định dạng khung đóng viền chính xác theo đề thi tuyển sinh lớp 10 môn Tiếng Anh</span>
        <a
          href={cambridgeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1 hover:underline"
          title="Đối chiếu mục từ trên trang gốc dictionary.cambridge.org"
        >
          <span>Trang nguồn: https://dictionary.cambridge.org/</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
