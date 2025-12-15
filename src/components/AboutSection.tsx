import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 uppercase tracking-wider dark:text-gray-300">소개</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        문제를 정의하고 코드로 해결해 나가는 과정<span style={{fontSize:"14px"}} className='text-gray-500 dark:text-gray-400'>(특히 디버깅과 개선을 통해 완성도를 높이는 경험)</span>에서 강한 몰입과 성취감을 느끼며 개발을 시작했습니다.
         현재는 백엔드 직무를 중심으로 핵심 기술 역량을 탄탄히 다지고 있으며, 
         실무에서도 백엔드 기반의 경험을 확장해 커리어를 쌓고 있습니다. 
         더불어 개인 프로젝트에서는 다양한 AI 도구를 활용해 프론트엔드 영역까지 폭넓게 학습하며 
         제품을 end-to-end로 구현하는 역량을 키우고 있습니다.
      </p>
    </motion.section>
  );
}
