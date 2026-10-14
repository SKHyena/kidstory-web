"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/app-links";

/** These measure button clicks, not completed app installations. */
export function trackAppDownload(platform: "ios" | "android") {
  // Match the production-only GoogleAnalytics component in the root layout.
  if (process.env.NODE_ENV !== "production") return;

  sendGAEvent("event", platform === "ios" ? "app_store_click" : "play_store_click", {
    app_platform: platform,
    button_location: "download_section",
    link_url: platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL,
  });
}
