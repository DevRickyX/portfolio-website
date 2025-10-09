import React from 'react';
import { useMenu } from '../../hooks';
import { scrollToSection } from '../../utils';

export const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent">
            SANTIAGO
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())} 
                className="relative text-white/80 hover:text-white transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-300 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <button 
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())} 
              className={`text-3xl font-light text-white/80 hover:text-white transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
