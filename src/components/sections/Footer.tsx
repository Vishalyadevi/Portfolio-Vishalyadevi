import React from 'react';
import { Github, Linkedin, Instagram, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Vishalyadevi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vishalya-devi-m-a84228289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/Vishalyadevi/', label: 'LeetCode' },
    { icon: Instagram, href: 'https://instagram.com/vishalya-devi', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Vishalya Devi</h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/70">
              © 2025 Vishalya Devi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;