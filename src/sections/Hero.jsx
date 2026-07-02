import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    "Full-Stack Developer",
    "Backend Enthusiast",
    "Computer Systems Engineering Student",
    "API Designer & Optimizer"
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    // Word completely typed
    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } 
    // Word completely deleted
    else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-radial-gradient bg-grid-pattern"
    >
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-purple/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary-blue/10 blur-[120px] pointer-events-none animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-purple/20 bg-primary-purple/5 text-xs text-primary-purple font-medium w-fit mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-purple animate-ping" />
            Ready to build, optimize, and scale
          </motion.div>

          {/* Hero Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Hi, I'm <span className="gradient-text">Ifrah Fatima</span>
          </motion.h1>

          {/* Subtitle with Typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl font-bold text-slate-300 min-h-[40px] flex items-center mb-6"
          >
            <span className="typing-cursor">{typedText}</span>
          </motion.div>

          {/* Tagline Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            Building scalable web applications, designing efficient database architectures, and solving complex problems through robust software engineering.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* View Projects Button */}
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue text-sm font-semibold text-white shadow-lg shadow-primary-purple/20 hover:shadow-primary-blue/30 transition-all duration-300 flex items-center gap-2 group hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
            >
              Contact Me
              <Mail size={16} />
            </a>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/ifrahfatima-72"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 flex items-center justify-center hover:scale-[1.02]"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>

            {/* Download Resume Button */}
            <a
              href="/my_resume.pdf"
              download
              className="px-5 py-3.5 rounded-xl border border-primary-blue/30 bg-primary-blue/5 text-primary-blue hover:bg-primary-blue/15 hover:border-primary-blue/45 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] font-semibold text-sm"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Decorative Visual Column */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center h-[450px]">
          {/* Animated Glow Shield Logo Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-80 h-80 rounded-full bg-gradient-to-tr from-primary-purple to-primary-blue p-[2px] shadow-2xl shadow-primary-purple/20 hover-glow float-element"
          >
            <div className="w-full h-full bg-obsidian-light rounded-full flex flex-col justify-center items-center relative overflow-hidden">
              {/* Internal glowing abstract graphic */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-primary-blue/10 blur-[40px] pointer-events-none" />
              
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none" className="z-10 opacity-80">
                {/* Tech node connections */}
                <motion.line x1="50" y1="50" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4" 
                  initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -20 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                <motion.line x1="150" y1="50" x2="100" y2="100" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4"
                  initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: 20 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                <motion.line x1="100" y1="100" x2="100" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"
                  initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -20 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

                {/* Floating Tech Circles */}
                <circle cx="50" cy="50" r="14" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
                <text x="50" y="54" fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle">API</text>

                <circle cx="150" cy="50" r="14" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                <text x="150" y="54" fill="#60a5fa" fontSize="9" fontWeight="bold" textAnchor="middle">DB</text>

                <circle cx="100" cy="160" r="14" fill="#062f3f" stroke="#06b6d4" strokeWidth="2" />
                <text x="100" y="164" fill="#22d3ee" fontSize="10" fontWeight="bold" textAnchor="middle">UI</text>

                <circle cx="100" cy="100" r="22" fill="#030014" stroke="url(#circleGrad)" strokeWidth="3" />
                <text x="100" y="104" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">&lt;/&gt;</text>

                <defs>
                  <linearGradient id="circleGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
