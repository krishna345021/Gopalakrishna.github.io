import React from 'react';
import { journeyMilestones } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-b border-white/10 bg-[#080C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
              04 / ACADEMIC &amp; SKILL PROGRESSION
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
              Learning Path (2022–2026)
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-slate-400 text-xs font-mono">
            // PROGRESSIVE CAPABILITY TIMELINE.
            <br />
            Chronological progression from core CS programming to data systems and industry exposure.
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-10">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div 
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  milestone.highlight
                    ? 'bg-blue-500 border-white shadow-md shadow-blue-500/50'
                    : 'bg-[#080C16] border-slate-500 group-hover:border-blue-400'
                }`} 
              />

              {/* Milestone Card */}
              <div className="p-6 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-blue-400 font-bold">
                      {milestone.period}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-500">
                      Phase {milestone.step}
                    </span>
                  </div>

                  {milestone.highlight && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Key Milestone
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {milestone.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
