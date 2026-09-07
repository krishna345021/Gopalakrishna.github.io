import React from 'react';
import { Target, GitMerge, SearchCode } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Requirements & Schema Framing',
      summary: 'Define what questions the data must answer. Establish relational schemas, data types, and boundary conditions before implementation.',
      tools: 'Schema Design • Entity Relationships',
      icon: <Target className="text-blue-400" size={18} />
    },
    {
      stepNumber: '02',
      title: 'Modular Logic Decomposition',
      summary: 'Break complex workflows into isolated functions: data extraction, sanitization, rule validation, and transformation.',
      tools: 'Python Modules • Functional Logic',
      icon: <GitMerge className="text-emerald-400" size={18} />
    },
    {
      stepNumber: '03',
      title: 'Profiling & Verification',
      summary: 'Inspect query execution paths with EXPLAIN, evaluate index usage, test against edge cases, and eliminate bottlenecks.',
      tools: 'SQL Execution Plans • Performance Profiling',
      icon: <SearchCode className="text-sky-400" size={18} />
    },
  ];

  return (
    <section className="py-20 border-b border-white/10 bg-[#080C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block mb-1">
            Methodology
          </span>
          <h3 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
            How I Approach Engineering &amp; Data Problems
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl font-normal">
            A structured mindset centered on analytical rigor, validation, and reproducible outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-white/10 bg-[#0C1222] relative group hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-blue-400">
                    STEP {item.stepNumber}
                  </span>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                {item.tools}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
