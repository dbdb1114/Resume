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
      <h2 className="text-xl mb-4 pb-2 border-b-2 border-gray-900 dark:border-gray-300 uppercase tracking-wider dark:text-gray-300">
        소개
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        문제를 정의하고 코드로 해결해 나가는 과정
        <span
          style={{ fontSize: "14px" }}
          className="text-gray-500 dark:text-gray-400"
        >
          (특히 디버깅과 개선을 통해 사용자 경험과 완성도를 높이는 경험)
        </span>
        에서 강한 몰입과 성취감을 느끼며 개발을 시작했습니다. 
        <strong className="text-gray-900 dark:text-gray-100">
        현재는 백엔드 직무를 중심으로 핵심 기술 역량을 쌓고 있지만,  
          프론트엔드 영역에서도 UI 설계, 상태 관리, 사용자 흐름 구현까지 직접 경험하며
          서비스의 최종 완성도를 책임지는 개발자
        로 성장하고 있습니다. 
        </strong>
        개인 프로젝트에서는 React 기반의 프론트엔드를 직접 구현하고,
        다양한 AI 도구를 활용해 기획 → UI → 서버 → 배포까지 전 과정을 수행하며 
        실제 사용자를 고려한 <strong className="text-gray-900 dark:text-gray-100">End-to-End</strong> 제품 개발 경험
        을 지속적으로 쌓고 있습니다.
      </p>
    </motion.section>
  );
}
