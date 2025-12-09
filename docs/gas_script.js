/**
 * Google Apps Script for Dentric Contact Form
 * 
 * 1. Extensions > Apps Script
 * 2. Paste this code.
 * 3. Deploy > New deployment > Select "Web app"
 * 4. Execute as: "Me" (나)
 * 5. Who has access: "Anyone" (누구나)
 * 6. Copy the "Web App URL" (Exec URL)
 */

// 설정값 (Configuration)
const CONFIG = {
    // 알림을 받을 이메일 주소
    TO_EMAIL: "contact@dentric.co.kr", // 본인의 이메일로 변경하세요
    // 이메일 제목
    EMAIL_SUBJECT: "[Dentric] 새로운 무료 진단 신청",
    // 허용할 도메인 (CORS & Security)
    ALLOWED_ORIGINS: [
        "https://project-dental-marketing.github.io", // 배포 도메인
        "http://127.0.0.1:5500", // 로컬 테스트용
        "http://localhost:5500"  // 로컬 테스트용
    ]
};

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const params = e.parameter;

        // 1. CORS & Origin Check (Optional but recommended)
        // GAS Web App은 기본적으로 CORS를 완벽히 제어하기 어렵지만, 
        // Referer 헤더 등을 체크하여 로직단에서 거부할 수 있습니다.

        // 2. 데이터 저장 (Save to Sheet)
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = doc.getSheetByName('Contact') || doc.insertSheet('Contact');

        // 헤더가 없으면 생성
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Hospital', 'Name', 'Phone', 'Message']);
        }

        const timestamp = new Date();
        sheet.appendRow([
            timestamp,
            params.hospital,
            params.name,
            params.phone,
            params.message
        ]);

        // 3. 이메일 전송 (Send Email)
        const htmlBody = `
      <h2>새로운 문의가 접수되었습니다.</h2>
      <p><strong>병원명:</strong> ${params.hospital}</p>
      <p><strong>담당자:</strong> ${params.name}</p>
      <p><strong>연락처:</strong> ${params.phone}</p>
      <p><strong>문의내용:</strong><br>${params.message}</p>
      <hr>
      <p><i>이 메일은 Google Apps Script를 통해 발송되었습니다.</i></p>
    `;

        MailApp.sendEmail({
            to: CONFIG.TO_EMAIL,
            subject: `${CONFIG.EMAIL_SUBJECT} - ${params.hospital}`,
            htmlBody: htmlBody
        });

        // 4. 성공 응답
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        // 5. 에러 응답
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
