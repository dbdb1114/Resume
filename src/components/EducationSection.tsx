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

interface Degree {
  school: string;
  major: string;
  degree: string;
  period: string;
  status?: string;
}

const education: Degree[] = [
  {
    school: '학점은행제',
    major: '컴퓨터공학과',
    degree: '학사',
    period: '2027.02',
    status: '취득 예정'
  }
];

const courses: Course[] = [
  {
    name: 'Redis 심화 활용 교육',
    period: '2025.02 - 2025.05',
    description: [
      'Redisson 분산락 기반 동시성 제어',
      'Lua Script 기반 원자적 연산 설계 — 분산락 대비 동시성 처리 전략 비교·적용',
      '영화 예매 시스템 구축 프로젝트 수행'
    ],
    tech: ['Spring Boot', 'Redis', 'Java']
  },
  {
    name: '항해99 취업 리부트',
    period: '2024.02 - 2024.05',
    description: [
      'Spring Cloud 기반 MSA 아키텍처 설계',
      'Redisson 분산락 기반 동시성 처리',
      '한정판매(선착순 이커머스) 시스템 구축 프로젝트 수행'
    ],
    tech: ['Spring Boot', 'Spring WebFlux', 'Spring Cloud', 'JPA', 'Redis']
  }
];

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    date: '2026.06'
  },
  {
    name: 'SQL 개발자 (SQLD)',
    issuer: '한국데이터산업진흥원',
    date: '2026.03'
  },
  {
    name: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2025.12'
  }
];


export function EducationSection() {
  return (
    <motion.section
      id="education-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 uppercase tracking-wider">학력 · 교육 과정 · 자격증</h2>

      {/* 학력 */}
      <div className="mb-8">
        <h3 className="text-lg mb-4 text-gray-800 dark:text-gray-200">학력</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="p-2 bg-gray-200 dark:bg-gray-700 h-fit">
                <GraduationCap size={24} className="text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-gray-100">{edu.school} — {edu.major} {edu.degree}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {edu.period}{edu.status ? ` ${edu.status}` : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
