import { APP_STORE_URL, PLAY_STORE_URL, SUPPORT_EMAIL } from "@/lib/app-links";
import { COMPANY_NAME } from "@/lib/company";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

interface Faq {
  question: string;
  answer: string;
}

/**
 * 랜딩 JSON-LD. 앱(MobileApplication)·운영사(Organization)·FAQ(FAQPage)를 한 그래프로 묶는다.
 * 값은 모두 정적 상수라 escape가 필요 없지만, 닫는 태그 주입을 막기 위해 `<`만 치환한다.
 */
export function StructuredData({ faqs }: { faqs: readonly Faq[] }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        url: SITE_URL,
        email: SUPPORT_EMAIL,
        logo: `${SITE_URL}/images/landing/app-icon.webp`,
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "KidStory",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/images/og-kidstory-story.jpg`,
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS, Android",
        inLanguage: "ko",
        offers: { "@type": "Offer", price: "0", priceCurrency: "KRW", description: "무료 설치, 맞춤 동화 제작은 앱 내 크레딧 구매" },
        installUrl: [APP_STORE_URL, PLAY_STORE_URL].filter(Boolean),
        author: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
