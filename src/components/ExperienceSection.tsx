import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import resume from '../data/resume.json';

interface ExpGroup {
  label?: string;
  items: string[];
}

interface Experience {
  company: string;
  position: string;
  period: string;
  summary?: string;
  groups: ExpGroup[];
  tech?: string[];
}

const experiences: Experience[] = resume.experience;

export function ExperienceSection() {
  return (
    <motion.section
      id="experience-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 uppercase dark:text-gray-300 tracking-wider">경력</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-4 border-gray-400 dark:border-gray-600 pl-6"
          >
            <h3 className="text-lg text-gray-900 dark:text-gray-100">{exp.company}</h3>
            <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Briefcase size={14} />
                {exp.position}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {exp.period}
              </span>
            </div>

            {exp.summary && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.summary}</p>
            )}

            <div className="mt-3 space-y-3">
              {exp.groups.map((group, gi) => (
                <div key={gi}>
                  {group.label && (
                    <h4 className="text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      {group.label}
                    </h4>
                  )}
                  <ul className="space-y-1">
                    {group.items.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {exp.tech && exp.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
