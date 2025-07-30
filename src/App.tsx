import React, { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import WhatIHelp from './components/sections/WhatIHelp';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleSectionClick = (section: string) => {
    if (section === 'download') {
      // Create a download link for CV
      const link = document.createElement('a');
      link.href = '/vishalya_cv.pdf'; // This would be your actual CV file
      link.download = 'Vishalya_Devi_CV.pdf';
      link.click();
      return;
    }
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'help', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} />
      <main>
        <Home />
        <About />
        <WhatIHelp />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;