import React from 'react';
import { BookOpen, Sparkles, FileText, Download } from 'lucide-react';

interface HeaderProps {
  onExportDocx: () => void;
  isExporting: boolean;
  hasExercise: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onExportDocx, isExporting, hasExercise }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>GS Dictionary Exercise</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 hidden sm:inline-block">
                Global Success 6-9
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              Dạng bài Tra cứu Từ điển (Dictionary Entry Completion) luyện thi vào 10
            </p>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#curriculum-section" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Khung chương trình
          </a>
          <a href="#preview-section" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Xem trước đề thi
          </a>
          <a href="#practice-section" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Làm bài tương tác
          </a>
          <a href="#teacher-key" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Đáp án & Lời giải
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onExportDocx}
            disabled={!hasExercise || isExporting}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 ${
              hasExercise && !isExporting
                ? 'bg-blue-700 hover:bg-blue-800 text-white'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            title="Xuất đề thi ra file Microsoft Word .docx"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Đang xuất...' : 'Xuất file Word (.docx)'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
