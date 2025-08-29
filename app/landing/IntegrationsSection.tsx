import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Globe, ToyBrick, Building, MessagesSquare, Link, Zap } from "lucide-react";

export default function IntegrationsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    };

    const integrations = [
        {
            title: "Meta Ecosystem",
            description: "Official integrations with WhatsApp Business, Instagram Direct, and Facebook Messenger.",
            icon: <MessageSquare className="h-7 w-7 text-slate-600" />,
            features: ["WhatsApp Business API", "Instagram Shopping", "Messenger Platform", "Meta Verified"],
            stats: "2B+ Users",
        },
        {
            title: "Web & Mobile Chat",
            description: "Embed intelligent chat widgets on websites and mobile apps with full customization.",
            icon: <Globe className="h-7 w-7 text-slate-600" />,
            features: ["Custom Branding", "Mobile SDK", "Real-time Sync", "Offline Support"],
            stats: "99.9% Uptime",
        },
        {
            title: "Global Messaging",
            description: "Connect with Telegram, SMS, WeChat, and other regional platforms for worldwide engagement.",
            icon: <ToyBrick className="h-7 w-7 text-slate-600" />,
            features: ["15+ Platforms", "Multi-language", "Local Compliance", "Global Infrastructure"],
            stats: "50+ Countries",
        },
    ];

    const stats = [
        { number: "25,000+", label: "Active Businesses", icon: <Building className="h-9 w-9 text-slate-500" /> },
        { number: "500M+", label: "Messages Monthly", icon: <MessagesSquare className="h-9 w-9 text-slate-500" /> },
        { number: "15+", label: "Platform Integrations", icon: <Link className="h-9 w-9 text-slate-500" /> },
        { number: "99.9%", label: "Uptime SLA", icon: <Zap className="h-9 w-9 text-slate-500" /> },
    ];

    return (
        <section id="integrations" className="py-24 bg-slate-50">
            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200/60 px-4 py-2 text-sm font-medium">
                        Unified Platform
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
                        One dashboard for <span className="text-blue-600">every conversation</span>
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
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <Card className="h-full border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            {integration.icon}
                                        </div>
                                        <Badge className="bg-slate-100 text-slate-700 border-slate-200/50 px-3 py-1.5 text-xs font-medium">
                                            {integration.stats}
                                        </Badge>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                                        {integration.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {integration.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        {integration.features.map((feature) => (
                                            <div key={feature} className="flex items-center text-sm text-slate-500 font-medium">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2.5 flex-shrink-0"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="grid md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
                    {stats.map((stat) => (
                        <motion.div key={stat.label} variants={itemVariants}>
                            <div className="flex justify-center mb-3">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-extrabold text-slate-800 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-slate-500 font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}