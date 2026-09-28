import { motion } from 'motion/react';
import resume from '../data/resume.json';

export function AboutSection() {
  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 uppercase tracking-wider dark:text-gray-300">
        소개
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {resume.about.split(/\*\*(.+?)\*\*/g).map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="text-gray-900 dark:text-gray-100">{part}</strong>
          ) : (
            part
          )
        )}
      </p>
    </motion.section>
  );
}
