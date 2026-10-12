"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CharacterComparison() {
  const [position, setPosition] = useState(50);
  const [interacted, setInteracted] = useState(false);

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
          onPointerDown={() => setInteracted(true)}
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
