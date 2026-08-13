import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface MainTask {
  title: string;
  details: string[];
}

interface Project {
  title: string;
  subtitle?: string;
  role?: string;
  mainTasks: MainTask[];
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    "title": "스마트 글래스 관리 및 다자간 영상통화 웹 시스템 (주식회사 와트, 재직 중)",
    "subtitle": "Nuxt2 기반 관리 웹에 React 앱을 iframe으로 삽입하는 구조의 스마트 글래스 관리 시스템 + Nuxt2/Nuxt4 기반 다자간 영상통화 시스템",
    "role": "SW개발 > 웹 개발",
    "mainTasks": [
      {
        "title": "레포·브랜치 구조 통합",
        "details": [
          "스마트 글래스 비즈니스 로직이 분산되어 있던 React 레포 2개를 1개로 통합",
          "고객사·제품별(코오롱, 도로공사, 미트) 분기 브랜치를 통합 브랜치 체계로 재편(기존 수렴 브랜치 부재), EnterpriseConfig 기반 설정 분기로 전환",
          "배포용으로만 쓰이던 불필요 레포를 제거해 단일 레포 배포 구조로 단순화"
        ]
      },
      {
        "title": "관리 웹(Nuxt) SPA 전환 및 디자인 개편",
        "details": [
          "URL 기반 풀 페이지 라우팅 구조를 SPA로 전환하고 개편 디자인 적용, 배포 계획 수립·실행"
        ]
      },
      {
        "title": "WebRTC TURN 인증 개선",
        "details": [
          "하드코딩 장기 자격증명의 보안 문제를 제기하고 HMAC 기반 임시 자격증명(RFC 7635) 전환을 설계·주도",
          "프론트(RTCPeerConnection) 임시 자격증명 연동 직접 구현"
        ]
      },
      {
        "title": "신규 기능 개발 및 오너십",
        "details": [
          "Google OTP 2차 인증 연계 — 유저 플로우 설계, 사용 정책 수립 주도, 기능 매뉴얼 작성",
          "웹 설문지 시스템 — 유저 플로우 설계부터 구현·매뉴얼·사내(영업부) 기능 공유까지 담당",
          "고객사 UI/UX 개선 요청을 1주 내 수정·배포, 고객 문의 원인 분석·대응(사용자 이슈/시스템 이슈 판별)",
          "다국어(i18n) 지원 — Nuxt 관리 웹·React 앱에 한국어·영어·스페인어 적용",
          "LLM 기반 위험 요소 체크리스트 페이지 프론트엔드 구현"
        ]
      },
      {
        "title": "레거시 개선 및 빌드·배포 안정화",
        "details": [
          "2~3천 줄 규모 레거시 비즈니스 로직 파일 점진적 분해·모듈화",
          "Jenkins 빌드 OOM — 프로세스 트리 메모리 측정으로 병목 특정, webpack 병렬 워커 튜닝으로 피크 메모리 약 42% 절감 및 빌드 시간 단축",
          "npm 개발 서버로 운영되던 프론트엔드 배포를 Nginx 정적 리소스 서빙으로 전환"
        ]
      },
      {
        "title": "AI 활용 개발 체계 구축",
        "details": [
          "머지 후 검증, CSS 사이드이펙트 분석, 레거시 기능 스캔 등 반복 작업을 Claude Code 스킬·프로토콜로 정형화해 클라이언트 프로젝트 전반에 공통 적용",
          "브랜치별 분석 문서 체계로 대규모 레거시 분석 컨텍스트 관리, 의존성 그래프 추출(ts-morph)로 분석 범위 최소화"
        ]
      },
      {
        "title": "보안 취약점 개선",
        "details": [
          "백엔드 로그 분석 중 인증번호가 브라우저 단에 노출되는 취약점 발견 — 노출 경로 특정 후 조치 및 재발 검증",
          "고객사별 보안 강화 — 민감 정보 로깅 제거, IP 하드코딩 제거, 파일 업로드 검증 개선 (현대·한전)"
        ]
      }
    ],
    "tech": [
      "React",
      "Nuxt",
      "Vue",
      "WebRTC",
      "Nginx",
      "webpack"
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
      "HTML/CSS",
      "Vanilla JS",
      "Java",
      "Spring",
      "MyBatis",
      "PostgreSQL"
    ]
  },
  {
    "title": "콜센터 민원관리 웹 애플리케이션 UI/UX 개선 및 유지보수",
    "role": "SW개발 > 웹 개발자 인턴",
    "mainTasks": [
      {
        "title": "레거시 모듈 표준화 및 DB 이관",
        "details": [
          "공통 코드 구조 설계·구현으로 화면별 커스터마이징 부담 절감, 인증·세션 기반 접근 제어 모듈로 동시 로그인 정책 관리",
          "Oracle → MariaDB 이관 지원 — 애플리케이션 영향 범위 점검 및 데이터 검증"
        ]
      }
    ],
    "tech": [
      "HTML/CSS",
      "Vanilla JS",
      "Spring",
      "jQuery",
      "Oracle",
      "MariaDB"
    ]
  },
  {
    "title": "FEMS 공장 데이터 시각화 웹 시스템 (외주 개발, 2인 팀)",
    "role": "SW개발 > 풀스택 — 백엔드 전담 및 화면단 80% 담당",
    "mainTasks": [
      {
        "title": "실시간 에너지 사용량 시각화 구현 및 페이지 로딩 성능 개선",
        "details": [
          "Chart.js 기반 실시간·누적 에너지 데이터 시각화 화면 구현",
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
          "통계 쿼리 응답 속도 2~3초 → 약 1초 수준으로 개선"
        ]
      }
    ],
    "tech": [
      "Vanilla JS",
      "Chart.js",
      "HTML/CSS",
      "Thymeleaf",
      "Java",
      "Spring Boot"
    ]
  },
  {
    "title": "한정판매 시스템",
    "subtitle": "특정 시간 오픈되는 선착순 판매 서비스 (항해99 취업 리부트 과정 산출물)",
    "mainTasks": [
      {
        "title": "요구사항 변화에 따라 Monolithic → MSA 전환",
        "details": [
          "Spring Cloud Config로 공통 설정 중앙화, AMQP 기반 Spring Cloud Bus로 설정 반영 자동화",
          "Docker Compose 기반 서비스 컨테이너화 및 서비스 간 통신 구성"
        ]
      },
      {
        "title": "대용량 트래픽 대응 및 성능 최적화",
        "details": [
          "대용량 트래픽 대응을 위해 재고 관리 API를 MVC → WebFlux 전환",
          "재고 API Redis 동시성 문제 해결 — 100건 이상 동시 요청 시 NPE 발생을 병렬 테스트로 동시성 이슈로 특정, Redisson 분산락 도입으로 부하 테스트에서 재현되던 동시성 에러 완전 제거",
          "상품 목록·상세 조회 성능 개선 — Blocking I/O + DB 부하로 최대 6초 지연 → Redis 캐시 도입으로 평균 700ms, TPS 155.7 → 423 (nGrinder 측정)"
        ]
      }
    ],
    "tech": [
      "Spring Boot",
      "Spring WebFlux",
      "Spring Cloud",
      "JPA",
      "MySQL",
      "Redis",
      "Docker",
      "nGrinder",
      "Scouter"
    ],
    "link": "https://azure-attention-c2e.notion.site/8c199ca32cb642618dd33a2cf20ff5f7?pvs=4"
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
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-1">
              {project.title}
            </h3>

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