import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Rocket } from "lucide-react"

export default function CTASection() {
    return (
        <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            </div>
            <div className="max-w-5xl mx-auto text-center px-6 lg:px-8 relative">
                <div className="mb-8">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Rocket className="w-12 h-12 text-white" />
                    </div>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Ready to transform your
                    <br />
                    customer conversations?
                </h2>
                <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join 25,000+ businesses using ChatFlow to automate support, boost satisfaction, and scale operations across
                    all messaging platforms. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                    >
                        Start Your Free Trial
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 rounded-full font-bold bg-white/10 backdrop-blur-sm"
                    >
                        Schedule a Demo
                    </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200">
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        14-day free trial
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        No credit card required
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Setup in 10 minutes
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Cancel anytime
                    </div>
                </div>
            </div>
        </section>
    )
}