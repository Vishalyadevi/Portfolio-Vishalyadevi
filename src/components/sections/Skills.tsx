import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'C', icon: '🔤', color: 'from-blue-400 to-blue-600' },
    { name: 'C++', icon: '➕', color: 'from-blue-500 to-indigo-600' },
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-red-500' },
    { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-600' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-purple-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Express', icon: '🚀', color: 'from-gray-600 to-gray-800' },
    { name: 'SQL', icon: '🗄️', color: 'from-blue-600 to-indigo-700' },
    { name: 'Linux', icon: '🐧', color: 'from-yellow-500 to-orange-600' },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Skills</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are the technologies and programming languages I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;