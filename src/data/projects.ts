import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    description: 'Next-generation e-commerce platform with AI-powered recommendations and seamless payment integration',
    longDescription: 'A comprehensive e-commerce solution built with React and Next.js, featuring real-time inventory management, AI-powered product recommendations, advanced search filters, and integrated payment processing with Stripe. The platform includes an admin dashboard for managing products, orders, and analytics.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/santiago/ecommerce-platform',
    featured: true,
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    description: 'Revolutionary mobile banking solution with biometric security and real-time analytics',
    longDescription: 'A secure mobile banking application developed with Flutter, featuring biometric authentication, real-time transaction monitoring, budget tracking, and investment portfolio management. The app includes push notifications, offline capabilities, and seamless integration with banking APIs.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://demo-fintech.example.com',
    githubUrl: 'https://github.com/santiago/fintech-mobile',
    featured: true,
    category: 'Mobile Development'
  },
  {
    id: 3,
    title: 'AI Analytics Dashboard',
    description: 'Intelligent business intelligence platform with predictive analytics and machine learning insights',
    longDescription: 'A sophisticated analytics dashboard built with React and TypeScript, featuring interactive charts, real-time data visualization, predictive analytics using machine learning models, and customizable reporting tools. The platform processes large datasets and provides actionable business insights.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'MySQL'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://demo-analytics.example.com',
    githubUrl: 'https://github.com/santiago/ai-analytics',
    featured: false,
    category: 'Web Development'
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'Modern social networking app with real-time messaging and content sharing',
    longDescription: 'A full-featured social media platform developed with React and Node.js, including real-time messaging, photo/video sharing, story features, user profiles, and advanced privacy controls. The platform supports millions of users with optimized performance and scalability.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Supabase'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://demo-social.example.com',
    githubUrl: 'https://github.com/santiago/social-platform',
    featured: false,
    category: 'Full Stack'
  }
];
