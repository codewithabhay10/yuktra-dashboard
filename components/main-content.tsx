import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, Star, BarChart3 } from "lucide-react";
import {
  draftIdeas,
  trendingContent,
  newsItems,
  postIdeas,
  googleTrends,
} from "@/components/yuktra-dashboard";

export default function MainContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#009077]">Idea playground</h1>
          <Badge className="bg-[#ffd56d] text-[#272727] hover:bg-[#ffd56d]">
            100% Words
          </Badge>
        </div>

        {/* Draft Ideas */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#009077] rounded-full"></div>
            <h2 className="text-xl font-semibold text-[#009077]">
              Draft ideas
            </h2>
          </div>
          <div className="overflow-x-auto scrollbar-hide w-full">
            <div className="flex gap-4 min-w-max flex-nowrap px-1">
              {draftIdeas.map((idea, index) => (
                <Card
                  key={index}
                  className="bg-[#009077] text-white border-0 min-w-[250px] max-w-[250px] rounded-xl shadow-md"
                >
                  <CardContent className="p-4">
                    <p className="text-sm mb-3 leading-snug">{idea.text}</p>
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
        </div>

        {/* Trending Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#009077]" />
              <h2 className="text-xl font-semibold text-[#009077]">
                Trending Content
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009077]" />
                <span className="text-sm text-[#272727]">
                  Trending Globally
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009077]" />
                <span className="text-sm text-[#272727]">
                  Trending in your niche
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {trendingContent.map((content, index) => (
              <Card key={index} className="bg-white border border-[#e5e5ef]">
                <CardContent className="p-4">
                  <p className="text-sm text-[#272727] mb-3">{content.text}</p>
                  <div className="flex justify-end">
                    <div className="w-6 h-6 bg-[#009077] rounded flex items-center justify-center">
                      <span className="text-xs text-white">📈</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Topics for you */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#009077] rounded-full"></div>
            <h2 className="text-xl font-semibold text-[#009077]">
              Topics for you
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#272727] mb-3">Topics</h3>
              <div className="space-y-2">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <Badge
                      key={index}
                      className="bg-[#009077] text-white hover:bg-[#009077] block w-fit"
                    >
                      Artificial Intelligence
                    </Badge>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#272727] mb-3">Top Ideas</h3>
              <div className="space-y-3">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-[#ffd56d] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-[#272727] mb-1">
                          Lorem ipsum massa volutpat cursus imperdiet vestibulum
                          sed sit fringilla nec dignissim feugiat
                        </p>
                        <Button
                          size="sm"
                          className="bg-[#009077] hover:bg-[#2db49c] text-white text-xs"
                        >
                          Make post
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* News */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#009077] rounded-full"></div>
              <h2 className="text-xl font-semibold text-[#009077]">News</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009077]" />
                <span className="text-sm text-[#272727]">All News</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009077]" />
                <span className="text-sm text-[#272727]">News in my niche</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {newsItems.map((news, index) => (
              <Card key={index} className="bg-white border border-[#e5e5ef]">
                <CardContent className="p-4">
                  <p className="text-sm text-[#272727] mb-3">{news.text}</p>
                  <div className="flex justify-end">
                    <div className="w-6 h-6 bg-[#009077] rounded flex items-center justify-center">
                      <span className="text-xs text-white">📰</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Post ideas for you */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#009077] rounded-full"></div>
            <h2 className="text-xl font-semibold text-[#009077]">
              Post ideas for you
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {postIdeas.map((idea, index) => (
              <Card key={index} className="bg-white border border-[#e5e5ef]">
                <CardContent className="p-4">
                  <p className="text-sm text-[#272727] mb-3">{idea.text}</p>
                  <div className="flex justify-end">
                    <div className="w-6 h-6 bg-[#009077] rounded flex items-center justify-center">
                      <span className="text-xs text-white">💡</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google trends */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-[#009077]" />
            <h2 className="text-xl font-semibold text-[#009077]">
              Google trends
            </h2>
          </div>
          <Card className="bg-white border border-[#e5e5ef]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-[#e7fffb] text-[#009077] hover:bg-[#e7fffb]">
                  Top
                </Badge>
              </div>
              <div className="space-y-4">
                {googleTrends.map((trend, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#272727]">
                        {index + 1}. {trend.name}
                      </span>
                      <span className="text-sm text-[#009077] font-medium">
                        {trend.percentage}%
                      </span>
                    </div>
                    <Progress
                      value={trend.percentage}
                      className="h-2 bg-[#e5e5ef]"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
