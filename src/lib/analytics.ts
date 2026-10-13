"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { APP_STORE_URL } from "@/lib/app-links";

/** These measure button clicks, not completed app installations. */
export function trackAppDownload(platform: "ios" | "android") {
  // Match the production-only GoogleAnalytics component in the root layout.
  if (process.env.NODE_ENV !== "production") return;

  if (platform === "ios") {
    sendGAEvent("event", "app_store_click", {
      app_platform: "ios",
      button_location: "download_section",
      link_url: APP_STORE_URL,
    });
  } else {
    sendGAEvent("event", "android_coming_soon_click", {
      app_platform: "android",
      button_location: "download_section",
    });
  }
}
