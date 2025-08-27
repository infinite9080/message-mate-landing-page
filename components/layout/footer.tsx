import Link from "next/link"
import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ChatFlow
                </span>
                <div className="text-blue-600 text-sm font-medium">AI Messaging Platform</div>
              </div>
            </div>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-md">
              The most comprehensive social media messaging platform for modern businesses. Build intelligent chatbots
              and manage all customer conversations in one unified dashboard.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram", "YouTube"].map((social) => (
                <div
                  key={social}
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer border border-white/30 shadow-lg rounded-full flex items-center justify-center group"
                >
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                    {social[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-xl text-slate-800">Product</h3>
            <ul className="space-y-4 text-slate-600">
              {["Features", "Integrations", "Pricing", "API Docs", "Templates", "Security", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <Link href={`/#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors text-lg">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-xl text-slate-800">Company</h3>
            <ul className="space-y-4 text-slate-600">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors text-lg">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors text-lg">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600 transition-colors text-lg">Careers</Link></li>
              <li><Link href="/press-kit" className="hover:text-blue-600 transition-colors text-lg">Press Kit</Link></li>
              <li><Link href="/partners" className="hover:text-blue-600 transition-colors text-lg">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors text-lg">Contact</Link></li>
              <li><Link href="/events" className="hover:text-blue-600 transition-colors text-lg">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-xl text-slate-800">Support</h3>
            <ul className="space-y-4 text-slate-600">
              <li>
                <Link href="/help-center" className="hover:text-blue-600 transition-colors text-lg">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-blue-600 transition-colors text-lg">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-blue-600 transition-colors text-lg">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/system-status" className="hover:text-blue-600 transition-colors text-lg">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition-colors text-lg">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 mb-4 md:mb-0 text-lg">
            &copy; 2024 ChatFlow Inc. All rights reserved. Made with ❤️ for businesses worldwide.
          </p>
          <div className="flex items-center space-x-8 text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors text-lg">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors text-lg">
              Terms
            </Link>
            <a href="#" className="hover:text-blue-600 transition-colors text-lg">
              Cookies
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors text-lg">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
