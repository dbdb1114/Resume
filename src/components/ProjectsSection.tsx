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
    "title": "공공기관 공간·데이터 관리 시스템 개발",
    "role": "SW개발 > 백엔드",
    "mainTasks": [
      {
        "title": "데이터 호출 수 통계 모듈 개발",
        "details": [
          "MyBatis Interceptor 기반으로 API/쿼리 호출 수 집계 로직 구현",
          "Interceptor 내부에서 DataSource 객체 참조 불가 이슈를 구조 변경으로 해결",
          "집계 데이터를 관리자 대시보드에서 ECharts로 시각화(일/주/월 추이, Top N)하여 모니터링 기능 제공"        
        ]
      },
      {
        "title": "DB 스키마 이관 및 운영 반영",
        "details": [
          "Java 코드로 사용/미사용 테이블 분류 자동화하여 이관 범위 정리",
          "SQL(PL/SQL) 작성 → 개발 서버 검증 후 운영 서버에 반영",
          "information_schema 기반으로 PostgreSQL 오브젝트(테이블/뷰/제약조건 등) 연관관계 파악 및 영향도 분석"
        ]
      },
      {
        "title": "청년공간·유휴공간 관리 기능 구현",
        "details": [
          "권한 시스템 도입하여 사용자별 데이터 마스킹 처리",
          "엑셀 업로드/다운로드 기능 구현(어노테이션+리플렉션 기반으로 컬럼 추가/변경에 유연한 구조 설계)",
          "엑셀 업로드 성능 개선: 5분 → 2분(주소 정제 로직 병목을 파드 로그로 특정 후 병렬 처리 적용)"
        ]
      },
      {
        "title": "대용량 공공데이터 파싱 안정화",
        "details": [
          "수만 건 파싱 중 비정형 response로 인한 예외 발생 시 원인 추적 어려움 개선",
          "예외 케이스를 별도 로그/파일로 분리 저장하여 문제 데이터만 빠르게 식별 및 수정 가능하도록 처리"
        ]
      }
    ],
    "tech": [
      "Java",
      "Spring",
      "Spring Boot",
      "MyBatis(Interceptor)",
      "PostgreSQL(information_schema)",
      "Reflection",
      "Kubernetes(파드 로그 확인)"
    ]
  },
  {
    "title": "콜센터 민원관리 웹 애플리케이션 개선",
    "role": "SW개발 > 백엔드 인턴",
    "mainTasks": [
      {
        "title": "레거시 애플리케이션 기능 모듈 확장 및 표준화",
        "details": [
          "텍스트 에디터 사용 현황을 전수 조사해 교체 범위를 정리하고, 에디터 적용 방식을 표준화",
          "공통 적용 코드 구조를 설계·구현해 화면별 커스터마이징 부담을 줄이고 유지보수성을 개선",
          "레거시 프로젝트에 인증/세션 기반 접근 제어 모듈을 도입하여 동시 로그인 케이스를 정책적으로 관리",
          "서버 이중화(멀티 인스턴스) 환경에서 발생하던 로그인 기록 중복 이슈를 재현 → 흐름별 로그로 원인 구간 특정 → 코드 정리 및 회귀 테스트로 조치하여 운영 안정성을 개선"
        ]
      },
      {
        "title": "DB 이관 지원(Oracle → MariaDB)",
        "details": [
          "Oracle에서 MariaDB로 데이터베이스 이관 작업 지원",
          "이관 과정에서 애플리케이션 영향 범위 점검 및 검증 작업 수행",
        ]
      }
    ],
    "tech": [
      "Java",
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
        "title": "대용량 연산 구간 성능 개선 및 안정화",
        "details": [
          "동시 연산 요청 시 DB 서버 다운 이슈를 재현하고 병목 구간을 특정",
          "쿼리/함수 사용 방식과 데이터 처리량을 변수로 테스트하여 안정적인 처리 기준을 도출",
          "DB 연산 일부를 애플리케이션 처리로 전환해 부하를 분산",
          "응답 속도 2~3초 → ~1초 수준으로 개선"
        ]
      },
      {
        "title": "실시간 에너지 사용량 대시보드 시각화 구현",
        "details": [
          "Chart.js 기반 데이터 시각화 화면 개발을 80% 이상 담당",
          "실시간/누적 데이터 조회 결과를 차트 컴포넌트로 구성해 가독성과 모니터링 편의성 강화"
        ]
      },
      {
        "title": "관리 기능 CRUD 설계 및 구현",
        "details": [
          "직원/장비/공지사항 관리 기능의 CRUD를 설계하고 화면·API 흐름을 구현",
          "권한/관리자 관점의 운영 시나리오를 고려해 데이터 관리 동선을 정리"
        ]
      }
    ],
    "tech": [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "Chart.js",
      "HTML",
      "CSS"
    ]
  }
];

export function ProjectsSection() {
  return (
    <motion.section
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