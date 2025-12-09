# EmailJS 설정 가이드

Dentric 웹사이트의 '무료 진단 신청' 기능을 작동시키기 위해 EmailJS 설정이 필요합니다.
아래 순서대로 따라 하신 후 `index.html`과 `js/main.js` 파일에 Key 값을 넣어주세요.

## 1. 회원가입 및 로그인
1. [EmailJS 웹사이트](https://www.emailjs.com/) 접속
2. **"Sign Up Free"** 클릭하여 회원가입 후 로그인

## 2. Email Service 생성 (메일 보내는 곳 연동)
1. 대시보드에서 **"Email Services"** 탭 클릭
2. **"Add New Service"** 클릭
3. **Gmail** (또는 사용하시는 메일 서비스) 선택
4. **"Connect Account"** 버튼을 눌러 본인 구글 계정 연동
5. **"Create Service"** 클릭
6. 생성된 **Service ID** (예: `service_xxxxx`) 복사
   - 👉 `js/main.js`의 `YOUR_SERVICE_ID` 부분에 붙여넣기

## 3. Email Template 생성 (메일 내용 설정)
1. 대시보드에서 **"Email Templates"** 탭 클릭
2. **"Create New Template"** 클릭
3. 이메일 제목과 내용을 아래와 같이 수정:
   - **Subject:** `[Dentric] 새로운 무료 진단 신청이 접수되었습니다!`
   - **Content:**
     ```
     병원명: {{hospital}}
     담당자명: {{name}}
     연락처: {{phone}}
     문의사항:
     {{message}}
     ```
     *(웹사이트 폼의 `name` 속성들과 일치해야 합니다)*
4. **"Save"** 클릭
5. **Template ID** (예: `template_xxxxx`) 복사
   - 👉 `js/main.js`의 `YOUR_TEMPLATE_ID` 부분에 붙여넣기

## 4. Public Key 확인
1. 대시보드에서 **"Account"** (프로필 아이콘) 클릭
2. **"Public Key"** 복사
   - 👉 `index.html`의 `YOUR_PUBLIC_KEY` 부분에 붙여넣기

## 5. 보안 설정 (권장)
1. **"Security"** 탭으로 이동 (또는 Account 페이지 내 Security 섹션)
4. **"Allowed Origins"** (허용 도메인)에 웹사이트 주소 추가
   - **`https://project-dental-marketing.github.io`** 입력 후 `Add Domain` 클릭
   - (개발 중에는 `localhost`도 필요할 수 있음)

5. **API Settings 설정**
   - ✅ **Allow EmailJS API for non-browser applications**: **체크 해제 (OFF)**
     - 브라우저에서만 작동하도록 제한하여 보안을 높입니다.
   - ✅ **Use Private Key**: **체크 해제 (OFF)**
     - 우리는 Public Key 방식을 사용하므로 꺼두셔야 합니다. 이걸 켜면 작동하지 않습니다.

---

## 🛠️ 적용할 파일 위치

### `index.html` (19번째 줄 근처)
```html
emailjs.init("YOUR_PUBLIC_KEY"); // 여기에 Public Key 붙여넣기
```

### `js/main.js` (54~55번째 줄 근처)
```javascript
const serviceID = 'YOUR_SERVICE_ID';   // 여기에 Service ID 붙여넣기
const templateID = 'YOUR_TEMPLATE_ID'; // 여기에 Template ID 붙여넣기
```
