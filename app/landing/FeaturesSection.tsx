import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Headphones, BarChart3, Globe, Shield, Rocket } from "lucide-react"

export default function FeaturesSection() {
    return (
        <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-purple-700 border-purple-200/50 px-6 py-3 shadow-lg text-sm font-medium">
                        ⚡ Platform Capabilities
                    </Badge>
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                        Everything you need to
                        <br />
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                            scale conversations
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        From AI-powered automation to human handoff, advanced analytics to enterprise security - we provide the
                        complete toolkit for modern customer communication
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left: AI Features */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">AI-Powered Automation</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                        Build intelligent chatbots with our visual flow builder. Powered by GPT-4 and trained on your
                                        business data for contextual, human-like responses.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Visual Builder", "GPT-4 Integration", "Custom Training", "Multi-language"].map((feature) => (
                                            <Badge key={feature} className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 text-sm">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Seamless Human Handoff</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                        When AI reaches its limits, smoothly transfer conversations to human agents with full context and
                                        conversation history preserved.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Smart Routing", "Context Preservation", "Agent Dashboard", "SLA Tracking"].map((feature) => (
                                            <Badge key={feature} className="bg-green-50 text-green-700 border-green-200 px-3 py-1 text-sm">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Advanced Analytics</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                        Get deep insights into customer behavior, conversation patterns, and bot performance with
                                        real-time dashboards and custom reports.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Real-time Metrics", "Custom Reports", "A/B Testing", "ROI Tracking"].map((feature) => (
                                            <Badge
                                                key={feature}
                                                className="bg-purple-50 text-purple-700 border-purple-200 px-3 py-1 text-sm"
                                            >
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard Preview */}
                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                        <BarChart3 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-800">Analytics Dashboard</div>
                                        <div className="text-sm text-slate-500">Real-time insights</div>
                                    </div>
                                </div>
                                <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">Live</Badge>
                            </div>

                            {/* Mock Charts */}
                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm font-medium text-slate-700 mb-3">Conversation Volume</div>
                                    <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-end justify-between p-4">
                                        {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                                            <div
                                                key={i}
                                                className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t w-8 opacity-80"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-slate-800">94%</div>
                                        <div className="text-sm text-slate-600">Resolution Rate</div>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-slate-800">1.2s</div>
                                        <div className="text-sm text-slate-600">Avg Response</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Globe,
                            title: "Multi-Platform Support",
                            description:
                                "Connect 15+ messaging platforms from one unified dashboard with real-time synchronization",
                            color: "from-blue-500 to-cyan-500",
                        },
                        {
                            icon: Shield,
                            title: "Enterprise Security",
                            description: "Bank-level encryption, SOC 2 compliance, and GDPR-ready data protection standards",
                            color: "from-green-500 to-emerald-500",
                        },
                        {
                            icon: Rocket,
                            title: "Lightning Fast",
                            description: "Sub-second response times with 99.9% uptime SLA and global CDN infrastructure",
                            color: "from-purple-500 to-pink-500",
                        },
                    ].map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                        >
                            <CardContent className="p-8 text-center">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}