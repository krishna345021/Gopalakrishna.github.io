import React from 'react';
import { certificationData } from '../data/portfolioData';
import { Award, CheckCircle2, FileCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 border-b border-white/10 bg-[#080C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block mb-1">
            Verification &amp; Credentials
          </span>
          <h3 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
            Certifications
          </h3>
        </div>

        {/* Minimal Editorial Card */}
        <div className="p-8 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/20 transition-all">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-emerald-400 shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {certificationData.title}
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">{certificationData.provider}</span>
                  <span>•</span>
                  <span>Issued {certificationData.year}</span>
                  <span>•</span>
                  <span className="text-emerald-400">Verified Curriculum</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <FileCheck size={14} className="text-emerald-400" />
              <span>Skill India Certified</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            {certificationData.description}
          </p>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
              Curriculum &amp; Evaluated Concepts
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {certificationData.skillsCovered.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-2.5 rounded bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
