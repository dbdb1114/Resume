import { motion } from "motion/react";

interface MainTask {
  title: string;
  details: string[];
}

interface Project {
  title: string;
  role: string;
  mainTasks: MainTask[];
  tech: string[];
}

const projects: Project[] = [
  {
    "title": "한국사 능력 검정 시험 학습 서비스",
    "role": "SW개발 > 웹 개발",
    "mainTasks": [
      {
        "title": "사용자 페이지 화면 구현",
        "details": [
          "기출문제 유형 선택부터 문제 풀이 페이지까지 사용자 플로우 전반의 화면 구현",
          "UI/UX 사용성 향상을 고려한 페이지 이동 구조 및 화면 흐름 설계"
        ]
      },
      {
        "title": "관리자 페이지 화면 구현",
        "details": [
          "TanStack Query를 활용한 API 캐싱 전략 적용으로 불필요한 API 요청 최소화",
          "문제 관리 기능을 위한 CRUD 페이지 구조 설계 및 화면 구현",
          "간단 퀴즈 관리 기능에 대한 CRUD 페이지 설계 및 구현",
          "문제 등록 전 미리보기 렌더링 기능을 제공하여 관리자 UX 개선"
        ]
      }
    ],
    "tech": [
      "React",
      "Next",
      "TanStackQuery",
      "Spring Boot",
      "MySQL"
    ]
  },
  {
    "title": "공공기관 공간·데이터 관리 시스템 개발",
    "role": "SW개발 > 웹 개발",
    "mainTasks": [
      {
        "title": "데이터 호출 수 통계 페이지 및 백엔드 개발",
        "details": [
          "집계 데이터를 관리자 대시보드에서 ECharts로 시각화(일/주/월 추이, Top N)하여 모니터링 기능 제공",
          "MyBatis Interceptor 기반으로 API 및 쿼리 호출 수 집계 로직 구현"
        ]
      },
      {
        "title": "공공기관 토지 관리 페이지 및 백엔드 개발",
        "details": [
          "권한 시스템을 도입해 사용자 권한별 데이터 마스킹 처리",
          "Vanilla JS 기반 관리자 페이지 화면 구현 및 입력 데이터 유효성 검증 처리",
          "엑셀 업로드/다운로드 기능 구현(어노테이션·리플렉션 기반으로 컬럼 변경에 유연한 구조 설계)",
          "엑셀 업로드 성능 개선: 5분 → 2분 (주소 정제 로직 병목을 파드 로그로 분석 후 병렬 처리 적용)"
        ]
      },
      {
        "title": "DB 스키마 이관 및 운영 반영",
        "details": [
          "Java 코드 기반으로 사용/미사용 테이블 분류 자동화하여 이관 범위 정리",
          "SQL(PL/SQL) 작성 후 개발 서버 검증을 거쳐 운영 서버에 반영",
          "information_schema 기반으로 PostgreSQL 오브젝트 간 연관관계 파악 및 영향도 분석"
        ]
      },
      {
        "title": "대용량 공공데이터 파싱 안정화",
        "details": [
          "대량 데이터 파싱 중 비정형 response로 인한 예외 발생 시 원인 추적이 어려운 문제 개선",
          "예외 케이스를 별도 로그·파일로 분리 저장하여 문제 데이터의 빠른 식별 및 수정 가능하도록 처리"
        ]
      }
    ],
    "tech": [
      "Markup",
      "VanillaJS",
      "Java",
      "Spring",
      "MyBatis(Interceptor)",
      "PostgreSQL(information_schema)"
    ]
  },
  {
    "title": "콜센터 민원관리 웹 애플리케이션 UI/UX 개선 및 유지보수",
    "role": "SW개발 > 웹 개발자 인턴",
    "mainTasks": [
      {
        "title": "레거시 애플리케이션 기능 모듈 확장 및 표준화",
        "details": [
          "애플리케이션 공통 라이브러리 교체 작업 수행",
          "공통 코드 구조를 설계·구현하여 화면별 커스터마이징 부담을 줄이고 유지보수성 개선",
          "인증·세션 기반 접근 제어 모듈을 도입해 동시 로그인 케이스를 정책적으로 관리"
        ]
      },
      {
        "title": "DB 이관 지원(Oracle → MariaDB)",
        "details": [
          "Oracle에서 MariaDB로의 데이터베이스 이관 작업 지원",
          "이관 과정에서 애플리케이션 영향 범위 점검 및 데이터 검증 수행"
        ]
      }
    ],
    "tech": [
      "Markup",
      "VanillaJS",
      "Spring",
      "jQuery",
      "Oracle",
      "MariaDB"
    ]
  },
  {
    "title": "FEMS 공장 데이터 시각화 웹 시스템",
    "role": "SW개발 > 백엔드/프론트엔드(풀스택)",
    "mainTasks": [
      {
        "title": "실시간 에너지 사용량 시각화 구현 및 페이지 로딩 성능 개선",
        "details": [
          "Chart.js 기반 데이터 시각화 화면 개발의 80% 이상을 담당",
          "실시간·누적 데이터 조회 결과를 차트 컴포넌트로 구성해 가독성과 모니터링 편의성 강화",
          "캐싱 전략을 적용해 페이지 재진입 시 로딩 속도를 개선하여 사용자 경험 향상"
        ]
      },
      {
        "title": "공장 관리 페이지 UI/UX 설계",
        "details": [
          "직원·장비·공지사항 관리 기능의 화면 구현 및 테이블, 페이지네이션 등 공통 UI 설계",
          "관리자 관점의 운영 시나리오를 고려해 데이터 관리 동선 정리"
        ]
      },
      {
        "title": "대용량 연산 구간 성능 개선 및 안정화",
        "details": [
          "동시 연산 요청 시 발생하는 DB 서버 다운 이슈를 재현하고 병목 구간 분석",
          "쿼리·함수 사용 방식과 데이터 처리량을 기준으로 테스트하여 안정적인 처리 기준 도출",
          "일부 DB 연산을 애플리케이션 처리로 전환해 부하 분산",
          "응답 속도 2~3초 → 약 1초 수준으로 개선"
        ]
      }
    ],
    "tech": [
      "VanillaJS",
      "ChartJS",
      "Markup",
      "Thymeleaf",
      "Java",
      "Spring Boot"
    ]
  }
];

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
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-3">
              {project.title}
            </h3>

            <div className="mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">담당업무:</span> {project.role}
              </p>
            </div>

            {project.mainTasks.map((mainTask, i) => (
              <div key={i} className="mb-3">
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold"></span> {mainTask.title}
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

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}