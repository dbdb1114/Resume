import { Mail, Github, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import resume from '../data/resume.json';

export function ResumeHeader() {
  const { basics } = resume;
  return (
    <div id="ResumeHeaderContainer" className=" bg-gray-800 dark:bg-gray-875 text-white p-10 border-b-4 border-gray-800 dark:border-gray-700">
      <div className="flex flex-row gap-6 items-center">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <ImageWithFallback
            src="https://github.com/dbdb1114/Resume/blob/main/public/my_image.png?raw=true"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />
        </div>
        
        {/* Name and Title */}
        <div className="flex-1">
          <h1 className="text-3xl mb-2 tracking-wide">{basics.name}</h1>
          <p className="text-lg text-gray-300 mb-6">{basics.title}</p>
          
          {/* Contact Info */}
          <div id='header-info' className="flex flex-wrap gap-4 text-sm text-gray-300">
            <a href={`mailto:${basics.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              {basics.email}
            </a>
            <a href={basics.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={16} />
              GitHub
            </a>
            <a href={basics.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <ExternalLink size={16} />
              Portfolio
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {basics.location}
            </div>
             <a href={`tel:${basics.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              {basics.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}