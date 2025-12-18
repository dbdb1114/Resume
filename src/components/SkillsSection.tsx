import { motion } from 'motion/react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: '프론트엔드',
    skills: ['Next','React', 'Markup','Recoil', 'Tailwind CSS', 'React Query']
  },
  {
    category: '백엔드',
    skills: ['Spring Boot', 'Spring Web Flux', 'PostgresSQL', 'MySQL', 'Redis']
  },
  {
    category: '도구 & 기타',
    skills: ['Git', 'Docker', 'nGrinder', 'Scouter']
  },
  {
    category: '언어',
    skills: ['Java', 'Javascript', 'SQL']
  }
];

export function SkillsSection() {
  return (
    <motion.section
      id="skills-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 uppercase tracking-wider">기술 스택</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-sm uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm border border-gray-300 dark:border-gray-600 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
