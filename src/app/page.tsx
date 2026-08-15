import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL, SUPPORT_MAILTO } from "@/lib/app-links";
import {
  BookOpen,
  Sparkles,
  Camera,
  Wand2,
  BookMarked,
  Volume2,
  Shield,
  ShieldCheck,
  UserCheck,
  Lock,
  Trash2,
  ArrowRight,
  ChevronRight,
  Download,
  Smartphone,
} from "lucide-react";

/** 히어로의 동화책 카드 한 장. featured는 앞쪽 메인 카드(더 크고 진한 그림자). */
function StoryCard({
  src,
  alt,
  featured = false,
}: {
  src: string;
  alt: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-white ${
        featured ? "rounded-[1.5rem] p-2.5 shadow-2xl" : "rounded-2xl p-1.5 shadow-xl"
      }`}
    >
      <div
        className={`relative aspect-[3/4] overflow-hidden ${
          featured ? "rounded-[1.1rem]" : "rounded-xl"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 45vw, 22vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** Step 01 미리보기 — 자녀 프로필 입력 화면을 단순화한 목업. */
function StepProfilePreview() {
  return (
    <div className="w-full max-w-[190px] bg-white rounded-xl shadow-sm p-3 flex items-center gap-3">
      <div className="w-11 h-11 rounded-full border-2 border-dashed border-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
        <Camera className="w-4 h-4 text-amber-500" />
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="h-2 w-14 bg-gray-200 rounded-full" />
        <div className="flex gap-1">
          <span className="text-[9px] font-semibold bg-[var(--color-soft-yellow)] text-amber-600 px-1.5 py-0.5 rounded-full">
            5세
          </span>
          <span className="text-[9px] font-semibold bg-[var(--color-soft-blue)] text-[var(--color-primary)] px-1.5 py-0.5 rounded-full">
            #공룡
          </span>
        </div>
      </div>
    </div>
  );
}

/** Step 02 미리보기 — 생성 중 상태(스켈레톤 + 시머). */
function StepGeneratingPreview() {
  return (
    <div className="w-full max-w-[190px] bg-white rounded-xl shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2.5">
        <Wand2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
        <span className="text-[10px] font-semibold text-gray-600">AI가 그리는 중…</span>
      </div>
      <div className="animate-shimmer bg-gradient-to-r from-gray-100 via-white to-gray-100 h-12 rounded-lg mb-2" />
      <div className="space-y-1.5">
        <div className="h-1.5 w-full bg-gray-100 rounded-full" />
        <div className="h-1.5 w-3/5 bg-gray-100 rounded-full" />
      </div>
    </div>
  );
}

/** Step 03 미리보기 — 완성된 동화 한 페이지(삽화 + 본문 + 음성). */
function StepBookPreview() {
  return (
    <div className="w-full max-w-[190px] bg-white rounded-xl shadow-sm p-2">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2">
        <Image
          src="/images/story-nature.jpg"
          alt="완성된 동화 삽화 예시"
          fill
          sizes="200px"
          className="object-cover"
        />
        <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
          <Volume2 className="w-2.5 h-2.5 text-[var(--color-secondary)]" />
        </span>
      </div>
      <div className="px-1 space-y-1 pb-0.5">
        <div className="h-1.5 w-full bg-gray-100 rounded-full" />
        <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="KidStory"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900">KidStory</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              이용 방법
            </Link>
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              주요 기능
            </Link>
            <Link href="#stories" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              동화 미리보기
            </Link>
          </div>
          <Button
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full px-6 h-10 text-sm font-semibold shadow-sm"
            asChild
          >
            <Link href="#download">
              <Download className="w-4 h-4 mr-1.5" />
              앱 다운로드
            </Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section — 좌: 카피/CTA, 우: 동화책 카드 팬.
          카드 배치는 고정 px 높이가 아니라 컨테이너 비율(aspect) + % 기준이라
          화면 폭이 바뀌어도 겹침 구도가 그대로 유지된다. */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Dreamy sky background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/dreamy-sky.jpg"
            alt=""
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/45 via-[var(--background)]/80 to-[var(--background)]" />
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center max-w-6xl mx-auto">
            {/* Copy */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-[var(--color-primary)]/15 text-[var(--color-primary)] rounded-full px-4 py-1.5 text-sm font-medium mb-7">
                <Sparkles className="w-4 h-4" />
                우리 아이가 동화 속 주인공이 됩니다
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 text-balance leading-[1.12]">
                세상에 단 하나뿐인
                <br />
                <span className="bg-gradient-to-r from-[var(--color-secondary)] via-[#EE9F52] to-[var(--color-accent)] bg-clip-text text-transparent">
                  우리 아이 동화책
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
                아이의 사진 한 장이면 충분해요.
                <br className="hidden sm:block lg:hidden" />
                {" "}AI가 아이를 주인공으로 한 아름다운 그림 동화를 만들어 드립니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-[var(--color-primary)]/25"
                  asChild
                >
                  <Link href="#download">
                    <Smartphone className="w-5 h-5 mr-2" />
                    무료로 시작하기
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base font-semibold border-gray-200 bg-white hover:bg-gray-50"
                  asChild
                >
                  <Link href="#stories">
                    실제 동화 보기
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-gray-500 flex items-center gap-2 justify-center lg:justify-start">
                <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
                5페이지 그림 동화 · 음성 읽어주기 지원
              </p>
            </div>

            {/* Visual — 동화책 카드 팬 + 아이 캐릭터 */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/4.7]">
                {/* 뒤 카드 - 좌 */}
                <div className="animate-float-slow absolute left-0 top-[10%] w-[40%] -rotate-12 z-0">
                  <StoryCard src="/images/soft-hills.jpg" alt="동화 속 언덕 풍경" />
                </div>

                {/* 뒤 카드 - 우 */}
                <div className="animate-float-delay absolute right-0 top-[6%] w-[40%] rotate-12 z-0">
                  <StoryCard src="/images/scene-cover.jpg" alt="동화 속 마법의 성" />
                </div>

                {/* 메인 카드 */}
                <div className="animate-float absolute left-1/2 -translate-x-1/2 top-0 w-[54%] z-10">
                  <StoryCard src="/images/scene-tree.jpg" alt="빛나는 나무가 있는 동화 한 장면" featured />
                </div>

                {/* 아이 캐릭터 (투명 PNG) */}
                <div className="animate-float-slow absolute left-[-4%] bottom-[4%] w-[52%] z-20 drop-shadow-2xl">
                  <Image
                    src="/images/child-reading.png"
                    alt="책 읽는 아이 일러스트"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust — 아이 사진을 맡기는 부모의 불안을 정면으로 다룬다.
          중앙정렬 3열이 아니라 좌(질문·답변)/우(근거 2x2)로 나눠 다른 섹션과 리듬을 달리한다. */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-12">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
              {/* 질문과 답 */}
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  안심하고 맡기세요
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 leading-snug text-balance">
                  아이 사진,
                  <br />
                  안전하게 다뤄지나요?
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  아이의 정보를 맡기는 일이니까요. KidStory는 받은 정보를 동화를 만드는 데에만
                  쓰고, 원하실 때 남김없이 지울 수 있도록 만들었습니다.
                </p>
                <Link
                  href="/privacy"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                >
                  개인정보처리방침 자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 근거 4가지 */}
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Lock,
                    tint: "bg-[var(--color-soft-blue)]",
                    color: "text-[var(--color-primary)]",
                    title: "삽화 생성에만 사용",
                    desc: "등록한 사진은 동화 삽화를 만드는 데에만 쓰입니다. 다른 이용자에게 공개하거나 마케팅에 이용하지 않습니다.",
                  },
                  {
                    icon: UserCheck,
                    tint: "bg-[var(--color-soft-green)]",
                    color: "text-[var(--color-secondary)]",
                    title: "보호자 동의 후 처리",
                    desc: "만 14세 미만 자녀의 정보는 법정대리인(보호자)의 동의를 받은 뒤에만 처리합니다.",
                  },
                  {
                    icon: Shield,
                    tint: "bg-[var(--color-soft-pink)]",
                    color: "text-[var(--color-secondary)]",
                    title: "아이에게 맞는 내용만",
                    desc: "폭력적이거나 아이에게 유해한 내용이 생성되지 않도록 안전 기준을 적용합니다.",
                  },
                  {
                    icon: Trash2,
                    tint: "bg-[var(--color-soft-yellow)]",
                    color: "text-amber-500",
                    title: "언제든 삭제",
                    desc: "앱에서 직접 탈퇴하면 자녀 정보와 만든 동화가 지체 없이 파기됩니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 p-5 hover:border-gray-200 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 ${item.tint} rounded-xl flex items-center justify-center mb-3`}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance">
              3단계면 동화가 완성돼요
            </h2>
          </div>

          {/* 단계 번호를 카드 위 배지로 빼고, 배지 사이를 점선으로 잇는다.
              (기존엔 화살표 아이콘이 카드 옆에 겹쳐 떠 있어 정렬이 어색했다) */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                n: "01",
                icon: Camera,
                badge: "bg-[var(--color-accent)] shadow-[var(--color-accent)]/30",
                tint: "bg-[var(--color-soft-yellow)]",
                title: "아이 프로필 등록",
                desc: "아이의 사진, 이름, 나이, 관심사를 입력해주세요. AI가 아이의 특징을 파악합니다.",
              },
              {
                n: "02",
                icon: Wand2,
                badge: "bg-[var(--color-primary)] shadow-[var(--color-primary)]/25",
                tint: "bg-[var(--color-soft-pink)]",
                title: "AI 동화 생성",
                desc: "관심사와 나이에 맞는 이야기를 AI가 쓰고, 아이가 등장하는 삽화를 그립니다.",
              },
              {
                n: "03",
                icon: BookMarked,
                badge: "bg-[var(--color-secondary)] shadow-[var(--color-secondary)]/25",
                tint: "bg-[var(--color-soft-green)]",
                title: "동화 감상",
                desc: "완성된 5페이지 그림 동화를 읽어보세요. 감정이 담긴 음성으로 읽어주기도 해요.",
              },
            ].map((step, i) => (
              <div key={step.n} className="relative group">
                {/* 다음 단계로 잇는 점선 (마지막 카드 제외) */}
                {i < 2 && (
                  <div
                    aria-hidden
                    className="hidden md:block absolute top-6 left-[calc(50%+1.75rem)] w-[calc(100%-2rem)] border-t-2 border-dashed border-gray-200"
                  />
                )}

                {/* 단계 번호 배지 */}
                <div
                  className={`relative z-10 mx-auto w-12 h-12 rounded-full ${step.badge} shadow-lg flex items-center justify-center`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>

                <div className="mt-5 bg-white rounded-3xl border border-gray-100 p-5 h-[calc(100%-4.25rem)] transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                  {/* 단계별 미리보기 */}
                  <div
                    className={`${step.tint} rounded-2xl aspect-[5/3] mb-5 overflow-hidden flex items-center justify-center p-4`}
                  >
                    {i === 0 && <StepProfilePreview />}
                    {i === 1 && <StepGeneratingPreview />}
                    {i === 2 && <StepBookPreview />}
                  </div>

                  <div className="text-xs font-bold text-gray-400 mb-1.5">STEP {step.n}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">FEATURES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance">
              KidStory가 특별한 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-soft-blue)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-blue)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">내 아이가 주인공</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  아이의 사진을 기반으로 삽화를 생성해, 진짜 우리 아이가 동화 속에 등장합니다.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-secondary)]/25 hover:bg-[var(--color-soft-pink)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-pink)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Wand2 className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">맞춤형 스토리</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  아이의 나이와 관심사(공룡, 우주, 공주 등)에 맞는 이야기를 AI가 매번 새롭게 창작합니다.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-soft-yellow)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-yellow)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">감정을 담은 음성 읽기</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  TTS 기술로 동화를 감정 있게 읽어줍니다. 자기 전 들려주기에 딱 좋아요.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-soft-blue)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-blue)] rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">5페이지 그림 동화</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  매 페이지마다 아름다운 AI 삽화가 포함된 완전한 그림 동화를 제공합니다.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-secondary)]/25 hover:bg-[var(--color-soft-pink)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-pink)] rounded-xl flex items-center justify-center flex-shrink-0">
                <BookMarked className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">동화 라이브러리</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  만들어진 모든 동화를 라이브러리에서 관리하고, 언제든 다시 읽을 수 있어요.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-soft-yellow)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-yellow)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">안전한 콘텐츠</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  아이에게 적합한 내용만 생성되도록 안전 필터링을 적용합니다. 교육적 가치도 담겨있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section id="stories" className="py-24 md:py-32 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">STORIES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance">
              이런 동화가 만들어져요
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              아이의 관심사에 따라 음악, 공룡, 판타지 등 다양한 주제의 동화가 생성됩니다.
              <br className="hidden sm:block" />
              아래는 KidStory로 실제 만든 동화예요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* KidStory로 실제 생성한 동화(공개 동의를 받은 샘플)의 제목·도입부·삽화 */}
            {[
              {
                title: "예린이의 신나는 상상 여행!",
                desc: "예린이는 음악을 정말 좋아했어요. 예쁜 피아노 앞에 앉으면, 손가락으로 통통통 신나는 멜로디를 만들었죠.",
                interest: "음악",
                image: "/images/samples/story-music.jpg",
              },
              {
                title: "예린이의 신나는 꿈동산",
                desc: "커다란 티라노사우루스도, 귀여운 아기 강아지도 모두 예린이의 소중한 친구들이죠.",
                interest: "공룡",
                image: "/images/samples/story-dino.jpg",
              },
              {
                title: "예린이와 신데렐라 호랑이",
                desc: "예린이는 신데렐라 이야기를 아주 좋아했어요. 그리고 용감한 호랑이도 정말 좋아했지요.",
                interest: "판타지",
                image: "/images/samples/story-fairytale.jpg",
              },
            ].map((story) => (
              <div
                key={story.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-xs font-semibold text-gray-600 px-3 py-1 rounded-full shadow-sm">
                      #{story.interest}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500">{story.desc}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                    <span>5페이지</span>
                    <span>·</span>
                    <span>AI 생성</span>
                    <span>·</span>
                    <span>음성 지원</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-24 md:py-32 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-[2rem] p-12 md:p-20 text-center overflow-hidden">
            {/* 밤하늘 장면 — "오늘 밤" 카피와 맞춘 배경. 가독성을 위해 어두운 오버레이를 덮는다. */}
            <Image
              src="/images/story-space.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/75 to-gray-900/85" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[100px]" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
                오늘 밤, 우리 아이에게
                <br />
                특별한 동화를 선물하세요
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
                무료로 시작하고, 첫 번째 동화를 만들어보세요.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {APP_STORE_URL ? (
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 rounded-full h-14 px-8 text-base font-semibold"
                    asChild
                  >
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-2" />
                      App Store
                    </a>
                  </Button>
                ) : (
                  // App Store 앱 ID 미설정 시 깨진 링크 대신 비활성 표시(src/lib/app-links.ts 참고)
                  <Button
                    size="lg"
                    disabled
                    className="bg-white/20 text-white/70 rounded-full h-14 px-8 text-base font-semibold cursor-not-allowed"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    App Store 준비 중
                  </Button>
                )}
                <Button
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full h-14 px-8 text-base font-semibold"
                  asChild
                >
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Google Play
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="KidStory"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg font-bold text-gray-900">KidStory</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                AI가 만드는 세상에 하나뿐인
                <br />
                우리 아이 그림 동화
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">제품</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#features" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    주요 기능
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    이용 방법
                  </Link>
                </li>
                <li>
                  <Link href="#stories" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    동화 미리보기
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">지원</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={SUPPORT_MAILTO}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    문의하기
                  </a>
                </li>
                <li>
                  <Link
                    href="/account-deletion"
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    계정 및 데이터 삭제
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">법적 고지</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="/account-deletion" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    계정 및 데이터 삭제
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-10 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; 2026 KidStory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
