import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Info, Star, Sparkles, ChevronDown, MessageCircle, FileText } from "lucide-react"

export default function IdeaPlayground() {
  const draftIdeas = [
    {
      id: 1,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 2,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 3,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 4,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 5,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 6,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 7,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 8,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
  ]

  const trendingContent = [
    {
      id: 1,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 2,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 3,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 4,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
  ]

  const topIdeas = [
    {
      id: 1,
      text: "Lorem ipsum massa volutpat cursus imperdiet vestibulum sed sit fringilla nec dignissim feugiat iaculis aenean et enim et habitant non magna sit ornare risus",
    },
    {
      id: 2,
      text: "Lorem ipsum massa volutpat cursus imperdiet vestibulum sed sit fringilla nec dignissim feugiat iaculis aenean et enim et habitant non magna sit ornare risus",
    },
    {
      id: 3,
      text: "Lorem ipsum massa volutpat cursus imperdiet vestibulum sed sit fringilla nec dignissim feugiat iaculis aenean et enim et habitant non magna sit ornare risus",
    },
  ]

  const newsItems = [
    {
      id: 1,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 2,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 3,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 4,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
  ]

  const postIdeas = [
    {
      id: 1,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 2,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 3,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
    {
      id: 4,
      text: "Make a good post on cat vs dog, please make it very interactive and usefull",
    },
  ]

  const googleTrends = [
    { id: 1, topic: "Weather", value: 100 },
    { id: 2, topic: "Delhi", value: 85 },
    { id: 3, topic: "Bombay", value: 60 },
    { id: 4, topic: "Jaipur", value: 45 },
    { id: 5, topic: "Goa", value: 30 },
  ]

  const linkedInNews = [
    { id: 1, title: "TCS to let go of 12,000 people", time: "21h ago" },
    { id: 2, title: "TCS to let go of 12,000 people", time: "21h ago" },
    { id: 3, title: "TCS to let go of 12,000 people", time: "21h ago" },
    { id: 4, title: "TCS to let go of 12,000 people", time: "21h ago" },
    { id: 5, title: "TCS to let go of 12,000 people", time: "21h ago" },
    { id: 6, title: "TCS to let go of 12,000 people", time: "21h ago" },
  ]

  return (
    <div className="flex min-h-screen bg-[#f5fffd]">
      {/* Main Content Area */}
      <div className="flex-1 p-6 mr-[320px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-[#009077]">Idea playground</h1>
          <div className="bg-white text-[#009077] font-semibold px-4 py-2 rounded-full border border-[#009077]">
            100K Words
          </div>
        </div>

        {/* Draft ideas section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-[#009077]" size={24} />
            <h2 className="text-2xl font-semibold text-[#009077]">Draft ideas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {draftIdeas.map((idea) => (
              <Card key={idea.id} className="bg-[#2db49c] text-white rounded-lg shadow-md">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <p className="text-sm mb-4">{idea.text}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <Sparkles size={16} className="mr-1" /> Make post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Content section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-[#009077]" size={24} />
              <h2 className="text-2xl font-semibold text-[#009077]">Trending Content</h2>
            </div>
            <div className="flex gap-4 text-[#009077] font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  className="border-[#009077] data-[state=checked]:bg-[#009077] data-[state=checked]:text-white"
                  defaultChecked
                />
                Trending Globally
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox className="border-[#009077] data-[state=checked]:bg-[#009077] data-[state=checked]:text-white" />
                Trending in your niche
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingContent.map((content) => (
              <Card key={content.id} className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <p className="text-sm mb-4">{content.text}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" className="text-[#009077] hover:bg-[#009077]/10">
                      <Sparkles size={16} className="mr-1" /> Make post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Topics for you section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="text-[#009077]" size={24} />
            <h2 className="text-2xl font-semibold text-[#009077]">Topics for you</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-white rounded-lg shadow-md border border-[#e7fffb]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#009077]">Topics</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-col gap-2">
                  <Button className="bg-[#2db49c] text-white hover:bg-[#2db49c]/90 justify-start">
                    Artificial Intelligence
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2db49c] text-[#2db49c] hover:bg-[#2db49c]/10 justify-start bg-transparent"
                  >
                    Artificial Intelligence
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2db49c] text-[#2db49c] hover:bg-[#2db49c]/10 justify-start bg-transparent"
                  >
                    Artificial Intelligence
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-lg shadow-md border border-[#e7fffb]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#009077]">Top Ideas</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-col gap-2">
                  {topIdeas.map((idea) => (
                    <div key={idea.id} className="flex items-start gap-2 text-sm text-gray-700">
                      <Star size={16} className="text-yellow-500 mt-1 shrink-0" />
                      <span>{idea.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* News section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="text-[#009077]" size={24} />
              <h2 className="text-2xl font-semibold text-[#009077]">News</h2>
            </div>
            <div className="flex gap-4 text-[#009077] font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  className="border-[#009077] data-[state=checked]:bg-[#009077] data-[state=checked]:text-white"
                  defaultChecked
                />
                All News
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox className="border-[#009077] data-[state=checked]:bg-[#009077] data-[state=checked]:text-white" />
                News in my niche
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsItems.map((news) => (
              <Card key={news.id} className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <p className="text-sm mb-4">{news.text}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" className="text-[#009077] hover:bg-[#009077]/10">
                      <Sparkles size={16} className="mr-1" /> Make post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Post ideas for you section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-[#009077]" size={24} />
            <h2 className="text-2xl font-semibold text-[#009077]">Post ideas for you</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {postIdeas.map((idea) => (
              <Card key={idea.id} className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <p className="text-sm mb-4">{idea.text}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" className="text-[#009077] hover:bg-[#009077]/10">
                      <Sparkles size={16} className="mr-1" /> Make post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Google trends section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-[#009077]" size={24} />
              <h2 className="text-2xl font-semibold text-[#009077]">Google trends</h2>
            </div>
            <Button variant="outline" className="border-[#009077] text-[#009077] hover:bg-[#009077]/10 bg-transparent">
              <Sparkles size={16} className="mr-1" /> Top <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>
          <Card className="bg-white rounded-lg shadow-md border border-[#e7fffb]">
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                {googleTrends.map((trend) => (
                  <div key={trend.id} className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-12">
                      {trend.id}. {trend.topic}
                    </span>
                    <Progress value={trend.value} className="flex-1 h-2 bg-[#e7fffb] [&>*]:bg-[#2db49c]" />
                    <span className="text-sm font-medium text-gray-700">{trend.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* LinkedIn News Sidebar (Right) */}
      <aside className="fixed right-0 top-0 h-screen w-[320px] bg-white shadow-lg border-l border-[#e7fffb] p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">LinkedIn News</h2>
            <p className="text-sm text-gray-600">Top stories</p>
          </div>
          <Info size={20} className="text-gray-500" />
        </div>
        <div className="flex flex-col gap-4">
          {linkedInNews.map((news) => (
            <div key={news.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{news.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{news.time}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">👥</span>
                </div>
                <Button className="bg-[#2db49c] text-white hover:bg-[#2db49c]/90 text-xs px-3 py-1 h-auto ml-auto">
                  <Sparkles size={12} className="mr-1" /> Make post with this news
                </Button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
