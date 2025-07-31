"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  User, BarChart3, Zap, Plus, Calendar, MessageCircle, PieChart, Settings, HelpCircle, LayoutDashboard,
  LineChart, ChevronLeft, ChevronRight, FileText, CheckCircle, Edit3, TrendingUp, Target, Users, Heart, Eye,
  Palette, ImageIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: <User size={25} strokeWidth={2.5} />, label: "Profile", href: "/profile/dashboard", section: "/profile" },
  { icon: <Zap size={25} strokeWidth={2.5} />, label: "Agentic", href: "/agentic", section: "/agentic" },
  { icon: <Plus size={25} strokeWidth={2.5} />, label: "Content", href: "/content/idea-playground", section: "/content" },
  { icon: <Calendar size={25} strokeWidth={2.5} />, label: "Schedule", href: "/schedule/scheduled", section: "/schedule" },
  { icon: <MessageCircle size={25} strokeWidth={2.5} />, label: "Engagement", href: "/engagement/drop-comments", section: "/engagement" },
  { icon: <PieChart size={25} strokeWidth={2.5} />, label: "Analytics", href: "/analytics/overview", section: "/analytics" },
]

const extraItems = [
  { icon: <Settings size={25} strokeWidth={2.5} />, label: "Settings", href: "/settings", section: "/settings" },
  { icon: <HelpCircle size={25} strokeWidth={2.5} />, label: "Help & Support", href: "/support", section: "/support" },
]

const dynamicNavigation = {
  "/profile": [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/profile/dashboard" },
    { icon: <BarChart3 size={18} />, label: "Analysis", href: "/profile/analysis" },
    { icon: <LineChart size={18} />, label: "Strategy", href: "/profile/strategy" },
  ],
  "/schedule": [
    { icon: <Calendar size={18} />, label: "Scheduled", href: "/schedule/scheduled" },
    { icon: <CheckCircle size={18} />, label: "Published", href: "/schedule/published" },
    { icon: <Edit3 size={18} />, label: "All Drafts", href: "/schedule/drafts" },
  ],
  "/agentic": [
    { icon: <Zap size={18} />, label: "Automation", href: "/agentic/automation" },
    { icon: <Target size={18} />, label: "Workflows", href: "/agentic/workflows" },
    { icon: <TrendingUp size={18} />, label: "Performance", href: "/agentic/performance" },
  ],
  "/content": [
    { icon: <Palette size={18} />, label: "Ready Post for you", href: "/content/ready-post-for-you" },
    { icon: <ImageIcon size={18} />, label: "Idea Playground", href: "/content/idea-playground" },
    { icon: <FileText size={18} />, label: "Post Maker", href: "/content/post-maker" },
    { icon: <FileText size={18} />, label: "Writing Pad", href: "/content/writing-pad" },
    { icon: <FileText size={18} />, label: "Viral Posts", href: "/content/viral-posts" },
    { icon: <FileText size={18} />, label: "Viral Templates", href: "/content/viral-templates" },
    { icon: <FileText size={18} />, label: "Favorite Creators", href: "/content/favorite-creators" },
    { icon: <FileText size={18} />, label: "Content Board", href: "/content/content-board" },
    { icon: <FileText size={18} />, label: "Chat with Yukti", href: "/content/chat-with-yukti" },
  ],
  "/engagement": [
    { icon: <Heart size={18} />, label: "Drop Comments", href: "/engagement/drop-comments" },
    { icon: <Users size={18} />, label: "Comments Analytics", href: "/engagement/comments-analytics" },
  ],
  "/analytics": [
    { icon: <BarChart3 size={18} />, label: "Overview", href: "/analytics/overview" },
    { icon: <TrendingUp size={18} />, label: "Follower Analytics", href: "/analytics/follower-analytics" },
    { icon: <Eye size={18} />, label: "Post Analytics", href: "/analytics/post-analytics" },
    { icon: <Eye size={18} />, label: "Takeaways", href: "/analytics/takeaways" },
  ],
  "/settings": [
    { icon: <User size={18} />, label: "Account", href: "/settings/account" },
    { icon: <Settings size={18} />, label: "Preferences", href: "/settings/preferences" },
    { icon: <Users size={18} />, label: "Team", href: "/settings/team" },
  ],
  "/support": [
    { icon: <HelpCircle size={18} />, label: "FAQ", href: "/support/faq" },
    { icon: <MessageCircle size={18} />, label: "Contact", href: "/support/contact" },
    { icon: <FileText size={18} />, label: "Documentation", href: "/support/docs" },
  ],
}

export default function YuktraSidebar({
  avatarUrl = "/placeholder.svg?height=40&width=40",
}: {
  avatarUrl?: string
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const toggleCollapse = () => setIsCollapsed((prev) => !prev)

  // This logic can be lifted to parent if needed
  useEffect(() => {
    const main = document.querySelector("main")
    if (main) {
      main.classList.remove("pl-[92px]", "pl-[313px]")
      main.classList.add(isCollapsed ? "pl-[92px]" : "pl-[313px]")
    }
  }, [isCollapsed])

  const currentSection = "/" + pathname.split("/")[1]
  const currentNavItems = dynamicNavigation[currentSection as keyof typeof dynamicNavigation] || []

  const isMainMenuActive = (section: string) => currentSection === section
  const isSubNavActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 h-screen flex flex-col justify-between shadow-lg transition-all duration-300",
        isCollapsed ? "w-[92px]" : "w-[313px]",
        "bg-[#e5f8f5]"
      )}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-2 pt-18 h-screen items-center w-23 relative">
          {isCollapsed && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapse}
              className="absolute top-4 right-2 h-6 w-6 p-0 text-[#008772] hover:bg-[#008772]/10 z-10"
              title="Expand sidebar"
            >
              <ChevronRight size={14} />
            </Button>
          )}

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 w-2/3 font-semibold rounded-md transition text-[#008772]",
                isMainMenuActive(item.section) ? "bg-[#008772] text-white" : "hover:bg-[#008772]/10"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}

          <div className="border-b border-[#008772]/30 w-full my-4 rounded" />

          {extraItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 w-2/3 font-semibold rounded-md transition text-[#008772]",
                isMainMenuActive(item.section) ? "bg-[#008772] text-white" : "hover:bg-[#008772]/10"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}

          <div className="flex justify-center pb-4 mt-auto">
            <Avatar className="w-10 h-10">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback className="bg-[#008772] text-white">UA</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {!isCollapsed && (
          <>
            <div className="w-[1px] bg-[#008772]/30 my-4 rounded" />
            <div className="flex-1 flex flex-col px-4 w-[220px] py-4 text-[#008772] relative transition-all duration-300">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCollapse}
                className="absolute top-2 right-2 h-6 w-6 p-0 text-[#008772] hover:bg-[#008772]/10 z-10"
                title="Collapse sidebar"
              >
                <ChevronLeft size={14} />
              </Button>
              <h1 className="text-4xl font-bold mb-7 pr-8">
                yukt<span className="inline-block rotate-45">↑</span>ra
              </h1>
              <nav className="space-y-1">
                {currentNavItems.map((nav) => (
                  <Link
                    key={nav.href}
                    href={nav.href}
                    className={cn(
                      "flex items-center font-semibold gap-2 text-sm py-4 px-3 rounded-md transition",
                      isSubNavActive(nav.href)
                        ? "bg-[rgb(115,193,180)] text-white"
                        : "hover:bg-[#008772]/10 text-[#008772]"
                    )}
                  >
                    {nav.icon}
                    <span>{nav.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
