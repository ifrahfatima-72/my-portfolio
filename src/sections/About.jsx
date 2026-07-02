import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Target, Award, Code2 } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute right-0 top-1/2 w-[300px] h-[300px] rounded-full bg-primary-blue/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Column: Bio & Objectives */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-purple to-primary-blue" />
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Code2 className="text-primary-purple" size={24} />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed font-sans text-base sm:text-lg">
                I am a Computer Systems Engineering student at NED University of Engineering & Technology with hands-on experience in building full-stack web applications using FastAPI, React.js, Django, and MySQL. 
              </p>
              <p className="text-slate-300 leading-relaxed font-sans text-base sm:text-lg mt-4">
                I am passionate about backend development, API design, database architectures, and systems optimization. I love bridging the gap between high-level application logic and low-level system design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-blue to-accent-cyan" />
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="text-primary-blue" size={24} />
                Career Objective
              </h3>
              <p className="text-slate-300 leading-relaxed font-sans text-base">
  I design and build high-performance web applications and robust digital logic systems. Blending full-stack expertise with strong systems fundamentals, I focus on engineering clean code, optimizing database performance, and creating seamless user experiences from the server to the interface.
</p>
            </motion.div>
          </div>

          {/* Right Column: Education details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <motion.div 
              variants={itemVariants} 
              className="glass-card p-8 rounded-2xl relative overflow-hidden hover:border-primary-purple/40"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-purple/10 rounded-bl-full flex items-center justify-center pl-6 pb-6">
                <GraduationCap className="text-primary-purple" size={32} />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Education
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary-purple bg-primary-purple/10 border border-primary-purple/20 mb-3">
                    Undergraduate Degree
                  </div>
                  <h4 className="font-display text-lg font-bold text-white leading-tight">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-slate-400 text-sm mt-1 font-medium">
                    Computer Systems Engineering
                  </p>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <MapPin className="text-primary-blue shrink-0" size={18} />
                    <span>NED University of Engineering & Technology</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Calendar className="text-accent-cyan shrink-0" size={18} />
                    <span>2024 – 2028 (Expected)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats banner */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="font-display text-3xl font-extrabold text-white mb-1">
                  10+
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                  Tech Skills
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <div className="font-display text-3xl font-extrabold text-white mb-1">
                  6+
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                  Projects Built
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
