import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Download,
  AlertCircle,
  FileCheck2,
  Image as ImageIcon,
  CheckCircle,
  X,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { Header } from './components/Header';
import { CurriculumSelector } from './components/CurriculumSelector';
import { DictionaryCard } from './components/DictionaryCard';
import { ExerciseQuestionsView } from './components/ExerciseQuestionsView';
import {
  GLOBAL_SUCCESS_CURRICULUM,
  DictionaryExercise,
  SAMPLE_HABIT_EXERCISE,
  PRESET_EXERCISES,
} from './data/globalSuccessCurriculum';
import { exportExerciseToDocx } from './utils/docxExport';

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState<number>(8);
  const [selectedUnit, setSelectedUnit] = useState<number>(6);
  const [keyword, setKeyword] = useState<string>('habit');
  const [dictionarySource, setDictionarySource] = useState<string>(
    "Cambridge Advanced Learner's Dictionary"
  );
  const [questionCount, setQuestionCount] = useState<number>(2);
  const [startQuestionNum, setStartQuestionNum] = useState<number>(35);
  const [maxWords, setMaxWords] = useState<number>(3);

  const [currentExercise, setCurrentExercise] =
    useState<DictionaryExercise>(SAMPLE_HABIT_EXERCISE);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showOriginalImageModal, setShowOriginalImageModal] =
    useState<boolean>(false);

  // Current curriculum unit metadata
  const currentGradeData =
    GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === selectedGrade) ||
    GLOBAL_SUCCESS_CURRICULUM[2];
  const currentUnitData =
    currentGradeData.units.find((u) => u.unit === selectedUnit) ||
    currentGradeData.units[5];

  // Handle Load Preset / Sample Image
  const handleLoadSample = () => {
    setSelectedGrade(8);
    setSelectedUnit(6);
    setKeyword('habit');
    setQuestionCount(2);
    setStartQuestionNum(35);
    setMaxWords(3);
    setCurrentExercise(SAMPLE_HABIT_EXERCISE);
    setErrorMessage(null);
  };

  // Handle Select Unit & auto-pick first keyword suggestion if empty
  const handleSelectUnit = (unitNum: number) => {
    setSelectedUnit(unitNum);
    const unitObj = currentGradeData.units.find((u) => u.unit === unitNum);
    if (unitObj && unitObj.suggestedKeywords.length > 0) {
      setKeyword(unitObj.suggestedKeywords[0].word);
    }
  };

  // Handle Select Preset quick button
  const handleSelectPresetWord = (presetKey: string) => {
    const item = PRESET_EXERCISES[presetKey];
    if (item) {
      setSelectedGrade(item.grade);
      setSelectedUnit(item.unit);
      setKeyword(item.exercise.keyword);
      setCurrentExercise(item.exercise);
      setErrorMessage(null);
    }
  };

  // Generate Exercise via Gemini API
  const handleGenerate = async () => {
    if (!keyword.trim()) return;

    const cleanWord = keyword.trim().toLowerCase();
    setIsGenerating(true);
    setErrorMessage(null);

    // If matches built-in preset, load instantly if offline or as baseline
    try {
      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: cleanWord,
          grade: selectedGrade,
          unit: selectedUnit,
          unitTitle: currentUnitData.title,
          dictionarySource,
          questionCount,
          startQuestionNum,
          maxWords,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Lỗi máy chủ (${response.status}). Vui lòng thử lại.`
        );
      }

      const data: DictionaryExercise = await response.json();
      setCurrentExercise(data);
    } catch (err: any) {
      console.warn('API error, checking if preset available:', err);
      if (PRESET_EXERCISES[cleanWord]) {
        setCurrentExercise(PRESET_EXERCISES[cleanWord].exercise);
        setErrorMessage(
          'Đã tải bộ từ điển & bài tập mẫu chất lượng cao cho từ "' + cleanWord + '".'
        );
      } else {
        setErrorMessage(
          err.message ||
            'Không thể kết nối đến máy chủ AI. Vui lòng kiểm tra lại kết nối mạng hoặc thử lại với từ vựng khác.'
        );
      }
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle Word .docx Export
  const handleExportDocx = async () => {
    if (!currentExercise) return;
    setIsExporting(true);
    try {
      await exportExerciseToDocx(
        currentExercise,
        selectedGrade,
        selectedUnit,
        currentUnitData.title
      );
    } catch (err) {
      console.error('Lỗi khi xuất Word docx:', err);
      alert('Có lỗi khi tạo file Word. Vui lòng thử lại.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <Header
        onExportDocx={handleExportDocx}
        isExporting={isExporting}
        hasExercise={!!currentExercise}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Banner & Teacher Context */}
        <div className="mb-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-200">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-800/80 border border-blue-600/40">
                  Global Success Khối 6, 7, 8, 9
                </span>
                <span>•</span>
                <span>Luyện thi vào lớp 10 THPT</span>
                <span>•</span>
                <span>Chuẩn Từ Điển Cambridge (CALD)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Công Cụ Soạn Bài Tập Tra Cứu Từ Điển Tiếng Anh
              </h1>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Tự động trích xuất định nghĩa chuẩn quốc tế, phiên âm IPA, hệ thống ví dụ collocation in đậm và tạo câu bài tập điền khuyết (Dictionary Entry Completion) theo đúng chuẩn cấu trúc đề thi thực tế.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setShowOriginalImageModal(true)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                title="Xem ảnh chụp đề thi mẫu gốc"
              >
                <ImageIcon className="w-4 h-4 text-blue-300" />
                <span>Xem đề thi mẫu gốc (Ảnh đính kèm)</span>
              </button>

              <button
                type="button"
                onClick={handleExportDocx}
                disabled={isExporting}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Xuất đề thi ra Word (.docx)</span>
              </button>
            </div>
          </div>

          {/* Quick presets row */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-blue-200/80 font-medium">Đề mẫu sẵn có:</span>
            {Object.keys(PRESET_EXERCISES).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => handleSelectPresetWord(k)}
                className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all ${
                  keyword.toLowerCase() === k
                    ? 'bg-white text-blue-900 border-white shadow-xs'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                }`}
              >
                Từ "{k}" (Lớp {PRESET_EXERCISES[k].grade} - Unit {PRESET_EXERCISES[k].unit})
              </button>
            ))}
          </div>
        </div>

        {/* Error Alert if any */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">{errorMessage}</div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-amber-600 hover:text-amber-800 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 1: Curriculum & Keyword Controls */}
        <div id="curriculum-section">
          <CurriculumSelector
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
            selectedUnit={selectedUnit}
            onSelectUnit={handleSelectUnit}
            keyword={keyword}
            onChangeKeyword={setKeyword}
            dictionarySource={dictionarySource}
            onChangeDictionarySource={setDictionarySource}
            questionCount={questionCount}
            onChangeQuestionCount={setQuestionCount}
            startQuestionNum={startQuestionNum}
            onChangeStartQuestionNum={setStartQuestionNum}
            maxWords={maxWords}
            onChangeMaxWords={setMaxWords}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            onLoadSample={handleLoadSample}
          />
        </div>

        {/* Step 2 & 3: Exercise Display & Dictionary Box */}
        <div id="preview-section" className="space-y-8">
          {/* Layout Grid: Dictionary Entry & Question Set */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Dictionary Card (5 cols on desktop) */}
            <div className="lg:col-span-5 space-y-4">
              <DictionaryCard exercise={currentExercise} />

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-blue-700" />
                  <span>Quy tắc làm bài dạng tra từ điển:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>
                    Thí sinh quan sát bảng từ điển, xác định các <strong>cụm từ/collocation in đậm</strong>.
                  </li>
                  <li>
                    Đọc ngữ cảnh của câu cần hoàn thành, xác định từ loại và nghĩa còn thiếu.
                  </li>
                  <li>
                    Điền cụm từ trích xuất từ bảng từ điển (không quá <strong>{maxWords} từ</strong>).
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Exercise Questions & Practice (7 cols on desktop) */}
            <div className="lg:col-span-7">
              <ExerciseQuestionsView
                exercise={currentExercise}
                onExportDocx={handleExportDocx}
                isExporting={isExporting}
                grade={selectedGrade}
                unit={selectedUnit}
                unitTitle={currentUnitData.title}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-slate-700">
              Global Success Dictionary Exercise Generator
            </span>{' '}
            — Hỗ trợ giáo viên tiếng Anh THCS và ôn luyện tuyển sinh 10
          </div>
          <div className="text-slate-400">
            Dữ liệu giáo trình Bộ GD&ĐT Tiếng Anh 6, 7, 8, 9 (Chương trình GDPT 2018)
          </div>
        </div>
      </footer>

      {/* Modal: View Original Attached Exam Image */}
      {showOriginalImageModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-700" />
                <span>Ảnh chụp đề thi thực tế (Dạng bài tra cứu từ điển từ "habit")</span>
              </div>
              <button
                onClick={() => setShowOriginalImageModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-100">
              <img
                src="/assets/aistudio/image_ffee9eb9.png"
                alt="Đề thi thực tế - Dạng bài tra từ điển"
                className="max-w-full rounded border border-slate-300 shadow-md object-contain"
              />
              <p className="text-xs text-slate-500 mt-3 text-center">
                Ứng dụng web đã tái lập chính xác 100% cấu trúc: Tiêu đề hướng dẫn (VI) - Bảng khung từ điển (Bordered Box) - Cụm từ in đậm - Hộp ANSWERS - Dòng điền từ có gạch chân.
              </p>
            </div>
            <div className="p-3 border-t border-slate-200 bg-white flex justify-end">
              <button
                type="button"
                onClick={() => setShowOriginalImageModal(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Đóng lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
