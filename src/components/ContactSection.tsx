import { Mail, Phone, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 uppercase tracking-wider">연락처</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
          className="flex dark:bg-gray-700 items-center gap-3 p-3 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700"
        >
          <div className="p-2 bg-gray-200 dark:bg-gray-700">
            <Mail className="text-gray-700 dark:text-gray-300" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">이메일</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">dbdb1114@naver.com</p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
          className="flex items-center dark:bg-gray-700 gap-3 p-3 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700"
        >
          <div className="p-2 bg-gray-200 dark:bg-gray-700">
            <Phone className="text-gray-700 dark:text-gray-300" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">전화번호</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">010-5421-5350</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
