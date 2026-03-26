import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Download, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="h-full w-full relative flex items-center justify-center p-4">
      {/* Centered Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-4xl p-6 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl flex flex-col items-center text-center relative"
      >
        {/* Hello Text */}
        <h3 className="text-sm md:text-lg font-bold text-cyan-400 mb-4 tracking-[0.3em] font-mono uppercase opacity-70">
          Hello, It's Me
        </h3>
        
        {/* Name - Reduced Size & Fully Visible */}
        <h1 className="text-[1.8rem] sm:text-[3rem] md:text-[4.2rem] font-black leading-tight mb-4 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Vishalya Devi M
          </span>
        </h1>

        {/* Role Text */}
        <h2 className="text-xl md:text-3xl font-bold text-white mb-8 tracking-wide">
          And I'm a <span className="text-cyan-400 italic">Full Stack Developer</span>
        </h2>

        {/* Quotes - Replaces Paragraph */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.8 }}
           transition={{ delay: 1 }}
           className="relative mb-12"
        >
            <Quote className="absolute -top-6 -left-8 text-cyan-500/20" size={40} />
            <p className="text-lg md:text-2xl font-medium text-slate-300 italic tracking-wide max-w-xl">
                "I don't just write code...<br className="hidden md:block" /> I create experiences."
            </p>
            <Quote className="absolute -bottom-6 -right-8 text-cyan-500/20 rotate-180" size={40} />
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
          {[
            { icon: <Facebook size={18} />, link: "#" },
            { icon: <Twitter size={18} />, link: "#" },
            { icon: <Instagram size={18} />, link: "#" },
            { icon: <Linkedin size={18} />, link: "#" },
            { icon: <Github size={18} />, link: "#" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              whileHover={{ scale: 1.2, color: "#22d3ee", borderColor: "#22d3ee", boxShadow: "0 0 15px rgba(34,211,238,0.5)" }}
              className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center text-cyan-400/80 transition-all duration-300 bg-white/5"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-10 py-3.5 bg-cyan-400 text-slate-900 font-black rounded-full shadow-lg transition-all duration-300 uppercase tracking-widest text-xs"
        >
          <Download size={18} />
          Download CV
        </motion.button>

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/10 rounded-tl-xl" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/10 rounded-br-xl" />
      </motion.div>
    </section>
  );
};

export default Home;