/**
 * 앱 스토어 및 문의 링크 상수.
 *
 * 랜딩페이지의 모든 다운로드 CTA가 이 값을 참조하므로, 스토어 URL이 바뀌면
 * 이 파일만 고치면 된다.
 */

/** Android 패키지명 (kidstory-flutter의 applicationId와 동일) */
export const ANDROID_PACKAGE = "com.skhyena.kidstory";

/** Google Play 스토어 링크. 패키지명으로 확정되는 주소라 별도 설정이 필요 없다. */
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

/**
 * App Store 링크.
 *
 * ⚠️ App Store는 숫자 앱 ID가 있어야 주소가 완성된다(번들 ID로는 만들 수 없다).
 * App Store Connect > 앱 정보 > "Apple ID"(예: 6501234567) 값을 아래에 넣으면 된다.
 * 비워두면 랜딩의 App Store 버튼이 "준비 중"으로 비활성 표시된다.
 */
export const APP_STORE_ID = "";

export const APP_STORE_URL = APP_STORE_ID
  ? `https://apps.apple.com/kr/app/id${APP_STORE_ID}`
  : "";

/** 고객 문의 이메일 (개인정보처리방침·계정삭제 안내와 동일한 주소) */
export const SUPPORT_EMAIL = "skhyena728@gmail.com";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "[KidStory] 문의드립니다"
)}`;
