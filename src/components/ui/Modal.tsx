import React from 'react';
import { X } from 'lucide-react';
import { ProjectModalProps } from '../../types';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-sm">
              {project.category}
            </span>
          </div>
          
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            {project.longDescription}
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-black font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
            >
              <span>▶</span>
              Live Demo
            </button>
            <button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 transition-colors duration-200"
            >
              <span>📁</span>
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
