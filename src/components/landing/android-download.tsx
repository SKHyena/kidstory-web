"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function AndroidDownload() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="store-link android-download">
          <svg viewBox="0 0 24 26" width="23" height="26" fill="currentColor" aria-hidden="true">
            <path d="m2 2 12 11L2 24V2zm13 12 3 3-13 7 10-10zm4-5 4 2.5c1 .7 1 2.3 0 3L19 17l-4-4 4-4zM5 2l13 7-3 3L5 2z" />
          </svg>
          <span><small>Android 휴대전화 · 태블릿</small>Google Play</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="android-dialog-overlay" />
        <Dialog.Content className="android-dialog">
          <Image src="/images/landing/app-icon.webp" alt="" width={64} height={64} className="android-dialog-icon" />
          <Dialog.Title className="android-dialog-title">Android 버전은 준비 중이에요</Dialog.Title>
          <Dialog.Description className="android-dialog-description">
            Android 휴대전화와 태블릿에서도<br />
            KidStory를 만날 수 있도록 준비하고 있어요.<br />
            조금만 기다려 주세요.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button type="button" className="android-dialog-confirm">확인</button>
          </Dialog.Close>
          <Dialog.Close className="android-dialog-close" aria-label="닫기">
            <X size={20} aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
