import React from 'react';
import { Code, Database, Smartphone, Zap, Star, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const expertiseItems = [
    { icon: Code, label: 'Full Stack', color: 'emerald' },
    { icon: Smartphone, label: 'Mobile Dev', color: 'green' },
    { icon: Database, label: 'Backend Expert', color: 'lime' }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge solutions for modern challenges',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Star,
      title: 'Quality Driven',
      description: 'Exceptional standards in every project',
      gradient: 'from-green-500 to-lime-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Solutions that scale worldwide',
      gradient: 'from-lime-500 to-emerald-400'
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">About Me</span>
              <h2 className="text-5xl lg:text-6xl font-black mt-4 leading-tight">
                Building the
                <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              I'm a passionate software engineer specializing in creating exceptional digital experiences. 
              With expertise spanning web and mobile development, I transform complex ideas into elegant, 
              scalable solutions that drive real business impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-black text-emerald-400 mb-2">5+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-black text-emerald-400 mb-2">50+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {expertiseItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300">
                  <item.icon size={18} className={`text-${item.color}-400`} />
                  <span className="text-white/80 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center`}>
                      <value.icon size={24} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{value.title}</h4>
                      <p className="text-white/60">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
