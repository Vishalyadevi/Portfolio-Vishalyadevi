import React from 'react';
import { Code, Trophy, Lightbulb, Github, Award, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: Code, 
      label: 'Skillrack Problems Solved', 
      value: '1200+',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Trophy, 
      label: 'Leetcode Problems Solved', 
      value: '270+',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: Lightbulb, 
      label: 'Mini Projects', 
      value: '5',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Award, 
      label: 'Certifications', 
      value: '10+',
      color: 'from-red-500 to-rose-500'
    },
  ];

  // Added the missing achievements array
  const achievements = [
    "Full Stack Development Expert",
    "Problem Solving Enthusiast",
    "Clean Code Advocate",
    "Continuous Learner"
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-900 to-violet-900">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-violet-300/20 to-purple-300/20 rounded-full blur-lg animate-bounce"></div>
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path 
            d="M0,300 Q400,100 800,300 T1600,300" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M0,500 Q600,200 1200,500 T2400,500" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent animate-slide-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25">
                <p className="text-xl text-white/90 leading-relaxed font-light">
                  I'm <span className="font-semibold text-pink-300">Vishalya Devi</span>, a passionate Full Stack Developer who thrives on solving real-world problems through innovative technology solutions. 
                  I believe in building clean, efficient, and creative digital experiences that make a meaningful difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <p className="text-white/80 font-medium text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {stats.map(({ icon: Icon, label, value, color }, index) => (
            <div
              key={label}
              className="group relative"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
              
              {/* Card */}
              <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center group-hover:bg-white/15">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <Icon size={36} className="text-white drop-shadow-lg" />
                </div>
                
                {/* Value */}
                <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {value}
                </h3>
                
                {/* Label */}
                <p className="text-white/70 font-medium text-lg group-hover:text-white/90 transition-colors duration-300">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;