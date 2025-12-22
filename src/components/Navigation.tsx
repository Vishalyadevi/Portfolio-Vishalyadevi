import React from 'react';
import { Github, Linkedin, Instagram, Code, Download } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'help', label: 'What I Help' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Get In Touch' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vishalya-devi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vishalya-devi', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/vishalya-devi', label: 'LeetCode' },
    { icon: Instagram, href: 'https://instagram.com/vishalya-devi', label: 'Instagram' },
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/vishalyadevi.pdf';
    link.download = 'Vishalya_Devi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-white drop-shadow-lg">Vishalya</span>
              <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">Devi.</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onSectionClick(id)}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-pink-200 hover:scale-105 drop-shadow-sm ${
                    activeSection === id
                      ? 'text-pink-200 scale-105'
                      : 'text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

     

      
    </>
  );
};

export default Navigation;