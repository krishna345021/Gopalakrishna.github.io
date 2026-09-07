import React, { useState } from 'react';
import { Project } from '../types';
import { Code, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0C1222] overflow-hidden hover:border-white/20 transition-all">
      {/* Card Header Banner */}
      <div className="p-6 md:p-8 border-b border-white/5 bg-[#0E1528] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-blue-300">
            {project.tagline}
          </p>
        </div>

        {/* Problem vs Approach editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Problem */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
              The Problem
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">
              The Technical Approach
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Outcome / Takeaway */}
        <div className="p-4 rounded-lg bg-blue-950/20 border border-blue-500/20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-1">
            Practical Outcome &amp; Value
          </span>
          <p className="text-xs sm:text-sm text-slate-300">
            {project.solutionOutcome}
          </p>
        </div>

        {/* Architecture & Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 divide-x divide-white/5 border-y border-white/5 py-3 font-mono text-center">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx} className="px-2">
                <span className="text-[10px] uppercase text-slate-400 block tracking-wider">
                  {metric.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Code Snippet Toggle */}
        {project.codeSnippet && (
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowCode(!showCode)}
                className="inline-flex items-center space-x-2 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded border border-white/10 hover:border-white/20 transition-all bg-white/5"
              >
                <Code size={14} className="text-blue-400" />
                <span>{showCode ? 'Hide Code Implementation' : 'Inspect Code Logic'}</span>
                {showCode ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showCode && (
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono text-slate-400 hover:text-slate-200 inline-flex items-center space-x-1"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <span>Copy snippet</span>
                  )}
                </button>
              )}
            </div>

            {showCode && (
              <div className="mt-3 rounded-lg border border-white/10 bg-[#080C14] overflow-hidden">
                <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{project.codeSnippet.caption}</span>
                  <span className="uppercase text-slate-500">{project.codeSnippet.language}</span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
