# Google Apps Script 연동 가이드

EmailJS를 대체하여 무료로 안정적인 폼 전송 시스템을 구축하는 방법입니다.

## 1. Google Sheet 준비
1. 구글 스프레드시트(Google Sheets)를 새로 만듭니다. (이름 예: `Dentric 문의 DB`)
2. 상단 메뉴에서 **확장 프로그램(Extensions) > Apps Script**를 클릭합니다.

## 2. 스크립트 작성
1. `Code.gs` 파일의 내용을 모두 지웁니다.
2. `docs/gas_script.js` 파일의 내용을 복사해서 붙여넣습니다.
3. `CONFIG` 변수 내부의 `TO_EMAIL`을 실제 알림 받을 이메일 주소로 수정합니다.
4. `Ctrl + S`를 눌러 저장합니다.

## 3. 배포 (Deployment)
1. 우측 상단 **배포(Deploy) > 새 배포(New deployment)** 클릭.
2. **유형 선택(Select type)** 톱니바퀴 > **웹 앱(Web app)** 선택.
3. 설정:
   - **설명(Description)**: `v1` 등 입력.
   - **다음 사용자로 실행(Execute as)**: **나(Me)** (필수!).
   - **액세스 권한이 있는 사용자(Who has access)**: **모든 사용자(Anyone)** (필수!).
4. **배포(Deploy)** 클릭.
   - 처음 배포 시 권한 승인 창이 뜹니다.
   - `권한 검토` > 계정 선택 > `고급(Advanced)` > `...이동(Go to ...)` > `허용(Allow)` 클릭.
5. **웹 앱 URL(Web App URL)**이 생성됩니다. 이 주소를 복사하세요.
   - 예: `https://script.google.com/macros/s/AKfycbx.../exec`

## 4. 프론트엔드 연결
1. `js/main.js` 파일을 엽니다.
2. `const GAS_WEB_APP_URL` 값을 위에서 복사한 URL로 교체합니다.

---
**주의사항**:
- URL이 `.../exec`로 끝나는지 확인하세요 (`.../dev`는 테스트용이라 방문자에게 작동 안 함).
- 코드를 수정하면 **반드시 '새 배포'**를 통해 버전을 올려야 반영됩니다.
