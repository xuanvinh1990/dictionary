import React, { useState } from 'react';
import { Search, Sparkles, BookMarked, Sliders, ChevronDown, Check, RefreshCw } from 'lucide-react';
import {
  GLOBAL_SUCCESS_CURRICULUM,
  GradeCurriculum,
  CurriculumUnit,
} from '../data/globalSuccessCurriculum';

interface CurriculumSelectorProps {
  selectedGrade: number;
  onSelectGrade: (grade: number) => void;
  selectedUnit: number;
  onSelectUnit: (unit: number) => void;
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
  dictionarySource: string;
  onChangeDictionarySource: (source: string) => void;
  questionCount: number;
  onChangeQuestionCount: (count: number) => void;
  startQuestionNum: number;
  onChangeStartQuestionNum: (num: number) => void;
  maxWords: number;
  onChangeMaxWords: (words: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  onLoadSample: () => void;
}

export const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  selectedUnit,
  onSelectUnit,
  keyword,
  onChangeKeyword,
  dictionarySource,
  onChangeDictionarySource,
  questionCount,
  onChangeQuestionCount,
  startQuestionNum,
  onChangeStartQuestionNum,
  maxWords,
  onChangeMaxWords,
  onGenerate,
  isGenerating,
  onLoadSample,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Get current grade & unit curriculum
  const currentGradeData: GradeCurriculum =
    GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === selectedGrade) ||
    GLOBAL_SUCCESS_CURRICULUM[2]; // Default grade 8

  const currentUnitData: CurriculumUnit =
    currentGradeData.units.find((u) => u.unit === selectedUnit) ||
    currentGradeData.units[5]; // Default Unit 6: Lifestyles

  const dictionaryOptions = [
    { id: 'Oxford Advanced Learner\'s Dictionary', label: 'Oxford Learner\'s (OALD)' },
    { id: 'Cambridge Advanced Learner\'s Dictionary', label: 'Cambridge Dictionary (CALD)' },
    { id: 'Longman Dictionary of Contemporary English', label: 'Longman (LDOCE)' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6 mb-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-blue-700" />
            <span>Cấu hình Đề bài & Chọn Ngữ liệu Global Success</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Chọn khối lớp, Unit từ 1 đến 12, nhập từ khóa hoặc chọn từ vựng gợi ý để AI tạo bài tập chuẩn định dạng đề thi
          </p>
        </div>
        <button
          onClick={onLoadSample}
          className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          title="Tải lại bài tập mẫu từ 'habit' trong đề thi thực tế đính kèm"
        >
          <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
          <span>Nạp đề mẫu ảnh đính kèm (habit)</span>
        </button>
      </div>

      <div className="space-y-5">
        {/* Step 1 & 2: Dropdown Khối Lớp & Chủ Đề Theo Unit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dropdown 1: Khối Lớp */}
          <div>
            <label
              htmlFor="grade-select"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              1. Khối Lớp (Chương trình Global Success)
            </label>
            <div className="relative">
              <select
                id="grade-select"
                value={selectedGrade}
                onChange={(e) => {
                  const grade = parseInt(e.target.value, 10);
                  onSelectGrade(grade);
                  onSelectUnit(1);
                }}
                className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 cursor-pointer"
              >
                {GLOBAL_SUCCESS_CURRICULUM.map((g) => (
                  <option key={g.grade} value={g.grade}>
                    {g.gradeName} {g.grade === 9 ? '★' : ''}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {selectedGrade === 9
                ? 'Trọng tâm cấu trúc đề thi tuyển sinh vào lớp 10 THPT'
                : `Giáo trình Tiếng Anh ${selectedGrade} THCS (GDPT 2018)`}
            </p>
          </div>

          {/* Dropdown 2: Chủ đề theo Unit (Unit 1 - Unit 12) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="unit-select"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
              >
                2. Chủ Đề Theo Unit (Unit 1 - Unit 12)
              </label>
              <span className="text-[11px] font-bold text-blue-700">
                Unit {currentUnitData.unit} / 12
              </span>
            </div>
            <div className="relative">
              <select
                id="unit-select"
                value={selectedUnit}
                onChange={(e) => onSelectUnit(parseInt(e.target.value, 10))}
                className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 cursor-pointer"
              >
                {currentGradeData.units.map((u) => (
                  <option key={u.unit} value={u.unit}>
                    Unit {u.unit}: {u.title} — {u.themeVi}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-blue-800 font-medium mt-1 truncate">
              Chủ đề hiện tại: <strong>{currentUnitData.title}</strong> ({currentUnitData.themeVi})
            </p>
          </div>
        </div>

        {/* Step 3: Nhập Từ khóa (Keyword) & Gợi ý từ vựng theo Unit */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            3. Từ Khóa Cần Tra Cứu & Tạo Bài Tập (Keyword)
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={keyword}
                onChange={(e) => onChangeKeyword(e.target.value)}
                placeholder="Nhập từ tiếng Anh (ví dụ: habit, custom, craft, community, lifestyle...)"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-xs"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isGenerating && keyword.trim()) {
                    onGenerate();
                  }
                }}
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <button
              type="button"
              onClick={onGenerate}
              disabled={isGenerating || !keyword.trim()}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap ${
                isGenerating || !keyword.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Đang tra cứu từ điển...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Tra từ điển & Tạo bài tập</span>
                </>
              )}
            </button>
          </div>

          {/* Quick select vocabulary chips from current Unit */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-medium text-slate-500 mr-1">
              Gợi ý từ trọng tâm Unit {currentUnitData.unit}:
            </span>
            {currentUnitData.suggestedKeywords.map((item) => (
              <button
                key={item.word}
                type="button"
                onClick={() => onChangeKeyword(item.word)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors border ${
                  keyword.toLowerCase() === item.word.toLowerCase()
                    ? 'bg-blue-50 text-blue-800 border-blue-300 font-semibold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
                title={`${item.meaningVi} (${item.pos})`}
              >
                <span className="font-medium">{item.word}</span>
                <span className="text-slate-400 text-[10px] ml-1">({item.meaningVi})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Advanced Exam Settings */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-500" />
            <span>Tùy chỉnh nâng cao (Bộ từ điển, số câu hỏi, đánh số thứ tự...)</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
            />
          </button>

          {showAdvanced && (
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {/* Dictionary source */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nguồn từ điển tham chiếu
                </label>
                <select
                  value={dictionarySource}
                  onChange={(e) => onChangeDictionarySource(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  {dictionaryOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Question Count & Max Words */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Số lượng câu hỏi bài tập
                </label>
                <select
                  value={questionCount}
                  onChange={(e) => onChangeQuestionCount(parseInt(e.target.value, 10))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value={2}>2 câu (Chuẩn đề tuyển sinh lớp 10)</option>
                  <option value={3}>3 câu (Đề kiểm tra giữa kỳ / học kỳ)</option>
                  <option value={4}>4 câu (Phiếu bài tập nâng cao)</option>
                </select>
              </div>

              {/* Start Question Numbering */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Số thứ tự câu bắt đầu
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={startQuestionNum}
                    onChange={(e) => onChangeStartQuestionNum(parseInt(e.target.value, 10) || 1)}
                    className="w-24 bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <span className="text-slate-500 text-[11px]">
                    (Ví dụ: 35 trong ảnh đề thi)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
