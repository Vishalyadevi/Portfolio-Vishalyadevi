import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Shield, Target, Binary } from 'lucide-react';

interface Skill {
    id: string;
    name: string;
    zone: string;
    rarity: 'LEGENDARY' | 'EPIC' | 'RARE';
    icon: string;
    color: string;
    description: string;
}

const SKILL_DATA: Skill[] = [
    { id: 'js', name: 'JavaScript', zone: 'Logic Engine', rarity: 'LEGENDARY', icon: 'javascript', color: '#F7DF1E', description: 'The core neural network of every interactive project.' },
    { id: 'react', name: 'React', zone: 'UI Architecture', rarity: 'LEGENDARY', icon: 'react', color: '#61DAFB', description: 'Advanced component architecture and state sync.' },
    { id: 'node', name: 'Node.js', zone: 'System Runtime', rarity: 'EPIC', icon: 'nodedotjs', color: '#339933', description: 'Scalable server-side execution.' },
    { id: 'mongodb', name: 'MongoDB', zone: 'Persistence', rarity: 'RARE', icon: 'mongodb', color: '#47A248', description: 'Flexible NoSQL document-based data.' },
    { id: 'mysql', name: 'MySQL', zone: 'Database', rarity: 'EPIC', icon: 'mysql', color: '#4479A1', description: 'Relational data management and SQL precision.' },
    { id: 'tailwind', name: 'Tailwind', zone: 'Styling', rarity: 'EPIC', icon: 'tailwindcss', color: '#06B6D4', description: 'Ultra-fast utility-first UI design.' },
    { id: 'threejs', name: 'Three.js', zone: '3D Visuals', rarity: 'RARE', icon: 'threedotjs', color: '#FFFFFF', description: 'Immersive 3D browser experiences.' },
    { id: 'html', name: 'HTML5', zone: 'Semantic', icon: 'html5', rarity: 'RARE', color: '#E34F26', description: 'The fundamental digital skeleton.' },
    { id: 'css', name: 'CSS3', zone: 'Styling', icon: 'css3', rarity: 'RARE', color: '#1572B6', description: 'Stylistic precision and animations.' },
    { id: 'docker', name: 'Docker', zone: 'Containers', rarity: 'EPIC', icon: 'docker', color: '#2496ED', description: 'Seamless app containerization.' },
    { id: 'jenkins', name: 'Jenkins', zone: 'CI/CD', rarity: 'RARE', icon: 'jenkins', color: '#D24939', description: 'Automated delivery pipelines.' },
    { id: 'java', name: 'Java', zone: 'Enterprise', rarity: 'EPIC', icon: 'java', color: '#007396', description: 'Robust enterprise application development.' },
    { id: 'cpp', name: 'C++', zone: 'High Performance', rarity: 'EPIC', icon: 'cplusplus', color: '#00599C', description: 'System-level precision and speed.' },
    { id: 'dsa', name: 'DSA', zone: 'Logic Architecture', rarity: 'LEGENDARY', icon: 'algolia', color: '#5468FF', description: 'Algorithm and data flow optimization.' },
    { id: 'git', name: 'Git', zone: 'Versioning', rarity: 'RARE', icon: 'git', color: '#F05032', description: 'Precise version control and tracking.' },
    { id: 'github', name: 'GitHub', zone: 'Collaboration', rarity: 'EPIC', icon: 'github', color: '#FFFFFF', description: 'Global collaboration and source evolution.' },
];

const SkillCard = ({ skill, onClick }: { skill: Skill; onClick: () => void }) => {
    return (
        <motion.div
            layoutId={skill.id}
            onClick={onClick}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group cursor-pointer p-4 bg-slate-900/50 border border-white/5 rounded-2xl backdrop-blur-md flex items-center gap-4 transition-all hover:bg-slate-800/60 hover:border-cyan-500/30"
        >
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                />
                <div 
                    className="relative w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center overflow-hidden"
                    style={{ borderColor: `${skill.color}44` }}
                >
                    <img 
                        src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}?v=1`} 
                        alt={skill.name} 
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                            // Fallback to a generic code icon if brand icon fails
                            (e.target as HTMLImageElement).src = 'https://cdn.simpleicons.org/code/ffffff';
                        }}
                    />
                </div>
            </div>
            
            <div className="flex-grow min-w-0">
                <h4 className="text-white font-bold text-sm tracking-tight truncate group-hover:text-cyan-400 transition-colors uppercase">
                    {skill.name}
                </h4>
                <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest truncate">{skill.zone}</span>
                    <span className={`w-1 h-1 rounded-full animate-pulse`} style={{ backgroundColor: skill.color }} />
                </div>
            </div>

            {skill.rarity === 'LEGENDARY' && (
                <div className="p-1 px-2 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[8px] font-black tracking-tighter self-start">
                    STAR
                </div>
            )}
        </motion.div>
    );
};

const Skills: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedSkill = SKILL_DATA.find(s => s.id === selectedId);

    return (
        <section id="skills" className="min-h-screen w-full relative overflow-hidden bg-[#020617] flex flex-col items-center pt-8 md:pt-12">
            
            <div className="absolute inset-0 bg-[#020617] z-0" />

            {/* HEADER HUB */}
            <div className="z-10 text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                    Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Inventory</span>
                </h2>
                <div className="flex justify-center gap-4 text-[9px] font-mono text-cyan-400/60 uppercase tracking-[0.3em]">
                    <span className="flex items-center gap-1"><Target size={12} /> Database_Ready</span>
                    <span className="flex items-center gap-1"><Binary size={12} /> Sync_Stable</span>
                </div>
            </div>

            {/* GRID VIEW */}
            <div className="z-10 w-full max-w-6xl px-4 sm:px-8 md:h-[calc(100vh-220px)] overflow-y-auto custom-glass-scroll">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
                    {SKILL_DATA.map((skill) => (
                        <SkillCard 
                            key={skill.id} 
                            skill={skill} 
                            onClick={() => setSelectedId(skill.id)}
                        />
                    ))}
                </div>
            </div>

            {/* REVEAL OVERLAY */}
            <AnimatePresence>
                {selectedId && selectedSkill && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/98 backdrop-blur-3xl"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId}
                            className="bg-slate-900 border border-cyan-400/20 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 max-w-lg w-full relative text-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-500 hover:text-white"><X size={20} /></button>
                            
                            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ backgroundColor: selectedSkill.color }} />
                                <div className="relative p-6 rounded-[2rem] bg-slate-950 border-2 border-white/5" style={{ borderColor: `${selectedSkill.color}44` }}>
                                    <img 
                                        src={`https://cdn.simpleicons.org/${selectedSkill.icon}/${selectedSkill.color.replace('#', '')}?v=1`} 
                                        alt={selectedSkill.name} 
                                        className="w-12 h-12 object-contain" 
                                    />
                                </div>
                            </div>
                            
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-1">{selectedSkill.name}</h3>
                            <p className="text-cyan-400 font-mono text-[10px] tracking-widest mb-6 uppercase">Mastery Tier: {selectedSkill.rarity}</p>
                            <p className="text-slate-400 text-base leading-relaxed mb-8 italic">"{selectedSkill.description}"</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-1">
                                    <Zap size={16} className="text-orange-400 mx-auto" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">MASTER_S</span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-1">
                                    <Shield size={16} className="text-cyan-400 mx-auto" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">ELITE</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .custom-glass-scroll::-webkit-scrollbar { width: 4px; }
                .custom-glass-scroll::-webkit-scrollbar-track { background: transparent; }
                .custom-glass-scroll::-webkit-scrollbar-thumb { 
                    background: rgba(255, 255, 255, 0.05); 
                    border-radius: 10px;
                }
                .custom-glass-scroll::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.2); }
            `}</style>
        </section>
    );
};

export default Skills;
