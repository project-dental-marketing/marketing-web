import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "services": "Services",
                "about": "About",
                "contact": "Contact"
            },
            "hero": {
                "title": "Data-Driven Dental Growth",
                "subtitle": "Proven by Data",
                "desc": "10 years of dental management expertise meets modern IT technology. We deliver proven results, not just gut feelings.",
                "cta_primary": "Get Free Diagnosis",
                "cta_secondary": "View Services"
            },
            "features": {
                "title": "Why Dental Tech?",
                "dashboard": "Integrated Dashboard",
                "dashboard_desc": "All your marketing data in one place. Check Naver, Kakao, and Google performance in real-time.",
                "report": "Automated Reports",
                "report_desc": "Weekly insights delivered every Monday morning. No more manual Excel work.",
                "landing": "High-Conversion Landing Pages",
                "landing_desc": "Medical law compliant templates that drive patient visits."
            },
            "footer": {
                "desc": "Your data-driven dental marketing partner.",
                "rights": "© 2025 Dental Tech. All rights reserved."
            },
            "contact": {
                "title": "Get Custom Strategy",
                "desc": "Need a marketing strategy tailored to your clinic? We propose data-driven solutions.",
                "name": "Clinic Name / Name",
                "email": "Email",
                "phone": "Phone",
                "message": "Message",
                "submit": "Get Proposal",
                "direct": "Contact Directly"
            },
            "whyus": {
                "title": "Why Choose Us?",
                "item1": "Data-Driven Decisions",
                "item2": "Proven Track Record",
                "item3": "Tailored Strategies",
                "item4": "Transparent Reporting",
                "image_placeholder": "Why Us Image"
            },
            "services_page": {
                "dashboard": {
                    "item1": "Real-time Data Integration",
                    "item2": "Intuitive Visualization",
                    "item3": "Channel Performance Comparison"
                },
                "report": {
                    "item1": "Automated Weekly/Monthly Reports",
                    "item2": "AI-Driven Insights",
                    "item3": "Action Item Proposals"
                },
                "landing": {
                    "item1": "Mobile-Optimized Design",
                    "item2": "Fast Loading Speed",
                    "item3": "A/B Testing Support"
                }
            },
            "about_page": {
                "role": "10-Year Full Stack Developer",
                "desc": "Transforming complex data into intuitive insights.\nResponsible for stable and scalable technical infrastructure.",
                "mission_title": "Our Mission",
                "mission_desc": "We believe that data and technology can revolutionize dental management.\nWe help hospitals grow through data-driven decision-making and create an environment where medical staff can focus solely on patient care.",
                "team_title": "Meet the Team",
                "ceo_role": "CEO / Dental Management Expert",
                "ceo_desc": "10 years of experience in dental clinic management.\nUnderstanding the core needs of hospital directors.",
                "cto_role": "CTO / Tech Lead",
                "cto_desc": "Ph.D. in Computer Science from KAIST.\nLeading the development of stable and scalable systems.",
                "marketing_role": "Head of Marketing",
                "marketing_desc": "Performance Marketing Specialist.\nMaximizing ROI through data-driven strategies."
            }
        }
    },
    ko: {
        translation: {
            "nav": {
                "home": "홈",
                "services": "서비스",
                "about": "회사 소개",
                "contact": "문의하기"
            },
            "hero": {
                "title": "치과 경영의 모든 것,",
                "subtitle": "데이터로 증명합니다",
                "desc": "10년의 치과 경영 노하우와 최신 IT 기술의 만남. 감에 의존하는 마케팅이 아닌, 확실한 성과를 보여드립니다.",
                "cta_primary": "무료 진단 받기",
                "cta_secondary": "서비스 더보기"
            },
            "features": {
                "title": "Dental Tech만의 차별점",
                "dashboard": "통합 대시보드",
                "dashboard_desc": "흩어진 마케팅 데이터를 한눈에. 네이버, 카카오, 구글 성과를 실시간으로 확인하세요.",
                "report": "자동화 리포트",
                "report_desc": "매주 월요일 아침, 지난주 성과 분석과 이번 주 전략이 담긴 리포트가 자동으로 도착합니다.",
                "landing": "고효율 랜딩페이지",
                "landing_desc": "의료법을 준수하면서도 환자의 내원을 유도하는 검증된 템플릿을 제공합니다."
            },
            "footer": {
                "desc": "데이터로 증명하는 치과 마케팅 파트너.\n원장님은 진료에만 집중하세요.",
                "rights": "© 2025 Dental Tech. All rights reserved."
            },
            "contact": {
                "title": "맞춤 전략 제안받기",
                "desc": "우리 병원에 딱 맞는 마케팅 전략이 필요하신가요?\n데이터 기반의 솔루션을 제안해 드립니다.",
                "name": "병원명 / 성함",
                "email": "이메일",
                "phone": "연락처",
                "message": "문의 내용",
                "submit": "제안받기",
                "direct": "직접 연락하기"
            },
            "whyus": {
                "title": "왜 Dental Tech인가요?",
                "item1": "데이터 기반 의사결정",
                "item2": "검증된 성공 사례",
                "item3": "맞춤형 전략",
                "item4": "투명한 성과 보고",
                "image_placeholder": "이미지 영역"
            },
            "services_page": {
                "dashboard": {
                    "item1": "실시간 데이터 연동",
                    "item2": "직관적인 시각화",
                    "item3": "채널별 성과 비교"
                },
                "report": {
                    "item1": "주간/월간 리포트 자동 발송",
                    "item2": "AI 기반 인사이트 제공",
                    "item3": "액션 아이템 제안"
                },
                "landing": {
                    "item1": "모바일 최적화 디자인",
                    "item2": "빠른 로딩 속도",
                    "item3": "A/B 테스트 지원"
                }
            },
            "about_page": {
                "role": "10년차 풀스택 개발자",
                "desc": "복잡한 데이터를 직관적인 인사이트로 변환합니다.\n안정적이고 확장 가능한 기술 인프라를 책임집니다.",
                "mission_title": "우리의 미션",
                "mission_desc": "우리는 데이터와 기술이 치과 경영을 혁신할 수 있다고 믿습니다.\n데이터 기반의 의사결정을 통해 병원의 성장을 돕고, 의료진이 환자 진료에만 집중할 수 있는 환경을 만듭니다.",
                "team_title": "팀 소개",
                "ceo_role": "CEO / 치과 경영 전문가",
                "ceo_desc": "치과 경영 10년 경력.\n원장님들의 고충을 누구보다 잘 이해하고 해결책을 제시합니다.",
                "cto_role": "CTO / 기술 총괄",
                "cto_desc": "KAIST 전산학 박사.\n안정적이고 확장 가능한 기술 인프라를 책임집니다.",
                "marketing_role": "마케팅 총괄",
                "marketing_desc": "퍼포먼스 마케팅 전문가.\n데이터 분석을 통해 광고 효율을 극대화합니다."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ko',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
