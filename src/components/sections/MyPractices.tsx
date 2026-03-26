import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Activity, ExternalLink, Zap } from 'lucide-react';

interface MiniProject {
    title: string;
    tech: string[];
    image: string;
    demo: string;
    color: string;
}

const miniProjects: MiniProject[] = [
    {
      title: 'Portfolio',
      tech: ['React', 'Framer'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&q=80',
      demo: 'https://vishalyadevi.github.io/Portfolio-Vishalyadevi/',
      color: '#06b6d4'
    },
    {
      title: 'Cooksy',
      tech: ['React', 'API'],
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=300&q=80',
      demo: 'https://cooksy-demo.netlify.app',
      color: '#f43f5e'
    },
    {
      title: 'Weather',
      tech: ['JS', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=300&q=80',
      demo: 'https://vishalyadevi.github.io/Weather-app/',
      color: '#3b82f6'
    },
    {
      title: 'KeyShelf',
      tech: ['JS', 'DOM'],
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&q=80',
      demo: 'https://vishalyadevi.github.io/Keyshelf/',
      color: '#a855f7'
    },
    {
      title: 'Timer',
      tech: ['JS', 'CSS'],
      image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=300&q=80',
      demo: 'https://vishalyadevi.github.io/Stop-Watch/',
      color: '#fbbf24'
    },
    {
      title: 'E-com',
      tech: ['JS', 'HTML'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&q=80',
      demo: 'https://vishalyadevi.github.io/e-commerce-website-Mastro/',
      color: '#10b981'
    },
];

const EliteStat = ({ label, value, sub, icon, color, delay }: any) => {
    const [count, setCount] = useState(0);
    const target = typeof value === 'number' ? value : parseInt(value);

    useEffect(() => {
        let curr = 0;
        const duration = 2000;
        const interval = 25;
        const step = target / (duration / interval);
        const timer = setInterval(() => {
            curr += step;
            if (curr >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(curr));
            }
        }, interval);
        return () => clearInterval(timer);
    }, [target]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="relative flex items-center gap-8 p-6 rounded-2xl bg-slate-900/40 border border-white/5 group hover:border-cyan-400/40 transition-all shadow-2xl backdrop-blur-3xl overflow-hidden min-h-[120px]"
        >
            <div className={`p-4 rounded-xl bg-slate-950/60 border border-white/5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                {React.cloneElement(icon, { className: color, size: 28 })}
            </div>

            <div className="flex flex-col z-10">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mb-1 font-bold">{label}</span>
                <div className="flex items-baseline gap-3">
                    <span className={`text-5xl md:text-6xl font-black ${color} tracking-tighter drop-shadow-[0_0_20px_white/20] filter brightness-125`}>
                        {count.toLocaleString()}{typeof value === 'string' && value.includes('%') ? '%' : ''}
                    </span>
                    <span className="text-white font-mono text-xs uppercase tracking-[0.2em] opacity-40">{sub}</span>
                </div>
            </div>

            <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-10 group-hover:opacity-60 transition-opacity`} style={{ borderColor: 'white' }} />
        </motion.div>
    );
};

const MyPractices: React.FC = () => {
    return (
        <section id="practices" className="min-h-screen w-full relative overflow-hidden flex flex-col pt-4 md:pt-8">
            
            <div className="container mx-auto max-w-7xl px-4 sm:px-8 flex flex-col pt-4 pb-20">
                
                {/* Unified Headers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 mb-10">
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-cyan-400 font-mono text-[9px] tracking-[0.5em] uppercase mb-1 flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> Core_Intelligence
                        </motion.div>
                        <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                            Code <span className="text-cyan-500">Elite</span>
                        </h2>
                    </div>

                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-400 font-mono text-[9px] tracking-[0.5em] uppercase mb-1 flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" /> Asset_Archives
                        </motion.div>
                        <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                            Project <span className="text-indigo-500">Orbits</span>
                        </h2>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    
                    {/* LOGIC HUB */}
                    <div className="space-y-4">
                        <EliteStat 
                            label="LEETCODE NODES" 
                            value="400" 
                            sub="Solved" 
                            icon={<Code />} 
                            color="text-yellow-400" 
                            delay={0.1} 
                        />
                        <EliteStat 
                            label="LEETCODE TIER" 
                            value="18" 
                            sub="Top %" 
                            icon={<Trophy />} 
                            color="text-cyan-400" 
                            delay={0.2} 
                        />
                        <EliteStat 
                            label="SKILLRACK NODES" 
                            value="1600" 
                            sub="Solved" 
                            icon={<Activity />} 
                            color="text-purple-500" 
                            delay={0.3} 
                        />
                        
                        {/* System readout message footer */}
                        <div className="p-4 bg-slate-950/40 border border-white/5 rounded-xl flex items-center gap-3">
                            <Zap className="text-cyan-500 animate-pulse" size={14} />
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">Status: Data Synchronized. S-Class Rank Confirmed.</span>
                        </div>
                    </div>

                    {/* BUILD UNIVERSE */}
                    <div className="relative w-full h-full pb-20">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                            {miniProjects.map((proj, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + (idx * 0.05) }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <motion.a
                                        href={proj.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, rotate: 3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full group cursor-pointer"
                                    >
                                        <div 
                                            className="absolute -inset-1 rounded-full border border-white/10 group-hover:border-white/40 transition-all duration-300 group-hover:animate-spin-slow" 
                                            style={{ borderColor: proj.color }}
                                        />
                                        <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl">
                                            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                        <div className="absolute top-0 right-0 p-1.5 bg-blue-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ExternalLink size={10} className="text-white" />
                                        </div>
                                    </motion.a>

                                    <div className="text-center">
                                        <h4 className="text-white font-black text-[10px] md:text-sm uppercase tracking-tighter mb-0.5 group-hover:text-blue-400 transition-colors uppercase">{proj.title}</h4>
                                        <div className="flex gap-1 justify-center opacity-40">
                                            <span className="text-[7px] font-mono text-slate-400 uppercase">{proj.tech[0]} // {proj.tech[1]}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default MyPractices;
