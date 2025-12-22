import React from 'react';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    'Full Stack Web Development',
    'React Advanced Concepts',
    'Node.js Certification',
    'Java Programming',
    'Spring Boot Mastery',
    'Database Management',
    'Algorithm Design',
    'Data Structures',
    'Problem Solving',
    'Cloud Computing',
    'DevOps Fundamentals',
    'Git & Version Control',
  ];

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Certificates</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My continuous learning journey through various certifications and achievements.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-left space-x-6">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                  {cert}
                </h3>
                
                <p className="text-white/70 text-sm">
                  Certified • 2024
                </p>
                
                <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full group-hover:animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;