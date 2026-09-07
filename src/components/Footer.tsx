import React from 'react';
import { candidateProfile, contactInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#060911] border-t border-white/10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left: Candidate Identifier */}
          <div className="flex items-center space-x-3">
            <span className="text-white font-bold tracking-widest text-sm uppercase">
              {candidateProfile.name}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-[11px]">
              Portfolio Website
            </span>
          </div>

          {/* Center: Domain Positioning */}
          <div className="text-slate-400 text-[11px] uppercase tracking-wider">
            Computer Science • Data Science
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href={contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            &copy; 2026 Krishna
          </div>
          <div className="text-[10px] text-slate-600">
            Crafted with React, TypeScript &amp; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
