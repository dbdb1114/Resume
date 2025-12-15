import { Mail, Github, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ResumeHeader() {
  return (
    <div id="ResumeHeaderContainer" className=" bg-gray-800 dark:bg-gray-875 text-white p-10 border-b-4 border-gray-800 dark:border-gray-700">
      <div className="flex flex-row gap-6 items-center">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <ImageWithFallback 
            src="src/img/my_image.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />
        </div>
        
        {/* Name and Title */}
        <div className="flex-1">
          <h1 className="text-3xl mb-2 tracking-wide">유정현</h1>
          <p className="text-lg text-gray-300 mb-6">백엔드 개발자</p>
          
          {/* Contact Info */}
          <div id='header-info' className="flex flex-wrap gap-4 text-sm text-gray-300">
            <a href="mailto:example@email.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              dbdb1114@naver.com
            </a>
            <a href="https://github.com/dbdb1114" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={16} />
              https://github.com/dbdb1114
            </a>
             <a href="tel:010-1234-5678" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              010-5421-5350
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              경기도 성남, 대한민국
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}