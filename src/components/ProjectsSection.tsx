import { motion } from "motion/react";
import { ExternalLink, Building2, Calendar } from "lucide-react";
import resume from '../data/resume.json';

interface MainTask {
  title: string;
  details: string[];
}

interface Project {
  title: string;
  company?: string;
  period?: string;
  subtitle?: string;
  role?: string;
  mainTasks: MainTask[];
  tech: string[];
  link?: string;
}

const projects: Project[] = resume.projects;

export function ProjectsSection() {
  return (
    <motion.section
      id="projects-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 uppercase tracking-wider">
        프로젝트
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -3,
              transition: { duration: 0.2 },
            }}
            className="dark:bg-gray-700 p-5 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 cursor-default"
          >
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-1">
              {project.title}
            </h3>

            {(project.company || project.period) && (
              <div className="flex flex-wrap gap-3 mb-1 text-sm text-gray-600 dark:text-gray-400">
                {project.company && (
                  <span className="flex items-center gap-1">
                    <Building2 size={14} />
                    {project.company}
                  </span>
                )}
                {project.period && (
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.period}
                  </span>
                )}
              </div>
            )}

            {project.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {project.subtitle}
              </p>
            )}

            {project.role && (
              <div className="mb-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">담당업무:</span> {project.role}
                </p>
              </div>
            )}

            {project.mainTasks.map((mainTask, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {mainTask.title}
                </p>

                <ul className="space-y-1 ml-4">
                  {mainTask.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={14} />
                상세 기록 보기
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}