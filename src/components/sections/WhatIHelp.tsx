import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Server, 
  Database, 
  Bug, 
  Zap, 
  Crosshair,
  Terminal,
  Activity,
  Target
} from 'lucide-react';

const MissionCard = ({ service, index }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group h-full"
        >
            {/* Outer Energy Field */}
            <div className={`absolute -inset-1 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
            
            <div className={`relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex flex-col gap-4 group-hover:border-cyan-400/30 transition-all duration-300 shadow-xl overflow-hidden`}>
                
                {/* HUD Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20" />

                {/* Vertical Icon Stack */}
                <div className="flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <service.icon size={24} className="text-white" />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tighter leading-tight mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title.split(' ')[0]} <br/> {service.title.split(' ')[1]}
                    </h3>
                    <p className="text-slate-500 text-[10px] leading-tight font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                        {service.description.substring(0, 70)}...
                    </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                    {service.technologies.slice(0, 2).map((tech: string) => (
                        <span key={tech} className="px-2 py-0.5 bg-white/5 rounded-md text-[7px] font-mono text-white/40 uppercase tracking-widest border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Animated Vertical Scanner */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ top: '-100%' }}
                            animate={{ top: '100%' }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute left-0 right-0 h-px bg-cyan-400/40 z-10 pointer-events-none"
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const WhatIHelp = () => {
    const services = [
        {
          icon: Globe,
          title: 'Frontend Development',
          description: 'Creating responsive and interactive user interfaces using React, Vue.js, and modern CSS frameworks.',
          technologies: ['React', 'Tailwind CSS'],
          color: 'from-blue-500 to-cyan-500',
        },
        {
          icon: Server,
          title: 'Backend Development',
          description: 'Building robust and scalable server-side applications with Node.js, Python, and cloud technologies.',
          technologies: ['Node.js', 'Express'],
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: Database,
          title: 'Database Design',
          description: 'Designing efficient database schemas and optimizing queries for better performance.',
          technologies: ['MySQL', 'MongoDB'],
          color: 'from-purple-500 to-pink-500',
        },
        {
          icon: Bug,
          title: 'Testing ',
          description: 'Ensuring code quality through comprehensive testing and efficient debugging practices.',
          technologies: ['Thunder Client', 'Postman', 'Chrome DevTools'],
          color: 'from-yellow-500 to-orange-500',
        },
    ];

    return (
        <section id="what-i-help" className="h-full w-full relative overflow-hidden flex flex-col pt-4">
            <div className="container mx-auto max-w-7xl px-8 h-full flex flex-col pt-4 pb-8">
                
                {/* Header Section - Minimal */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-[8px] font-mono tracking-[0.4em] uppercase mb-2 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                    >
                        Tactical_Ops // Stage_04
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                        What I <span className="text-cyan-500">Deploy</span>
                    </h2>
                    <div className="flex items-center gap-6 mt-2">
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                            <Activity size={10} className="text-cyan-500" /> Ops_Active
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                            <Target size={10} className="text-emerald-500" /> Precision
                        </div>
                    </div>
                </div>

                {/* 1x4 HORIZONTAL ROW GRID NON-SCROLLABLE */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl pb-12">
                        {services.map((service, idx) => (
                            <MissionCard key={service.title} service={service} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Footer UI */}
                <div className="mt-auto py-6 border-t border-white/5 flex items-center justify-center gap-4">
                    <Zap className="text-yellow-400" size={12} />
                    <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] italic font-black">
                        “Deploying excellence through tactical precision.”
                    </p>
                    <Crosshair className="text-cyan-400" size={12} />
                </div>
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-[0.015] pointer-events-none -z-10">
                <Terminal size={300} className="text-white" />
            </div>
        </section>
    );
};

export default WhatIHelp;