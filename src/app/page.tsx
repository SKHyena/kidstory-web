import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Heart,
  Moon,
  Sparkles,
  Tablet,
  Volume2,
} from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL, SUPPORT_MAILTO } from "@/lib/app-links";
import { CREDIT_PRODUCTS } from "@/lib/pricing";
import { CreditCalculator } from "@/components/landing/credit-calculator";
import { AppGallery } from "@/components/landing/app-gallery";
import { CharacterComparison } from "@/components/landing/character-comparison";
import "./landing.css";

// Keep the desktop copy intact; compact screens get a shorter reading rhythm.
function ResponsiveCopy({ children, compact }: { children: ReactNode; compact: ReactNode }) {
  return <><span className="full-copy">{children}</span><span className="compact-copy">{compact}</span></>;
}

function StoreLinks() {
  return (
    <div className="store-links">
      {APP_STORE_URL ? (
        <a
          className="store-link"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            width="23"
            height="26"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.1 12.4c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.1.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.2-.9-2.2-4zM14.8 6.2c.6-.8 1.1-1.8 1-2.9-.9 0-2.1.6-2.7 1.3-.6.6-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.1z" />
          </svg>
          <span>
            <small>iPhone · iPad</small>App Store
          </span>
        </a>
      ) : (
        <span className="store-link store-pending">
          <span>
            <small>iPhone · iPad</small>App Store 준비 중
          </span>
        </span>
      )}
      <a
        className="store-link"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 26"
          width="23"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m2 2 12 11L2 24V2zm13 12 3 3-13 7 10-10zm4-5 4 2.5c1 .7 1 2.3 0 3L19 17l-4-4 4-4zM5 2l13 7-3 3L5 2z" />
        </svg>
        <span>
          <small>Android 휴대전화 · 태블릿</small>Google Play
        </span>
      </a>
    </div>
  );
}

const faqs = [
  {
    question: "무료로 이용할 수 있나요?",
    answer:
      "명작 동화는 무료로 읽을 수 있어요. 우리 아이의 캐릭터와 맞춤 동화를 만드는 데에는 크레딧이 필요하며, 가입 시 무료 크레딧은 지급되지 않아요. 처음이라면 계정당 한 번 구매할 수 있는 200크레딧 시작 팩으로 만나 보세요.",
  },
  {
    question: "월 구독을 해야 동화를 만들 수 있나요?",
    answer:
      "아니요. 필요한 만큼 단건으로 크레딧을 충전해도 돼요. 월 구독을 선택하면 매월 결제가 확인될 때 1,200크레딧이 충전됩니다. 무제한 제작 상품은 아니에요.",
  },
  {
    question: "남은 크레딧과 만든 동화는 어떻게 되나요?",
    answer:
      "지급된 유료 크레딧은 만료되지 않아요. 월 구독을 해지하거나 이용 기간이 끝나도 남은 크레딧과 완성된 동화는 유지됩니다. 결제 환불이나 회원 탈퇴에 따른 처리는 별도 정책을 따라요.",
  },
  {
    question: "동화 읽어주기는 모든 동화에서 되나요?",
    answer:
      "맞춤 동화를 프리미엄 품질로 만들면 음성 읽어주기가 함께 제공돼요. 일반 품질은 그림과 글로 읽을 수 있어요. 명작·오늘의 이야기는 각 동화의 음성 제공 여부에 따라 달라요.",
  },
  {
    question: "태블릿에서도 사용할 수 있나요?",
    answer:
      "네. iPad와 Android 태블릿을 지원해요. 세로로는 한 장씩 몰입해서 읽고, 넓은 가로 화면에서는 그림과 글을 펼친 책처럼 나란히 볼 수 있어요.",
  },
  {
    question: "구매가 앱에 반영되지 않으면 어떻게 하나요?",
    answer:
      "결제한 KidStory 계정으로 로그인했는지 확인하고, 앱 상점의 구매 복원 또는 동기화 재시도를 이용해 주세요. 해결되지 않으면 결제 스토어와 주문 정보를 고객 지원으로 보내 주세요.",
  },
];

export default function HomePage() {
  return (
    <div className="landing">
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <nav className="site-container nav-inner" aria-label="주 메뉴">
          <Link href="/" className="wordmark nav-brand" aria-label="KidStory 홈">
            <span className="nav-icon-wrap">
              <Image src="/images/landing/app-icon.webp" alt="" width={44} height={44} className="nav-app-icon" />
              <Sparkles className="nav-logo-sparkle" size={15} aria-hidden="true" />
            </span>
            <span className="nav-brand-copy">
              <span>KidStory</span>
              <small>우리 아이가 주인공인 동화</small>
            </span>
          </Link>
          <div className="nav-links">
            <a href="#features">KidStory 소개</a>
            <a href="#tablet">태블릿으로 읽기</a>
            <a href="#pricing">이용 요금</a>
          </div>
          <a href="#download" className="button nav-download">
            <span>앱 다운로드</span>
            <span className="nav-download-arrow"><ArrowRight size={15} aria-hidden="true" /></span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero site-container">
          <div className="hero-copy">
            <h1>
              <span className="hero-label">
                <Image src="/images/landing/star-eight.webp" alt="" width={22} height={22} /> 우리 아이가 주인공인 AI 맞춤 동화
              </span>
              <span className="hero-headline">
                “엄마, 이거
                <br />
                <em>내 이야기</em>잖아!”
              </span>
            </h1>
            <p className="hero-description">
              <ResponsiveCopy compact={<>우리 아이의 얼굴과 상상으로,<br />세상에 하나뿐인 그림책.</>}>
                우리 아이의 얼굴, 좋아하는 것, 작은 상상까지.
                <br />
                세상에 하나뿐인 그림책으로 펼쳐 보세요.
              </ResponsiveCopy>
            </p>
            <a className="button button-primary" href="#download">
              우리 아이 이야기 시작하기 <ArrowRight size={18} />
            </a>
            <div className="hero-note">
              <BookOpen size={16} />
              <span>명작 동화 무료 읽기</span>
              <i /> <span>맞춤 동화는 크레딧으로</span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="같은 아이의 모습이 이어지는 동화 삽화"
          >
            <span className="illustrated-sparkle art-star star-one" aria-hidden="true" />
            <span className="illustrated-sparkle art-star star-two" aria-hidden="true" />
            <span className="illustrated-sparkle art-star star-three" aria-hidden="true" />
            <span className="art-orbit" aria-hidden="true" />
            <span className="hero-stardust" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </span>
            <span className="hero-book-label"><Moon size={16} aria-hidden="true" /> 세상에 단 한 권</span>
            <div className="hero-back-book book-cover">
              <Image
                src="/images/landing/story-5.webp"
                alt="초록 왕관을 쓰고 숲에 서 있는 동화 속 아이"
                width={800}
                height={1200}
                priority
              />
            </div>
            <div className="hero-main-book book-cover">
              <Image
                src="/images/landing/cover.webp"
                alt="보라색 드레스를 입은 하린이가 숲속 바위에 앉아 있는 수채화 동화"
                width={1100}
                height={1650}
                sizes="(max-width: 760px) 58vw, 370px"
                priority
              />
            </div>
            <div className="hero-character">
              <Image
                src="/images/landing/character.webp"
                alt="동화의 주인공이 된 아이 캐릭터"
                width={650}
                height={975}
                sizes="150px"
                priority
              />
              <span>이야기의 주인공, 나!</span>
            </div>
            <div className="hero-expressions" aria-hidden="true">
              {["smile", "laugh", "surprised"].map((expression) => (
                <div className="hero-expression" key={expression}>
                  <Image
                    src={`/images/landing/${expression}.webp`}
                    alt=""
                    width={160}
                    height={160}
                    sizes="(max-width: 760px) 60px, 80px"
                  />
                </div>
              ))}
            </div>
            <span className="hero-art-note">
              사진 속 우리 아이가, 동화 속으로.
            </span>
          </div>
        </section>
        <div className="chapter-strip">
          <div className="site-container">
            <span>
              <Sparkles size={18} /> 나를 닮은 캐릭터
            </span>
            <span>
              <BookOpen size={18} /> 5–8페이지 맞춤 그림책
            </span>
            <span>
              <Tablet size={18} /> 태블릿 펼침 읽기
            </span>
            <span>
              <Volume2 size={18} /> 프리미엄 음성 낭독
            </span>
          </div>
        </div>
        <section id="features" className="section site-container">
          <div className="section-heading">
            <h2>
              <span className="eyebrow heading-kicker">사진으로 만드는 우리 아이 그림책</span>
              이야기의 시작도,
              <br />
              주인공도 우리 아이.
            </h2>
            <p>
              <ResponsiveCopy compact="새로운 이야기에도, 우리 아이 모습 그대로.">
                매번 새로워지는 이야기 속에서도
                <br className="mobile-break" /> 아이의 모습은 다정하게 이어져요.
              </ResponsiveCopy>
            </p>
          </div>
          <div className="character-feature">
            <div className="character-scene">
              <span className="illustrated-sparkle character-sparkle character-sparkle-one" aria-hidden="true" />
              <span className="illustrated-sparkle character-sparkle character-sparkle-two" aria-hidden="true" />
              <CharacterComparison />
              <div className="expression-strip">
                {[
                  { x: 26, label: "방긋" },
                  { x: 329, label: "까르르" },
                  { x: 931, label: "깜짝" },
                  { x: 632, label: "시무룩" },
                ].map((item) => (
                  <figure key={item.label}>
                    <svg
                      className="expression-sheet-window"
                      viewBox={`${item.x} 650 280 280`}
                      width={280}
                      height={280}
                      role="img"
                      aria-label={`${item.label} 표정의 지은 캐릭터`}
                    >
                      <image
                        href="/images/landing/jieun-sheet.webp"
                        width={1536}
                        height={1024}
                      />
                    </svg>
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
              <span className="scene-note">표정 하나에도, 우리 아이답게.</span>
            </div>
            <div className="feature-copy">
              <span className="chapter-label">01 / 우리 아이의 모습</span>
              <h3>
                익숙한 얼굴이
                <br />
                상상 속으로 들어가요.
              </h3>
              <p>
                <ResponsiveCopy compact={<>사진 한 장으로 동화 속 주인공이 돼요.<br />표정도, 좋아하는 옷도 우리 아이답게.</>}>
                  사진으로 만든 수채화 캐릭터가 이야기의 주인공이 돼요. 마음에
                  드는 모습을 고르고, 좋아하는 옷도 입혀 주세요.
                </ResponsiveCopy>
              </p>
              <ul className="check-list">
                <li>
                  <Check /> 사진을 바탕으로 만드는 아이 캐릭터
                </li>
                <li>
                  <Check /> 다양한 표정과 동화 속 모습
                </li>
                <li>
                  <Check /> 사진 속 옷 또는 준비된 스타일로 옷 바꾸기
                </li>
              </ul>
              <a href="#preview" className="text-link">
                앱에서의 모습 보기 <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="story-process">
            <div>
              <span className="chapter-label">02 / 우리 가족의 이야기</span>
              <h3>
                좋아하는 것에,
                <br />
                들려주고 싶은 마음을 더해요.
              </h3>
              <p>
                <ResponsiveCopy compact="좋아하는 주제로 시작해, 우리 가족만의 그림책을 완성해요.">
                  공룡, 우주, 공주처럼 아이가 좋아하는 주제부터
                  <br />
                  일상 속 작은 습관까지. 원고를 먼저 읽고 다듬은 뒤
                  <br className="desktop-break" /> 그림책으로 완성해요.
                </ResponsiveCopy>
              </p>
            </div>
            <ol className="process-steps">
              <li>
                <span>1</span>
                <div>
                  <h4>주인공과 주제 고르기</h4>
                  <p>아이의 관심사, 함께 담고 싶은 이야기를 골라요.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h4>원고를 읽고 다듬기</h4>
                  <p>그림을 만들기 전에 이야기의 내용을 확인해요.</p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h4>그림책으로 완성하기</h4>
                  <p>5–8페이지와 삽화 품질을 선택하고 크레딧을 확인해요.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="tablet" className="tablet-section">
          <div className="site-container">
            <div className="tablet-heading">
              <div>
                <h2>
                  <span className="eyebrow heading-kicker">태블릿으로 함께 읽는 동화</span>
                  화면은 더 넓게.
                  <br />
                  우리 사이는 더 가깝게.
                </h2>
              </div>
              <p>
                <ResponsiveCopy compact={<>iPad와 Android 태블릿에서도.<br />그림과 글을 펼쳐, 아이와 함께 읽어요.</>}>
                  <span className="tablet-platform">이제 iPad와 Android 태블릿에서도.</span>
                  <br className="tablet-copy-break" />
                  <span className="tablet-reading-copy">
                    그림과 글을 나란히 펼치고,
                    <br />
                    아이와 <em>같은 장면</em>에 머물러 보세요.
                  </span>
                </ResponsiveCopy>
              </p>
            </div>
            <div className="tablet-display">
              <Image
                src="/images/landing/tablet-reader.webp"
                alt="태블릿 가로 화면에서 왼쪽에는 아이의 삽화, 오른쪽에는 동화 본문이 나란히 표시되는 KidStory 읽기 화면"
                width={1500}
                height={1139}
                sizes="(max-width: 760px) 95vw, 1000px"
              />
              <span className="tablet-annotation">
                한 장의 그림,
                <br />
                <span>한 페이지의 이야기.</span>
              </span>
            </div>
            <div className="tablet-benefits">
              <span>
                <BookOpen size={19} /> 펼친 책처럼 나란히
              </span>
              <span>
                <Tablet size={19} /> 가로도, 세로도 편안하게
              </span>
              <span>
                <Heart size={19} /> 온 가족이 함께
              </span>
            </div>
          </div>
        </section>
        <section id="preview" className="section site-container">
          <AppGallery />
        </section>
        <section id="stories" className="classics-section section">
          <div className="site-container classics-layout">
            <div className="classics-copy">
              <h2>
                <span className="eyebrow heading-kicker">무료로 읽는 명작 동화</span>
                우리의 첫 독서는
                <br />
                익숙한 명작부터.
              </h2>
              <p>
                <ResponsiveCopy compact={<>오래 사랑받은 명작 동화를<br />아름다운 그림과 함께, 무료로.</>}>
                  빨간 모자, 아기 돼지 삼 형제, 브레멘 음악대.
                  <br />
                  오래 사랑받은 이야기를 아름다운 그림과 함께.
                  <br />
                  명작 동화는 무료로 만나 볼 수 있어요.
                </ResponsiveCopy>
              </p>
              <a className="text-link" href="#download">
                앱에서 명작 읽기 <ArrowRight size={16} />
              </a>
            </div>
            <div className="classic-books">
              <figure>
                <div className="book-cover">
                  <Image
                    src="/images/landing/red-riding-hood.webp"
                    alt="꽃밭을 걷는 빨간 모자와 늑대 삽화"
                    width={750}
                    height={1125}
                    sizes="(max-width: 760px) 40vw, 240px"
                  />
                </div>
                <figcaption>
                  빨간 모자 <span>명작 동화</span>
                </figcaption>
              </figure>
              <figure>
                <div className="book-cover">
                  <Image
                    src="/images/landing/three-pigs.webp"
                    alt="늑대와 아기 돼지 삼 형제의 수채화 삽화"
                    width={750}
                    height={1125}
                    sizes="(max-width: 760px) 40vw, 240px"
                  />
                </div>
                <figcaption>
                  아기 돼지 삼 형제 <span>명작 동화</span>
                </figcaption>
              </figure>
              <figure>
                <div className="book-cover">
                  <Image
                    src="/images/landing/bremen-musicians.webp"
                    alt="노을 진 시골길에서 음악가의 꿈을 품고 길을 떠나는 당나귀 삽화"
                    width={750}
                    height={1125}
                    sizes="(max-width: 760px) 42vw, 190px"
                  />
                </div>
                <figcaption>
                  브레멘 음악대 <span>명작 동화</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="pricing" className="section site-container">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE CREDIT, A LOT OF WONDER</span>
            <h2>새로운 이야기가 필요할 때.</h2>
            <p>
              <ResponsiveCopy compact="가끔 한 권도, 매달 새롭게도. 필요한 만큼 충전해요.">
                가끔 한 권도, 매달 새로운 이야기도.
                <br />
                필요한 만큼 크레딧을 충전해 주세요.
              </ResponsiveCopy>
            </p>
          </div>
          <div className="main-plans">
            <article className="price-card starter-plan">
              <span className="plan-tag">처음 만나는 KidStory</span>
              <div className="plan-heading">
                <div>
                  <h3>시작 팩</h3>
                  <p>우리 아이의 첫 그림책을 위한 작은 시작</p>
                </div>
                <div className="plan-art">
                  <Image src="/images/landing/store_coin_1.webp" alt="" width={132} height={132} />
                </div>
              </div>
              <div className="plan-price">
                1,900<span>원 · 계정당 1회</span>
              </div>
              <div className="plan-credits">
                200 <span>크레딧</span>
              </div>
              <ul className="check-list">
                <li>
                  <Check /> 캐릭터 1회 만들기 · 40크레딧
                </li>
                <li>
                  <Check /> 일반 5페이지 동화 1편 · 150크레딧
                </li>
                <li>
                  <Check /> 추가 사진 없이 시작하면 10크레딧이 남아요
                </li>
              </ul>
              <a href="#download" className="button button-outline">
                시작 팩은 앱에서 <ArrowRight size={17} />
              </a>
            </article>
            <article className="price-card monthly-plan">
              <span className="plan-tag">
                <Moon size={14} /> 매달 이어지는 이야기
              </span>
              <div className="plan-heading">
                <div>
                  <h3>월 구독</h3>
                  <p>매달 새롭게 채우는 우리 아이의 책장</p>
                </div>
                <div className="plan-art plan-art-books">
                  <Image src="/images/landing/store_hero.webp" alt="" width={156} height={156} />
                </div>
              </div>
              <div className="plan-price">
                9,900<span>원 / 월 · 자동 갱신</span>
              </div>
              <div className="plan-credits">
                1,200 <span>크레딧 / 월</span>
              </div>
              <ul className="check-list">
                <li>
                  <Check /> 매월 결제 확인 후 크레딧 충전
                </li>
                <li>
                  <Check /> 일반 동화 최대 8편 또는 프리미엄 최대 4편
                </li>
                <li>
                  <Check /> 해지해도 남은 크레딧과 완성된 동화 유지
                </li>
              </ul>
              <a href="#download" className="button button-primary">
                월 구독은 앱에서 <ArrowRight size={17} />
              </a>
            </article>
          </div>
          <div className="topup-heading">
            <h3>필요할 때, 한 번씩 충전해도 좋아요.</h3>
            <span>자동 결제 없는 단건 팩</span>
          </div>
          <div className="topup-grid">
            {CREDIT_PRODUCTS.map((product, index) => (
              <article key={product.name}>
                <Image className="topup-icon" src={`/images/landing/store_coin_${index + 1}.webp`} alt="" width={84} height={84} />
                <span>{product.name}</span>
                <h4>
                  {product.credits.toLocaleString("ko-KR")}{" "}
                  <small>크레딧</small>
                </h4>
                <div>
                  <strong>{product.price}원</strong>
                  <span>일반 최대 {product.books}편</span>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            위 가격은 한국 기준 안내 가격이며, 실제 판매 가격·구매 가능 상품은
            앱의 App Store / Google Play 결제 화면을 따릅니다. 최대 편수는 기존
            캐릭터 사용·5페이지·추가 사진 없음 기준이며, 일반과 프리미엄 편수는
            합산되지 않습니다.
          </p>
          <CreditCalculator />
          <div className="payment-summary">
            <span>
              <Check size={16} /> 유료 크레딧 만료 없음
            </span>
            <span>
              <Check size={16} /> 만들기 전 사용량 확인
            </span>
            <span>
              <Check size={16} /> App Store · Google Play 인앱결제
            </span>
          </div>
        </section>
        <section id="faq" className="faq-section section">
          <div className="site-container faq-layout">
            <div>
              <span className="eyebrow">GOOD TO KNOW</span>
              <h2>
                궁금한 마음에
                <br />
                먼저 답해요.
              </h2>
              <p>
                더 궁금한 점이 있다면
                <br />
                언제든 편하게 이야기해 주세요.
              </p>
              <a className="text-link" href={SUPPORT_MAILTO}>
                문의하기 <ArrowRight size={16} />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
              <details>
                <summary>
                  구독 해지와 환불은 어디에서 하나요?
                  <ChevronDown size={18} />
                </summary>
                <p>
                  결제한 스토어에서 구독을 관리할 수 있어요. 앱을 삭제하는
                  것만으로는 구독이 취소되지 않습니다. 환불은 결제한 스토어에
                  요청하며, 승인 여부는 해당 스토어 정책에 따라 결정돼요.
                </p>
                <div className="faq-support-links">
                  <a
                    href="https://support.apple.com/ko-kr/118428"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple 구독 해지 ↗
                  </a>
                  <a
                    href="https://support.google.com/googleplay/answer/7018481?hl=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play 구독 해지 ↗
                  </a>
                  <Link href="/terms#payments">결제 이용 안내 ↗</Link>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section id="download" className="download-section">
          <div className="download-watercolor" aria-hidden="true" />
          <div className="site-container download-inner">
            <div>
              <div className="download-brand">
                <Image src="/images/landing/app-icon.webp" alt="책을 읽는 초승달 모양의 KidStory 앱 아이콘" width={64} height={64} className="download-app-icon" />
                <div>
                  <span className="wordmark">KidStory</span>
                  <span className="eyebrow">TONIGHT, A STORY ABOUT YOU</span>
                </div>
              </div>
              <h2>
                오늘 밤에는,
                <br />네 이야기를 읽어 줄게.
              </h2>
              <p>우리 아이가 가장 좋아할 주인공을 만나 보세요.</p>
              <StoreLinks />
              <span className="download-note">
                명작 동화 무료 · 맞춤 동화 제작 인앱결제
              </span>
            </div>
            <div className="download-art">
              <Image
                src="/images/landing/download-cards.webp"
                alt="파스텔 붓자국을 따라 우리 아이의 캐릭터에서 동화 장면으로 이어지는 그림 카드"
                width={1440}
                height={864}
                sizes="(max-width: 760px) calc(100vw - 12px), (max-width: 1024px) 60vw, 760px"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer site-container">
        <div className="footer-top">
          <div>
            <Link className="wordmark" href="/">
              KidStory<span className="brand-star">✧</span>
            </Link>
            <p>아이의 오늘이, 오래 간직할 이야기가 되도록.</p>
          </div>
          <div className="footer-links">
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
            <Link href="/account-deletion">계정 및 데이터 삭제</Link>
            <a href={SUPPORT_MAILTO}>문의하기</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 에스케이에이치(SKH). All rights reserved.</span>
          <span>Made with a little imagination.</span>
        </div>
      </footer>
    </div>
  );
}
