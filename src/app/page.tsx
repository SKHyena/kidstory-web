import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Sparkles,
  Camera,
  Wand2,
  BookMarked,
  Volume2,
  Shield,
  Star,
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
            <div className="w-9 h-9 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
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
          <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full px-6 h-10 text-sm font-semibold shadow-sm">
            <Download className="w-4 h-4 mr-1.5" />
            앱 다운로드
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-[20%] w-48 h-48 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-soft-pink)] text-[var(--color-primary)] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              우리 아이가 동화 속 주인공이 됩니다
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 text-balance leading-[1.1]">
              세상에 단 하나뿐인
              <br />
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[#FF8E53] to-[var(--color-accent)] bg-clip-text text-transparent">
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
              >
                <Smartphone className="w-5 h-5 mr-2" />
                무료로 시작하기
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

          {/* Hero Visual - Mockup cards */}
          <div className="mt-16 md:mt-24 relative max-w-4xl mx-auto">
            <div className="flex justify-center items-end gap-4 md:gap-6">
              {/* Left card */}
              <div className="animate-float-slow w-48 md:w-56 bg-white rounded-2xl shadow-xl p-3 -rotate-6 translate-y-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-soft-blue)] to-[var(--color-soft-green)] rounded-xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-white/80 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-[var(--color-secondary)]" />
                    </div>
                    <p className="text-xs font-medium text-gray-500">아이 사진 등록</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2 text-center">Step 1</p>
              </div>

              {/* Center card */}
              <div className="animate-float w-56 md:w-64 bg-white rounded-2xl shadow-2xl p-3 z-10">
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-primary)]/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 bg-white/80 rounded-full mx-auto mb-3 flex items-center justify-center animate-shimmer bg-gradient-to-r from-white/80 via-[var(--color-accent)]/40 to-white/80">
                      <Wand2 className="w-10 h-10 text-[var(--color-primary)]" />
                    </div>
                    <p className="text-sm font-bold text-gray-700">AI가 동화를 만드는 중...</p>
                    <p className="text-xs text-gray-400 mt-1">우리 아이가 주인공!</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2 text-center">Step 2</p>
              </div>

              {/* Right card */}
              <div className="animate-float-delay w-48 md:w-56 bg-white rounded-2xl shadow-xl p-3 rotate-6 translate-y-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-yellow)] rounded-xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-white/80 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <BookMarked className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                    <p className="text-xs font-medium text-gray-500">완성된 동화 읽기</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2 text-center">Step 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
              <span className="ml-2 text-sm font-semibold text-gray-700">4.9</span>
              <span className="text-sm text-gray-400 ml-1">App Store 평점</span>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">10,000+</span> 가족이 함께하고 있어요
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">50,000+</span> 동화가 만들어졌어요
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32">
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
              <div className="bg-[var(--color-soft-blue)] rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-500 mb-2">Step 01</div>
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
      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">FEATURES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance">
              KidStory가 특별한 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-soft-pink)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-pink)] rounded-xl flex items-center justify-center flex-shrink-0">
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
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-secondary)]/20 hover:bg-[var(--color-soft-green)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-green)] rounded-xl flex items-center justify-center flex-shrink-0">
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
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-[var(--color-soft-blue)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-blue)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">감정을 담은 음성 읽기</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  TTS 기술로 동화를 감정 있게 읽어줍니다. 자기 전 들려주기에 딱 좋아요.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-soft-yellow)]/50 transition-all">
              <div className="w-12 h-12 bg-[var(--color-soft-yellow)] rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">5페이지 그림 동화</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  매 페이지마다 아름다운 AI 삽화가 포함된 완전한 그림 동화를 제공합니다.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookMarked className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">동화 라이브러리</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  만들어진 모든 동화를 라이브러리에서 관리하고, 언제든 다시 읽을 수 있어요.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-500" />
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
      <section id="stories" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">STORIES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance">
              이런 동화가 만들어져요
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              아이의 관심사에 따라 모험, 판타지, 우정, 자연 등 다양한 주제의 동화가 생성됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "용감한 우주 탐험가",
                desc: "우주선을 타고 새로운 행성을 발견하는 모험",
                interest: "우주",
                gradient: "from-indigo-100 to-blue-50",
                iconColor: "text-indigo-500",
              },
              {
                title: "숲속 동물 친구들",
                desc: "숲에서 만난 동물 친구들과의 따뜻한 우정 이야기",
                interest: "동물",
                gradient: "from-emerald-100 to-green-50",
                iconColor: "text-emerald-500",
              },
              {
                title: "마법의 성 대모험",
                desc: "마법의 성에서 펼쳐지는 신비로운 판타지 여행",
                interest: "공주",
                gradient: "from-pink-100 to-rose-50",
                iconColor: "text-pink-500",
              },
            ].map((story) => (
              <div
                key={story.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${story.gradient} flex items-center justify-center relative`}>
                  <BookOpen className={`w-16 h-16 ${story.iconColor} opacity-30`} />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 text-xs font-semibold text-gray-600 px-3 py-1 rounded-full">
                      #{story.interest}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500">{story.desc}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
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
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative bg-gray-900 rounded-[2rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-[80px]" />

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
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full h-14 px-8 text-base font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full h-14 px-8 text-base font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
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
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">KidStory</span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                AI가 만드는 세상에 하나뿐인
                <br />
                우리 아이 그림 동화
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">제품</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#features" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    주요 기능
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    이용 방법
                  </Link>
                </li>
                <li>
                  <Link href="#stories" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    동화 미리보기
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">지원</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">법적 고지</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-10 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; 2024 KidStory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
