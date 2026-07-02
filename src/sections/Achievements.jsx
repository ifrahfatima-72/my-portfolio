import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BrainCircuit, Star, ShieldCheck, Zap } from 'lucide-react';
import Counter from '../components/Counter';

const achievementsData = [
  {
    icon: Code,
    title: 'Full-Stack Mastery',
    highlight: 'Built multiple full-stack applications independently.',
    description: 'Designed and deployed projects spanning ridesharing, e-commerce, and file management. Built complete frontends in React and backends in Django/FastAPI from scratch.',
    statValue: 6,
    statSuffix: '+ Projects',
    color: 'text-purple-400 border-purple-500/20 shadow-purple-500/5'
  },
  {
    icon: Database,
    title: 'API & Database Engineering',
    highlight: 'Experience with backend APIs and database design.',
    description: 'Proficient in modeling relational SQL schemas, optimizing query pathways, and building secure REST APIs with token authentications and dynamic fare calculators.',
    statValue: 20,
    statSuffix: '+ REST Endpoints',
    color: 'text-blue-400 border-blue-500/20 shadow-blue-500/5'
  },
  {
    icon: BrainCircuit,
    title: 'DSA & Software Principles',
    highlight: 'Strong foundation in DSA and engineering principles.',
    description: 'Applied tree representations, Huffman encoders, and complexity reductions to engineering problems. Solid command of Object-Oriented Design (OOP) and code separation.',
    statValue: 150,
    statSuffix: '+ Algorithms Solved',
    color: 'text-cyan-400 border-cyan-500/20 shadow-cyan-500/5'
  }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

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
            Core <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievementsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`glass-card p-8 rounded-2xl border flex flex-col justify-between group hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg ${item.color}`}
              >
                <div>
                  {/* Top Header Icon & Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-gradient-to-tr group-hover:from-primary-purple group-hover:to-primary-blue transition-all duration-500">
                      <Icon size={24} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-extrabold text-white">
                        <Counter target={item.statValue} duration={2000} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                        {item.statSuffix}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Summary Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-purple bg-primary-purple/10 border border-primary-purple/20 mb-4">
                    <Zap size={12} className="fill-primary-purple" />
                    Key Highlight
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary-blue transition-colors">
                    {item.title}
                  </h3>

                  {/* Text Highlight */}
                  <p className="text-slate-200 text-sm font-semibold mb-3 leading-normal font-sans">
                    {item.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 font-sans text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-white/5 pt-5 mt-6 text-slate-500 group-hover:text-primary-blue transition-colors text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck size={14} className="shrink-0" />
                  Verified Engineering Skill
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
