import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Rocket, Target, Award } from "lucide-react"

interface PricingSectionProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function PricingSection({ activeTab, setActiveTab }: PricingSectionProps) {
    return (
        <section id="pricing" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-700 border-emerald-200/50 px-6 py-3 shadow-lg text-sm font-medium">
                        💰 Simple Pricing
                    </Badge>
                    <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                        Choose your
                        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            {" "}
                            growth plan
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Start free, scale as you grow. All plans include our core features with no hidden fees or setup costs.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1.5 mb-12 border border-white/30 shadow-lg">
                        <button
                            onClick={() => setActiveTab("monthly")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "monthly" ? "bg-white text-slate-800 shadow-lg" : "text-slate-600 hover:text-slate-800"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setActiveTab("yearly")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${activeTab === "yearly" ? "bg-white text-slate-800 shadow-lg" : "text-slate-600 hover:text-slate-800"
                                }`}
                        >
                            Yearly
                            <Badge className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 shadow-lg">
                                Save 25%
                            </Badge>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Starter",
                            monthlyPrice: 29,
                            yearlyPrice: 22,
                            description: "Perfect for small businesses and startups",
                            features: [
                                "Up to 1,000 conversations/month",
                                "2 chatbots",
                                "WhatsApp + Messenger integration",
                                "Basic analytics",
                                "Email support",
                                "Template library",
                            ],
                            popular: false,
                            gradient: "from-blue-500 to-cyan-500",
                            icon: Rocket,
                        },
                        {
                            name: "Professional",
                            monthlyPrice: 99,
                            yearlyPrice: 74,
                            description: "Ideal for growing businesses",
                            features: [
                                "Up to 10,000 conversations/month",
                                "Unlimited chatbots",
                                "All 15+ platform integrations",
                                "Advanced analytics & reports",
                                "Live agent handoff",
                                "Priority support",
                                "Custom branding",
                                "API access",
                                "A/B testing",
                            ],
                            popular: true,
                            gradient: "from-emerald-500 to-teal-500",
                            icon: Target,
                        },
                        {
                            name: "Enterprise",
                            monthlyPrice: "Custom",
                            yearlyPrice: "Custom",
                            description: "For large organizations with custom needs",
                            features: [
                                "Unlimited conversations",
                                "Unlimited chatbots",
                                "Custom integrations",
                                "Dedicated success manager",
                                "Advanced security & compliance",
                                "99.9% SLA guarantee",
                                "Custom training & onboarding",
                                "White-label solution",
                                "Advanced AI models",
                                "Custom reporting",
                            ],
                            popular: false,
                            gradient: "from-purple-500 to-pink-500",
                            icon: Award,
                        },
                    ].map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative group hover:shadow-2xl transition-all duration-700 ${plan.popular
                                ? "border-2 border-emerald-500/50 shadow-xl scale-105 hover:scale-110"
                                : "border border-white/30 hover:scale-105"
                                } bg-white/80 backdrop-blur-sm`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                                        🔥 Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8 pt-10">
                                <div
                                    className={`w-18 h-18 bg-gradient-to-r ${plan.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                                >
                                    <plan.icon className="w-9 h-9 text-white" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    {typeof plan.monthlyPrice === "number" ? (
                                        <>
                                            <span className="text-5xl font-bold text-slate-800">
                                                ${activeTab === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                                            </span>
                                            <span className="text-slate-600 text-lg">/month</span>
                                            {activeTab === "yearly" && (
                                                <div className="text-sm text-emerald-600 font-semibold mt-2">
                                                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <span className="text-4xl font-bold text-slate-800">{plan.monthlyPrice}</span>
                                    )}
                                </div>
                                <p className="text-slate-600 mt-4 text-lg">{plan.description}</p>
                            </CardHeader>

                            <CardContent className="px-8 pb-10">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${plan.popular
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl"
                                        : "border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white"
                                        }`}
                                    variant={plan.popular ? "default" : "outline"}
                                >
                                    {typeof plan.monthlyPrice === "number" ? "Start Free Trial" : "Contact Sales"}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                {typeof plan.monthlyPrice === "number" && (
                                    <p className="text-center text-sm text-slate-500 mt-4">
                                        14-day free trial • No credit card required
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-slate-600 mb-6 text-lg">
                        Need a custom solution? We offer flexible pricing for enterprise customers.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-white text-lg font-semibold"
                    >
                        Contact Sales Team
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}