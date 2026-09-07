import React from 'react';
import { ArrowRight, FileText, Terminal, Database, Code2 } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.querySelector('#work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 bg-grid-pattern overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Statement */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Credential Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{candidateProfile.availabilityPill}</span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Candidate Portfolio // Krishna
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08]">
                BUILDING WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">DATA.</span>
              </h1>
            </div>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl border-l-2 border-blue-500 pl-4 py-0.5">
              {candidateProfile.statement}
            </p>

            {/* Supporting Paragraph */}
            <p className="text-base text-slate-400 leading-relaxed max-w-xl font-normal">
              {candidateProfile.aboutParagraph}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-blue-600/20 hover:translate-y-[-1px]"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <FileText size={15} className="text-slate-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Key Focus Tags */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-widest">Core Toolkit:</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center space-x-1.5">
                <Terminal size={12} className="text-blue-400" />
                <span>Python</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center space-x-1.5">
                <Database size={12} className="text-emerald-400" />
                <span>SQL / DBMS</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center space-x-1.5">
                <Code2 size={12} className="text-sky-400" />
                <span>Data Analytics</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                Excel
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Hero Visual Sandbox */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Monospace editorial decorative tag */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                <span>// INTERFACE DEMO</span>
                <span>DATA TRANSFORMATION ENGINE</span>
              </div>
              <HeroVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
