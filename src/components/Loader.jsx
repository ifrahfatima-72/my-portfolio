import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, 2800); // Loader displays for 2.8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={finishLoading}>
      {isMounted && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Subtle glowing radial background inside loader */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-purple/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-primary-blue/10 blur-[100px] pointer-events-none translate-x-20 -translate-y-20" />

          <div className="relative flex flex-col items-center justify-center">
            {/* SVG Logo Initials Animation */}
            <svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
            >
              {/* Outer Hexagon / Shield border */}
              <motion.polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="url(#shieldGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* The "I" character */}
              <motion.path
                d="M 38 30 L 38 70 M 32 30 L 44 30 M 32 70 L 44 70"
                stroke="url(#letterGrad1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />

              {/* The "F" character */}
              <motion.path
                d="M 56 30 L 56 70 M 56 30 L 68 30 M 56 48 L 64 48"
                stroke="url(#letterGrad2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />

              {/* Definitions for Premium Gradients */}
              <defs>
                <linearGradient id="shieldGrad" x1="10" y1="5" x2="90" y2="95">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="letterGrad1" x1="38" y1="30" x2="38" y2="70">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="letterGrad2" x1="56" y1="30" x2="68" y2="70">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Text Animation */}
            <motion.div
              className="mt-8 font-display text-lg tracking-[0.25em] text-slate-300 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              IFRAH FATIMA
            </motion.div>

            <motion.div
              className="mt-2 text-xs tracking-wider text-primary-blue/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Loading Portfolio...
            </motion.div>

            {/* Custom loader loading bar */}
            <div className="w-40 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-purple to-primary-blue"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
