
"use client"

import { useState } from "react"
import HeroSection from "./landing/HeroSection"
import IntegrationsSection from "./landing/IntegrationsSection"
import FeaturesSection from "./landing/FeaturesSection"
import WebChatShowcaseSection from "./landing/WebChatShowcaseSection"
import PricingSection from "./landing/PricingSection"
import TestimonialsSection from "./landing/TestimonialsSection"
import FAQSection from "./landing/FAQSection"
import CTASection from "./landing/CTASection"

export default function ModernLandingPage() {
  const [activeTab, setActiveTab] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <WebChatShowcaseSection />
      <PricingSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <TestimonialsSection />
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CTASection />
    </>
  )
}