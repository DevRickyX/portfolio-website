import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent mb-6">
            SANTIAGO
          </div>
          <p className="text-white/60 mb-8 text-lg">
            Software Engineer • Innovation Driver • Digital Architect
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {[Github, Mail, ExternalLink].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10 text-white/40">
            <p>&copy; 2024 Santiago. Crafted with passion and precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
