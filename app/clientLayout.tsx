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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // Define sidebar widths
  const collapsedWidth = "92px" // Corresponds to w-23
  const expandedWidth = "313px" // Corresponds to w-23 + 1px + w-[220px]

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <YuktraSidebar
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
          <main
            className={cn(
              "flex-1 overflow-auto bg-gray-50 transition-all duration-300",
              isSidebarCollapsed ? `ml-[${collapsedWidth}]` : `ml-[${expandedWidth}]`,
            )}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
