import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, ArrowLeft, Clock, BookMarked, Volume2 } from "lucide-react";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "마법의 숲 모험",
      description: "용감한 토끼 루루가 마법의 숲에서 친구들을 구하는 이야기",
      duration: "8분",
      pages: 5,
      category: "모험",
      interest: "동물",
      gradient: "from-emerald-100 to-teal-50",
    },
    {
      id: 2,
      title: "별빛 공주의 꿈",
      description: "별빛 공주가 꿈의 세계에서 펼치는 환상적인 여행",
      duration: "10분",
      pages: 5,
      category: "판타지",
      interest: "공주",
      gradient: "from-pink-100 to-rose-50",
    },
    {
      id: 3,
      title: "바다 속 보물찾기",
      description: "꼬마 물고기와 친구들이 바다 깊은 곳에서 보물을 찾는 모험",
      duration: "7분",
      pages: 5,
      category: "모험",
      interest: "바다",
      gradient: "from-blue-100 to-cyan-50",
    },
    {
      id: 4,
      title: "구름 위의 집",
      description: "하늘 높은 구름 위에 사는 천사들의 따뜻한 이야기",
      duration: "9분",
      pages: 5,
      category: "판타지",
      interest: "하늘",
      gradient: "from-sky-100 to-blue-50",
    },
    {
      id: 5,
      title: "로봇 친구 베니",
      description: "외로운 아이와 로봇 친구가 만들어가는 우정 이야기",
      duration: "6분",
      pages: 5,
      category: "우정",
      interest: "로봇",
      gradient: "from-violet-100 to-purple-50",
    },
    {
      id: 6,
      title: "무지개 나라 여행",
      description: "색깔을 잃어버린 세상에 무지개를 되찾아주는 이야기",
      duration: "11분",
      pages: 5,
      category: "판타지",
      interest: "자연",
      gradient: "from-amber-100 to-yellow-50",
    },
  ];

  const categories = ["전체", "모험", "판타지", "우정", "교육"];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                홈
              </Link>
            </Button>
            <div className="h-5 w-px bg-gray-200" />
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">KidStory</span>
            </Link>
          </div>
          <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full px-5 h-9 text-sm font-semibold">
            앱에서 만들기
          </Button>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
              동화 라이브러리
            </h1>
            <p className="text-gray-500">
              AI가 만든 동화들을 구경해보세요. 앱에서 우리 아이를 주인공으로 직접 만들 수도 있어요.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
              <Input
                placeholder="동화 제목으로 검색..."
                className="pl-10 h-11 rounded-xl border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "전체"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((story) => (
              <div
                key={story.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${story.gradient} flex items-center justify-center relative`}>
                  <BookOpen className="w-12 h-12 text-gray-900/10" />
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    <span className="bg-white/90 text-xs font-semibold text-gray-600 px-2.5 py-1 rounded-full">
                      {story.category}
                    </span>
                    <span className="bg-white/90 text-xs font-medium text-gray-500 px-2.5 py-1 rounded-full">
                      #{story.interest}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{story.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {story.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookMarked className="w-3.5 h-3.5" />
                        {story.pages}페이지
                      </span>
                      <span className="flex items-center gap-1">
                        <Volume2 className="w-3.5 h-3.5" />
                        음성
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-full px-8 h-11 text-sm font-semibold border-gray-200 hover:bg-gray-50"
            >
              더 많은 동화 보기
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
