import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Removed LinkedInNewsSidebarProps type
// linkedinNews is defined inside the component
const linkedinNews = Array(7).fill({
    title: "TCS to let go of 12,000 people",
    time: "2h ago",
  })

const LinkedInNewsSidebar: React.FC = () => (
  <div className="w-80 bg-[#ffffff] border-l border-[#e5e5ef] p-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="font-semibold text-[#272727]">LinkedIn News</h3>
        <p className="text-sm text-[#b3b3b3]">Top stories</p>
      </div>
      <Button variant="ghost" size="icon" className="w-8 h-8">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    </div>

    <div className="space-y-4">
      {linkedinNews.map((news, index) => (
        <Card key={index} className="bg-[#f8f8ff] border border-[#e5e5ef]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-[#009077] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-white">📰</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#272727] mb-1">{news.title}</p>
                <p className="text-xs text-[#b3b3b3]">{news.time}</p>
              </div>
            </div>
            <Button size="sm" className="bg-[#009077] hover:bg-[#2db49c] text-white w-full text-xs">
              Make post with this news
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default LinkedInNewsSidebar;
