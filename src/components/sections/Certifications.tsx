import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, X, Fullscreen } from 'lucide-react';

// User-provided imports from @assets
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import w10 from '../assets/w10.jpg';
import w11 from '../assets/w11.jpg';

interface Certificate {
    id: string;
    image: any;
}

const certs: Certificate[] = [
    { id: 'W1', image: w1 },
    { id: 'W2', image: w2 },
    { id: 'W3', image: w3 },
    { id: 'W4', image: w4 },
    { id: 'W5', image: w5 },
    { id: 'W6', image: w6 },
    { id: 'W7', image: w7 },
    { id: 'W8', image: w8 },
    { id: 'W9', image: w9 },
    { id: 'W10', image: w10 },
    { id: 'W11', image: w11 },
];

const CertCard = ({ cert, onClick, index }: { cert: Certificate; onClick: () => void; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group cursor-zoom-in"
            onClick={onClick}
        >
            <div className="absolute -inset-0.5 bg-cyan-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative aspect-video rounded-xl bg-slate-900 border border-white/10 overflow-hidden shadow-xl transition-all group-hover:border-cyan-400/50">
                <img 
                    src={cert.image} 
                    alt={`Certificate ${cert.id}`} 
                    className="w-full h-full object-contain bg-slate-950 transition-all duration-500 group-hover:scale-105" 
                />
                
                {/* HUD Viewport Edge */}
                <div className="absolute top-2 right-2 p-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Fullscreen size={12} className="text-cyan-400" />
                </div>
            </div>
        </motion.div>
    );
};

const Certifications: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="upgrades" className="h-full w-full relative overflow-hidden flex flex-col pt-4">
            <div className="container mx-auto max-w-7xl px-8 h-full flex flex-col justify-center py-4">
                
                {/* Minimal Header */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-[8px] font-mono tracking-[0.5em] uppercase mb-4"
                    >
                        Credential_Vault // Level_08
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        System <span className="text-cyan-400">Upgrades</span>
                    </h2>
                </div>

                {/* Landscape Matrix Grid */}
                <div className="flex-1 overflow-y-auto custom-glass-scroll pb-16">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                        {certs.map((cert, idx) => (
                            <CertCard key={cert.id} cert={cert} index={idx} onClick={() => setSelectedCert(cert)} />
                        ))}
                    </div>
                </div>

                {/* Footer UI */}
                <div className="mt-auto py-4 flex items-center justify-center gap-3 border-t border-white/5 bg-slate-900/20 rounded-t-3xl">
                    <Sparkles className="text-cyan-400" size={14} />
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center italic">
                        All technical credentials synchronized.
                    </p>
                    <ShieldCheck className="text-emerald-500" size={14} />
                </div>
            </div>

            {/* Cinematic Full Screen Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-3xl"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedCert.image} 
                                alt={`Certificate ${selectedCert.id}`} 
                                className="w-full h-full object-contain bg-black" 
                            />
                            
                            {/* HUD Diagnostics Minimal */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                                    <Award size={20} className="text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase leading-none mb-1">Authenticated</p>
                                    <h4 className="text-white text-lg font-black uppercase tracking-tighter leading-none">UPGRADE_{selectedCert.id}</h4>
                                </div>
                            </div>

                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-6 right-6 p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all text-white"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Certifications;
