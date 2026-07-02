import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for header background, scroll progress, and active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Header background shadow/blur toggle
      setScrolled(window.scrollY > 20);

      // 2. Scroll progress indicator calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 3. Highlight active nav link on scroll
      const sections = navItems.map(item => document.getElementById(item.href.replace('#', '')));
      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is close to the top of the viewport
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-header py-3 shadow-lg shadow-black/10' : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-800/40">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-purple via-primary-blue to-accent-cyan"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary-purple to-primary-blue flex items-center justify-center font-display text-lg font-bold text-white shadow-md shadow-primary-purple/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary-blue/30">
            IF
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary-blue transition-colors">
            Ifrah Fatima
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-medium text-sm transition-all py-1.5 px-1 hover:text-white ${
                activeSection === item.href.replace('#', '') ? 'text-white' : 'text-slate-400'
              }`}
            >
              {item.name}
              {activeSection === item.href.replace('#', '') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-purple to-primary-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative px-5 py-2 rounded-full font-display text-sm font-semibold text-white overflow-hidden group flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue transition-all duration-300 group-hover:opacity-90" />
            <span className="absolute inset-[1px] bg-obsidian rounded-full transition-all duration-300 group-hover:opacity-0" />
            <span className="relative z-10 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:text-white">
              Let's Connect
            </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-obsidian/95 border-b border-white/5 backdrop-blur-xl"
          >
            <div className="px-6 pt-2 pb-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-base font-semibold border-b border-white/5 transition-all ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-purple translate-x-1'
                      : 'text-slate-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 mt-2 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue text-sm font-semibold text-white shadow-md shadow-primary-purple/10"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
