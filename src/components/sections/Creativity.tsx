import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Box, Wand2, Layers2 } from 'lucide-react';

const GalleryItem = ({ title, sub, color, delay, icon: Icon }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setRotateX(((e.clientY - centerY) / (rect.height / 2)) * -15);
        setRotateY(((e.clientX - centerX) / (rect.width / 2)) * 15);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            className={`rounded-[2rem] relative overflow-hidden group h-[400px] cursor-pointer bg-slate-900 border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 transition-transform duration-200 ease-out`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 shadow-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <Icon size={56} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-pink-400 transition-colors">{title}</h4>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">{sub}</p>
                </div>
            </div>

            {/* Scanning line effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-pink-500/50 animate-scan-y shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
            </div>
        </motion.div>
    );
};

const Creativity: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0.7, 1], [0, 50]);

  return (
    <section id="creativity" className="w-full h-full flex items-center justify-center p-4">
        <div className="container mx-auto max-w-7xl z-10">
            <div className="flex flex-col items-center mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1 bg-pink-500/10 border border-pink-500/20 rounded text-pink-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-4"
                >
                    Design_Forge // Level_08
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Design <span className="text-pink-400">Engine</span></h2>
                <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px] tracking-widest uppercase">
                    <span>Aesthetics: 10/10</span>
                    <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                         <div className="w-full h-full bg-pink-500" />
                    </div>
                    <span>Style: Immersive</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GalleryItem title="UI Logic" sub="Symmetry & Chaos" color="from-indigo-600 to-purple-600" delay={0.1} icon={Layers2} />
                <GalleryItem title="UX Motion" sub="Fluid Mechanics" color="from-pink-600 to-rose-600" delay={0.2} icon={Wand2} />
                <GalleryItem title="Spatial VR" sub="3D Architectural" color="from-cyan-600 to-blue-600" delay={0.3} icon={Box} />
            </div>

            <motion.div 
               style={{ y: yParallax }}
               className="mt-20 max-w-5xl mx-auto p-12 bg-slate-900/40 backdrop-blur-xl rounded-[3rem] text-center relative border border-white/10 overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Sparkles size={160} className="text-pink-400" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-12 h-12 rounded-full border-2 border-pink-500/50 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                        “Design is not what it looks like, <br/>but <span className="text-pink-400 underline decoration-pink-400/30 underline-offset-8 decoration-4">how it feels.</span>”
                    </h3>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Creativity;

