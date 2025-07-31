"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useState } from "react" // Import useState
import "./globals.css"
import YuktraSidebar from "@/components/left-sidebar"
import { cn } from "@/lib/utils" // Import cn for conditional class names

const inter = Inter({ subsets: ["latin"] })

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  // Define sidebar widths
  const collapsedWidth = "92px" // Corresponds to w-23
  const expandedWidth = "313px" // Corresponds to w-23 + 1px + w-[220px]

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-screen flex ">
          <YuktraSidebar
            isCollapsed={isCollapsed}
            onToggleCollapse={toggleCollapse}
          />
          <main
            className={cn(
              "flex-1 overflow-auto bg-gray-50 transition-all duration-300",
              isCollapsed ? `ml-[${collapsedWidth}]` : `ml-[${expandedWidth}]`,
            )}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
