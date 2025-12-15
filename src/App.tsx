import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { motion } from 'motion/react';
import { ResumeHeader } from './components/ResumeHeader';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: '이력서',
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id='pdf'
          ref={componentRef}
          className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-500"
        >
          <ResumeHeader />
          
          <div className="p-10 space-y-10">
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            {/* <ContactSection /> */}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-center space-x-4"
        >
          <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors print:hidden"
          >
            이력서 출력
          </button>
        </motion.div>
      </div>
    </div>
  );
}
