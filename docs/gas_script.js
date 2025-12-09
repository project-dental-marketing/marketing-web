/**
 * Google Apps Script for Dentric Contact Form (v2 - Secured)
 * 
 * 변경사항 (v2):
 * - Honeypot 체크 추가 (`website_hp`)
 * - Rate Limiting 추가 (IP 식별 불가로 전체 발송량 제한)
 */

// 설정값 (Configuration)
const CONFIG = {
    TO_EMAIL: "contact@dentric.co.kr", // 본인의 이메일로 변경하세요
    EMAIL_SUBJECT: "[Dentric] 새로운 무료 진단 신청",
    ALLOWED_ORIGINS: [
        "https://project-dental-marketing.github.io"
    ],
    // 보안 설정
    SECURITY: {
        HONEYPOT_FIELD: "website_hp", // 프론트엔드와 일치해야 함
        MAX_REQUESTS_PER_MIN: 10      // 1분당 최대 허용 요청 수 (전역)
    }
};

function doPost(e) {
    const lock = LockService.getScriptLock();
    // 락 대기 시간을 짧게 줄여서 봇 공격 시 시스템 부하 감소
    if (!lock.tryLock(5000)) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Server Busy' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    try {
        const params = e.parameter;

        // --- SECURITY CHECK 1: Honeypot ---
        // 봇은 보통 모든 필드를 채웁니다. 숨겨진 필드에 값이 있으면 봇으로 간주합니다.
        if (params[CONFIG.SECURITY.HONEYPOT_FIELD]) {
            // 봇에게는 성공한 척 응답하지만, 실제로는 저장/발송하지 않음
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': 0 }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // --- SECURITY CHECK 2: Rate Limiting ---
        // CacheService를 사용하여 단기간 과도한 요청 방지
        const cache = CacheService.getScriptCache();
        const count = Number(cache.get('request_count_1min') || 0);

        if (count >= CONFIG.SECURITY.MAX_REQUESTS_PER_MIN) {
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Rate Limit Exceeded' }))
                .setMimeType(ContentService.MimeType.JSON);
        }
        // 카운트 증가 (유효기간 60초)
        cache.put('request_count_1min', String(count + 1), 60);


        // 2. 데이터 저장 (Save to Sheet)
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = doc.getSheetByName('Contact') || doc.insertSheet('Contact');

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

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
