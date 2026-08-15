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
  Lock,
  Trash2,
  ArrowRight,
  ChevronRight,
  Download,
  Smartphone,
} from "lucide-react";

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Dreamy sky background from the app */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/dreamy-sky.jpg"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/25 via-[var(--background)]/65 to-[var(--background)]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-soft-pink)] text-[var(--color-primary)] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              우리 아이가 동화 속 주인공이 됩니다
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 text-balance leading-[1.1]">
              세상에 단 하나뿐인
              <br />
              <span className="bg-gradient-to-r from-[var(--color-secondary)] via-[#EE9F52] to-[var(--color-accent)] bg-clip-text text-transparent">
                우리 아이 동화책
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
              아이의 사진 한 장이면 충분해요.
              <br className="hidden md:block" />
              AI가 아이를 주인공으로 한 아름다운 그림 동화를 만들어 드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                <Link href="#how-it-works">
                  어떻게 만들어지나요?
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual - real storybook illustrations from the app */}
          <div className="mt-20 md:mt-28 relative max-w-4xl mx-auto h-[360px] md:h-[460px]">
            {/* Small scene card floating top-right */}
            <div className="animate-float-delay absolute right-2 md:right-16 top-0 w-32 md:w-44 rotate-6 z-0">
              <div className="bg-white rounded-2xl shadow-xl p-2">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image src="/images/soft-hills.jpg" alt="동화 속 풍경" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Main storybook scene */}
            <div className="animate-float absolute left-1/2 -translate-x-1/2 top-6 md:top-2 w-64 md:w-80 z-10">
              <div className="bg-white rounded-[1.75rem] shadow-2xl p-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src="/images/scene-tree.jpg" alt="우리 아이가 주인공인 동화 한 장면" fill className="object-cover" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-xs font-semibold text-gray-600 px-3 py-1 rounded-full shadow-sm">
                      우리 아이 동화
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Child character floating, overlapping the main card (transparent PNG) */}
            <div className="animate-float-slow absolute left-2 md:left-24 bottom-0 w-44 md:w-64 z-20 drop-shadow-xl">
              <Image
                src="/images/child-reading.png"
                alt="책 읽는 아이 일러스트"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust — 아이 사진을 맡기는 부모의 불안을 먼저 해소한다 */}
      <section className="py-14 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-semibold text-[var(--color-primary)] mb-8">
            안심하고 맡기세요
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-11 h-11 bg-[var(--color-soft-blue)] rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1">사진은 삽화 생성에만</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  아이 사진은 동화 삽화를 만드는 데만 쓰이고, 외부에 공개되지 않습니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-11 h-11 bg-[var(--color-soft-green)] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1">아동 안전 필터링</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  아이에게 적합한 내용만 생성되도록 안전 기준을 적용합니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-11 h-11 bg-[var(--color-soft-yellow)] rounded-xl flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1">언제든 삭제 가능</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  탈퇴하면 사진과 동화를 포함한 데이터가 지체 없이 파기됩니다.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            자세한 내용은{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-dark)] transition-colors"
            >
              개인정보처리방침
            </Link>
            에서 확인하실 수 있어요.
          </p>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-[var(--color-soft-yellow)] rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-accent)]/30">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-amber-500 mb-2">Step 01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">아이 프로필 등록</h3>
                <p className="text-gray-500 leading-relaxed">
                  아이의 사진, 이름, 나이, 관심사를 입력해주세요. AI가 아이의 특징을 학습합니다.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                <ArrowRight className="w-8 h-8 text-gray-300" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-[var(--color-soft-pink)] rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/20">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-[var(--color-primary)] mb-2">Step 02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI 동화 생성</h3>
                <p className="text-gray-500 leading-relaxed">
                  관심사와 나이에 맞는 스토리를 AI가 작성하고, 아이가 등장하는 삽화를 그려줍니다.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                <ArrowRight className="w-8 h-8 text-gray-300" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-[var(--color-soft-green)] rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-secondary)]/20">
                  <BookMarked className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-[var(--color-secondary)] mb-2">Step 03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">동화 감상</h3>
                <p className="text-gray-500 leading-relaxed">
                  완성된 5페이지 그림 동화를 읽어보세요. 감정이 담긴 음성으로 읽어주기도 해요.
                </p>
              </div>
            </div>
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
            {/* Dreamy sky background with dark overlay for readability */}
            <Image
              src="/images/dreamy-sky.jpg"
              alt=""
              fill
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
