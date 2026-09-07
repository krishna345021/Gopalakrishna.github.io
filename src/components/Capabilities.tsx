import React from 'react';
import { capabilityCategories } from '../data/portfolioData';
import { Terminal, Database, Cpu, Wrench } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal size={18} className="text-blue-400" />;
      case 1:
        return <Database size={18} className="text-emerald-400" />;
      case 2:
        return <Cpu size={18} className="text-sky-400" />;
      default:
        return <Wrench size={18} className="text-purple-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 border-b border-white/10 bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
              02 / TECHNICAL CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
              Tools &amp; Working Knowledge
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-slate-400 text-xs font-mono">
            // NO INFLATED PERCENTAGE BARS.
            <br />
            Documenting genuine foundational competency and hands-on tool familiarity.
          </div>
        </div>

        {/* 4-Grid Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityCategories.map((cat, idx) => (
            <div 
              key={cat.number}
              className="p-8 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      {getCategoryIcon(idx)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block">
                        Category {cat.number}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-200 hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Application Level</span>
                <span className="text-slate-400">Practical Projects &amp; Coursework</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
