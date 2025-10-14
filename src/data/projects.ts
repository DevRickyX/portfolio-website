import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Timebli",
    description:
      "The fastest and simplest tool for efficient time tracking and productivity management.",
    longDescription:
      "Timebli is a modern time tracking platform designed to help teams and professionals manage their work hours effortlessly. With a clean interface and real-time insights, it allows users to track tasks, monitor productivity, and generate detailed reports with just a few clicks. Perfect for freelancers, companies, and remote teams who value efficiency and clarity.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://ecpcjtmfcgfwpsjfetsf.supabase.co/storage/v1/object/public/projects/Timebli.png", // puedes reemplazar con la imagen real si la tienes
    demoUrl: "https://www.timebli.com/",
    githubUrl: "https://github.com/CarlosSalasCarpio/timebli-front",
    featured: true,
    category: "Productivity Tools and Full Stack Development",
  },

  {
    id: 2,
    title: "Asoantioquia",
    description:
      "Recycling company committed to environmental sustainability and digital innovation.",
    longDescription:
      "Asoantioquia is a modern web platform developed for a recycling company dedicated to promoting environmental sustainability in Antioquia. Built with React 18+, TanStack Router, and Supabase, the site provides an optimized user experience to showcase the organization’s recycling programs, environmental initiatives, and community projects. Its clean design and fast performance reflect both the company’s ecological mission and its commitment to digital modernization.",
    technologies: ["React 18+", "TanStack Router", "Supabase", "Tailwind CSS"],
    image:
      "https://ecpcjtmfcgfwpsjfetsf.supabase.co/storage/v1/object/public/projects/AsoAntioquia.png", // puedes reemplazarla por una imagen real
    demoUrl: "https://web-asoantioquia-v2.vercel.app/",
    githubUrl: "https://github.com/DevRickyX/Web-Asoantioquia.git",
    featured: false,
    category: "Web Development",
  },

  {
    id: 3,
    title: "Dorall Downtown",
    description:
      "Comprehensive real estate management system with dashboards, business control, and recurring user access.",
    longDescription:
      "Dorall Downtown is a full-featured real estate management system built with React 18+, TanStack Router, Supabase, and Tailwind CSS. It includes a complete dashboard for administrators, business management tools, and a client area for recurring users. The platform streamlines property administration, sales tracking, and customer interaction, offering a secure, modern, and intuitive experience for both managers and clients. Designed with scalability and performance in mind, Dorall Downtown bridges digital innovation with real estate business needs.",
    technologies: ["React 18+", "TanStack Router", "Supabase", "Tailwind CSS"],
    image:
      "https://ecpcjtmfcgfwpsjfetsf.supabase.co/storage/v1/object/public/projects/Doral%20D..png",
    demoUrl: "https://dorall-downtown.vercel.app/",
    githubUrl: "https://github.com/DevRickyX/Dorall-Downtown",
    featured: true,
    category: "Full Stack Development",
  },

  {
    id: 4,
    title: "Nómadas Cargo",
    description:
      "Dual mobile app ecosystem for cargo management — connecting transporters and load generators in real time.",
    longDescription:
      "Nómadas Cargo is a comprehensive logistics ecosystem composed of two mobile applications: Nómadas Transportador and Nómadas Generador. Both apps are developed in Flutter with Dart and designed to optimize freight management and logistics operations. The platform connects transporters with companies and individuals who need cargo delivery, enabling real-time tracking, route management, and secure communication. With a clean and intuitive interface, Nómadas Cargo brings efficiency, transparency, and digital transformation to the logistics sector.",
    technologies: ["Flutter", "Dart", "Firebase", "BloC Pattern"],
    image:
      "https://ecpcjtmfcgfwpsjfetsf.supabase.co/storage/v1/object/public/projects/Nomadas%20Cargo.png",
    demoUrl:
      "https://play.google.com/store/apps/developer?id=Nomadas+Cargo&hl=es_CO",
    githubUrl:
      "https://play.google.com/store/apps/developer?id=Nomadas+Cargo&hl=es_CO",
    featured: true,
    category: "Mobile Development",
  },
];
