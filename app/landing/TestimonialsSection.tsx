import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-blue-700 border-blue-200/50 px-6 py-3 shadow-lg text-sm font-medium">
                        💬 Customer Success
                    </Badge>
                    <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                        Trusted by businesses
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {" "}
                            worldwide
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        See how companies like yours are transforming their customer communication with ChatFlow
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            name: "Sarah Johnson",
                            role: "VP of Customer Success",
                            company: "TechStart Inc.",
                            content:
                                "ChatFlow transformed our customer support completely. We reduced response time by 85% and our CSAT scores hit an all-time high. The AI is incredibly intelligent and the human handoff is seamless.",
                            rating: 5,
                            gradient: "from-pink-500 to-rose-500",
                            logo: "🚀",
                        },
                        {
                            name: "Michael Chen",
                            role: "CEO & Founder",
                            company: "E-commerce Plus",
                            content:
                                "The WhatsApp integration alone saved us $50K annually in support costs. Our chatbot handles 92% of inquiries automatically, and customers love the instant responses. ROI was immediate.",
                            rating: 5,
                            gradient: "from-blue-500 to-cyan-500",
                            logo: "🛒",
                        },
                        {
                            name: "Emily Rodriguez",
                            role: "Head of Operations",
                            company: "Global Services Ltd",
                            content:
                                "Setting up was incredibly easy - no technical team needed. The visual builder is intuitive, and the analytics give us insights we never had before. Our team productivity increased by 60%.",
                            rating: 5,
                            gradient: "from-emerald-500 to-teal-500",
                            logo: "🌍",
                        },
                    ].map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-0 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-slate-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="p-8 relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}
                                    >
                                        {testimonial.logo}
                                    </div>
                                </div>
                                <blockquote className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                                    "{testimonial.content}"
                                </blockquote>
                                <div className="flex items-center">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}
                                    >
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-800 text-lg">{testimonial.name}</div>
                                        <div className="text-slate-600 text-sm">{testimonial.role}</div>
                                        <div className="text-slate-500 text-sm font-medium">{testimonial.company}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="text-center">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { metric: "4.9/5", label: "Customer Rating", icon: "⭐" },
                            { metric: "25,000+", label: "Happy Customers", icon: "😊" },
                            { metric: "99.9%", label: "Uptime SLA", icon: "⚡" },
                            { metric: "24/7", label: "Support Available", icon: "🛟" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                    {stat.metric}
                                </div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}