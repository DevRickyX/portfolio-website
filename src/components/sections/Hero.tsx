import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { useScroll, useMousePosition } from '../../hooks';
import { scrollToSection } from '../../utils';
import { floatingTechIcons } from '../../data/skills';
import { generateRandomParticles, generateRandomOrbs } from '../../utils/animations';

export const Hero: React.FC = () => {
  const scrollY = useScroll();
  const mousePosition = useMousePosition();
  const particles = generateRandomParticles(8);
  const orbs = generateRandomOrbs(3);

  return (
    <>
      {/* Enhanced Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`
        }}
      />

      {/* Hero Section with Floating Tech Icons */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-green-900/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]"></div>
          
          {/* Subtle floating particles */}
          {particles.map((particle) => (
            <div
              key={particle.key}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}

          {/* Subtle glowing orbs */}
          {orbs.map((orb) => (
            <div
              key={orb.key}
              className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-green-300/10 blur-2xl animate-float"
              style={{
                left: orb.left,
                top: orb.top,
                width: orb.width,
                height: orb.height,
                animationDelay: orb.animationDelay,
                animationDuration: orb.animationDuration
              }}
            />
          ))}

          {/* Floating Tech Icons */}
          {floatingTechIcons.map((tech, index) => (
            <div
              key={index}
              className="absolute text-4xl opacity-20 hover:opacity-60 transition-all duration-300 animate-float cursor-pointer group"
              style={{
                left: `${10 + (index % 4) * 20 + Math.random() * 10}%`,
                top: `${15 + Math.floor(index / 4) * 25 + Math.random() * 10}%`,
                animationDelay: tech.delay,
                animationDuration: tech.duration
              }}
              title={tech.name}
            >
              <div className="relative">
                {tech.icon}
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 overflow-hidden">
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-none animate-slide-up">
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">
                SANTIAGO
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-5xl font-light text-emerald-400 mt-4 tracking-widest">
                SOFTWARE ENGINEER
              </span>
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            Crafting next-generation digital experiences through innovative 
            <span className="text-emerald-400 font-semibold"> web & mobile solutions</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-2">
            <Button 
              onClick={() => scrollToSection('projects')}
              icon={<ArrowRight size={20} />}
            >
              Explore Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="secondary"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-emerald-400" />
        </div>
      </section>
    </>
  );
};
