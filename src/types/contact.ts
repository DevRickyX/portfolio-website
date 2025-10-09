import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  gradient: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  requirements: string;
}
