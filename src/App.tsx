import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameBackground from './components/game/GameBackground';
import './App.css';

// Lazy load sections for better initial performance
const Home = lazy(() => import('./components/sections/Home'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const MyPractices = lazy(() => import('./components/sections/MyPractices'));
const AITools = lazy(() => import('./components/sections/AITools'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const WhatIHelp = lazy(() => import('./components/sections/WhatIHelp'));
const ContactTerminal = lazy(() => import('./components/sections/ContactTerminal'));

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || target.closest('.hover-trigger')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouch();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('touchstart', checkTouch);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('touchstart', checkTouch);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        animate={{
          x: mousePos.x - 14,
          y: mousePos.y - 14,
          scale: isHovering ? 1.3 : 1,
          rotate: isHovering ? 10 : 0
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
      >
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform -rotate-15"
        >
            <path 
                d="M12 2L3 21L4 22L12 18L20 22L21 21L12 2Z" 
                fill="#10b981" 
                fillOpacity="0.3" 
                className="filter blur-[1px]"
            />
            <path 
                d="M12 3L5 19L12 16.5L19 19L12 3Z" 
                fill="#059669" 
                stroke="#d1fae5" 
                strokeWidth="1.2" 
            />
            <path 
                d="M12 5.5L10 16.5L12 15L14 16.5L12 5.5Z" 
                fill="white" 
                fillOpacity="0.8"
                className="mix-blend-overlay"
            />
        </svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-emerald-300 rounded-full pointer-events-none z-[9999] opacity-30"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.2 }}
      />
    </>
  );
};

import { Terminal, Target, Award, Brain, ExternalLink, Code2, Layers, Monitor, Binary, CpuIcon, Menu, X } from 'lucide-react';

const Navigation = ({ level, setLevel }: { level: number; setLevel: (l: number) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, icon: <Monitor size={22} />, label: 'HOME' },
    { id: 2, icon: <CpuIcon size={22} />, label: 'ABOUT' },
    { id: 3, icon: <Target size={22} />, label: 'PROJECTS' },
    { id: 4, icon: <Binary size={22} />, label: 'SKILLS' },
    { id: 5, icon: <Layers size={22} />, label: 'MY PRACTICES' },
    { id: 6, icon: <Brain size={22} />, label: 'AI TOOLS' },
    { id: 7, icon: <Award size={22} />, label: 'AWARDS' },
    { id: 8, icon: <ExternalLink size={22} />, label: 'UPGRADES' },
    { id: 9, icon: <Code2 size={22} />, label: 'WHAT I HELP' },
    { id: 10, icon: <Terminal size={22} />, label: 'CONTACT' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setLevel(item.id)}
            className={`flex items-center gap-4 group transition-all duration-300 ${level === item.id ? 'translate-x--2' : 'hover:translate-x--1'}`}
          >
            <span className={`text-[11px] font-black tracking-widest transition-all duration-300 uppercase opacity-0 group-hover:opacity-100 ${level === item.id ? 'text-emerald-400' : 'text-slate-400'}`}>
              {item.label}
            </span>
            <div className={`p-3 rounded-xl border-2 transition-all duration-300 shadow-xl ${
                level === item.id 
                ? 'border-emerald-400 bg-emerald-400/20 text-emerald-400 scale-110 shadow-[0_0_25px_rgba(16,185,129,0.6)]' 
                : 'border-slate-800 bg-slate-950/80 text-slate-500 hover:border-emerald-500/50 hover:text-emerald-500'}`}
            >
                {item.icon}
            </div>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-8 right-6 z-[200] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-slate-900/80 border border-emerald-500/30 rounded-full text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[190] md:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center p-8 overflow-y-auto custom-mobile-menu-scroll"
          >
            <motion.div 
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-sm pt-4"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: -50, scale: 0.8 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 200 } }
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setLevel(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex flex-col items-center justify-center aspect-square rounded-full border-2 transition-all duration-300 relative group p-4 ${
                    level === item.id 
                    ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]' 
                    : 'border-white/5 bg-white/5 text-slate-400 hover:border-emerald-500/30'
                  }`}
                >
                  {/* Decorative Outer Ring for Active */}
                  {level === item.id && (
                    <motion.div 
                      layoutId="activeCircle"
                      className="absolute -inset-2 rounded-full border border-emerald-400/30 animate-pulse pointer-events-none" 
                    />
                  )}
                  
                  <div className={level === item.id ? 'scale-110 mb-1' : 'mb-1 opacity-70 group-hover:opacity-100 transition-opacity'}>
                    {item.icon}
                  </div>
                  <span className="text-[8px] font-black tracking-[0.2em] font-mono uppercase text-center leading-none">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-16 flex flex-col items-center gap-4"
            >
              <div className="text-[9px] font-mono text-emerald-500/50 tracking-[0.5em] uppercase font-bold">
                MISSION CONTROL // MOBILE HUD
              </div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LevelProgress = ({ level }: { level: number }) => {
  const progress = (level / 10) * 100;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[140px] sm:w-64 md:w-96">
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase">LEVEL {level} // EXPLORER</span>
        <span className="text-[10px] font-mono text-slate-500 tracking-[0.1em]">{Math.round(progress)}% COMPLETE</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [isSystemLoaded, setIsSystemLoaded] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('touchstart', checkTouch);
    return () => window.removeEventListener('touchstart', checkTouch);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isSystemLoaded && !isGameStarted) {
        setIsGameStarted(true);
      }

      if (isGameStarted) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          setLevel(prev => Math.min(prev + 1, 10));
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          setLevel(prev => Math.max(prev - 1, 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSystemLoaded, isGameStarted]);

  if (!isSystemLoaded) {
    return <InitialLoader onComplete={() => setIsSystemLoaded(true)} />;
  }

  return (
    <div className={`relative bg-[#0f172a] min-h-screen selection:bg-cyan-500/30 overflow-hidden text-emerald-500 ${!isTouch ? 'cursor-none' : ''}`}>
      <CustomCursor />
      <GameBackground level={isGameStarted ? level : 1} />

      {!isGameStarted ? (
        <div className="fixed inset-0 z-[1500] flex flex-col items-center justify-center p-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-sm" />
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase mb-4 opacity-50">Authorized Personnel Only</div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 [text-shadow:0_0_30px_rgba(255,255,255,0.2)]">
                VISHALYA<span className="text-cyan-400">.DEVI</span>
              </h1>
              <p className="text-slate-400 font-mono text-sm tracking-[0.2em]">BOOTING MISSION INTERFACE [V3.0.1]</p>
            </motion.div>

            <motion.button
              onClick={() => setIsGameStarted(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,243,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-4 bg-cyan-400 text-slate-900 rounded-full font-bold uppercase tracking-[0.3em] overflow-hidden relative"
            >
              <span className="relative z-10">{isTouch ? 'Tap to Start' : 'Press ENTER to Start'}</span>
              <motion.div
                className="absolute inset-0 bg-white/20 translate-x-[-100%]"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12 text-[10px] font-mono text-slate-500 tracking-[0.1em]"
            >
              {isTouch ? 'USE THE MOBILE MENU TO NAVIGATE' : '[W][S] OR ARROWS TO NAVIGATE MISSIONS'}
            </motion.div>
          </div>
        </div>
      ) : (
        <>
          <LevelProgress level={level} />
          <Navigation level={level} setLevel={setLevel} />

          <main className="relative z-10 w-full h-screen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={level}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex flex-col items-center justify-center p-6 pt-16 sm:pt-20 md:p-12 md:pt-24 lg:pt-28"
              >
                <Suspense fallback={<SectionPlaceholder />}>
                  <div className="w-full max-w-7xl mx-auto h-full overflow-y-auto md:overflow-hidden custom-glass-scroll">
                    {level === 1 && <Home />}
                    {level === 2 && <About />}
                    {level === 3 && <Projects />}
                    {level === 4 && <Skills />}
                    {level === 5 && <MyPractices />}
                    {level === 6 && <AITools />}
                    {level === 7 && <Achievements />}
                    {level === 8 && <Certifications />}
                    {level === 9 && <WhatIHelp />}
                    {level === 10 && <ContactTerminal />}
                  </div>
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </main>
        </>
      )}

      {/* Level HUD Footer */}
      <div className="fixed bottom-6 left-6 z-[100] hidden lg:block">
        <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-slate-500 uppercase">

          <div className="p-2 border border-slate-700 bg-slate-900 shadow-lg text-cyan-400">
            SYSTEM_STATUS: ONLINE
          </div>
          <div className="p-2 border border-slate-700 bg-slate-900 shadow-lg overflow-hidden w-24">
            <motion.div
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1 w-2 bg-cyan-400"
            />
          </div>
        </div>
      </div>

      <footer className="fixed bottom-6 right-6 z-[100] hidden lg:block text-slate-500 text-[10px] font-mono tracking-[0.2em] uppercase origin-right rotate-[-90deg] translate-x-[50%] translate-y-[-50%] pointer-events-none">
        MISSION CONTROL // VISHALYA DEVI M // v2.0.4
      </footer>
    </div>
  );
};

const InitialLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(old => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return old + Math.random() * 10;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0f172a] flex flex-col items-center justify-center z-[2000] font-mono">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-64"
      >
        <div className="mb-4 flex justify-between text-cyan-400 text-xs tracking-widest uppercase">
          <span>Loading Assets...</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-8 text-slate-500 text-[10px] leading-relaxed">
          [SYS] OS: ANTIGRAVITY-CORE V4.7<br />
          [SYS] MEMORY: 64.0 TB<br />
          [SYS] CORE: QUANTUM-S3<br />
          [SYS] LOADING GEOMETRY...
        </div>
      </motion.div>
    </div>
  );
};

const SectionPlaceholder = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <div className="animate-pulse text-cyan-400/50 uppercase tracking-[0.5em] text-sm">
      Loading Level Assets...
    </div>
  </div>
);

export default App;