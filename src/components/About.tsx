import React from 'react';
import { Layers, Database, Workflow, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Workflow className="text-blue-400" size={20} />,
      title: 'Structured Problem Decomposition',
      description: 
        'Before writing a single line of code, I focus on framing the problem clearly—identifying data inputs, edge cases, and deterministic transformation steps.',
      badge: 'Analytical Approach',
    },
    {
      icon: <Database className="text-emerald-400" size={20} />,
      title: 'Data & Schema Fundamentals',
      description: 
        'Strong emphasis on relational database fundamentals, normalization principles, query plan profiling, and ensuring dataset integrity throughout pipelines.',
      badge: 'System Architecture',
    },
    {
      icon: <Layers className="text-sky-400" size={20} />,
      title: 'Practical, Pragmatic Implementation',
      description: 
        'Focused on building useful solutions rather than overengineering. Utilizing Python, SQL, and analytical tooling to solve tangible bottlenecks.',
      badge: 'Software Craft',
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#080C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
              01 / ABOUT &amp; PHILOSOPHY
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
              Analytical Thinking.<br />Practical Execution.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-slate-400 text-sm font-normal">
            A grounded approach to Computer Science and Data Science—focusing on fundamentals, clarity of logic, and sustainable engineering.
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Candidate Profile
            </div>
            <p className="text-base text-slate-200 leading-relaxed">
              I am an undergraduate student in Computer Science and Engineering at Amrita Sai Institute of Science and Technology, specializing in Data Science (2022–2026).
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Rather than chasing fleeting buzzwords, I have dedicated my time to understanding core computer science principles: how data structures behave in memory, how relational databases execute complex queries, and how Python can automate real-world manual processes.
            </p>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
                <Lightbulb size={14} className="text-amber-400" />
                <span>Core Perspective</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                "Data is only as valuable as the integrity of the pipelines that feed it and the clarity of the questions being asked."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
