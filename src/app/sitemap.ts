import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * 정적 라우트 4개만 노출한다. /stories는 당분간 색인 대상에서 제외한다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/account-deletion`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
