import React from 'react';
import { industryExposure } from '../data/portfolioData';
import { Compass, MapPin, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Exposure: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/10 bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block mb-1">
            Industry Engagement
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white font-display uppercase tracking-tight">
            Industry Exposure
          </h3>
          <p className="text-xs font-mono text-slate-500 mt-1">
            // Non-employment technical seminar participation and enterprise trends exposure.
          </p>
        </div>

        {/* Premium Exposure Card */}
        <div className="p-8 md:p-10 rounded-xl border border-white/10 bg-[#0C1222] relative overflow-hidden hover:border-white/20 transition-all">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono px-2.5 py-1 rounded bg-blue-600/20 text-blue-300 border border-blue-500/30">
                <Compass size={12} />
                <span className="uppercase tracking-wider font-semibold">{industryExposure.tag}</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-white font-display uppercase tracking-tight pt-2">
                {industryExposure.title}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5">
                <MapPin size={13} className="text-blue-400" />
                <span>{industryExposure.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5">
                <Calendar size={13} className="text-blue-400" />
                <span>{industryExposure.year}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Participant Role
                </span>
                <span className="text-base font-semibold text-slate-200">
                  {industryExposure.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {industryExposure.summary}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-2">
                Key Technical Takeaways &amp; Focus Areas
              </span>
              <div className="space-y-2.5">
                {industryExposure.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transparent footnote */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck size={13} className="text-blue-400" />
              <span>Accredited Technical Seminar Participation</span>
            </span>
            <span>Hyderabad // 2025</span>
          </div>
        </div>

      </div>
    </section>
  );
};
