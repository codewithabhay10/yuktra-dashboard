"use client";
import MainContent from "@/components/main-content";
import LinkedInNewsSidebar from "@/components/linkedin-sidebar";

export default function IdeaPlayground() {
  return (
    <div className="flex h-screen bg-[#f5fffd] w-full flex overflow-hidden">
      {/* Main Content Area */}
     <MainContent />
      {/* LinkedIn News Sidebar (Right) */}
     <LinkedInNewsSidebar />
    </div>
  );
}
