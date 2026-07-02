import React, { useState } from 'react';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. Custom SVG Initials Preloader */}
      <Loader finishLoading={() => setIsLoading(false)} />
      
      {/* 2. Main Portfolio Layout */}
      {!isLoading && (
        <div className="relative min-h-screen text-slate-300 bg-obsidian selection:bg-primary-purple/35 selection:text-white">
          
          {/* Interactive HTML5 Canvas Particles */}
          <ParticleBackground />

          {/* Navigation Bar */}
          <Navbar />

          {/* Full-bleed responsive sections wrapper */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Achievements />
            <Contact />
          </main>

          {/* Footer Signature */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
