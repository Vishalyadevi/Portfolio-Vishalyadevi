import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Play, Activity, Terminal, Database } from 'lucide-react';
import collegeImg from '../../assests/college_project.png';
import platpalImg from '../../assests/platpal_project.png';

interface Project {
  id: number;
  title: string;
  description: string;
  stacks: string[];
  github: string;
  demo: string;
  image: string;
  color: string;
  glowColor: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="perspective-1000 group h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        animate={{ 
          rotateX: -mousePos.y * 20,
          rotateY: mousePos.x * 20,
          scale: 1.01
        }}
        className="relative h-full bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden group shadow-2xl transition-all hover:border-cyan-400/50 flex flex-col pt-0"
      >
        {/* Compact Image Header */}
        <div className="relative h-32 sm:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-40`} />
          )}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-scan-y z-20" />
        </div>

        {/* Card Content - Compact */}
        <div className="p-5 flex flex-col flex-1 gap-3">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                <span className="text-[8px] font-mono text-cyan-400/50 tracking-[0.2em]">MISSION_00{project.id}</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight transition-colors group-hover:text-cyan-400">
            {project.title}
          </h3>

          <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.stacks.map(s => (
              <span key={s} className="px-1.5 py-0.5 bg-cyan-500/5 border border-cyan-500/10 rounded text-[8px] sm:text-[9px] md:text-[7px] font-mono text-cyan-400/70 tracking-tighter uppercase whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 pb-2">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-white hover:text-cyan-400"
            >
              <Github size={14} />
              <span className="text-[9px] sm:text-[10px] md:text-[7px] font-bold uppercase tracking-widest">Source</span>
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-cyan-500/10 border border-cyan-400/30 rounded-lg hover:bg-cyan-500/20 transition-all text-cyan-400 hover:text-white"
            >
              <Play size={14} />
              <span className="text-[9px] sm:text-[10px] md:text-[7px] font-bold uppercase tracking-widest">Execute</span>
            </a>
          </div>
        </div>

        <div className={`absolute -inset-1 bg-gradient-to-br ${project.glowColor} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity pointer-events-none`} />
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "College Record Management System",
      description: "Advanced multi-role system orchestrating academic logs, biometric-style attendance, and faculty mission control.",
      stacks: ["MERN", "JWT", "Socket.io"],
      github: "https://github.com/Vishalyadevi",
      demo: "#demo-1",
      image: collegeImg,
      color: "from-blue-600 to-cyan-500",
      glowColor: "from-cyan-500/50 to-blue-500/50"
    },
    {
      id: 2,
      title: "PlatPal - A Mood Based review system",
      description: "Holographic greenhouse monitoring system synchronizing human mood with plant vitality indicators via AI patterns.",
      stacks: ["Flask", "Python", "AI"],
      github: "https://github.com/Vishalyadevi",
      demo: "#demo-2",
      image: platpalImg,
      color: "from-green-600 to-emerald-500",
      glowColor: "from-emerald-500/50 to-green-500/50"
    },
    {
      id: 3,
      title: "Movie Review System",
      description: "Decentralized rating engine for high-fidelity film critiques, with real-time rating updates and social integration.",
      stacks: ["React", "MongoDB", "Auth0"],
      github: "https://github.com/Vishalyadevi",
      demo: "#demo-3",
      image: "",
      color: "from-purple-600 to-pink-500",
      glowColor: "from-pink-500/50 to-purple-500/50"
    }
  ];

  return (
    <section id="projects" className="h-full w-full relative flex items-center justify-center p-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center gap-8 py-8">
        
        {/* Header HUD - Compact */}
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2 leading-none">
            Active <span className="text-cyan-400 font-outline-2">Missions</span>
          </h2>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[8px] tracking-[0.2em] uppercase">
             <div className="flex items-center gap-1.5">
                <Activity size={10} className="text-green-500" />
                <span>Online</span>
             </div>
             <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                <Database size={10} />
                <span>Missions: 003</span>
             </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-h-[70vh]">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes scan-y {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-y { animation: scan-y 4s linear infinite; }
        .font-outline-2 {
          -webkit-text-stroke: 1px rgba(34, 211, 238, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Projects;