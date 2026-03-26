import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ShieldCheck, Target, Sparkles, Brain } from 'lucide-react';

const Medal = ({ title, sub, icon, color, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 100, delay }}
            whileHover={{ y: -20, rotate: [0, -2, 2, 0] }}
            className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border-2 border-white/5 group relative overflow-hidden h-full text-center transition-all duration-500 hover:border-yellow-400/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
            <div className={`absolute -inset-20 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-40 blur-[60px] transition-opacity duration-700`} />
            
            <div className={`p-6 rounded-3xl bg-slate-950/80 border-2 border-white/10 mb-6 relative group-hover:shadow-[0_0_40px_rgba(255,191,0,0.2)] transition-all duration-500 ring-4 ring-transparent group-hover:ring-yellow-400/20 group-hover:scale-110`}>
                <div className="relative z-10 transition-transform duration-500">
                    {React.cloneElement(icon as React.ReactElement, { size: 56 })}
                </div>
                {/* Orbital Particle Animation */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-white/20 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </div>
            
            <div className="z-10">
                <h3 className="text-white font-black text-xs md:text-sm uppercase tracking-tighter mb-2 leading-tight group-hover:text-yellow-400 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    {title}
                </h3>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    <span className="text-[10px] text-yellow-500 font-black tracking-[0.3em] uppercase group-hover:text-white transition-colors">{sub}</span>
                </div>
            </div>

            {/* Rare Loot Shine */}
            <motion.div 
                initial={{ left: '-100%' }}
                whileHover={{ left: '200%' }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />
        </motion.div>
    );
};

const Achievements: React.FC = () => {
    const medals = [
        { 
            title: "Coding Contest & Relay (SRM)", 
            sub: "2ND PRIZE WINNER", 
            icon: <Trophy className="text-yellow-400" />, 
            color: "from-yellow-400/30 to-transparent", 
            delay: 0.1 
        },
        { 
            title: "Smart India Hackathon", 
            sub: "SHORTLISTED // INTERNAL", 
            icon: <ShieldCheck className="text-cyan-400" />, 
            color: "from-cyan-400/30 to-transparent", 
            delay: 0.2 
        },
        { 
            title: "Gen AI Hackathon", 
            sub: "SPECIAL PRIZE", 
            icon: <Sparkles className="text-purple-400" />, 
            color: "from-purple-400/30 to-transparent", 
            delay: 0.3 
        },
        { 
            title: "NEC Coding Contest", 
            sub: "2ND PRIZE WINNER", 
            icon: <MedalIcon className="text-orange-400" />, 
            color: "from-orange-400/30 to-transparent", 
            delay: 0.4 
        },
        { 
            title: "LeetCode Elite", 
            sub: "TOP 18% GLOBAL", 
            icon: <Target className="text-red-400" />, 
            color: "from-red-400/30 to-transparent", 
            delay: 0.5 
        }
    ];

    return (
        <section id="achievements" className="min-h-screen w-full relative overflow-hidden flex flex-col pt-8 md:pt-16">
            <div className="container mx-auto max-w-7xl px-8 h-full flex flex-col justify-center">
                
                {/* Level Header - Large and Glowing */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-[11px] font-mono tracking-[0.4em] md:tracking-[0.8em] uppercase mb-6 shadow-[0_0_20px_rgba(234,179,8,0.15)]"
                    >
                        Mastery_Readout // Level_07
                    </motion.div>
                    <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        Acquired <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Glory</span>
                    </h2>
                    <div className="flex items-center gap-6 mt-2">
                        <div className="flex items-center gap-2 text-[12px] font-mono text-slate-400 uppercase tracking-widest">
                            <Trophy size={14} className="text-yellow-400" /> Collection Rank: S-Tier
                        </div>
                        <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-ping" />
                        <div className="flex items-center gap-2 text-[12px] font-mono text-slate-400 uppercase tracking-widest">
                            <Brain size={14} className="text-cyan-400" /> Cognitive Sync: Max
                        </div>
                    </div>
                </div>

                {/* Medals Grid - 5 Items Balanced */}
                <div className="flex items-center justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 w-full max-w-6xl pb-20">
                        {medals.map((medal, idx) => (
                            <Medal key={medal.title} {...medal} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        </section>
    );
};

// Simple Fallback icon if MedalIcon not found
const MedalIcon = (props: any) => <Award {...props} />;

export default Achievements;
