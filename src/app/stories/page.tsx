import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Play, Heart, Search, ArrowLeft, Clock, Star } from "lucide-react"

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "마법의 숲 모험",
      description: "용감한 토끼 루루가 마법의 숲에서 친구들을 구하는 이야기",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "8분",
      pages: 5,
      category: "모험",
      rating: 4.8,
      isNew: true,
    },
    {
      id: 2,
      title: "별빛 공주의 꿈",
      description: "별빛 공주가 꿈의 세계에서 펼치는 환상적인 여행",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "10분",
      pages: 5,
      category: "판타지",
      rating: 4.9,
      isNew: false,
    },
    {
      id: 3,
      title: "바다 속 보물찾기",
      description: "꼬마 물고기와 친구들이 바다 깊은 곳에서 보물을 찾는 모험",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "7분",
      pages: 5,
      category: "모험",
      rating: 4.7,
      isNew: true,
    },
    {
      id: 4,
      title: "구름 위의 집",
      description: "하늘 높은 구름 위에 사는 천사들의 따뜻한 이야기",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "9분",
      pages: 5,
      category: "판타지",
      rating: 4.6,
      isNew: false,
    },
    {
      id: 5,
      title: "로봇 친구 베니",
      description: "외로운 아이와 로봇 친구가 만들어가는 우정 이야기",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "6분",
      pages: 5,
      category: "우정",
      rating: 4.8,
      isNew: false,
    },
    {
      id: 6,
      title: "무지개 나라 여행",
      description: "색깔을 잃어버린 세상에 무지개를 되찾아주는 이야기",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "11분",
      pages: 5,
      category: "판타지",
      rating: 4.9,
      isNew: true,
    },
  ]

  const categories = ["전체", "모험", "판타지", "우정", "교육"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                홈으로
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KidStory
              </span>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            새 동화 만들기
          </Button>
        </nav>
      </header>

      {/* Page Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            동화 라이브러리
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI가 만든 특별한 동화들을 만나보세요. 각 동화마다 아름다운 삽화와 음성이 함께 제공됩니다.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="동화 제목이나 내용으로 검색하세요..."
              className="pl-10 h-12 border-2 border-purple-100 focus:border-purple-300"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "전체" ? "default" : "outline"}
                size="sm"
                className={category === "전체" ? "bg-purple-500 hover:bg-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={story.thumbnail || "/placeholder.svg"}
                  alt={story.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {story.isNew && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-red-400 text-white">
                    NEW
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    읽기
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {story.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {story.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {story.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-2">{story.description}</CardDescription>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {story.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {story.pages}페이지
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Play className="w-4 h-4 mr-2" />
                    읽기
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
          >
            더 많은 동화 보기
          </Button>
        </div>
      </section>
    </div>
  )
}
