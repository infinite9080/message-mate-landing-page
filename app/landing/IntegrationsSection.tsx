import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function IntegrationsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const integrations = [
        {
            title: "Meta Ecosystem",
            description: "Official integrations with WhatsApp Business, Instagram Direct, and Facebook Messenger.",
            icon: "🔵",
            features: ["WhatsApp Business API", "Instagram Shopping", "Messenger Platform", "Meta Verified"],
            gradient: "from-[#71d6fb] via-blue-500 to-cyan-400",
            stats: "2B+ users reached",
        },
        {
            title: "Web & Mobile Chat",
            description: "Embed intelligent chat widgets on websites and mobile apps with full customization.",
            icon: "🌐",
            features: ["Custom Branding", "Mobile SDK", "Real-time Sync", "Offline Support"],
            gradient: "from-emerald-400 via-teal-500 to-cyan-500",
            stats: "99.9% uptime",
        },
        {
            title: "Global Messaging",
            description: "Connect with Telegram, SMS, WeChat, and other regional platforms for worldwide engagement.",
            icon: "🌍",
            features: ["15+ Platforms", "Multi-language", "Local Compliance", "Global Infrastructure"],
            gradient: "from-orange-400 via-pink-500 to-rose-500",
            stats: "50+ countries",
        },
    ];

    const stats = [
        { number: "25,000+", label: "Active Businesses", icon: "🏢" },
        { number: "500M+", label: "Messages Monthly", icon: "💬" },
        { number: "15+", label: "Platform Integrations", icon: "🔗" },
        { number: "99.9%", label: "Uptime SLA", icon: "⚡" },
    ];

    return (
        <section id="integrations" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200/60 px-6 py-3 shadow-lg text-sm font-semibold">
                        🔗 Unified Platform
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
                        One dashboard for{" "}
                        <span className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            every conversation
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Connect WhatsApp, Instagram, Facebook Messenger, Telegram, webchat, and 15+ more platforms in one
                        intelligent hub.
                    </p>
                </motion.div>

                <motion.div className="grid lg:grid-cols-3 gap-8 mb-20" variants={containerVariants}>
                    {integrations.map((integration) => (
                        <motion.div
                            key={integration.title}
                            variants={itemVariants}
                            className="group"
                        >
                            <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-slate-200/60 bg-white/70 backdrop-blur-lg relative overflow-hidden shadow-xl rounded-2xl">
                                <CardContent className="p-8 relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-r ${integration.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-3xl`}
                                        >
                                            {integration.icon}
                                        </div>
                                        <Badge className="bg-slate-100 text-slate-700 border-slate-200/50 px-3 py-1.5 text-xs font-medium">
                                            {integration.stats}
                                        </Badge>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                        {integration.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {integration.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        {integration.features.map((feature) => (
                                            <div key={feature} className="flex items-center text-sm text-slate-500 font-medium">
                                                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2.5 flex-shrink-0"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Stats */}
                <motion.div className="grid md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
                    {stats.map((stat) => (
                        <motion.div key={stat.label} className="group" variants={itemVariants}>
                            <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
                            <div className="text-4xl font-extrabold bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600 font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}