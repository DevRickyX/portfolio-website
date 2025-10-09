import React from 'react';
import { Code } from 'lucide-react';
import { technologies } from '../../data/skills';
import { generateRandomParticles } from '../../utils/animations';

export const Skills: React.FC = () => {
  const particles = generateRandomParticles(6);

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      {/* Subtle floating particles for skills section */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.key}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Tech Stack</span>
          <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Mastering the latest technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((techGroup, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-emerald-400/30"
              style={{ animationDelay: techGroup.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${techGroup.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Code size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{techGroup.category}</h3>
                
                <div className="space-y-4">
                  {techGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-white/80 group-hover/skill:text-white transition-colors duration-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-emerald-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${techGroup.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
