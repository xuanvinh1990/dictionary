import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  AlertCircle,
  FileCheck2,
  Image as ImageIcon,
  X,
  ExternalLink,
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
import { generateExerciseForKeyword } from './utils/exerciseGenerator';

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState<number>(9);
  const [selectedUnit, setSelectedUnit] = useState<number>(6);
  const [keyword, setKeyword] = useState<string>('habit');
  const [hasCustomKeyword, setHasCustomKeyword] = useState<boolean>(false);
  const [dictionarySource, setDictionarySource] = useState<string>(
    "Cambridge Advanced Learner's Dictionary"
  );
  const [questionCount, setQuestionCount] = useState<number>(2);
  const [startQuestionNum, setStartQuestionNum] = useState<number>(35);
  const [maxWords, setMaxWords] = useState<number>(3);

  const [currentExercise, setCurrentExercise] =
    useState<DictionaryExercise>(SAMPLE_HABIT_EXERCISE);
  const [variationSeed, setVariationSeed] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showOriginalImageModal, setShowOriginalImageModal] =
    useState<boolean>(false);

  const latestRequestIdRef = useRef<number>(0);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  // Current curriculum unit metadata
  const currentGradeData =
    GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === selectedGrade) ||
    GLOBAL_SUCCESS_CURRICULUM[2];
  const currentUnitData =
    currentGradeData.units.find((u) => u.unit === selectedUnit) ||
    currentGradeData.units[5];

  // Core generator: updates questions INSTANTLY for the chosen keyword, grade, and dictionary source!
  const executeGenerate = async (
    targetKeyword: string,
    targetGrade: number,
    targetUnit: number,
    targetUnitTitle?: string,
    targetDictionarySource?: string,
    targetVariationSeed: number = 0,
    overrides?: {
      questionCount?: number;
      startQuestionNum?: number;
      maxWords?: number;
    }
  ) => {
    const cleanWord = targetKeyword.trim().toLowerCase();
    if (!cleanWord) return;
    const activeSource = targetDictionarySource || dictionarySource;
    const activeCount = overrides?.questionCount ?? questionCount;
    const activeStart = overrides?.startQuestionNum ?? startQuestionNum;
    const activeMaxWords = overrides?.maxWords ?? maxWords;

    const reqId = ++latestRequestIdRef.current;

    // 1. Instant 0ms update: generate pristine dictionary entry and questions
    const gradeObj =
      GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === targetGrade) ||
      GLOBAL_SUCCESS_CURRICULUM[0];
    const unitObj =
      gradeObj.units.find((u) => u.unit === targetUnit) || gradeObj.units[0];
    const resolvedTitle = targetUnitTitle || unitObj.title;

    const instantExercise = generateExerciseForKeyword(
      cleanWord,
      targetGrade,
      targetUnit,
      resolvedTitle,
      activeCount,
      activeStart,
      activeMaxWords,
      activeSource,
      undefined,
      targetVariationSeed
    );
    setCurrentExercise(instantExercise);
    setErrorMessage(null);

    // 2. Asynchronously request backend for live Online Dictionary definition, POS, IPA, audio & enrichment
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: cleanWord,
          grade: targetGrade,
          unit: targetUnit,
          unitTitle: resolvedTitle,
          dictionarySource: activeSource,
          questionCount: activeCount,
          startQuestionNum: activeStart,
          maxWords: activeMaxWords,
          variationSeed: targetVariationSeed,
        }),
      });

      if (response.ok && reqId === latestRequestIdRef.current) {
        const enrichedData: DictionaryExercise = await response.json();
        setCurrentExercise(enrichedData);
      }
    } catch {
      // Offline fallback: instant exercise is already active
    } finally {
      if (reqId === latestRequestIdRef.current) {
        setIsGenerating(false);
      }
    }
  };

  // Auto-lookup online when teacher types a keyword (with 550ms debounce)
  const handleUserTypeKeyword = (newKeyword: string) => {
    setKeyword(newKeyword);
    setHasCustomKeyword(true);
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    const clean = newKeyword.trim().toLowerCase();
    if (clean.length < 2) return;

    typingTimerRef.current = setTimeout(() => {
      setVariationSeed(0);
      executeGenerate(
        clean,
        selectedGrade,
        selectedUnit,
        currentUnitData.title,
        dictionarySource,
        0
      );
    }, 550);
  };

  // Handle Load Preset / Sample Image
  const handleLoadSample = () => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setHasCustomKeyword(false);
    setSelectedGrade(9);
    setSelectedUnit(6);
    setKeyword('habit');
    setQuestionCount(2);
    setStartQuestionNum(35);
    setMaxWords(3);
    setVariationSeed(0);
    const grade9Obj =
      GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === 9) || GLOBAL_SUCCESS_CURRICULUM[3];
    const unit6Obj = grade9Obj.units.find((u) => u.unit === 6) || grade9Obj.units[5];
    executeGenerate('habit', 9, 6, unit6Obj.title, dictionarySource, 0, {
      questionCount: 2,
      startQuestionNum: 35,
      maxWords: 3,
    });
  };

  // Handle Select Grade: keeps user's typed keyword (if custom) to test across grades, or loads Unit 1's 1st word
  const handleSelectGrade = (newGrade: number) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setSelectedGrade(newGrade);
    const gradeObj =
      GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === newGrade) ||
      GLOBAL_SUCCESS_CURRICULUM[0];
    const unit1 = gradeObj.units[0];
    setSelectedUnit(unit1.unit);
    const shouldKeepCustom = hasCustomKeyword && keyword.trim().length >= 2;
    const newKw = shouldKeepCustom
      ? keyword.trim()
      : unit1.suggestedKeywords[0]?.word || 'habit';
    if (!shouldKeepCustom) {
      setKeyword(newKw);
    }
    setVariationSeed(0);
    executeGenerate(newKw, newGrade, unit1.unit, unit1.title, undefined, 0);
  };

  // Handle Select Unit: updates unit, picks 1st word, and REGENERATES IMMEDIATELY!
  const handleSelectUnit = (unitNum: number) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setHasCustomKeyword(false);
    setSelectedUnit(unitNum);
    const gradeObj =
      GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === selectedGrade) ||
      GLOBAL_SUCCESS_CURRICULUM[0];
    const unitObj =
      gradeObj.units.find((u) => u.unit === unitNum) || gradeObj.units[0];
    const newKw = unitObj.suggestedKeywords[0]?.word || keyword;
    setKeyword(newKw);
    setVariationSeed(0);
    executeGenerate(newKw, selectedGrade, unitNum, unitObj.title, undefined, 0);
  };

  // Handle Direct Keyword Click (from chips, Oxford topics, or autocomplete)
  const handleSelectKeywordDirect = (
    word: string,
    optGrade?: number,
    optUnit?: number
  ) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setHasCustomKeyword(false);
    const targetGrade = optGrade || selectedGrade;
    const targetUnit = optUnit || selectedUnit;
    if (optGrade && optGrade !== selectedGrade) {
      setSelectedGrade(optGrade);
    }
    if (optUnit && optUnit !== selectedUnit) {
      setSelectedUnit(optUnit);
    }
    setKeyword(word);
    setVariationSeed(0);
    executeGenerate(word, targetGrade, targetUnit, undefined, undefined, 0);
  };

  // Handle Select Preset quick button
  const handleSelectPresetWord = (presetKey: string) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    const item = PRESET_EXERCISES[presetKey];
    if (item) {
      setHasCustomKeyword(false);
      setSelectedGrade(item.grade);
      setSelectedUnit(item.unit);
      setKeyword(item.exercise.keyword);
      setVariationSeed(0);
      executeGenerate(item.exercise.keyword, item.grade, item.unit, item.unitTitle, undefined, 0);
    }
  };

  // Generate Exercise on manual button press or search submit
  const handleGenerate = () => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setVariationSeed(0);
    executeGenerate(keyword, selectedGrade, selectedUnit, currentUnitData.title, undefined, 0);
  };

  // Switch to a different set of questions for the current keyword
  const handleSwitchQuestions = () => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    const activeKeyword = keyword.trim() || currentExercise.keyword;
    if (!activeKeyword) return;
    const nextSeed = variationSeed + 1;
    setVariationSeed(nextSeed);
    executeGenerate(
      activeKeyword,
      selectedGrade,
      selectedUnit,
      currentUnitData.title,
      dictionarySource,
      nextSeed
    );
  };

  // Handle Dictionary Source change: updates state and regenerates immediately
  const handleSelectDictionarySource = (newSource: string) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setDictionarySource(newSource);
    setVariationSeed(0);
    executeGenerate(
      keyword,
      selectedGrade,
      selectedUnit,
      currentUnitData.title,
      newSource,
      0
    );
  };

  const handleChangeQuestionCount = (newCount: number) => {
    setQuestionCount(newCount);
    executeGenerate(
      keyword,
      selectedGrade,
      selectedUnit,
      currentUnitData.title,
      dictionarySource,
      variationSeed,
      { questionCount: newCount }
    );
  };

  const handleChangeStartQuestionNum = (newStart: number) => {
    setStartQuestionNum(newStart);
    executeGenerate(
      keyword,
      selectedGrade,
      selectedUnit,
      currentUnitData.title,
      dictionarySource,
      variationSeed,
      { startQuestionNum: newStart }
    );
  };

  const handleChangeMaxWords = (newMaxWords: number) => {
    setMaxWords(newMaxWords);
    executeGenerate(
      keyword,
      selectedGrade,
      selectedUnit,
      currentUnitData.title,
      dictionarySource,
      variationSeed,
      { maxWords: newMaxWords }
    );
  };

  // Handle Word .docx Export
  const handleExportDocx = async () => {
    if (!currentExercise) return;
    setIsExporting(true);
    setErrorMessage(null);
    try {
      await exportExerciseToDocx(
        currentExercise,
        selectedGrade,
        selectedUnit,
        currentUnitData.title
      );
    } catch (err) {
      console.error('Lỗi khi xuất Word docx:', err);
      setErrorMessage('Có lỗi khi tạo file Word (.docx). Vui lòng thử lại.');
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
                <span>Cambridge • Oxford • Longman</span>
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
            onSelectGrade={handleSelectGrade}
            selectedUnit={selectedUnit}
            onSelectUnit={handleSelectUnit}
            keyword={keyword}
            onChangeKeyword={setKeyword}
            onUserTypeKeyword={handleUserTypeKeyword}
            currentExercise={currentExercise}
            onSelectKeywordDirect={handleSelectKeywordDirect}
            dictionarySource={dictionarySource}
            onChangeDictionarySource={handleSelectDictionarySource}
            questionCount={questionCount}
            onChangeQuestionCount={handleChangeQuestionCount}
            startQuestionNum={startQuestionNum}
            onChangeStartQuestionNum={handleChangeStartQuestionNum}
            maxWords={maxWords}
            onChangeMaxWords={handleChangeMaxWords}
            onGenerate={handleGenerate}
            onSwitchQuestions={handleSwitchQuestions}
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
              <DictionaryCard exercise={currentExercise} isLookingUp={isGenerating} />

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
                onSwitchQuestions={handleSwitchQuestions}
                isSwitchingQuestions={isGenerating}
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
            <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-100 gap-3">
              <img
                src="/assets/aistudio/image_ffee9eb9.png"
                alt="Đề thi thực tế - Dạng bài tra từ điển"
                className="max-w-full rounded border border-slate-300 shadow-md object-contain"
              />
              <a
                href="/assets/aistudio/Ca_u_Le__nh_Dictionary_6025b0b6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline"
              >
                <span>Mở tài liệu PDF đính kèm (Câu Lệnh Dictionary.pdf)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-500 text-center">
                Ứng dụng web tái lập chính xác 100% cấu trúc trong file đính kèm: Tiêu đề (VI) - Khung từ điển - Cụm từ in đậm - Hộp ANSWERS - Dòng điền từ có gạch chân.
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
