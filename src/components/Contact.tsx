import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { Linkedin, Github, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-populate mailto link to facilitate immediate email dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName || 'Recruiter'}`);
    const body = encodeURIComponent(`From: ${formName} (${formEmail})\n\nMessage:\n${formMessage}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 bg-[#080C16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3">
            05 / CONTACT &amp; CONNECT
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>
          <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Interested in technology, data, and practical problem solving? Let's connect.
          </p>
          <p className="text-xs font-mono text-slate-500 mt-2">
            // {contactInfo.statusNote}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#0C1222] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${contactInfo.email}`}
                className="text-base sm:text-lg font-mono font-semibold text-white hover:text-blue-400 transition-colors block break-all"
              >
                {contactInfo.displayEmail}
              </a>

              <p className="text-xs text-slate-400">
                Preferred channel for project inquiries, technical opportunities, or conversation.
              </p>
            </div>

            {/* Social / Professional Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={contactInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-white/10 bg-[#0C1222] hover:border-blue-500/40 hover:bg-[#111A2E] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-blue-600/10 text-blue-400 group-hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    LinkedIn
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                    Connect professionally
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contactInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-white/10 bg-[#0C1222] hover:border-white/25 hover:bg-[#111A2E] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-white/5 text-slate-300 group-hover:text-white transition-colors">
                    <Github size={18} />
                  </div>
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    GitHub
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                    Repositories &amp; Code
                  </span>
                </div>
              </a>
            </div>

            {/* Credible note */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400">
              <span className="text-slate-300 font-semibold block mb-0.5">Contact Verification</span>
              All contact links and profiles can be modified anytime in <code className="text-blue-400">src/data/portfolioData.ts</code>.
            </div>
          </div>

          {/* Right Column: Quick Recruiter Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl border border-white/10 bg-[#0C1222]">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-white/5">
                <MessageSquare size={14} className="text-blue-400" />
                <span>Send a Direct Message</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C16] border border-white/10 text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Your Email / Organization
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C16] border border-white/10 text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Message or Project Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Krishna, we reviewed your projects and would like to discuss..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C16] border border-white/10 text-white placeholder-slate-600 text-xs font-sans focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md shadow-blue-600/20"
                  >
                    <span>Dispatch Email</span>
                    <Send size={13} />
                  </button>

                  {sentNotice && (
                    <span className="text-xs font-mono text-emerald-400 animate-fade-in flex items-center space-x-1">
                      <Check size={13} />
                      <span>Opening mail client...</span>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
