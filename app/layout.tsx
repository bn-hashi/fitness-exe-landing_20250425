import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "Fitness Garage exe | カッコいい大人を作る秘密基地",
  description:
    "良質なプライベートジムがあなたの街に。自分史上最高のカラダを手に入れませんか？無料カウンセリング受付中！",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>{children}</body>
    </html>
  )
}
