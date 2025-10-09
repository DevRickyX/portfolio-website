import { useState } from 'react';
import { Project } from '../types';

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return {
    selectedProject,
    openModal,
    closeModal
  };
};
