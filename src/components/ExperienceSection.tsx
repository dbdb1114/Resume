import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

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

const experiences: Experience[] = [
  {
    company: '주식회사 와트',
    position: '웹 개발자',
    period: '2026.01 - 재직 중 (계약직)',
    summary: '스마트 글래스 웹 솔루션(React/Nuxt) 유지보수 및 신규 기능 개발',
    groups: [
      {
        items: [
          '스마트 글래스 웹 솔루션(React/Nuxt) 유지보수·신규 기능 개발 — 한전·현대·코오롱 등 대기업 고객사 대응',
          '신규 기능(Google OTP 2차 인증, 웹 설문지)의 플로우 설계부터 구현·매뉴얼까지 엔드투엔드 담당',
          '관리 웹(Nuxt)·React 앱 다국어(i18n) 지원 — 한국어·영어·스페인어',
          '레포·브랜치 구조 통합 및 배포 체계 개선으로 고객사별 커스터마이징 운영 비용 절감',
          '보안 취약점 자체 발견·조치 및 고객사 보안 강화 요구 대응',
          'Jenkins 빌드 OOM 원인 분석·해결 — 피크 메모리 약 42% 절감',
          '반복 개발 작업(머지 검증, 레거시 분석 등)을 Claude Code 스킬로 정형화한 AI 활용 개발 체계 구축'
        ]
      }
    ],
    tech: ['React', 'Nuxt', 'Vue', 'WebRTC', 'Jenkins', 'webpack']
  },
  {
    company: '(주)에스이에스',
    position: '테스트 엔지니어',
    period: '2025.07 - 2026.01 (6개월)',
    groups: [
      {
        items: [
          '테스트 시나리오 설계 기반 HP 프린터 제품 기능·회귀 테스트 수행',
          '결함의 재현 절차·발생 조건을 명세화한 리포팅으로 개발팀 이슈 커뮤니케이션 수행'
        ]
      }
    ]
  },
  {
    company: '제타럭스 시스템',
    position: '웹 개발자',
    period: '2024.07 - 2025.01',
    groups: [
      {
        items: [
          '공공기관 공간·데이터 관리 시스템 프론트·백엔드 개발 — 통계 대시보드, 토지 관리, DB 스키마 이관',
          'Spring Boot·MyBatis 기반 REST API 및 JSP/Vanilla JS 화면 개발',
          'Docker 기반 개발·배포 환경 운영 및 기능 단위 문서화로 개발 커뮤니케이션 지원'
        ]
      }
    ]
  },
  {
    company: '소프트디비 코리아',
    position: '웹 개발자 (인턴)',
    period: '2023.09 - 2023.12',
    groups: [
      {
        items: [
          '공공기관 민원 콜센터 웹 애플리케이션 유지보수·신규 기능 개발 (Sprint 기반)',
          '공통 코드 구조 설계·구현으로 화면별 커스터마이징 부담 절감 및 유지보수성 개선',
          'Oracle → MariaDB 마이그레이션 시 호환성 이슈 대응 및 정합성 검증 참여'
        ]
      }
    ]
  },
  {
    company: '주식회사 이상',
    position: '웹 개발자 (프리랜서)',
    period: '2023.03 - 2023.07',
    groups: [
      {
        items: [
          '웹 서비스 프론트엔드(차트 시각화) 및 Spring Boot REST API 개발',
          'MySQL 데이터 모델 설계, 요구사항 정리·개발 일정/범위 조율 참여',
          'DB 통계 쿼리 튜닝으로 조회 성능 30초 → 5초 개선'
        ]
      }
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
