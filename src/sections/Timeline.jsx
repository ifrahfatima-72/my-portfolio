import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Database, Rocket, Milestone } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Admitted to NED University',
    subtitle: 'B.E. Computer Systems Engineering',
    description: 'Enrolled in one of the most prestigious engineering institutions in Pakistan, establishing strong foundations in systems thinking, digital logic, and hardware-software architectures.',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    year: 'Early 2025',
    title: 'Algorithms & Systems Milestones',
    subtitle: 'C Programming & DSA Foundation',
    description: 'Built a Huffman & Run-Length Encoding File Compression System and a console task scheduler, mastering file operations and core computer science structures.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: 'Late 2025',
    title: 'Database Architecture & Management',
    subtitle: 'MySQL & Custom File-Based DBMS',
    description: 'Developed a custom Python DBMS utilizing JSON persistence and an Online Car Rental System with GUI authentication, focusing on relational design and security.',
    icon: Database,
    color: 'from-pink-500 to-rose-500'
  },
  {
    year: 'Mid 2026',
    title: 'Full-Stack Ventures & Scalability',
    subtitle: 'FastAPI, Django & React Deployments',
    description: 'Engineered and launched two key featured projects: the Ride-Sharing Platform (real-time booking with FastAPI) and the Django-based E-Commerce platform.',
    icon: Rocket,
    color: 'from-emerald-500 to-teal-500'
  },
  {
  year: '2026 – 2028',
  title: 'Advanced Systems & Architecture',
  subtitle: 'Scalable Backend Infrastructure',
  description: 'Deep-diving into microservices, high-performance database optimization, and concurrent systems while delivering production-grade code to commercial pipelines.',
  icon: Milestone,
  color: 'from-purple-500 to-indigo-500' // Shifted to premium purple/blue tokens matching your brand
}
];

const Timeline = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-radial-gradient">
      {/* Decorative Blob */}
      <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] rounded-full bg-primary-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2"
          >
            Journey & <span className="gradient-text">Milestones</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central line (hidden on small screens, absolute center on large screens) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-purple via-primary-blue to-accent-cyan opacity-20 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 md:gap-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot with Glowing Ring */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className={`w-9 h-9 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg shadow-black/40 ring-4 ring-obsidian`}
                    >
                      <Icon size={16} />
                    </motion.div>
                  </div>

                  {/* Spacer for structural balance on large screens */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Timeline Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mt-4 md:mt-0"
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border-white/5 hover:border-primary-purple/30">
                      {/* Floating Year Tag */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} mb-4`}>
                        {item.year}
                      </span>
                      
                      <h3 className="font-display text-xl font-bold text-white mb-1 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-primary-blue text-xs font-semibold uppercase tracking-wider mb-4">
                        {item.subtitle}
                      </p>

                      <p className="text-slate-400 font-sans text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
