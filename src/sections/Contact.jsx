import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-radial-gradient">
      {/* Decorative Blur Blob */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/4 w-[300px] h-[300px] rounded-full bg-primary-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
          />
        </div>

        {/* Introduction Text */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Let's discuss your project
          </h3>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            I am actively seeking software development internship opportunities. If you have a question, want to collaborate, or just want to say hi, feel free to reach out directly through any of the platforms below!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          
          {/* Email Card */}
          <a
            href="mailto:ifrahfatima72@gmail.com"
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 border-white/5 hover:border-primary-blue/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center text-primary-blue shrink-0">
              <Mail size={20} />
            </div>
            <div className="w-full">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                Email Address
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">
                ifrahfatima72@gmail.com
              </div>
            </div>
          </a>

          {/* GitHub Link Card */}
          <a
            href="https://github.com/ifrahfatima-72"
            target="_blank"
            rel="noreferrer"
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 border-white/5 hover:border-primary-purple/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/20 flex items-center justify-center text-primary-purple shrink-0">
              <GithubIcon size={20} />
            </div>
            <div className="w-full">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                GitHub Profile
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">
                github.com/ifrahfatima-72
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/ifrah-fatima-542647323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 border-white/5 hover:border-accent-cyan/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
              <LinkedinIcon size={20} />
            </div>
            <div className="w-full">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                LinkedIn Connection
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">
                linkedin.com/in/ifrahfatima
              </div>
            </div>
          </a>
        </div>

        <div className="text-xs text-slate-500 font-sans mt-12">
          Response time: Usually within 24 hours.
        </div>

      </div>
    </section>
  );
};

export default Contact;