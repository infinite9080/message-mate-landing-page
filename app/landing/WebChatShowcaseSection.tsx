import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, ArrowRight, Bot, Send } from "lucide-react"

export default function WebChatShowcaseSection() {
    return (
        <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-indigo-700 border-indigo-200/50 px-6 py-3 shadow-lg text-sm font-medium">
                        🌐 WebChat Integration
                    </Badge>
                    <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                        Embed intelligent chat
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {" "}
                            everywhere
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Add AI-powered chat widgets to any website or mobile app with just one line of code. Fully customizable
                        and mobile-optimized.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Features */}
                    <div className="space-y-10">
                        {[
                            {
                                icon: Code,
                                title: "One-Line Integration",
                                description:
                                    "Add our chat widget to any website with a single script tag. No complex setup or technical expertise required.",
                                color: "from-blue-500 to-cyan-500",
                            },
                            {
                                icon: Palette,
                                title: "Complete Customization",
                                description:
                                    "Match your brand perfectly with custom colors, fonts, positioning, and chat bubble designs.",
                                color: "from-purple-500 to-pink-500",
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile Optimized",
                                description:
                                    "Responsive design that works flawlessly on desktop, tablet, and mobile with touch-friendly interactions.",
                                color: "from-green-500 to-emerald-500",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start space-x-6 group">
                                <div
                                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                                >
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                Try WebChat Demo
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Right: Interactive Demo */}
                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            {/* Browser Frame */}
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-lg px-4 py-2 ml-4">
                                    <div className="text-sm text-slate-500">https://yourwebsite.com</div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="space-y-6 mb-8">
                                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                <div className="h-40 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                                    <div className="text-slate-400 text-lg font-medium">Your Website Content</div>
                                </div>
                                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                            </div>

                            {/* Enhanced Chat Widget */}
                            <div className="absolute bottom-8 right-8 w-80 h-96 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                                {/* Chat Header */}
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <Bot className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">ChatFlow Assistant</div>
                                            <div className="text-sm opacity-90 flex items-center">
                                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                                Online • Replies instantly
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="p-6 space-y-4 h-64 overflow-y-auto">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-slate-100 rounded-2xl rounded-tl-md p-4 max-w-xs">
                                            <div className="text-sm text-slate-800">
                                                Hi there! 👋 I'm here to help you get started with ChatFlow. What would you like to know?
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl rounded-tr-md p-4 max-w-xs">
                                            <div className="text-sm">Tell me about your pricing plans</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-slate-100 rounded-2xl rounded-tl-md p-4 max-w-xs">
                                            <div className="text-sm text-slate-800">
                                                Great question! We have three plans starting at $29/month. Would you like me to show you a
                                                comparison? 📊
                                            </div>
                                        </div>
                                    </div>

                                    {/* Typing Indicator */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-slate-100 rounded-2xl rounded-tl-md p-4">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                <div
                                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.1s" }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.2s" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Input */}
                                <div className="p-4 border-t border-slate-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-1 bg-slate-100 rounded-full px-4 py-3">
                                            <div className="text-sm text-slate-400">Type your message...</div>
                                        </div>
                                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Send className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}