"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CharacterComparison() {
  const [position, setPosition] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const activePointer = useRef<number | null>(null);

  function updatePosition(event: PointerEvent<HTMLInputElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width) return;
    setPosition(Math.round(Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))));
  }

  function startDrag(event: PointerEvent<HTMLInputElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    // Native range dragging varies on mobile when its thumb fills the image.
    // Track the finger directly, retaining the native input for keyboard/AT use.
    event.preventDefault();
    activePointer.current = event.pointerId;
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    setInteracted(true);
    updatePosition(event);
  }

  function moveDrag(event: PointerEvent<HTMLInputElement>) {
    if (activePointer.current !== event.pointerId) return;
    event.preventDefault();
    updatePosition(event);
  }

  function endDrag(event: PointerEvent<HTMLInputElement>) {
    if (activePointer.current !== event.pointerId) return;
    if (event.type === "pointerup") updatePosition(event);
    activePointer.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <figure className="character-comparison">
      <div
        className="comparison-frame"
        style={{ "--comparison-position": `${position}%` } as CSSProperties}
        data-interacted={interacted}
      >
        <div className="comparison-image comparison-character">
          <Image
            src="/images/landing/jieun-character.webp"
            alt="앱에서 생성한 지은의 수채화 캐릭터"
            fill
            sizes="(max-width: 760px) 90vw, 360px"
            draggable={false}
          />
        </div>
        <div className="comparison-image comparison-photo">
          <Image
            src="/images/landing/harin-photo-example-v3.webp"
            alt="지은 캐릭터를 만드는 데 사용한 AI 생성 예시 사진"
            fill
            sizes="(max-width: 760px) 90vw, 360px"
            draggable={false}
          />
        </div>
        <span className="comparison-divider" aria-hidden="true" />
        <span className="comparison-handle" aria-hidden="true">
          <ChevronLeft size={17} />
          <span />
          <ChevronRight size={17} />
        </span>
        <input
          className="comparison-range"
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          aria-label="사진과 동화 캐릭터 비교"
          aria-valuetext={`예시 사진 ${position}%, 동화 캐릭터 ${100 - position}%`}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={() => { activePointer.current = null; }}
          onKeyDown={() => setInteracted(true)}
          onChange={(event) => {
            setPosition(Number(event.target.value));
            setInteracted(true);
          }}
        />
      </div>
      <figcaption>
        <span>사진 속 우리 아이</span>
        <span>동화 속 주인공</span>
      </figcaption>
    </figure>
  );
}
