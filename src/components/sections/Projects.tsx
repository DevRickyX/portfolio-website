import React from "react";
import { Github, ExternalLink, Eye } from "lucide-react";
import { projects } from "../../data/projects";
import { ProjectModal } from "../ui";
import { useProjectModal } from "../../hooks";

export const Projects: React.FC = () => {
  const { selectedProject, openModal, closeModal } = useProjectModal();

  return (
    <>
      <section id="projects" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

        <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mb-20 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-emerald-400">
              Portfolio
            </span>
            <h2 className="mt-4 mb-6 text-5xl font-black lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white to-emerald-200 bg-clip-text">
                Featured Work
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              Showcasing innovative solutions that push the boundaries of
              technology
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden transition-all duration-500 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl hover:bg-white/10 hover:scale-105 hover:border-emerald-400/30"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-emerald-500/10 to-green-400/10 group-hover:opacity-100"></div>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute flex gap-2 transition-all duration-300 transform translate-y-2 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30"
                    >
                      <Github size={20} className="text-white" />
                    </button>
                    <button
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-emerald-500/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium transition-colors duration-200 border rounded-full bg-emerald-500/20 border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 font-medium transition-colors duration-200 text-emerald-400 hover:text-emerald-300"
                  >
                    <Eye size={18} />
                    View Details
                  </button> */}
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
