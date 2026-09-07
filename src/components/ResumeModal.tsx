import React from 'react';
import { X, FileText, Download, Info } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#0C1222] shadow-2xl p-6 sm:p-8 space-y-6 text-white relative animate-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex items-start space-x-3.5">
          <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
            <FileText size={24} />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold font-display uppercase tracking-tight">
              Resume &amp; Credentials
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              {candidateProfile.name} • {candidateProfile.roleTitle}
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between text-slate-300">
            <span>Specialization:</span>
            <span className="text-white font-semibold">B.Tech CSE (Data Science)</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Institution:</span>
            <span className="text-white">Amrita Sai Institute of Sci. &amp; Tech.</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Period:</span>
            <span className="text-blue-400">2022 – 2026</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Key Focus:</span>
            <span className="text-emerald-400">Data, Python, SQL, DBMS</span>
          </div>
        </div>

        {/* Action button */}
        <div className="space-y-3">
          <a
            href="/resume.pdf"
            download="Krishna_Resume.pdf"
            className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            <Download size={15} />
            <span>Download Official Resume (PDF)</span>
          </a>

          <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-500/20 text-[11px] text-slate-300 flex items-start space-x-2.5 font-sans">
            <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note for Krishna:</strong> Place your final PDF file inside the <code className="font-mono text-blue-300 bg-white/5 px-1 py-0.5 rounded">public/</code> directory named <code className="font-mono text-blue-300 bg-white/5 px-1 py-0.5 rounded">resume.pdf</code>. The download button is already configured to deliver it instantly.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Format: PDF</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
