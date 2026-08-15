import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://kidstory.skhyena.com";
const SITE_TITLE = "KidStory — 우리 아이가 주인공이 되는 AI 맞춤 동화";
const SITE_DESCRIPTION =
  "아이의 사진 한 장이면 충분해요. AI가 우리 아이를 주인공으로 한 그림 동화를 만들어 드립니다. 감정을 담은 음성 읽어주기까지, 오늘 밤 특별한 동화를 선물하세요.";

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
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KidStory — 우리 아이가 주인공이 되는 AI 맞춤 동화",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
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
    </html>
  );
}
