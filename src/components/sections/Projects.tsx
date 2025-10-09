import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectModal } from '../ui';
import { useProjectModal } from '../../hooks';

export const Projects: React.FC = () => {
  const { selectedProject, openModal, closeModal } = useProjectModal();

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">
              <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Showcasing innovative solutions that push the boundaries of technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-emerald-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                    >
                      <Github size={20} className="text-white" />
                    </button>
                    <button 
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium hover:bg-emerald-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium"
                  >
                    <Eye size={18} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};
