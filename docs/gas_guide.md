# Google Apps Script 연동 가이드 (v2 - 보안 강화)

EmailJS를 대체하여 무료로 안정적인 폼 전송 시스템을 구축하는 방법입니다.
**보안 업데이트(v2)**가 적용되었습니다: 허니팟(Honeypot) 및 속도 제한(Rate Limiting) 기능이 추가되었습니다.

## 1. Google Sheet 준비
1. 구글 스프레드시트(Google Sheets)를 새로 만듭니다. (이름 예: `Dentric 문의 DB`)
2. 상단 메뉴에서 **확장 프로그램(Extensions) > Apps Script**를 클릭합니다.

## 2. 스크립트 작성
1. `Code.gs` 파일의 내용을 모두 지웁니다.
2. `docs/gas_script.js` 파일의 내용을 복사해서 붙여넣습니다.
3. `CONFIG` 변수 내부의 `TO_EMAIL`을 실제 알림 받을 이메일 주소로 수정합니다.
4. `Ctrl + S`를 눌러 저장합니다.

## 3. 배포 (Deployment) - **중요: 수정 시 새 배포 필수**
1. 우측 상단 **배포(Deploy) > 새 배포(New deployment)** 클릭.
2. **유형 선택(Select type)** 톱니바퀴 > **웹 앱(Web app)** 선택.
3. 설정:
   - **설명(Description)**: `v2` (보안패치) 입력.
   - **다음 사용자로 실행(Execute as)**: **나(Me)** (필수!).
   - **액세스 권한이 있는 사용자(Who has access)**: **모든 사용자(Anyone)** (필수!).
4. **배포(Deploy)** 클릭.
   - 처음 배포라면 권한 승인 창이 뜹니다 (`권한 검토` > `고급` > `이동` > `허용`).
   - 이미 배포한 적이 있다면 URL이 유지될 수도 있지만, **'새 배포'**를 해야만 코드가 갱신됩니다.
5. **웹 앱 URL(Web App URL)**을 복사하세요.

## 4. 프론트엔드 연결
1. `js/main.js` 파일을 엽니다.
2. `const GAS_WEB_APP_URL` 값이 위에서 복사한 URL과 같은지 확인하고, 다르다면 교체합니다.

---
**보안 기능 안내**:
- **Honeypot**: 봇이 숨겨진 입력창을 채우면 자동으로 무시합니다.
- **Rate Limit**: 1분에 10회 이상 요청이 들어오면 일시적으로 차단하여 서버 부하를 막습니다.
