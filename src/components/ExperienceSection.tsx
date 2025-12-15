import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: '제타럭스 시스템',
    position: '백엔드 개발자',
    period: '2024.07 - 2025.01',
    description: [
      "공공기관 관리자 페이지 구축 프로젝트에 참여하여 Spring Boot 기반 REST API를 설계·구현",
      "Vanilla.js 기반 화면 구현 및 백엔드 API 연동으로 관리자 기능 흐름 지원",
      "기술 명세서/산출물 작성 보조 및 기능 단위 문서화로 개발 커뮤니케이션 지원",
      "Docker 기반 개발·배포 환경을 활용해 실행 환경 일관성 확보 및 배포 안정성 강화"
    ]
  },
  {
    company: '소프트디비 코리아',
    position: '백엔드 개발자 (인턴)',
    period: '2023.09 - 2023.12',
    description: [
	    "공공기관 민원 관리 콜센터 웹 애플리케이션의 유지보수 및 신규 기능 개발(Sprint 기반)",
	    "요구사항 정리 및 설계에 주도적으로 참여하여 기능 범위/처리 흐름을 명확히 정리",
	    "jQuery 기반 인터랙티브 기능 구현 및 백엔드 연동으로 상담/민원 처리 UX 개선",
	    "Oracle DB → MariaDB 마이그레이션 과정에서 호환성 이슈 대응 및 정합성 검증에 참여"
    ]
  },
  {
    company: '주식회사 이상',
    position: '백엔드 개발자 (프리랜서)',
    period: '2023.03 - 2023.07',
    description: [
      "MySQL 기반 데이터 모델 설계 및 Spring Boot REST API 설계·구현",
      "요구사항 정리/설계 중심으로 기능 흐름을 구조화하고 개발 일정/범위 조율에 기여",
      "DB 통계 쿼리 튜닝을 통해 30초 → 5초로 개선하여 통계 조회 성능 대폭 향상",
      "HTML/CSS/JavaScript 기반 반응형 웹 UI 구현 및 API 연동"
    ]
  }
];

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
            
            <ul className="space-y-1 mt-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
