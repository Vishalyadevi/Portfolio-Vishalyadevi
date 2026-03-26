import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Target, Shield, Laptop, Code2, Database } from 'lucide-react';
import avatarImg from '../../assests/dev_avatar_headshot.png';

const About: React.FC = () => {
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
        <section id="about" className="h-full w-full relative flex items-center justify-center p-6 md:p-12 overflow-hidden bg-transparent">
            <div className="container mx-auto max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10 py-12">
                
                {/* LEFT SIDE: THE AVATAR (3D TILT EFFECT) */}
                <motion.div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group perspective-1000"
                >
                    {/* Glowing Backdrop */}
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[60px]" />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] border-2 border-dashed border-cyan-400/30 rounded-full"
                    />

                    {/* Circular Avatar Container */}
                    <motion.div 
                        animate={{ 
                            rotateY: mousePos.x * 25,
                            rotateX: -mousePos.y * 25,
                            scale: 1.02
                        }}
                        className="relative w-full h-full z-10 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_40px_rgba(0,243,255,0.4)] bg-slate-900 transition-transform duration-200 ease-out"
                    >
                        <img 
                            src={avatarImg} 
                            alt="Full Stack Developer Avatar" 
                            className="w-full h-full object-cover brightness-105 contrast-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-80" />
                    </motion.div>

                    {/* HUD Shield Overlay */}
                    <div className="absolute -top-4 -right-4 p-3 bg-cyan-500 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.5)] z-20">
                        <Shield size={24} className="text-[#0f172a]" />
                    </div>
                </motion.div>

                {/* RIGHT SIDE: THE INTEL (CRISPY CONTENT) */}
                <div className="flex-1 text-left flex flex-col items-start gap-5 max-w-2xl px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
                            <Cpu size={14} className="animate-pulse" />
                            Dossier_ID: FULL_STACK_ENGINEER
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter mb-6 uppercase">
                            About <span className="text-cyan-400">Me</span>
                        </h2>

                        {/* Crispy Paragraph About */}
                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-8 max-w-xl opacity-90 first-letter:text-4xl first-letter:text-cyan-400 first-letter:font-black">
                            I turn coffee into code and complex architectural challenges into elegant digital realities. 
                            Specializing in the MERN stack, I forge seamless frontends and robust backends that don't 
                            just work—they excel. My mission is building high-impact legacies through clean, 
                            scalable, and immersive technology.
                        </p>

                        {/* BOSS FIGHT QUOTE */}
                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="p-6 md:p-8 rounded-2xl bg-cyan-400/5 border-l-4 border-cyan-400 backdrop-blur-sm relative overflow-hidden group mb-10 shadow-xl"
                        >
                            <Zap size={60} className="absolute -top-4 -right-4 text-cyan-400 opacity-10 group-hover:opacity-30 transition-opacity" />
                            <p className="text-lg md:text-xl font-bold text-white tracking-wide italic">
                                "Every bug is a boss fight. I don't quit until I win."
                            </p>
                        </motion.div>

                       
                    </motion.div>
                </div>
            </div>

            {/* Decorative BG Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
                <Laptop size={200} className="text-slate-800" />
            </div>

            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default About;