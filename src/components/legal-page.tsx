import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalPageProps {
  title: string;
  /** 예: "2026년 7월 13일" */
  effectiveDate: string;
  /** 예: "2026년 7월 13일" */
  updatedDate?: string;
  /** 현재 페이지 라우트 ("/privacy" | "/terms") — 하단 크로스링크에서 활성 표시용 */
  current: "/privacy" | "/terms";
  children: React.ReactNode;
}

/**
 * 이용약관·개인정보처리방침 등 법적 고지 페이지 공통 레이아웃.
 * 랜딩 페이지(src/app/page.tsx)와 동일한 헤더/푸터/타이포 톤을 공유한다.
 */
export function LegalPage({
  title,
  effectiveDate,
  updatedDate,
  current,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-1.5" />홈
              </Link>
            </Button>
            <div className="h-5 w-px bg-gray-200" />
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">KidStory</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            시행일: {effectiveDate}
            {updatedDate ? ` | 최종 수정일: ${updatedDate}` : ""}
          </p>

          <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">{children}</div>

          {/* 문서 간 크로스링크 */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/terms"
              className={
                current === "/terms"
                  ? "font-semibold text-gray-900"
                  : "text-gray-400 hover:text-gray-600 transition-colors"
              }
            >
              이용약관
            </Link>
            <Link
              href="/privacy"
              className={
                current === "/privacy"
                  ? "font-semibold text-gray-900"
                  : "text-gray-400 hover:text-gray-600 transition-colors"
              }
            >
              개인정보처리방침
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2026 KidStory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
