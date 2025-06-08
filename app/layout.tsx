import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aswin Abbas",
  description: "Full Stack Developer passionate about creating exceptional web experiences",
  generator: 'v0.dev',
  icons: {
    icon: "/image-circle.png", // Replace with the actual path to your circular image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
          <Toaster
            position="top-center"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
