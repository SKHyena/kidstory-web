"use client";

import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/app-links";
import { trackAppDownload } from "@/lib/analytics";

export function AppStoreDownload({ children }: { children: ReactNode }) {
  return (
    <a
      className="store-link"
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAppDownload("ios")}
    >
      {children}
    </a>
  );
}
