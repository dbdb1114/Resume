import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface Course {
  name: string;
  period: string;
  description: string[];
  tech: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}
const courses: Course[] = [
  {
    name: 'Redis & MSA 활용 교육 참여',
    period: '5개월',
    description: [
      'Redis Lua Script를 활용한 동시성 처리',
      '분산락 활용한 동시성 처리',
      'Spring Cloud 기반 MSA 아키텍처 설계'
    ],
    tech: ['WebFlux', 'Spring Cloud', 'MSA', 'Java', 'JPA']
  }
];

const certifications: Certification[] = [
  {
    name: '정보처리산업기사',
    issuer: '한국산업인력공단',
    date: '2024.10'
  },
  {
    name: '컴퓨터 활용능력 2급',
    issuer: '대한상공회의소',
    date: '2025.05'
  }
];


export function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 uppercase tracking-wider">학력 및 자격증</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* 왼쪽: 교육 과정 */}
        <div>
          <h3 className="text-lg mb-4 text-gray-800 dark:text-gray-200">교육 과정</h3>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 p-3 border-gray-400 dark:border-gray-600 pl-4"
              >
                <h4 className="text-gray-900 dark:text-gray-100">{course.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{course.period}</p>
                
                <ul className="space-y-1 mt-2">
                  {course.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {course.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 자격증 */}
        <div>
          <h3 className="text-lg mb-4 text-gray-800 dark:text-gray-200">자격증</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="p-2 bg-gray-200 dark:bg-gray-700 h-fit">
                  <Award size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-gray-100">{cert.name}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}