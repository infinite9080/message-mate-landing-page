import React from "react";
import { ArrowRight, Star, Play, Sparkles, Monitor } from "lucide-react";
import Logo from "../../public/logo.png";
import Image from "next/image";
// Removed AnimatedTextGenerate from imports
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HeroSection() {
    const platforms = [
        {
            icon: FaWhatsapp,
            color: "from-[#25D366] to-[#128C7E]",
            position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
            delay: "0s",
            name: "WhatsApp",
        },
        {
            icon: FaFacebookMessenger,
            color: "from-[#00B2FF] to-[#006AFF]",
            position: "top-1/2 -right-8 -translate-y-1/2",
            delay: "1s",
            name: "Messenger",
        },
        {
            icon: FaInstagram,
            color: "from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5]",
            position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
            delay: "2s",
            name: "Instagram",
        },
        {
            icon: FaTelegramPlane,
            color: "from-[#2AABEE] to-[#229ED9]",
            position: "top-1/2 -left-8 -translate-y-1/2",
            delay: "3s",
            name: "Telegram",
        },
        {
            icon: TbBrandFiverr,
            color: "from-[#1DBF73] to-[#1DBF73]",
            position: "top-16 -right-16",
            delay: "0.5s",
            name: "WebChat",
        },
        {
            icon: Monitor,
            color: "from-indigo-400 to-purple-600",
            position: "bottom-16 -left-16",
            delay: "1.5s",
            name: "Desktop",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <BackgroundMeteors>
            <section id="features" className="relative w-full pt-20 pb-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-20 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="space-y-8 lg:pr-8 mt-32">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-10">
                                    <span className="block w-full h-full shiny-effect" />
                                </span>
                                <span className="relative z-20 flex items-center text-white">
                                    {"✨ All-in-One Social Media Integration • Powered by AI"}
                                </span>
                            </motion.div>

                            {/* --- REPLACEMENT STARTS HERE --- */}
                            <motion.div variants={itemVariants}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-slate-800 text-left">
                                    Connect every{" "}
                                    <span className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                        conversation
                                    </span>{" "}
                                    across all{" "}
                                    <span className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                        social
                                    </span>{" "}
                                    <span className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                        platforms
                                    </span>
                                </h1>
                            </motion.div>
                            {/* --- REPLACEMENT ENDS HERE --- */}

                            <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                                The most comprehensive social media messaging platform. Unify WhatsApp, Instagram, Facebook Messenger, Telegram, webchat, and more into one intelligent AI-powered dashboard.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                                <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <AnimatedButton
                                        size="lg"
                                        rounded="full"
                                        glow={true}
                                        shimmerColor="#93c5fd" // blue-300
                                        className="w-full font-semibold border text-white bg-blue-500 border-blue-400/30 hover:text-gray-200"
                                    >
                                        Start Building for Free
                                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                    </AnimatedButton>
                                </motion.div>
                                <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <AnimatedButton
                                        size="lg"
                                        variant="outline"
                                        rounded="full"
                                        glow={true}
                                        shimmerColor="#93c5fd"
                                        className="w-full font-semibold border text-white bg-blue-500 border-blue-400/30 hover:text-gray-200"
                                    >
                                        <Play className="mr-2 size-5" />
                                        Watch Demo (2 min)
                                    </AnimatedButton>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:space-x-8 pt-4 gap-4 md:gap-0">
                                <div className="flex items-center space-x-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Avatar key={i} variant="close-friends" className="h-8 w-8 md:h-10 md:w-10 border-2 border-blue-300">
                                                <AvatarImage src={`https://i.pravatar.cc/150?u=a042581f4e29026704d${i}`} alt={`User ${i}`} />
                                                <AvatarFallback>U{i}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-xs md:text-sm font-semibold text-slate-800">25,000+ businesses</div>
                                        <div className="text-[10px] md:text-xs text-slate-500">trust ChatFlow</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-xs md:text-sm font-semibold text-slate-800">4.9/5 rating</div>
                                        <div className="text-[10px] md:text-xs text-slate-500">from 5,000+ reviews</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Animated 3D Illustration */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                        >
                            <div className="relative z-10">
                                <div className="relative mx-auto w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                                    {/* Central Hub */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div
                                                className="relative"
                                                style={{
                                                    filter: `
                                                        drop-shadow(0 0 10px #71d6fb)
                                                        drop-shadow(0 0 20px #71d6fb80)
                                                        drop-shadow(0 0 30px #71d6fb40)
                                                    `
                                                }}
                                            >
                                                <Image
                                                    src={Logo}
                                                    alt="ChatFlow Logo"
                                                    className="w-24 h-24 object-contain"
                                                />
                                            </div>

                                            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-blue-200/60 text-xs font-medium text-slate-700 whitespace-nowrap">
                                                <span className="flex ml-1 h-3 items-center space-x-0.5">
                                                    <span className="w-1.5 h-1.5 bg-[#71d6fb] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                                                    <span className="w-1.5 h-1.5 bg-[#71d6fb] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                                                    <span className="w-1.5 h-1.5 bg-[#71d6fb] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Orbiting Platform Icons */}
                                    {platforms.map((platform) => (
                                        <div
                                            key={platform.name}
                                            className={`absolute ${platform.position} w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${platform.color} rounded-3xl shadow-xl flex items-center justify-center animate-bounce hover:scale-110 hover:shadow-2xl hover:rotate-6 transition-all duration-300 cursor-pointer group`}
                                            style={{ animationDelay: platform.delay, animationDuration: "3s" }}
                                        >
                                            <platform.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                                            <div className="absolute -bottom-7 md:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {platform.name}
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                                                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <style jsx>{`
                .shiny-effect {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(120deg, transparent 0%, #fff8 40%, #fff 50%, #fff8 60%, transparent 100%);
                    background-size: 200% 100%;
                    animation: shiny-move 2.5s linear infinite;
                    opacity: 0.8;
                    pointer-events: none;
                    z-index: 10;
                }
                @keyframes shiny-move {
                    0% { background-position: -100% 0; }
                    100% { background-position: 120% 0; }
                }
            `}</style>
        </BackgroundMeteors>
    );
}