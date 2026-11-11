import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Sparkles,
  BookMarked,
  Sliders,
  ChevronDown,
  Check,
  RefreshCw,
  Volume2,
  ExternalLink,
  Layers,
  GraduationCap,
  BookOpen,
  FileText,
} from 'lucide-react';
import {
  GLOBAL_SUCCESS_CURRICULUM,
  GradeCurriculum,
  CurriculumUnit,
} from '../data/globalSuccessCurriculum';
import {
  deriveIPADetails,
  playEnglishAudio,
  searchAllKeywords,
  UnifiedSearchResult,
} from '../utils/ipaDictionaryApi';
import {
  OXFORD_3000_TOPICS,
  searchOxfordVocabulary,
  OxfordTopic,
  OxfordWordItem,
} from '../data/oxfordVocabulary3000';

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
  // Mode selection: 'global-success' or 'oxford-3000'
  const [sourceMode, setSourceMode] = useState<'global-success' | 'oxford-3000'>('global-success');
  const [selectedOxfordTopicId, setSelectedOxfordTopicId] = useState<number>(1);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchFilterInTopic, setSearchFilterInTopic] = useState('');

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Current grade & unit curriculum
  const currentGradeData: GradeCurriculum =
    GLOBAL_SUCCESS_CURRICULUM.find((g) => g.grade === selectedGrade) ||
    GLOBAL_SUCCESS_CURRICULUM[2]; // Default grade 8

  const currentUnitData: CurriculumUnit =
    currentGradeData.units.find((u) => u.unit === selectedUnit) ||
    currentGradeData.units[5]; // Default Unit 6: Lifestyles

  // Current Oxford 3000 topic data
  const currentOxfordTopic: OxfordTopic =
    OXFORD_3000_TOPICS.find((t) => t.id === selectedOxfordTopicId) ||
    OXFORD_3000_TOPICS[0];

  // Filtered words in current Oxford topic
  const filteredTopicWords = useMemo(() => {
    if (!searchFilterInTopic.trim()) {
      return currentOxfordTopic.words;
    }
    const clean = searchFilterInTopic.trim().toLowerCase();
    return currentOxfordTopic.words.filter(
      (w) =>
        w.word.toLowerCase().includes(clean) ||
        w.meaningVi.toLowerCase().includes(clean)
    );
  }, [currentOxfordTopic, searchFilterInTopic]);

  // Autocomplete suggestions based on current keyword input
  const keywordSuggestions = useMemo(() => {
    if (!keyword.trim() || keyword.trim().length < 2) return [];
    return searchAllKeywords(keyword.trim(), 10);
  }, [keyword]);

  const activeIPADetails = useMemo(() => {
    if (!keyword.trim()) return null;
    return deriveIPADetails(keyword.trim());
  }, [keyword]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6 mb-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-blue-700" />
            <span>Cấu hình Đề bài & Chọn Ngữ liệu Tra cứu</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Tích hợp đầy đủ chương trình <strong>Global Success (Lớp 6-9)</strong> và bộ <strong>3000 từ vựng thông dụng theo 60 chủ đề</strong> chuẩn phiên âm từ điển Cambridge
          </p>
        </div>
        <button
          onClick={onLoadSample}
          className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
          title="Tải lại bài tập mẫu từ 'habit' trong đề thi thực tế đính kèm"
        >
          <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
          <span>Nạp đề mẫu ảnh đính kèm (habit)</span>
        </button>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex border-b border-slate-200 mb-5 gap-2">
        <button
          type="button"
          onClick={() => setSourceMode('global-success')}
          className={`pb-2.5 px-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
            sourceMode === 'global-success'
              ? 'border-blue-700 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>1. Giáo trình Global Success (Lớp 6 - 9)</span>
        </button>

        <button
          type="button"
          onClick={() => setSourceMode('oxford-3000')}
          className={`pb-2.5 px-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
            sourceMode === 'oxford-3000'
              ? 'border-blue-700 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>2. Thư viện 3000 từ vựng theo 60 chủ đề (Tài liệu đính kèm)</span>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
            1,693+ từ
          </span>
        </button>
      </div>

      <div className="space-y-5">
        {/* Source Mode 1: Global Success Curriculum */}
        {sourceMode === 'global-success' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dropdown 1: Khối Lớp */}
            <div>
              <label
                htmlFor="grade-select"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Khối Lớp (Global Success)
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
                      {g.gradeName} {g.grade === 9 ? '★ Trọng tâm thi lớp 10' : ''}
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
                  Chủ Đề Theo Unit (Unit 1 - Unit 12)
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
        )}

        {/* Source Mode 2: Oxford 3000 Topics (from attached PDF) */}
        {sourceMode === 'oxford-3000' && (
          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <label
                htmlFor="oxford-topic-select"
                className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5"
              >
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Chọn 1 trong 60 chủ đề từ vựng thông dụng (Tài liệu đính kèm)</span>
              </label>
              <span className="text-xs font-semibold text-emerald-800">
                Chủ đề {currentOxfordTopic.id}/60: {currentOxfordTopic.wordCount} từ vựng
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="md:col-span-2 relative">
                <select
                  id="oxford-topic-select"
                  value={selectedOxfordTopicId}
                  onChange={(e) => {
                    const id = parseInt(e.target.value, 10);
                    setSelectedOxfordTopicId(id);
                    setSearchFilterInTopic('');
                    const topic = OXFORD_3000_TOPICS.find((t) => t.id === id);
                    if (topic && topic.words.length > 0) {
                      onChangeKeyword(topic.words[0].word);
                    }
                  }}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 cursor-pointer"
                >
                  {OXFORD_3000_TOPICS.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.id}. {topic.name} ({topic.wordCount} từ)
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Local filter inside current topic */}
              <div className="relative">
                <input
                  type="text"
                  value={searchFilterInTopic}
                  onChange={(e) => setSearchFilterInTopic(e.target.value)}
                  placeholder="Lọc từ trong chủ đề này..."
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Word Chips in Current Oxford Topic */}
            <div>
              <div className="text-[11px] font-semibold text-slate-500 mb-2">
                Bấm vào một từ vựng để nạp từ khóa & phiên âm Cambridge tương ứng:
              </div>
              <div className="max-h-48 overflow-y-auto pr-1 flex flex-wrap gap-1.5 custom-scrollbar">
                {filteredTopicWords.map((item) => {
                  const isSelected = keyword.toLowerCase() === item.word.toLowerCase();
                  return (
                    <button
                      key={item.word}
                      type="button"
                      onClick={() => onChangeKeyword(item.word)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
                      }`}
                      title={`${item.word} (${item.pos}) [${item.ipa}]: ${item.meaningVi}`}
                    >
                      <span className="font-semibold">{item.word}</span>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-emerald-100' : 'text-emerald-700 font-medium'}`}>
                        {item.ipa}
                      </span>
                      {item.meaningVi && (
                        <span className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                          ({item.meaningVi})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Nhập Từ khóa (Keyword) with Autocomplete & Instant Cambridge Preview */}
        <div ref={searchContainerRef} className="relative">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Từ Khóa Cần Tra Cứu & Tạo Bài Tập (Keyword)
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={keyword}
                onChange={(e) => {
                  onChangeKeyword(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Nhập từ tiếng Anh (ví dụ: habit, uniform, scissors, biodiversity, ambulance...)"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-2xs"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsSearchFocused(false);
                    if (!isGenerating && keyword.trim()) {
                      onGenerate();
                    }
                  }
                }}
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSearchFocused(false);
                onGenerate();
              }}
              disabled={isGenerating || !keyword.trim()}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap ${
                isGenerating || !keyword.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-700 hover:bg-blue-800 text-white cursor-pointer active:scale-[0.99]'
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

          {/* Autocomplete Dropdown */}
          {isSearchFocused && keywordSuggestions.length > 0 && (
            <div className="absolute z-20 left-0 right-0 sm:right-52 top-full mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden text-xs">
              <div className="p-2 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                <span>Gợi ý từ vựng từ Global Success & Oxford 3000:</span>
                <span className="text-blue-700 font-bold">{keywordSuggestions.length} kết quả</span>
              </div>
              <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
                {keywordSuggestions.map((item, idx) => (
                  <button
                    key={`${item.word}-${idx}`}
                    type="button"
                    onClick={() => {
                      onChangeKeyword(item.word);
                      setIsSearchFocused(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-blue-50/80 transition-colors flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{item.word}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                        {item.pos}
                      </span>
                      {item.ipa && (
                        <span className="text-blue-700 font-mono font-medium">
                          {item.ipa}
                        </span>
                      )}
                    </div>
                    <div className="text-slate-500 text-[11px] text-right truncate max-w-[220px] flex items-center gap-1.5">
                      <span className="truncate">{item.meaningVi}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap ${
                          item.source === 'curriculum'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Live Cambridge IPA Preview Box */}
          {keyword.trim() && activeIPADetails && (
            <div className="mt-2.5 px-3.5 py-2 bg-blue-50/70 rounded-xl border border-blue-200/80 flex flex-wrap items-center justify-between gap-2.5 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-blue-900">Phiên âm Cambridge:</span>
                <span className="font-mono text-sm font-bold text-blue-950 bg-white px-2.5 py-0.5 rounded-md border border-blue-200 shadow-2xs">
                  {activeIPADetails.cambridge.uk}
                </span>
                <a
                  href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(
                    keyword.trim().toLowerCase()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900 bg-white px-2 py-0.5 rounded border border-blue-200 hover:bg-blue-50 transition-colors shadow-2xs"
                  title="Mở tra cứu trực tiếp trên https://dictionary.cambridge.org/"
                >
                  <span>dictionary.cambridge.org</span>
                  <ExternalLink className="w-3 h-3 text-blue-700" />
                </a>
              </div>

              {/* Audio Listen Buttons */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() =>
                    playEnglishAudio(
                      keyword.trim(),
                      'UK',
                      activeIPADetails.audioUrlUk
                    )
                  }
                  className="px-2.5 py-1 rounded-md bg-white hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold flex items-center gap-1 shadow-2xs transition-colors"
                  title="Phát âm chuẩn Anh - Anh (UK - Cambridge)"
                >
                  <span>🇬🇧 UK</span>
                  <Volume2 className="w-3.5 h-3.5 text-blue-700" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    playEnglishAudio(
                      keyword.trim(),
                      'US',
                      activeIPADetails.audioUrlUs
                    )
                  }
                  className="px-2.5 py-1 rounded-md bg-white hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold flex items-center gap-1 shadow-2xs transition-colors"
                  title="Phát âm chuẩn Anh - Mỹ (US - Cambridge)"
                >
                  <span>🇺🇸 US</span>
                  <Volume2 className="w-3.5 h-3.5 text-blue-700" />
                </button>
              </div>
            </div>
          )}

          {/* Quick select vocabulary chips from current Global Success Unit with exact IPA */}
          {sourceMode === 'global-success' && (
            <div className="mt-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Từ vựng & Phiên âm chuẩn SGK Global Success {selectedGrade} — Unit {currentUnitData.unit}: {currentUnitData.title}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                    {currentUnitData.suggestedKeywords.length} từ vựng
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">
                  Bấm vào từ vựng để nạp từ khóa & tạo bài tập:
                </span>
              </div>

              <div className="max-h-48 overflow-y-auto pr-1 flex flex-wrap gap-1.5 custom-scrollbar">
                {currentUnitData.suggestedKeywords.map((item) => {
                  const isSelected = keyword.toLowerCase() === item.word.toLowerCase();
                  return (
                    <button
                      key={item.word}
                      type="button"
                      onClick={() => onChangeKeyword(item.word)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-blue-700 text-white border-blue-700 shadow-xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                      }`}
                      title={`${item.word} (${item.pos}) [${item.ipa || ''}]: ${item.meaningVi}`}
                    >
                      <span className="font-semibold">{item.word}</span>
                      {item.ipa && (
                        <span
                          className={`text-[10px] font-mono ${
                            isSelected ? 'text-blue-100' : 'text-blue-700 font-medium'
                          }`}
                        >
                          {item.ipa}
                        </span>
                      )}
                      <span
                        className={`text-[10px] ${
                          isSelected ? 'text-blue-200' : 'text-slate-400'
                        }`}
                      >
                        ({item.meaningVi})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Toggle Advanced Exam Settings */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-500" />
            <span>Tùy chỉnh nâng cao (Số lượng câu hỏi, số thứ tự câu bắt đầu...)</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                showAdvanced ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showAdvanced && (
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {/* Dictionary source (Locked to Cambridge) */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Chuẩn quy ước phiên âm & từ điển
                </label>
                <div className="w-full bg-blue-50/90 border border-blue-200 rounded-lg px-2.5 py-2 text-blue-950 font-bold flex items-center justify-between text-xs">
                  <span>Cambridge Dictionary (CALD)</span>
                  <Check className="w-4 h-4 text-blue-700" />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Cố định theo chuẩn phiên âm từ điển Cambridge
                </span>
              </div>

              {/* Question Count */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Số lượng câu hỏi bài tập
                </label>
                <select
                  value={questionCount}
                  onChange={(e) =>
                    onChangeQuestionCount(parseInt(e.target.value, 10))
                  }
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
                >
                  <option value={2}>2 câu (Chuẩn đề tuyển sinh lớp 10)</option>
                  <option value={3}>3 câu (Đề kiểm tra giữa kỳ / học kỳ)</option>
                  <option value={4}>4 câu (Phiếu bài tập mở rộng)</option>
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
                    onChange={(e) =>
                      onChangeStartQuestionNum(
                        parseInt(e.target.value, 10) || 1
                      )
                    }
                    className="w-24 bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <span className="text-slate-500 text-[11px]">
                    (Mặc định 35 trong đề thi)
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
