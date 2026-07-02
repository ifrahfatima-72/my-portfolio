import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldAlert, CheckCircle2, Star } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const projectsData = [
  {
    id: 1,
    title: 'Ride-Sharing Platform',
    featured: true,
    category: 'fullstack',
    tech: ['FastAPI', 'React.js', 'MySQL', 'REST APIs'],
    description: 'A comprehensive ridesharing application enabling real-time booking and tracking, role-based controls, and dynamic pricing.',
    features: [
      'Role-based authentication for Drivers and Riders',
      'Real-time ride booking and live tracking',
      'Dynamic fare calculation with surge pricing based on demand',
      'Interactive maps and visual route display',
      'Scalable FastAPI RESTful API architecture'
    ],
    github: 'https://github.com/ifrahfatima-72',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    featured: true,
    category: 'fullstack',
    tech: ['Django', 'Python', 'MySQL', 'JavaScript', 'HTML/CSS'],
    description: 'A robust e-commerce site featuring a complete shopping cart system, administrative controls, and order tracking.',
    features: [
      'Product listings, rich categories, and search filters',
      'Shopping cart system with persistent storage',
      'Real-time order calculation & checkout',
      'Admin dashboard for stock and order management',
      'Persistent MySQL database storage'
    ],
    github: 'https://github.com/ifrahfatima-72',
  },
  {
    id: 3,
    title: 'Python-Based DBMS',
    featured: false,
    category: 'python',
    tech: ['Python', 'JSON', 'Data Management'],
    description: 'A file-based database management system implementing customized structured queries and persistence.',
    features: [
      'Full CRUD (Create, Read, Update, Delete) operations',
      'Advanced search algorithms and sorting functionality',
      'JSON-based structured file storage'
    ],
    github: 'https://github.com/ifrahfatima-72',
    demo: '#'
  },
  {
    id: 4,
    title: 'Online Car Rental System',
    featured: false,
    category: 'python',
    tech: ['Python', 'JSON', 'Tkinter GUI'],
    description: 'A graphic interface reservation system tracking car availability, rentals, and user ratings.',
    features: [
      'Admin and User authentication workflows',
      'Car availability tracking and fleet management',
      'Calculations for rental costs and durations',
      'User feedback system and booking history logs'
    ],
    github: 'https://github.com/ifrahfatima-72',
  },
  {
    id: 5,
    title: 'File Compression System',
    featured: false,
    category: 'dsa',
    tech: ['Python', 'DSA', 'Algorithms'],
    description: 'An algorithmic compression tool utilizing data structures to compress and decompress data.',
    features: [
      'Run-Length Encoding (RLE) mechanism',
      'Huffman Coding compression with frequency maps',
      'Tree structures for encoding and decoding binary trees'
    ],
    github: 'https://github.com/ifrahfatima-72',

  },
  {
    id: 6,
    title: 'Daily Task Reminder',
    featured: false,
    category: 'systems',
    tech: ['C Programming', 'File Systems'],
    description: 'A console-based scheduler with filesystem persistence for daily tasks.',
    features: [
      'Console-based task manager CLI',
      'File handling (fopen/fwrite) for direct data persistence'
    ],
    github: 'https://github.com/ifrahfatima-72',
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [demoToast, setDemoToast] = useState(null);

  const handleDemoClick = (projectTitle, e) => {
    e.preventDefault();
    setDemoToast(`Demo for "${projectTitle}" is currently in staging. Contact Ifrah Fatima to view!`);
    setTimeout(() => setDemoToast(null), 4000);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.category === 'fullstack';
    if (filter === 'python') return project.category === 'python' || project.category === 'fullstack';
    if (filter === 'dsa') return project.category === 'dsa' || project.category === 'systems';
    return false;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-primary-blue/5 blur-[100px] pointer-events-none" />

      {/* Demo Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
        <AnimatePresence>
          {demoToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="glass-card p-4 rounded-xl flex items-center gap-3 max-w-sm pointer-events-auto border-primary-purple/40 text-slate-200 shadow-xl"
            >
              <ShieldAlert className="text-primary-purple shrink-0 animate-bounce" size={20} />
              <p className="text-xs font-medium font-sans leading-relaxed">{demoToast}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'fullstack', 'python', 'dsa'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-display text-sm font-semibold border transition-all duration-300 capitalize ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary-purple/15 to-primary-blue/15 border-primary-purple text-white'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10'
              }`}
            >
              {cat === 'dsa' ? 'Algorithms & Systems' : cat === 'fullstack' ? 'Full-Stack' : cat === 'python' ? 'Python Core' : 'All Projects'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`glass-card p-8 rounded-2xl flex flex-col justify-between group hover:border-primary-purple/40 hover:-translate-y-1 ${
                  project.featured 
                    ? 'lg:col-span-3 border-primary-blue/20 relative shadow-[0_4px_30px_rgba(59,130,246,0.05)]' 
                    : 'lg:col-span-2'
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-white bg-primary-blue/25 border border-primary-blue/30 backdrop-blur-md">
                    <Star size={10} className="fill-white" />
                    FEATURED PROJECT
                  </div>
                )}

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[10px] font-bold font-sans tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary-blue transition-colors mb-3 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features Header */}
                  <div className="border-t border-white/5 pt-4 mb-6">
                    <h4 className="text-xs font-semibold tracking-wider text-slate-300 uppercase mb-3">
                      Key Features:
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 size={14} className="text-primary-purple shrink-0 mt-0.5" />
                          <span className="font-sans leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 border-t border-white/5 pt-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 py-3 rounded-xl bg-primary-purple/10 border border-primary-purple/30 text-center text-xs font-semibold text-purple-400 hover:bg-primary-purple hover:text-white hover:border-primary-purple transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-primary-purple/5"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>

                  
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
