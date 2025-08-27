import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, ArrowRight } from "lucide-react"

interface FAQSectionProps {
    openFaq: number | null;
    setOpenFaq: (index: number | null) => void;
}

export default function FAQSection({ openFaq, setOpenFaq }: FAQSectionProps) {
    return (
        <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200/50 px-6 py-3 shadow-lg text-sm font-medium">
                        ❓ Frequently Asked Questions
                    </Badge>
                    <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">Everything you need to know</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Get answers to the most common questions about ChatFlow
                    </p>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            question: "How quickly can I get started with ChatFlow?",
                            answer:
                                "You can have your first chatbot live in under 10 minutes! Our visual builder is designed for non-technical users, and we provide templates to get you started immediately. Most customers are fully operational within their first day.",
                        },
                        {
                            question: "Which messaging platforms do you support?",
                            answer:
                                "We support 15+ platforms including WhatsApp Business API, Facebook Messenger, Instagram Direct, Telegram, SMS, webchat, WeChat, and more. We're constantly adding new integrations based on customer demand.",
                        },
                        {
                            question: "Can I try ChatFlow before committing to a paid plan?",
                            answer:
                                "Absolutely! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start, and you can cancel anytime during the trial period with no questions asked.",
                        },
                        {
                            question: "How intelligent are your AI chatbots?",
                            answer:
                                "Our chatbots are powered by GPT-4 and can be trained on your specific business data. They understand context, handle complex queries, and learn from interactions. When they can't help, they seamlessly hand off to human agents with full conversation context.",
                        },
                        {
                            question: "Is my customer data secure with ChatFlow?",
                            answer:
                                "Security is our top priority. We use bank-level encryption, are SOC 2 Type II certified, and comply with GDPR, CCPA, and other global privacy regulations. Your data is encrypted at rest and in transit, and we never share it with third parties.",
                        },
                        {
                            question: "Can I customize the chatbot to match my brand?",
                            answer:
                                "Yes! ChatFlow offers extensive customization options including custom colors, fonts, logos, conversation flows, and even white-label solutions for enterprise customers. Your chatbot will feel like a natural extension of your brand.",
                        },
                    ].map((faq, index) => (
                        <Card
                            key={index}
                            className="border border-white/30 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        >
                            <CardContent className="p-0">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-8 text-left flex items-center justify-between hover:bg-white/60 transition-colors"
                                >
                                    <span className="font-bold text-slate-800 text-xl pr-4">{faq.question}</span>
                                    {openFaq === index ? (
                                        <Minus className="w-6 h-6 text-slate-500 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-slate-500 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-8 pb-8">
                                        <p className="text-slate-600 leading-relaxed text-lg">{faq.answer}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-600 mb-6 text-lg">Still have questions?</p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-white text-lg font-semibold"
                    >
                        Contact Support Team
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}