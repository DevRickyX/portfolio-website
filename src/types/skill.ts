export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface TechnologyGroup {
  category: string;
  skills: Skill[];
  gradient: string;
  delay: string;
}

export interface FloatingTechIcon {
  icon: string;
  name: string;
  delay: string;
  duration: string;
}
