import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

/** GA4 측정 ID. 공개 값이라 코드에 두어도 무방하다(HTML에 그대로 노출된다). */
const GA_MEASUREMENT_ID = "G-PXF93TZ391";

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | KidStory",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI 동화",
    "맞춤 동화책",
    "어린이 그림동화",
    "아이 동화 만들기",
    "동화 생성 앱",
    "잠자리 동화",
    "키드스토리",
  ],
  generator: "KidStory",
  applicationName: "KidStory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "KidStory",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-kidstory-story.jpg",
        width: 1200,
        height: 630,
        alt: "오늘 밤에는, 네 이야기를 읽어 줄게. 우리 아이가 주인공이 되는 KidStory 그림책",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-kidstory-story.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "28beb596098cf0a9d719917e7a0a978792c08722",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
      {/* GA4. 로컬 개발 트래픽이 집계에 섞이지 않도록 프로덕션 빌드에서만 로드한다. */}
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
