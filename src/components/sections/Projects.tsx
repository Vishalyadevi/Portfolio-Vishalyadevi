import React from 'react';
import { Github } from 'lucide-react';

// Projects Component - Simplified to ensure all projects show
const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cooksy',
      description: 'A recipe finder platform.',
      tech: ['React', 'TailwindCSS'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5CF9pnZt61oE5OQWCa_Pt1AruvoC4as63g&s',
      github: 'https://github.com/Vishalyadevi/Cooksy-Find-Recipes-with-Your-Ingredients',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with updates.',
      tech: ['React', 'Java', 'Spring Boot'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHds9LFZNeDyd0p0nvQOwDQvGvo4Aua0sEsw&s',
      github: 'https://github.com/vishalya-devi/task-manager',
    },
    {
      title: 'Weather Application',
      description: 'A comprehensive real time weather data visualization dashboard.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxKA7HvO10GTQBbTTroY57QxgaI-W6kfyUw&s',
      github: 'https://github.com/Vishalyadevi/PRODIGY_WD_05',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-violet-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Featured Projects</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        {/* Debug: Show total project count */}
        <div className="text-center mb-8">
          <p className="text-white">Total Projects: {projects.length}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ 
                minHeight: '400px',
                animationDelay: `${index * 0.2}s`,
                opacity: 1 
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-purple-900/50 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full text-sm text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 text-white hover:scale-105"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional debug info */}
        <div className="mt-8 text-center text-white/60">
          <p>Project titles: {projects.map(p => p.title).join(', ')}</p>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills: React.FC = () => {
  const skills = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-purple-800 via-purple-900 to-violet-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Skills</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are the technologies and programming languages I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-110"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-white/30 flex items-center justify-center mb-4 group-hover:shadow-pink-500/50 group-hover:border-pink-300/50 transition-all duration-300">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors duration-300 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certificates Component
const Certificates: React.FC = () => {
  const certificateImages = [
    'https://via.placeholder.com/400x300/6366f1/ffffff?text=Certificate+1',
    'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Certificate+2',
    'https://via.placeholder.com/400x300/a855f7/ffffff?text=Certificate+3',
    'https://via.placeholder.com/400x300/c084fc/ffffff?text=Certificate+4',
    'https://via.placeholder.com/400x300/d8b4fe/000000?text=Certificate+5',
    'https://via.placeholder.com/400x300/6366f1/ffffff?text=Certificate+6',
    'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Certificate+7',
    'https://via.placeholder.com/400x300/a855f7/ffffff?text=Certificate+8',
    'https://via.placeholder.com/400x300/c084fc/ffffff?text=Certificate+9',
    'https://via.placeholder.com/400x300/d8b4fe/000000?text=Certificate+10'
  ];

  return (
    <section id="certificates" className="min-h-screen py-20 overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-purple-800">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .scrolling-certificates {
          animation: scroll-left 20s linear infinite;
        }
        
        .scrolling-certificates:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Certificates</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My continuous learning journey through various certifications and achievements.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex scrolling-certificates space-x-6">
            {[...certificateImages, ...certificateImages].map((imageUrl, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group shadow-2xl border-4 border-white/20 hover:border-pink-300/50"
              >
                <img
                  src={imageUrl}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover bg-white group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Component
const PortfolioDemo: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Projects />
      <Skills />
      <Certificates />
    </div>
  );
};

export default PortfolioDemo;