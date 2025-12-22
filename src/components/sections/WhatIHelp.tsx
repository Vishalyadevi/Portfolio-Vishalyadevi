import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  Bug, 
  Users, 
  Code, 
  Database,
  Smartphone,
  Zap,
  Shield,
  Layers,
  GitBranch,
  Palette,
  Wrench
} from 'lucide-react';

const WhatIDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React, Vue.js, and modern CSS frameworks.',
      technologies: ['React', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications with Node.js, Python, and cloud technologies.',
      technologies: ['Node.js', 'Express'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.1
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for better performance.',
      technologies: ['MySQL', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Bug,
      title: 'Testing & Debugging',
      description: 'Ensuring code quality through comprehensive testing and efficient debugging practices.',
      technologies: ['Thunder Client', 'Postman', 'Chrome DevTools'],
      color: 'from-yellow-500 to-orange-500',
      delay: 0.3
    },
  ];

  const tools = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Postman',
      icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      color: 'from-orange-400 to-orange-600'
    },
  
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Jenkins',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-900 to-violet-900">
        {/* Dynamic Background Elements */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent animate-slide-down">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map(({ icon: Icon, title, description, technologies, color, delay }, index) => (
            <div
              key={title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${delay}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
              
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:bg-white/15">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <Icon size={28} className="text-white drop-shadow-lg" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${color} text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-300 ${hoveredCard === index ? 'scale-150 shadow-lg' : 'scale-100'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Wrench className="text-pink-300" size={32} />
              <h3 className="text-4xl font-bold text-white bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
                Tools & Technologies
              </h3>
              <Wrench className="text-purple-300" size={32} />
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life and streamline development workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tool.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`}></div>
                
                {/* Tool Card */}
                <div className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:shadow-xl group-hover:bg-white/15 h-full">
                  <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white text-center group-hover:text-pink-300 transition-colors duration-300">
                    {tool.name}
                  </h4>
                  
                  {/* Animated dot indicator */}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(15px) rotate(-2deg);
          }
          66% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default WhatIDo;