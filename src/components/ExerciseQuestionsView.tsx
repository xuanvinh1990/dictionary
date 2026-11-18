import React, { useState, useEffect } from 'react';
import {
  FileText,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Download,
  Eye,
  GraduationCap,
  Printer,
  Sparkles,
  Shuffle,
} from 'lucide-react';
import { DictionaryExercise } from '../data/globalSuccessCurriculum';
import { formatExerciseText, copyToClipboard } from '../utils/copyExport';

interface ExerciseQuestionsViewProps {
  exercise: DictionaryExercise;
  onExportDocx: () => void;
  isExporting: boolean;
  onSwitchQuestions?: () => void;
  isSwitchingQuestions?: boolean;
  grade: number;
  unit: number;
  unitTitle: string;
}

export const ExerciseQuestionsView: React.FC<ExerciseQuestionsViewProps> = ({
  exercise,
  onExportDocx,
  isExporting,
  onSwitchQuestions,
  isSwitchingQuestions = false,
  grade,
  unit,
  unitTitle,
}) => {
  const [activeTab, setActiveTab] = useState<'exam' | 'practice' | 'solution'>('exam');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Student Practice State
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [hasCheckedAnswers, setHasCheckedAnswers] = useState(false);
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setUserAnswers({});
    setHasCheckedAnswers(false);
    setShowHints({});
  }, [exercise]);

  const handleCopy = async (type: 'questions' | 'full' | 'key') => {
    let text = '';
    if (type === 'questions') {
      text = formatExerciseText(exercise, false);
    } else if (type === 'full') {
      text = formatExerciseText(exercise, true);
    } else {
      text = `ĐÁP ÁN BÀI TẬP TRA TỪ ĐIỂN - TỪ "${exercise.keyword.toUpperCase()}":\n`;
      exercise.questions.forEach((q) => {
        text += `Câu ${q.questionNumber}: ${q.answer}\n`;
        text += `-> ${q.sentenceBefore}${q.answer}${q.sentenceAfter}\n`;
        text += `-> Nghĩa: ${q.vietnameseMeaning}\n\n`;
      });
    }

    const success = await copyToClipboard(text);
    if (success) {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  const handleUserAnswerChange = (qNum: number, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [qNum]: value }));
  };

  const checkUserScore = () => {
    let correct = 0;
    exercise.questions.forEach((q) => {
      const userVal = (userAnswers[q.questionNumber] || '').trim().toLowerCase();
      const trueVal = q.answer.trim().toLowerCase();
      if (userVal === trueVal) {
        correct++;
      }
    });
    return { correct, total: exercise.questions.length };
  };

  const resetPractice = () => {
    setUserAnswers({});
    setHasCheckedAnswers(false);
    setShowHints({});
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Controls & View Tabs */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
        {/* View Tabs */}
        <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('exam')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'exam'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Đề thi in ấn (Chuẩn ảnh mẫu)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('practice')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'practice'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Làm bài tương tác (Học sinh)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('solution')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'solution'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Đáp án & Lời giải chi tiết</span>
          </button>
        </div>

        {/* Quick Action Buttons: Switch Questions, Copy & Export */}
        <div className="flex items-center gap-2 flex-wrap">
          {onSwitchQuestions && (
            <button
              type="button"
              onClick={onSwitchQuestions}
              disabled={isSwitchingQuestions}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border shadow-2xs transition-colors ${
                isSwitchingQuestions
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 cursor-pointer'
              }`}
              title={`Đổi sang bộ câu hỏi khác cho từ khóa "${exercise.keyword}"`}
            >
              <Shuffle className={`w-3.5 h-3.5 text-amber-700 ${isSwitchingQuestions ? 'animate-pulse' : ''}`} />
              <span>{isSwitchingQuestions ? 'Đang đổi...' : 'Đổi câu hỏi khác'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => handleCopy('questions')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
            title="Copy toàn bộ nội dung câu hỏi để dán vào Word hoặc Google Docs"
          >
            {copiedType === 'questions' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Đã copy câu hỏi!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy nội dung câu hỏi</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleCopy('full')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors"
            title="Copy trọn bộ câu hỏi kèm đáp án & lời giải"
          >
            {copiedType === 'full' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Đã copy Đề + Đáp án!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Đề & Đáp án</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onExportDocx}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-700 hover:bg-blue-800 text-white shadow-2xs transition-colors"
            title="Xuất file Word .docx"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Đang xuất...' : 'Xuất file Word (.docx)'}</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6">
        {/* TAB 1: EXAM PRINT PREVIEW (Matches 100% the attached PDF screenshot layout!) */}
        {activeTab === 'exam' && (
          <div className="space-y-5 font-sans">
            {/* Instruction line: bold italic matching the PDF */}
            <div className="text-slate-950 leading-snug text-sm sm:text-[15px] font-bold italic">
              VI. {exercise.instructionEn} {exercise.pointsTotal} {exercise.instructionVi}
            </div>

            {/* Clean Printable Bordered Dictionary Entry Box (exact match with PDF image) */}
            <div className="border-[1.5px] border-slate-900 px-4 py-3.5 sm:px-5 sm:py-4 bg-white text-slate-950">
              <div className="flex items-baseline gap-2.5 flex-wrap mb-0.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight">
                  {exercise.keyword}
                </span>
                <span className="text-sm sm:text-base font-medium font-mono text-slate-900">
                  {exercise.ipa}
                </span>
              </div>

              <div className="italic text-sm text-slate-900 ml-5 mb-1">
                {exercise.partOfSpeech}
              </div>

              <div className="text-sm leading-snug text-slate-950 mb-2">
                <span className="mr-1">{exercise.definitionNumber || '1.'}</span>
                {exercise.grammarTag && (
                  <span className="mr-1">{exercise.grammarTag}</span>
                )}
                <span>{exercise.definitionText}</span>
              </div>

              <div className="space-y-1 ml-6 sm:ml-8 text-sm leading-snug">
                {exercise.examples.map((ex, idx) => {
                  const sentence = ex.fullSentence;
                  const boldPhrase = ex.boldPhrase;
                  const parts = boldPhrase ? sentence.split(boldPhrase) : [sentence];

                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-slate-800 select-none text-xs mt-0.5 leading-none">
                        o
                      </span>
                      <p className="italic text-slate-950 flex-1">
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
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ANSWERS box header + numbered fill-in-the-blank lines */}
            <div className="pt-1">
              <div className="inline-block border-[1.5px] border-slate-900 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 mb-3 bg-white">
                ANSWERS
              </div>

              <div className="space-y-3 pl-0.5">
                {exercise.questions.map((q) => (
                  <div
                    key={q.questionNumber}
                    className="text-sm sm:text-[15px] text-slate-950 leading-relaxed"
                  >
                    <span className="font-bold mr-1.5">{q.questionNumber}.</span>
                    <span>{q.sentenceBefore}</span>
                    <span className="inline-block border-b border-slate-900 min-w-[190px] sm:min-w-[260px] text-center mx-1">
                      &nbsp;
                    </span>
                    <span>{q.sentenceAfter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta footer & Quick Note for Teachers */}
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong>Gợi ý giáo viên:</strong> Bấm <strong>"Xuất file Word (.docx)"</strong> để tải đề thi hoàn chỉnh (Lớp {grade} — Unit {unit}: {unitTitle}) hoặc <strong>"Copy nội dung câu hỏi"</strong> ở trên.
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('solution')}
                className="font-bold underline text-blue-800 hover:text-blue-950 whitespace-nowrap cursor-pointer"
              >
                Xem đáp án ngay
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE PRACTICE (For students in class or online testing) */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Luyện tập điền từ trực tiếp (Interactive Practice)
                </h3>
                <p className="text-xs text-slate-500">
                  Tìm cụm từ thích hợp từ bảng từ điển bên trên và gõ vào chỗ trống (tối đa 3 từ):
                </p>
              </div>
              {hasCheckedAnswers && (
                <button
                  type="button"
                  onClick={resetPractice}
                  className="text-xs text-blue-700 font-semibold hover:underline"
                >
                  Làm lại từ đầu
                </button>
              )}
            </div>

            <div className="space-y-5">
              {exercise.questions.map((q) => {
                const userVal = userAnswers[q.questionNumber] || '';
                const isCorrect =
                  userVal.trim().toLowerCase() === q.answer.trim().toLowerCase();
                const isHintShown = showHints[q.questionNumber];

                return (
                  <div
                    key={q.questionNumber}
                    className={`p-4 rounded-xl border transition-all ${
                      hasCheckedAnswers
                        ? isCorrect
                          ? 'bg-emerald-50/60 border-emerald-300'
                          : 'bg-rose-50/60 border-rose-300'
                        : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="font-bold text-slate-900 text-sm mt-1">
                        {q.questionNumber}.
                      </span>
                      <div className="flex-1 text-sm text-slate-800 leading-loose">
                        <span>{q.sentenceBefore}</span>
                        <input
                          type="text"
                          value={userVal}
                          onChange={(e) =>
                            handleUserAnswerChange(q.questionNumber, e.target.value)
                          }
                          placeholder="Nhập cụm từ..."
                          disabled={hasCheckedAnswers}
                          className={`inline-block px-3 py-1 mx-1.5 border rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 w-52 sm:w-64 transition-all ${
                            hasCheckedAnswers
                              ? isCorrect
                                ? 'bg-emerald-100 text-emerald-950 border-emerald-400'
                                : 'bg-rose-100 text-rose-950 border-rose-400'
                              : 'bg-white border-slate-300 text-slate-900 focus:ring-blue-600 focus:border-blue-600'
                          }`}
                        />
                        <span>{q.sentenceAfter}</span>
                      </div>
                      {hasCheckedAnswers && (
                        <div>
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-600" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Result or Hint details */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setShowHints((prev) => ({
                              ...prev,
                              [q.questionNumber]: !prev[q.questionNumber],
                            }))
                          }
                          className="text-slate-500 hover:text-blue-700 flex items-center gap-1 font-medium"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{isHintShown ? 'Ẩn gợi ý' : 'Gợi ý số từ'}</span>
                        </button>
                        {isHintShown && (
                          <span className="text-blue-700 font-semibold">
                            (Gồm {q.answer.split(' ').length} từ, {q.answer.length} ký tự)
                          </span>
                        )}
                      </div>

                      {hasCheckedAnswers && !isCorrect && (
                        <div className="text-right">
                          <span className="text-slate-500 mr-1">Đáp án đúng:</span>
                          <span className="font-bold text-emerald-700">{q.answer}</span>
                        </div>
                      )}
                    </div>

                    {/* Explanation after checking */}
                    {hasCheckedAnswers && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-xs space-y-1">
                        <div className="text-slate-700 font-medium">
                          <strong>Dịch nghĩa:</strong> {q.vietnameseMeaning}
                        </div>
                        <div className="text-slate-600">
                          <strong>Giải thích:</strong> {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Check button & Score summary */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              {!hasCheckedAnswers ? (
                <button
                  type="button"
                  onClick={() => setHasCheckedAnswers(true)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Chấm bài & Xem kết quả</span>
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm">
                    Điểm số: {checkUserScore().correct} / {checkUserScore().total} câu đúng (
                    {Math.round((checkUserScore().correct / checkUserScore().total) * 100)}%)
                  </div>
                  <button
                    type="button"
                    onClick={resetPractice}
                    className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Làm lại
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: TEACHER KEY & EXPLANATIONS */}
        {activeTab === 'solution' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Hướng dẫn chấm & Lời giải chi tiết (Teacher Key)
                </h3>
                <p className="text-xs text-slate-500">
                  Dành cho giáo viên chấm thi hoặc chữa bài trên lớp cho học sinh
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('key')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                {copiedType === 'key' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Đã copy đáp án!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy đáp án</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4">
              {exercise.questions.map((q) => (
                <div
                  key={q.questionNumber}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">
                        Câu {q.questionNumber}:
                      </span>
                      <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 font-bold text-sm">
                        {q.answer}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      Độ dài: {q.answer.split(' ').length} từ
                    </span>
                  </div>

                  <div className="text-sm text-slate-800">
                    <span className="text-slate-500 font-medium">Câu hoàn chỉnh: </span>
                    <span className="font-medium">
                      {q.sentenceBefore}
                      <strong className="underline text-emerald-700">{q.answer}</strong>
                      {q.sentenceAfter}
                    </span>
                  </div>

                  <div className="text-sm text-slate-700">
                    <span className="text-slate-500 font-medium">Dịch nghĩa tiếng Việt: </span>
                    <span>{q.vietnameseMeaning}</span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-blue-900 block mb-0.5">Phân tích & Dẫn chứng từ điển:</strong>
                    <span>{q.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
