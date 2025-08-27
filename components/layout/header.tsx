"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sets true if user scrolls more than 50px
      setIsScrolled(window.scrollY > 50);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        // Animate height based on the isScrolled state
        height: isScrolled ? "72px" : "80px",
        // Animate background color for a subtle effect
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.7)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5"
    >
      {/* This container div now fills the parent's height, fixing the vertical alignment */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative group">
                <Image src={Logo} alt="logo" className="w-10" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg">
                  <div className="w-full h-full bg-white rounded-full scale-50"></div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Message
                </span>
                <div className="text-xs text-slate-500 font-medium">Mate</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link
                href="/#features"
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 relative group"
              >
                Features
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link
                href="/#integrations"
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 relative group"
              >
                Integrations
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link
                href="/#pricing"
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 relative group"
              >
                Pricing
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link
                href="/#testimonials"
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 relative group"
              >
                Reviews
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-600 hover:text-blue-600 font-medium hover:bg-blue-50/50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-white/20">
          <div className="px-6 pt-2 pb-6 space-y-4">
            <Link href="/#features" className="block text-slate-600 hover:text-blue-600 font-medium">Features</Link>
            <Link href="/#integrations" className="block text-slate-600 hover:text-blue-600 font-medium">Integrations</Link>
            <Link href="/#pricing" className="block text-slate-600 hover:text-blue-600 font-medium">Pricing</Link>
            <Link href="/#testimonials" className="block text-slate-600 hover:text-blue-600 font-medium">Reviews</Link>
            <div className="border-t border-slate-200 pt-4 flex flex-col space-y-4">
              <Button variant="ghost" className="text-slate-600 hover:text-blue-600 font-medium hover:bg-blue-50/50 w-full">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-[#71d6fb] via-blue-500 to-cyan-400 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}