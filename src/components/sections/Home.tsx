import React, { useState, useEffect } from 'react';
import w11 from '../assets/w11.jpg';

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Exact background pattern from the image */}
      <div className="absolute inset-0">
        {/* Base gradient matching the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600"></div>
        
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-600/40 to-pink-500/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-indigo-800/30"></div>
        
        {/* Large flowing shapes - responsive sizes */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-purple-700/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-gradient-to-bl from-pink-400/25 via-purple-400/15 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-indigo-600/20 via-purple-500/15 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Medium floating elements - responsive */}
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-purple-400/15 via-pink-300/10 to-transparent rounded-full blur-2xl animate-drift"></div>
        <div className="absolute bottom-1/3 left-1/2 w-[175px] h-[175px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] bg-gradient-to-l from-pink-300/20 via-purple-300/15 to-transparent rounded-full blur-2xl animate-drift-reverse"></div>
        
        {/* Small animated particles - responsive positioning */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 bg-white/30 rounded-full animate-bounce-slow shadow-lg"></div>
        <div className="absolute top-32 right-8 sm:top-40 sm:right-32 w-3 h-3 sm:w-4 sm:h-4 bg-pink-200/40 rounded-full animate-pulse delay-300 shadow-md"></div>
        <div className="absolute bottom-32 left-1/4 sm:bottom-40 sm:left-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-purple-200/35 rounded-full animate-bounce delay-700 shadow-lg"></div>
        <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-white/25 rounded-full animate-pulse-slow delay-1000 shadow-xl"></div>
        <div className="absolute top-1/2 left-2 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-pink-300/50 rounded-full animate-float delay-500"></div>
        <div className="absolute top-3/4 right-2 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-purple-300/40 rounded-full animate-drift delay-800"></div>
        
        {/* Geometric shapes - responsive */}
        <div className="absolute top-48 left-1/4 sm:top-60 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-48 right-1/4 sm:bottom-60 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border-2 border-pink-300/30 rounded-full animate-pulse-fast"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-pink-400/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-400/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Main Content Container - Responsive Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-16">
        {/* Desktop: Flex Layout, Mobile: Stack Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
          
          {/* Content Section - Responsive text and spacing */}
          <div className="flex-1 text-white text-center lg:text-left max-w-2xl w-full">
            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-2 animate-fade-in-up drop-shadow-sm">
                Hello, my name is
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in-up delay-200 leading-tight">
                <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                  Vishalya Devi
                </span>
              </h1>
            </div>
            
            <div className="mb-6 sm:mb-8 animate-fade-in-up delay-400">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-white/95 min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[3rem] drop-shadow-lg leading-tight">
                I Am{' '}
                <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent animate-text-shimmer">
                  {typedText}
                  {showCursor && <span className="text-pink-200 animate-pulse drop-shadow-glow">|</span>}
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-sm animate-fade-in-left delay-600">
                Problem Solver, Full Stack Developer proficient in coding and maintaining 
                websites to ensure functionality and responsiveness.
              </p>
            </div>
            
            {/* Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-center lg:items-start animate-fade-in-up delay-800">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-110 hover:shadow-2xl hover:rotate-1 transition-all duration-300 animate-button-glow">
                Download CV
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white/40 rounded-full text-white font-semibold text-sm sm:text-base hover:bg-white/15 hover:scale-110 hover:-rotate-1 hover:border-pink-300/60 transition-all duration-300 backdrop-blur-sm">
                View Projects
              </button>
            </div>
          </div>
          
          {/* Profile Image Section - Responsive sizing */}
          <div className="flex-1 flex justify-center items-center animate-fade-in-up delay-1200 order-first lg:order-last">
            <div className="relative animate-float">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] relative">
                {/* Multiple gradient background circles - responsive */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-purple-600/40 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-tl from-purple-400/30 to-pink-400/30 rounded-full blur-lg animate-pulse delay-500"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-500">
                  <img
                    src={w11}
                    alt="Vishalya Devi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-1deg); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(10px, -8px) rotate(0.5deg); }
          66% { transform: translate(-8px, 8px) rotate(-0.5deg); }
        }
        
        @keyframes drift-reverse {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-10px, 8px) rotate(-0.5deg); }
          66% { transform: translate(8px, -8px) rotate(0.5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.03); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
          50% { text-shadow: 0 0 25px rgba(255, 182, 193, 0.6), 0 0 35px rgba(147, 51, 234, 0.4); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.6), 0 0 35px rgba(147, 51, 234, 0.4); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift 10s ease-in-out infinite;
        }
        
        .animate-drift-reverse {
          animation: drift-reverse 12s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background: linear-gradient(90deg, #fbb6ce, #a855f7, #fbb6ce);
          background-size: 200% 100%;
          animation: text-shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }
        
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.5));
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-text-glow {
            animation: text-glow 2s ease-in-out infinite;
          }
          
          .animate-button-glow {
            animation: button-glow 1.5s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;