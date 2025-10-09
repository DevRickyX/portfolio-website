import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '../types';

export const contactInfo: ContactInfo[] = [
  { 
    icon: Mail, 
    title: 'Email', 
    value: 'sricardodev@gmail.com', 
    gradient: 'from-emerald-500 to-green-400' 
  },
  { 
    icon: Phone, 
    title: 'Phone', 
    value: '+1 (555) 123-4567', 
    gradient: 'from-green-500 to-lime-400' 
  },
  { 
    icon: MapPin, 
    title: 'Location', 
    value: 'Available Worldwide', 
    gradient: 'from-lime-500 to-emerald-400' 
  }
];
