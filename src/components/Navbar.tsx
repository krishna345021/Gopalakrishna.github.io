import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 / About', href: '#about' },
    { label: '02 / Capabilities', href: '#capabilities' },
    { label: '03 / Work', href: '#work' },
    { label: '04 / Journey', href: '#journey' },
    { label: '05 / Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#080C15]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand identifier */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center space-x-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded border border-blue-500/40 bg-blue-950/30 flex items-center justify-center text-blue-400 font-mono text-xs font-semibold group-hover:border-blue-400 transition-colors">
              <Terminal size={14} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono tracking-widest text-sm font-bold text-slate-100 uppercase">
                {candidateProfile.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:block">
                CS • Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions on Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded border border-white/10 hover:border-white/25 transition-colors"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded transition-all shadow-sm hover:shadow-blue-500/20"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded border border-white/10 text-slate-300 hover:text-white hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-sm font-mono text-slate-300 hover:text-white hover:bg-white/5 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2 text-xs font-mono text-slate-300 border border-white/10 rounded hover:bg-white/5"
            >
              View / Download Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center space-x-1 py-2 text-xs font-mono uppercase bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
