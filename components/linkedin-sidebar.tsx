import { Info, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Removed LinkedInNewsSidebarProps type
// linkedinNews is defined inside the component
const linkedInNews = Array(7).fill({
    title: "TCS to let go of 12,000 people",
    time: "2h ago",
  })

const LinkedInNewsSidebar: React.FC = () => (
    <aside className="h-screen w-[320px] bg-white shadow-lg border-l border-[#e7fffb] p-6 overflow-y-auto "  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">LinkedIn News</h2>
        <p className="text-sm text-gray-600">Top stories</p>
      </div>
      <Info size={20} className="text-gray-500" />
    </div>
    <div className="flex flex-col gap-4">
      {linkedInNews.map((news) => (
        <div
          key={news.id}
          className="border border-gray-200 rounded-lg p-4"
        >
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            {news.title}
          </h3>
          <p className="text-xs text-gray-500 mb-3">{news.time}</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">👥</span>
            </div>
            <Button className="bg-[#2db49c] text-white hover:bg-[#2db49c]/90 text-xs px-3 py-1 h-auto ml-auto">
              <Sparkles size={12} className="mr-1" /> Make post with this
              news
            </Button>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default LinkedInNewsSidebar;
