import { TechnologyGroup, FloatingTechIcon } from '../types';

export const technologies: TechnologyGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', level: 95 },
      { name: 'Next.js', icon: '▲', level: 90 },
      { name: 'TypeScript', icon: '📘', level: 88 },
      { name: 'Tailwind CSS', icon: '🎨', level: 92 }
    ],
    gradient: 'from-blue-500 to-cyan-400',
    delay: '0ms'
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'Flutter', icon: '🐦', level: 90 },
      { name: 'Dart', icon: '🎯', level: 85 },
      { name: 'React Native', icon: '📱', level: 80 },
      { name: 'iOS/Android', icon: '📲', level: 75 }
    ],
    gradient: 'from-green-500 to-emerald-400',
    delay: '100ms'
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 88 },
      { name: 'JavaScript', icon: '💛', level: 95 },
      { name: 'MySQL', icon: '🐬', level: 85 },
      { name: 'API Design', icon: '🔗', level: 90 }
    ],
    gradient: 'from-yellow-500 to-orange-400',
    delay: '200ms'
  },
  {
    category: 'Tools & Services',
    skills: [
      { name: 'Supabase', icon: '⚡', level: 85 },
      { name: 'Git', icon: '📝', level: 90 },
      { name: 'HTML/CSS', icon: '🌐', level: 95 },
      { name: 'DevOps', icon: '⚙️', level: 75 }
    ],
    gradient: 'from-purple-500 to-pink-400',
    delay: '300ms'
  }
];

export const floatingTechIcons: FloatingTechIcon[] = [
  { icon: '⚛️', name: 'React', delay: '0s', duration: '8s' },
  { icon: '🐦', name: 'Flutter', delay: '1s', duration: '10s' },
  { icon: '▲', name: 'Next.js', delay: '2s', duration: '9s' },
  { icon: '📘', name: 'TypeScript', delay: '3s', duration: '11s' },
  { icon: '🎯', name: 'Dart', delay: '4s', duration: '7s' },
  { icon: '🟢', name: 'Node.js', delay: '5s', duration: '12s' },
  { icon: '💛', name: 'JavaScript', delay: '6s', duration: '8s' },
  { icon: '🎨', name: 'Tailwind', delay: '7s', duration: '10s' },
  { icon: '⚡', name: 'Supabase', delay: '8s', duration: '9s' },
  { icon: '🐬', name: 'MySQL', delay: '9s', duration: '11s' }
];
