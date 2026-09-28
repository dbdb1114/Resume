import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import resume from '../data/resume.json';

interface Course {
  name: string;
  period: string;
  description: string[];
  tech: string[];
  link?: string;
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

const education: Degree[] = resume.education.degrees;

const courses: Course[] = resume.education.courses;

const certifications: Certification[] = resume.education.certifications;


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

                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={14} />
                    상세 기록 보기
                  </a>
                )}
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
