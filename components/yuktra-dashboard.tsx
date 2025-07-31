"use client"

import { useState } from "react"
import Sidebar from "./left-sidebar"
import LinkedInNewsSidebar from "./linkedin-sidebar"
import MainContent from "./main-content";

export const draftIdeas = Array(12).fill({
  text: "Make a good post on cat vs dog, please make it very interactive and useful",
  icon: "📝",
});

export const trendingContent = Array(4).fill({
  text: "Make a good post on cat vs dog, please make it very interactive and useful",
  icon: "📈",
});

export const newsItems = Array(4).fill({
  text: "Make a good post on cat vs dog, please make it very interactive and useful",
  icon: "📰",
});

export const postIdeas = Array(4).fill({
  text: "Make a good post on cat vs dog, please make it very interactive and useful",
  icon: "💡",
});

export const googleTrends = [
  { name: "Weather", percentage: 100 },
  { name: "Delhi", percentage: 85 },
  { name: "Bombay", percentage: 60 },
  { name: "Jaipur", percentage: 45 },
  { name: "Goa", percentage: 30 },
];

export default function Component() {
  const [trendingGlobal, setTrendingGlobal] = useState(true)
  const [allNews, setAllNews] = useState(true)

  return (
    <div className="min-h-screen bg-[#f5fffd] flex">
      {/* Left Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <MainContent />
      {/* Right Sidebar */}
      <LinkedInNewsSidebar />
    </div>
  )
}
