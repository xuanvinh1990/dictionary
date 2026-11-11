import React, { useState } from 'react';
import { Volume2, Book, CheckCheck } from 'lucide-react';
import { DictionaryExercise } from '../data/globalSuccessCurriculum';

interface DictionaryCardProps {
  exercise: DictionaryExercise;
}

export const DictionaryCard: React.FC<DictionaryCardProps> = ({ exercise }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-xl shadow-xs">
      {/* Top Banner with source badge */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Book className="w-4 h-4 text-blue-700" />
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Mục từ tra cứu (Dictionary Entry Box)
          </span>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Nguồn: {exercise.dictionarySource}
        </span>
      </div>

      {/* The EXACT Bordered Box from the Exam Paper */}
      <div className="border-2 border-slate-900 rounded-md p-5 bg-white font-sans text-slate-900">
        {/* Headword & IPA */}
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-2xl font-bold tracking-tight text-blue-950">
            {exercise.keyword}
          </span>
          <span className="text-lg font-normal text-slate-600 font-mono">
            {exercise.ipa}
          </span>
          <button
            type="button"
            onClick={() => speakText(exercise.keyword)}
            className="p-1 rounded-md text-blue-700 hover:bg-blue-50 transition-colors ml-1"
            title="Nghe phát âm chuẩn (UK Audio)"
          >
            <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse text-blue-600' : ''}`} />
          </button>
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
                <p className="italic text-slate-800">
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
                  onClick={() => speakText(sentence)}
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

      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
        <span>* Định dạng khung đóng viền chính xác theo đề thi tuyển sinh lớp 10 môn Tiếng Anh</span>
        <span className="text-blue-700 font-medium">Bấm biểu tượng loa để nghe đọc</span>
      </div>
    </div>
  );
};
