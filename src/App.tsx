import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { ProblemSolving } from './components/ProblemSolving';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Exposure } from './components/Exposure';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#080C16] text-[#E2E8F0] selection:bg-blue-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 01 / About & Philosophy */}
        <About />

        {/* 02 / Capabilities */}
        <Capabilities />

        {/* Analytical Problem Solving Methodology */}
        <ProblemSolving />

        {/* 03 / Selected Work & Projects */}
        <Projects />

        {/* 04 / Journey & Milestones */}
        <Journey />

        {/* Industry Exposure: Microsoft Experts Live India */}
        <Exposure />

        {/* Certification: Skill India Python */}
        <Certifications />

        {/* Education: B.Tech & Class XII */}
        <Education />

        {/* 05 / Contact & Connect */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download / Instruction Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
};

export default App;
