export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
