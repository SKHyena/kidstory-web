import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, FileText, ShieldCheck, UserRound } from "lucide-react";
import { SUPPORT_MAILTO } from "@/lib/app-links";
import { FooterLegal } from "@/components/footer-legal";
import "@/app/landing.css";
import "./legal-page.css";

interface LegalPageProps {
  title: string;
  effectiveDate?: string;
  updatedDate?: string;
  current: "/privacy" | "/terms" | "/account-deletion";
  children: React.ReactNode;
}

const documents = [
  { href: "/terms", label: "이용약관", icon: FileText },
  { href: "/privacy", label: "개인정보처리방침", icon: ShieldCheck },
  { href: "/account-deletion", label: "계정·데이터 삭제", icon: UserRound },
] as const;

/** Shared brand shell; policy text and effective dates remain in each page. */
export function LegalPage({ title, effectiveDate, updatedDate, current, children }: LegalPageProps) {
  return (
    <div className="landing legal-page">
      <a className="skip-link" href="#legal-content">본문으로 건너뛰기</a>
      <header className="site-header">
        <nav className="site-container nav-inner" aria-label="주 메뉴">
          <Link href="/" className="wordmark nav-brand" aria-label="KidStory 홈">
            <span className="nav-icon-wrap">
              <Image src="/images/landing/app-icon.webp" alt="" width={44} height={44} className="nav-app-icon" />
            </span>
            <span className="nav-brand-copy">
              <span>KidStory</span>
              <small>우리 아이가 주인공인 동화</small>
            </span>
          </Link>
          <Link href="/" className="legal-home"><ArrowLeft size={16} /> 홈으로</Link>
          <Link href="/#download" className="button nav-download">
            <span>앱 다운로드</span>
            <span className="nav-download-arrow"><ArrowRight size={15} aria-hidden="true" /></span>
          </Link>
        </nav>
      </header>

      <main className="site-container legal-main">
        <div className="legal-intro">
          <span className="legal-kicker">KIDSTORY GUIDE</span>
          <h1>{title}</h1>
          <p>우리 가족의 이야기, 안심하고 시작할 수 있도록.</p>
          {(effectiveDate || updatedDate) && (
            <div className="legal-dates">
              {effectiveDate && <span>시행일 <strong>{effectiveDate}</strong></span>}
              {updatedDate && <span>최종 수정 <strong>{updatedDate}</strong></span>}
            </div>
          )}
          <Image className="legal-intro-star" src="/images/landing/star-eight.webp" alt="" width={90} height={90} />
        </div>
        <div className="legal-layout">
          <aside className="legal-sidebar">
            <nav className="legal-document-nav" aria-label="이용 안내 문서">
              {documents.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowRight className="legal-nav-arrow" size={15} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="legal-sidebar-note">
              <p>더 궁금한 점이 있나요?</p>
              <a href={SUPPORT_MAILTO}>편하게 문의해 주세요 <ArrowRight size={14} /></a>
            </div>
          </aside>
          <article id="legal-content" className="legal-content" aria-label={title}>
            {children}
          </article>
        </div>
      </main>

      <footer className="site-footer legal-footer">
        <div className="site-container">
          <div className="footer-top">
            <div>
              <Link className="wordmark" href="/">KidStory</Link>
              <p>아이의 오늘이, 오래 간직할 이야기가 되도록.</p>
            </div>
            <div className="footer-links">
              {documents.map(({ href, label }) => <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>{label}</Link>)}
              <a href={SUPPORT_MAILTO}>문의하기</a>
            </div>
          </div>
          <div className="footer-bottom">
            <FooterLegal />
            <span>Made with a little imagination.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
