# AI Work Rules & Guidelines

이 문서는 AI 어시스턴트가 프로젝트를 이해하고 일관성 있게 작업하기 위한 규칙을 정의합니다.

## 1. Project Context (프로젝트 맥락)
- **Project Name**: Dentric (덴트릭) - 데이터 기반 치과 경영/마케팅 솔루션
- **Type**: 정적 랜딩 페이지 (Static Landing Page)
- **Tech Stack**:
  - **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+)
  - **No Frameworks**: React, Vue, jQuery 등 사용 금지 (가벼운 유지보수 목적)
  - **Libs**: EmailJS (폼 전송용)

## 2. Git Workflow (작업 방식)
이제부터 모든 작업은 **브랜치(Branch)**를 생성하여 진행합니다.
1.  **Branch Creation**: `main`에서 직접 작업 금지.
    - 기능 추가: `feature/기능명` (예: `feature/dark-mode`)
    - 버그 수정: `fix/버그명` (예: `fix/mobile-menu`)
    - 기타 작업: `chore/작업명` (예: `chore/ai-rules`)
2.  **Commit Message**: [Conventional Commits](https://www.conventionalcommits.org/) 규칙 준수
    - `feat: ...` (기능)
    - `fix: ...` (수정)
    - `docs: ...` (문서)
    - `style: ...` (코드 포맷팅, 세미콜론 등)
    - `refactor: ...` (기능 변경 없는 코드 개선)
3.  **Push**: 작업 브랜치로 Push 후 PR(Pull Request) 또는 Merge 진행.

## 3. Coding Standards (코딩 컨벤션)
- **Language**:
  - 기본 텍스트는 **한국어(Korean)** 기준.
  - 다국어 지원은 `js/i18n.js`를 통해 관리 (하드코딩 지양).
- **CSS**:
  - Semantic Class naming (BEM 스타일 권장하지만 유연하게).
  - CSS Variables (`:root`) 적극 활용 (색상, 폰트 등).
- **Code Quality**:
  - 불필요한 주석 제거.
  - 들여쓰기(Indent)는 4칸 또는 2칸 일관성 유지.

## 4. Security (보안)
- **Secret Keys**: `Private Key`, `Secret Key` 등 민감 정보는 **절대 커밋 금지**.
- **Public Keys**: Client-side SDK용 Public Key는 허용하되, 반드시 도메인 화이트리스트(Whitelisting) 설정을 병행할 것.

## 5. Deployment (배포)
- **Target**: GitHub Pages
- **Branch**: `main` 브랜치 소스가 배포됨.
