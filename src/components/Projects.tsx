import React from 'react';
import { selectedProjects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 border-b border-white/10 bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
              03 / SELECTED WORK
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
              Practical Projects &amp; Studies
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-slate-400 text-xs font-mono">
            // FOCUSED ON DATA LOGIC &amp; SYSTEMS.
            <br />
            Projects demonstrating data pipeline automation, DBMS query profiling, and interactive interfaces.
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
