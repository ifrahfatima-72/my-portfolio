import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Database, BrainCircuit, Wrench, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    name: 'Languages',
    icon: Code2,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C Programming', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ]
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'React.js', level: 80 },
      { name: 'Tkinter', level: 75 },
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: Database,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'Database Design', level: 80 },
    ]
  },
  {
    id: 'concepts',
    name: 'Concepts',
    icon: BrainCircuit,
    color: 'from-yellow-500 to-amber-500',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Object-Oriented Programming (OOP)', level: 85 },
      { name: 'Data Structures & Algorithms (DSA)', level: 80 },
      { name: 'Authentication & Authorization', level: 80 },
      { name: 'JSON Data Models', level: 90 },
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Hardware',
    icon: Wrench,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Canva', level: 80 },
      { name: 'MATLAB', level: 70 },
      { name: 'Multisim', level: 75 },
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-radial-gradient">
      {/* Decorative Blob */}
      <div className="absolute left-0 top-1/3 w-[300px] h-[300px] rounded-full bg-primary-purple/5 blur-[100px] pointer-events-none" />

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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Tab Buttons (Horizontal for Desktop, Grid for Mobile) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300 border ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-purple/15 to-primary-blue/15 border-primary-purple text-white shadow-md shadow-primary-purple/10' 
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-primary-purple' : 'text-slate-400'} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:scale-[1.02] hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display font-bold text-white tracking-wide text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:text-primary-blue group-hover:border-primary-blue/30 transition-all">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill level progress bar */}
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden mb-2 relative border border-white/5">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${activeCategory.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    Proficient
                  </span>
                  <ChevronRight size={10} className="text-slate-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
