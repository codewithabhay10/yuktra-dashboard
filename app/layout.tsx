import type React from "react"
import type { Metadata } from "next"
import ClientRootLayout from "./clientLayout"

const metadata: Metadata = {
  title: "Yuktra Dashboard",
  description: "Content management and social media automation platform",
    generator: 'v0.dev'
}

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}


import './globals.css'
