import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/10 bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block mb-1">
            Academic Background
          </span>
          <h3 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
            Education
          </h3>
          <p className="text-xs font-mono text-slate-500 mt-1">
            // Foundational computer science and data science education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-blue-400">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded bg-white/5 border border-white/5">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <div className="text-xs font-mono text-blue-400 mb-3">
                  {edu.major}
                </div>
                <div className="text-sm font-medium text-slate-300 mb-4">
                  {edu.institution}
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Core Academic Focus
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {edu.focus}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status</span>
                <span className="text-emerald-400">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
