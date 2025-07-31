import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, Star, BarChart3, Sparkles, MessageCircle, FileText, Lightbulb, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  draftIdeas,
  trendingContent,
  newsItems,
  postIdeas,
  googleTrends,
} from "@/components/yuktra-dashboard";

export default function IdeaPlayground() {
  const topIdeas = [
    { id: 1, text: "Leverage AI for content creation" },
    { id: 2, text: "Remote work productivity hacks" },
    { id: 3, text: "Personal branding strategies" },
  ];
  const linkedInNews = [
    { id: 1, title: "AI is transforming the workplace", time: "2h ago" },
    { id: 2, title: "Remote work trends in 2024", time: "4h ago" },
    { id: 3, title: "Top skills employers want", time: "6h ago" },
  ];
  return (
    <div
      className="flex-1 p-6 overflow-x-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-[#009077]">Idea playground</h1>
        <div className="bg-white text-[#009077] font-semibold px-4 py-2 rounded-full border border-[#009077]">
          100K Words
        </div>
      </div>

      {/* Draft ideas section */}
      <section className="mb-8 w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#009077] rounded-full"></div>
          <h2 className="text-xl font-semibold text-[#009077]">Draft ideas</h2>
        </div>

        <div
          className="overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4">
            {draftIdeas.map((idea, index) => (
              <Card
                key={index}
                className="min-w-[260px] min-h-[160px] bg-[#009077] text-white border-0 shrink-0"
              >
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <p className="text-sm mb-3">{idea.text}</p>
                  <div className="flex justify-end">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">📝</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Content section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-[#009077]" size={24} />
            <h2 className="text-2xl font-semibold text-[#009077]">
              Trending Content
            </h2>
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
            <Card
              key={content.id}
              className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]"
            >
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <p className="text-sm mb-4">{content.text}</p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-[#009077] hover:bg-[#009077]/10"
                  >
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
          <h2 className="text-2xl font-semibold text-[#009077]">
            Topics for you
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="bg-white rounded-lg shadow-md border border-[#e7fffb]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-[#009077]">
                Topics
              </CardTitle>
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
              <CardTitle className="text-lg font-semibold text-[#009077]">
                Top Ideas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex flex-col gap-2">
                {topIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
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
            <Card
              key={news.id}
              className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]"
            >
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <p className="text-sm mb-4">{news.text}</p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-[#009077] hover:bg-[#009077]/10"
                  >
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
          <h2 className="text-2xl font-semibold text-[#009077]">
            Post ideas for you
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {postIdeas.map((idea) => (
            <Card
              key={idea.id}
              className="bg-white text-[#009077] rounded-lg shadow-md border border-[#e7fffb]"
            >
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <p className="text-sm mb-4">{idea.text}</p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-[#009077] hover:bg-[#009077]/10"
                  >
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
            <h2 className="text-2xl font-semibold text-[#009077]">
              Google trends
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-[#009077] text-[#009077] hover:bg-[#009077]/10 bg-transparent"
          >
            <Sparkles size={16} className="mr-1" /> Top{" "}
            <ChevronDown size={16} className="ml-1" />
          </Button>
        </div>
        <Card className="bg-white rounded-lg shadow-md border border-[#e7fffb]">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              {googleTrends.map((trend, idx) => (
                <div key={trend.name} className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700 w-12">
                    {idx + 1}. {trend.name}
                  </span>
                  <Progress
                    value={trend.percentage}
                    className="flex-1 h-2 bg-[#e7fffb] [&>*]:bg-[#2db49c]"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {trend.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
