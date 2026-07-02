import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-obsidian-light py-12 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute left-1/2 bottom-0 w-[400px] h-[100px] rounded-full bg-primary-purple/5 blur-[80px] pointer-events-none transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
        
        {/* Logo and Nav links */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full border-b border-white/5 pb-8 gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-purple to-primary-blue flex items-center justify-center font-display text-sm font-bold text-white transition-transform group-hover:scale-105">
              IF
            </div>
            <span className="font-display font-bold text-lg text-white group-hover:text-primary-blue transition-colors">
              Ifrah Fatima
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-xs font-semibold text-slate-400 hover:text-white uppercase tracking-wider transition-colors capitalize"
              >
                {section}
              </a>
            ))}
          </nav>

          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Branding Signatures */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400 font-semibold font-display">
              Designed &amp; Developed by Ifrah Fatima.
            </p>
            <p className="text-xs text-slate-600 mt-1 font-sans">
              &copy; {currentYear} Ifrah Fatima. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ifrahfatima-72"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/ifrah-fatima-542647323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:ifrah.fatima.72.if@gmail.com"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
