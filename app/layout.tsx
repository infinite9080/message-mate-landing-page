import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'ChatFlow - AI Messaging Platform',
  description: 'Unify all your customer conversations into one intelligent AI-powered dashboard.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
          <div className="fixed inset-0 pointer-events-none">
            <div
              className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"
              style={{
                animationDuration: "4s",
              }}
            />
            <div
              className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse"
              style={{
                animationDelay: "2s",
                animationDuration: "6s",
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] bg-gradient-to-r from-green-200/10 to-cyan-200/10 rounded-full blur-3xl animate-pulse"
              style={{
                animationDelay: "1s",
                animationDuration: "5s",
              }}
            />
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
