import { BUSINESS_NUMBER, COMPANY_NAME, REPRESENTATIVE } from "@/lib/company";

/** 푸터 하단 사업자 표기. 광고 매체 심사가 요구하는 상호·대표자·사업자등록번호를 모두 담는다. */
export function FooterLegal() {
  return (
    <span className="footer-legal">
      {COMPANY_NAME} · 대표 {REPRESENTATIVE} · 사업자등록번호 {BUSINESS_NUMBER}
      <br />© 2026 {COMPANY_NAME}. All rights reserved.
    </span>
  );
}
