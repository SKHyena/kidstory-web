"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Check,
  ImagePlus,
  Info,
  Sparkles,
  Volume2,
} from "lucide-react";
import { CREDIT_RATES } from "@/lib/pricing";

export function CreditCalculator() {
  const [pages, setPages] = useState(5);
  const [quality, setQuality] = useState<"normal" | "premium">("normal");
  const [references, setReferences] = useState(0);
  const base = pages * CREDIT_RATES[quality];
  const photoCredits = pages * references * CREDIT_RATES.reference;
  const maximum = base + photoCredits;

  return (
    <section className="credit-calculator" aria-labelledby="calculator-title">
      <div className="calculator-intro">
        <span className="eyebrow">
          <Sparkles size={14} aria-hidden="true" /> CREDIT GUIDE
        </span>
        <h3 id="calculator-title">
          우리 아이 동화는
          <br className="mobile-break" /> 몇 크레딧일까요?
        </h3>
        <p>어떤 그림책을 만들고 싶나요? 하나씩 골라 보세요.</p>
      </div>
      <div className="calculator-body">
        <div className="calculator-controls">
          <fieldset>
            <legend>
              <span className="calculator-step">01</span> 이야기 길이
            </legend>
            <div className="page-choices">
              {[5, 6, 7, 8].map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-label={`${n}페이지`}
                  aria-pressed={pages === n}
                  onClick={() => setPages(n)}
                >
                  <Check
                    className="choice-check"
                    size={13}
                    aria-hidden="true"
                  />
                  <span>{n}</span>
                  <small>페이지</small>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <span className="calculator-step">02</span> 삽화 품질
            </legend>
            <div className="quality-choices">
              <button
                type="button"
                aria-label="일반"
                aria-pressed={quality === "normal"}
                onClick={() => setQuality("normal")}
              >
                <span className="quality-icon">
                  <BookOpen size={20} aria-hidden="true" />
                </span>
                <Check className="choice-check" size={13} aria-hidden="true" />
                <strong>일반</strong>
                <span>그림과 글로 읽는 동화</span>
                <small>페이지당 {CREDIT_RATES.normal}크레딧</small>
              </button>
              <button
                type="button"
                aria-label="프리미엄 · 음성 포함"
                aria-pressed={quality === "premium"}
                onClick={() => setQuality("premium")}
              >
                <span className="quality-icon">
                  <Volume2 size={20} aria-hidden="true" />
                </span>
                <Check className="choice-check" size={13} aria-hidden="true" />
                <strong>프리미엄</strong>
                <span>더 선명한 삽화와 음성 낭독</span>
                <small>페이지당 {CREDIT_RATES.premium}크레딧</small>
              </button>
            </div>
          </fieldset>
          <fieldset className="reference-options">
            <legend>
              <span className="calculator-step">03</span> 추가 사진 자료{" "}
              <span className="optional-label">선택 사항</span>
            </legend>
            <p>
              <ImagePlus size={15} aria-hidden="true" /> 이야기에 함께 담을
              사진이 있나요?
            </p>
            <div className="reference-choices">
              {[0, 1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-label={`추가 사진 ${n === 0 ? "없음" : `${n}개`}`}
                  aria-pressed={references === n}
                  onClick={() => setReferences(n)}
                >
                  {n === 0 ? "없음" : `${n}개`}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div
          className="calculator-result"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="estimate-heading">
            <div>
              <span className="estimate-label">우리 아이의 다음 이야기</span>
              <p>
                {pages}페이지 <span aria-hidden="true">·</span>{" "}
                {quality === "normal" ? "일반 그림책" : "프리미엄 그림책"}
              </p>
            </div>
            <div className="estimate-book" aria-hidden="true">
              <Image
                src="/images/landing/cover.webp"
                alt=""
                width={76}
                height={114}
                sizes="76px"
              />
              <Sparkles size={20} />
            </div>
          </div>
          <div className="estimate-total">
            <span>
              {references > 0 ? "최대 예상 크레딧" : "동화 제작 크레딧"}
            </span>
            <strong>
              {maximum}
              <small>크레딧</small>
            </strong>
          </div>
          <dl className="estimate-breakdown">
            <div>
              <dt>
                기본 동화{" "}
                <small>
                  {pages}페이지 × {CREDIT_RATES[quality]}
                </small>
              </dt>
              <dd>
                {base}
                <span> 크레딧</span>
              </dd>
            </div>
            <div>
              <dt>
                추가 사진{" "}
                <small>
                  {references === 0
                    ? "추가한 자료 없음"
                    : `${references}개 · 모든 페이지 사용 시`}
                </small>
              </dt>
              <dd>
                {references > 0 ? "최대 " : ""}
                {photoCredits}
                <span> 크레딧</span>
              </dd>
            </div>
          </dl>
          <p className="estimate-footnote">
            <Check size={16} aria-hidden="true" />{" "}
            {quality === "premium"
              ? "음성 읽어주기가 포함돼요"
              : "그림과 글이 함께 담겨요"}
          </p>
          <div className="estimate-reminder">
            <Info size={15} aria-hidden="true" />
            <p>
              캐릭터 제작 비용은 별도예요.
              <br />
              최종 사용량은 앱에서 확인해 주세요.
            </p>
          </div>
        </div>
      </div>
      <div className="calculator-note">
        <Info size={15} aria-hidden="true" />
        <p>
          캐릭터 새로 만들기 {CREDIT_RATES.character} · 옷 입혀 보기/새로운 모습{" "}
          {CREDIT_RATES.style}크레딧은 별도입니다. 추가 사진은 실제 사용한
          페이지마다 자료당 {CREDIT_RATES.reference}크레딧으로 정산합니다.
        </p>
      </div>
    </section>
  );
}
