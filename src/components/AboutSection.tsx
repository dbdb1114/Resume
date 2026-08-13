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
        스마트 글래스 웹 솔루션 스타트업에서 React/Nuxt 프론트엔드 실무를 담당하며,{" "}
        <strong className="text-gray-900 dark:text-gray-100">
          신규 기능의 설계–구현–매뉴얼–고객 대응까지 엔드투엔드 오너십
        </strong>
        을 갖고 일하고 있습니다.{" "}
        동시에 레거시 구조 개선·빌드 안정화·보안 취약점 조치처럼{" "}
        <strong className="text-gray-900 dark:text-gray-100">
          제품을 오래 운영하는 데 필요한 일
        </strong>
        을 맡으며, 제가 가장 몰입하는 지점이 제품을 지속적으로 개선하는 순간임을 확인했습니다.{" "}
        SI 백엔드(Spring Boot)에서 출발해 프론트엔드 실무를 더한 풀스택 기반으로, 이제는{" "}
        <strong className="text-gray-900 dark:text-gray-100">
          하나의 제품을 길게 성장시키는 조직
        </strong>
        에서 이 경험을 쓰고자 합니다.
      </p>
    </motion.section>
  );
}
