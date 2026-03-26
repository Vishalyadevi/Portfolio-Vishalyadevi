import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, HardDrive, Cpu, ShieldAlert, Bot, Terminal as TerminalIcon, Send, TerminalSquare, Info } from 'lucide-react';

const ContactTerminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const [contactMode, setContactMode] = useState<'IDLE' | 'NAME' | 'EMAIL' | 'MESSAGE' | 'SENDING'>('IDLE');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const bootCommands = [
        "INITIALIZING CORE SYSTEM [QUANTUM-V3]...",
        "DECRYPTING COMMUNICATION NODES...",
        "SECURITY PROTOCOLS: ACTIVE",
        "ACCESS GRANTED // MISSION COMMAND [LVL_10]",
        "----------------------------------------------------------------",
        "WELCOME TO VISHALYA_OS // TERMINAL_INTERFACE",
        "TYPE '/HELP' FOR ALL COMMANDS"
    ];

    useEffect(() => {
        let currentLine = 0;
        const timer = setInterval(() => {
            if (currentLine < bootCommands.length) {
                const cmd = bootCommands[currentLine];
                if (cmd) setHistory(prev => [...prev, cmd]);
                currentLine++;
            } else {
                setIsBooting(false);
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const addToHistory = (line: string) => {
        if (line) setHistory(prev => [...prev, line]);
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const rawInput = input.trim();
        const cmd = rawInput.toLowerCase();
        if (!rawInput && contactMode === 'IDLE') return;

        // Add user input to history
        addToHistory(`> ${rawInput}`);
        setInput('');

        // Handle Form Flow
        if (contactMode !== 'IDLE') {
            handleFormFlow(rawInput);
            return;
        }

        // Handle Normal Commands
        switch(cmd) {
            case 'help':
            case '/help':
                addToHistory("----------------------------------------------------------------");
                addToHistory("COMMAND_MANUAL:");
                addToHistory("  /CONNECT    - INITIATE SECURE MESSAGE UPLINK");
                addToHistory("  /LINKEDIN   - EXTERNAL NODE: PROF_CONNECT");
                addToHistory("  /GITHUB     - EXTERNAL NODE: CODE_REPOSITORY");
                addToHistory("  /LEETCODE   - EXTERNAL NODE: LOGIC_STATS");
                addToHistory("  /INSTAGRAM  - EXTERNAL NODE: SOCIAL_FEED");
                addToHistory("  CLEAR       - WIPE TERMINAL BUFFER");
                addToHistory("  SYSTEM      - RUN DIAGNOSTICS");
                addToHistory("----------------------------------------------------------------");
                break;
            case '/github':
            case 'github':
                window.open("https://github.com/Vishalyadevi", "_blank");
                addToHistory("UPLINKING TO GITHUB PORTAL... ACCESS_CONFIRMED.");
                break;
            case '/linkedin':
            case 'linkedin':
                window.open("https://linkedin.com/in/vishalyadevi", "_blank");
                addToHistory("ESTABLISHING LINKEDIN HANDSHAKE... SECURE_TUNNEL_OPEN.");
                break;
            case '/leetcode':
            case 'leetcode':
                window.open("https://leetcode.com/u/Vishalyadevi_M/", "_blank");
                addToHistory("ACCESSING LEETCODE LOGIC PORT... DATA_TRANSFER_READY.");
                break;
            case '/instagram':
            case 'instagram':
                window.open("https://instagram.com/vishalyadevi", "_blank");
                addToHistory("UPLINKING TO INSTAGRAM FEED... VISUAL_STREAM_INITIATED.");
                break;
            case '/connect':
            case 'connect':
                setContactMode('NAME');
                addToHistory("COMMUNICATION_LINK_START. [ENCRYPTION_MODE_ON]");
                addToHistory("PHASE 1: ENTER YOUR IDENTIFIER / NAME:");
                break;
            case 'clear':
                setHistory([]);
                break;
            case 'system':
                addToHistory(`KERNEL: VISHALYA_CORE_V4 | LOAD: OPTIMAL | LATENCY: 12ms | STATUS: PRIME`);
                break;
            default:
                addToHistory(`ERR: COMMAND '${cmd}' NOT FOUND. INPUT '/HELP' FOR MANUAL.`);
        }
    };

    const handleFormFlow = (value: string) => {
        if (contactMode === 'NAME') {
            setFormData(prev => ({ ...prev, name: value }));
            setContactMode('EMAIL');
            addToHistory(`REC: IDENTIFIER = ${value.toUpperCase()}`);
            addToHistory("PHASE 2: ENTER YOUR SECURE UPLINK / EMAIL:");
        } else if (contactMode === 'EMAIL') {
            setFormData(prev => ({ ...prev, email: value }));
            setContactMode('MESSAGE');
            addToHistory(`REC: UPLINK = ${value.toLowerCase()}`);
            addToHistory("PHASE 3: ENTER YOUR TRANSMISSION PAYLOAD / MESSAGE:");
        } else if (contactMode === 'MESSAGE') {
            setFormData(prev => ({ ...prev, message: value }));
            setContactMode('SENDING');
            addToHistory("COMPILING ENCRYPTED DATA PACKET...");
            
            setTimeout(() => {
                addToHistory("TRANS_CMND [SENDING]: 0% ... 45% ... 89% ... 100%");
                setTimeout(() => {
                    addToHistory("TRANSMISSION SUCCESSFUL.");
                    addToHistory(`DATA RECEIVED. THANK YOU, ${formData.name.toUpperCase()}.`);
                    setContactMode('IDLE');
                    setFormData({ name: '', email: '', message: '' });
                }, 1000);
            }, 800);
        }
    };

    return (
        <section id="contact" className="h-full w-full relative overflow-hidden flex flex-col justify-center py-2">
            <div className="container mx-auto max-w-[1400px] px-8 h-full flex flex-col justify-center gap-2">
                
                {/* Minimal Tactical Indicator */}
                <div className="flex flex-col items-center opacity-30">
                    <div className="text-red-500 text-[9px] font-mono tracking-[1em] uppercase">SYSTEM_L10_UPLINK</div>
                </div>

                {/* SUPREME SUPERTALL TERMINAL SCREEN */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-[800px] lg:h-[900px] max-h-[92vh] w-full bg-slate-1000/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_200px_rgba(239,68,68,0.2)] relative mx-auto"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Header Bar */}
                    <div className="px-10 py-5 bg-slate-900/60 border-b border-white/10 flex items-center justify-between relative z-40">
                        <div className="flex gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
                            <div className="w-3 h-3 rounded-full bg-slate-800" />
                            <div className="w-3 h-3 rounded-full bg-slate-800" />
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-600/10 px-4 py-1.5 rounded-lg border border-red-500/20">
                            <TerminalSquare size={14} /> SYSTEM_ROOT_CONSOLE_EX
                        </div>
                    </div>

                    {/* Output Area - High Density Text */}
                    <div 
                        ref={scrollRef}
                        className="flex-1 p-12 overflow-y-auto custom-scrollbar flex flex-col gap-2 font-mono text-[12px] md:text-[13px] relative z-10 scroll-smooth pb-20"
                    >
                        <AnimatePresence>
                            {history.filter(line => line).map((line, i) => (
                                <motion.div 
                                    key={`line-${i}`}
                                    initial={{ opacity: 0, x: -10 }} 
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`
                                        ${line.startsWith('>') ? 'text-cyan-400 font-bold' : 
                                          line.includes('ERR') ? 'text-red-500' : 
                                          line.includes('SUCCESSFUL') || line.includes('REC:') ? 'text-emerald-400 font-bold' : 
                                          'text-slate-400'}
                                        leading-normal
                                    `}
                                >
                                    {!line.startsWith('>') && !line.includes('---') && <span className="text-slate-800 mr-4 opacity-60">[{new Date().toLocaleTimeString('en-GB')}]</span>}
                                    {line}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        {!isBooting && contactMode !== 'SENDING' && (
                            <form onSubmit={handleCommand} className="flex items-center gap-4 mt-6 group">
                                <span className="text-red-500 font-bold animate-pulse flex-shrink-0 text-sm">
                                    {contactMode === 'IDLE' ? 'ROOT@V-OS:~$ ' : 
                                     contactMode === 'NAME' ? 'ID_NAME: ' :
                                     contactMode === 'EMAIL' ? 'UPLINK: ' :
                                     'MSG: '}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white w-full p-0 m-0 uppercase placeholder-red-900/10 font-bold text-sm"
                                    placeholder={contactMode === 'IDLE' ? "TYPE '/HELP'..." : "AWAITING_INPUT..."}
                                    spellCheck={false}
                                    autoFocus
                                />
                            </form>
                        )}
                    </div>

                    {/* Minimal Footer HUD */}
                    <div className="px-12 py-4 border-t border-white/10 bg-slate-900/40 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-widest relative z-40">
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2">
                                <Bot size={16} className="text-red-500" /> AI: READY
                            </span>
                            <span className="flex items-center gap-2">
                                <Cpu size={16} /> LOAD: 04%
                            </span>
                        </div>
                        <div className="flex gap-8 items-center">
                             <span className="text-emerald-500 font-bold">LATENCY: 02ms</span>
                             <span className="px-4 py-1.5 bg-red-600 text-slate-1000 font-bold rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.3)]">ENCRYPTED</span>
                        </div>
                    </div>
                </motion.div>

                {/* Micro-Footer Navigation */}
                <div className="py-2 flex flex-col items-center">
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-slate-700 hover:text-red-400 transition-colors uppercase text-[8px] font-mono tracking-[0.6em]"
                    >
                         [ SYSTEM_RESET ]
                    </motion.button>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { 
                    background: rgba(239, 68, 68, 0.4); 
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default ContactTerminal;
