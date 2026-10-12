"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Pointer,
  BookOpen,
  UserRound,
  Shirt,
  Library,
  Layers,
  Heart,
  Smartphone,
  Tablet,
} from "lucide-react";

const scenes = [
  { key: "library", label: "나의 책장", icon: Library, title: "한 권씩 쌓이는\n우리 아이의 세계.", detail: "아이와 함께 만든 이야기를 책장에 모아요. 좋아하는 책은 언제든 다시 펼쳐요.", note: "오늘도, 가장 좋아하는 한 권", phone: "iphone_library", tablet: "ipad_library" },
  { key: "character", label: "주인공", icon: UserRound, title: "이 이야기의\n주인공은 바로 나!", detail: "우리 아이를 닮은 캐릭터를 고르고, 새로운 이야기의 주인공으로 초대해요.", note: "익숙한 얼굴로 시작하는 모험", phone: "iphone_character_select", tablet: "ipad_character_select" },
  { key: "outfit", label: "옷 입히기", icon: Shirt, title: "오늘은 어떤\n모습으로 떠날까요?", detail: "마음에 드는 옷을 골라 입히면, 같은 아이의 또 다른 모습이 완성돼요.", note: "작은 취향까지, 우리 아이답게", phone: "iphone_outfit_sheet", tablet: "ipad_outfit_sheet" },
  { key: "reader", label: "동화 읽기", icon: BookOpen, title: "그림 속으로\n푹 빠지는 시간.", detail: "그림과 이야기를 천천히 따라가요. 태블릿을 가로로 펼치면 아이와 함께 읽기 더 편해요.", note: "한 장면에 함께 머무는 밤", phone: "iphone_reader_p1", tablet: "ipad_land_p1" },
  { key: "pages", label: "한 장씩", icon: Layers, title: "손끝으로 넘기는\n다음 이야기.", detail: "진짜 그림책을 읽듯 한 장씩 넘겨요. 다음 장면에는 어떤 일이 기다릴까요?", note: "다음 장도 읽어 주세요", phone: "iphone_page_turn", tablet: "ipad_page_turn" },
  { key: "community", label: "자랑하기", icon: Heart, title: "좋은 이야기는\n함께 나눠요.", detail: "우리 아이의 동화를 자랑하고, 다른 가족이 만든 특별한 이야기도 만나 보세요.", note: "우리의 이야기가, 또 다른 즐거움으로", phone: "iphone_community", tablet: "ipad_community" },
];

type Device = "phone" | "tablet";

function ScreenCarousel({
  device,
  hasSwiped,
  onSwipe,
  initialIndex,
  onSelect,
}: {
  device: Device;
  hasSwiped: boolean;
  onSwipe: () => void;
  initialIndex: number;
  onSelect: (index: number) => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [startIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const [viewportRef, api] = useEmblaCarousel({
    startIndex,
    align: "center",
    loop: true,
    skipSnaps: false,
    duration: 28,
  });
  const items = scenes;
  const current = items[index];
  const CurrentIcon = current.icon;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || hasSwiped) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [hasSwiped]);

  useEffect(() => {
    if (!api) return;
    let dragging = false;
    const updateSelection = () => {
      const next = api.selectedScrollSnap();
      setIndex(next);
      onSelect(next);
    };
    const handleSelection = () => {
      updateSelection();
      onSwipe();
    };
    const handlePointerDown = () => {
      dragging = true;
      setIsDragging(true);
    };
    const handlePointerUp = () => {
      dragging = false;
      setIsDragging(false);
    };
    const handleScroll = () => {
      // Even a short swipe that returns to the same slide dismisses the hint.
      if (dragging) onSwipe();
    };
    updateSelection();
    api.on("select", handleSelection);
    api.on("reInit", updateSelection);
    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);
    api.on("scroll", handleScroll);
    return () => {
      api.off("select", handleSelection);
      api.off("reInit", updateSelection);
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
      api.off("scroll", handleScroll);
    };
  }, [api, onSwipe, onSelect]);

  return (
    <div
      className="gallery-carousel"
      role="region"
      aria-roledescription="캐러셀"
      aria-label={`${device === "phone" ? "스마트폰" : "태블릿"} 앱 화면 미리보기`}
    >
      <div className="gallery-scenes" role="group" aria-label="둘러볼 앱 기능">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <button key={item.key} type="button" aria-pressed={index === i}
              onClick={() => { api?.scrollTo(i); onSwipe(); }}>
              <Icon size={16} aria-hidden="true" />{item.label}
            </button>
          );
        })}
      </div>
      <div className="gallery-stage" ref={stageRef}>
        <div className="gallery-editorial">
          <div className="gallery-scene-heading"><CurrentIcon size={18} aria-hidden="true" /><span>INSIDE KIDSTORY</span></div>
          <div className="gallery-caption" aria-live="polite" aria-atomic="true" key={current.key}>
            <span className="slide-number">{String(index + 1).padStart(2, "0")}<span> / {String(items.length).padStart(2, "0")}</span></span>
            <h3>{current.title}</h3>
            <p>{current.detail}</p>
          </div>
          <span className="gallery-handwritten">{current.note}</span>
          <span className="gallery-editorial-star illustrated-sparkle" aria-hidden="true" />
        </div>
        <div className="gallery-showcase">
        <div
          className="gallery-viewport"
          ref={viewportRef}
          tabIndex={0}
          aria-label="앱 화면을 좌우로 넘겨보세요"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget || !api) return;
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              api.scrollPrev();
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              api.scrollNext();
            }
            if (event.key === "Home") {
              event.preventDefault();
              api.scrollTo(0);
            }
            if (event.key === "End") {
              event.preventDefault();
              api.scrollTo(items.length - 1);
            }
          }}
        >
          <div className="gallery-track">
            {items.map((item, i) => (
              <div
                key={item.key}
                className={`gallery-slide${i === index ? " is-selected" : ""}${device === "tablet" && item.key === "reader" ? " is-landscape" : ""}`}
                role="group"
                aria-roledescription="슬라이드"
                aria-label={`${items.length}개 중 ${i + 1}: ${item.title}`}
              >
                <div className="gallery-slide-frame">
                  <Image
                    src={`/images/landing/screens/${item[device]}.webp`}
                    alt={`KidStory 실제 앱 화면: ${item.title}`}
                    width={device === "phone" ? 720 : item.key === "reader" ? 1600 : 1050}
                    height={device === "phone" ? 1561 : item.key === "reader" ? 1200 : 1400}
                    sizes={
                      device === "phone"
                        ? "(max-width: 760px) 64vw, 245px"
                        : "(max-width: 760px) 78vw, 620px"
                    }
                    className="gallery-screen"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isInView && !hasSwiped && !isDragging && (
          <div className="gallery-swipe-hint" aria-hidden="true">
            <span className="gallery-swipe-trail" />
            <span className="gallery-swipe-hand">
              <Pointer size={30} strokeWidth={1.7} />
            </span>
          </div>
        )}
        </div>
      </div>
      <div className="gallery-bottom">
        <div className="gallery-progress" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>{items.map((item, i) => <i key={item.key} className={i === index ? "is-current" : ""} />)}</div>
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>
        <div className="gallery-controls">
          <button
            type="button"
            aria-label="이전 앱 화면"
            disabled={!api}
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            aria-label="다음 앱 화면"
            disabled={!api}
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AppGallery() {
  const [device, setDevice] = useState<Device>("phone");
  const [hasSwiped, setHasSwiped] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const dismissSwipeHint = useCallback(() => setHasSwiped(true), []);
  return (
    <div className={`app-gallery gallery-${device}`}>
      <div className="gallery-heading">
        <div className="gallery-copy">
          <span className="eyebrow">A LITTLE LOOK INSIDE</span>
          <h2>
            작은 화면 안에,
            <br />
            커다란 이야기 세상.
          </h2>
          <p>고르고, 만들고, 읽는 즐거움. 앱 속에서 만나 보세요.</p>
        </div>
        <div className="device-switch" role="group" aria-label="미리보기 기기">
          <button
            type="button"
            aria-pressed={device === "phone"}
            onClick={() => setDevice("phone")}
          >
            <Smartphone size={17} /> 스마트폰
          </button>
          <button
            type="button"
            aria-pressed={device === "tablet"}
            onClick={() => setDevice("tablet")}
          >
            <Tablet size={18} /> 태블릿
          </button>
        </div>
      </div>
      <ScreenCarousel
        key={device}
        device={device}
        hasSwiped={hasSwiped}
        onSwipe={dismissSwipeHint}
        initialIndex={sceneIndex}
        onSelect={setSceneIndex}
      />
    </div>
  );
}
