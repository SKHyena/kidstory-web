"use client";

import { PLAY_STORE_URL } from "@/lib/app-links";
import { trackAppDownload } from "@/lib/analytics";

export function AndroidDownload() {
  return (
    <a
      className="store-link"
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAppDownload("android")}
    >
      <svg viewBox="0 0 24 26" width="23" height="26" fill="currentColor" aria-hidden="true">
        <path d="m2 2 12 11L2 24V2zm13 12 3 3-13 7 10-10zm4-5 4 2.5c1 .7 1 2.3 0 3L19 17l-4-4 4-4zM5 2l13 7-3 3L5 2z" />
      </svg>
      <span><small>Android 휴대전화 · 태블릿</small>Google Play</span>
    </a>
  );
}
