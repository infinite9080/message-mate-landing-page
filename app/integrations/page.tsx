"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  MessageCircle,
  Users,
  ShoppingCart,
  Database,
  BarChart3,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Layers,
  Code,
  Webhook,
  PiIcon as Api,
} from "lucide-react"

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("messaging")

  const integrationCategories = {
    messaging: {
      title: "Messaging Platforms",
      description: "Connect with customers across all major messaging channels",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      integrations: [
        {
          name: "WhatsApp Business",
          description: "Official WhatsApp Business API integration with rich media support",
          logo: "💬",
          features: ["Rich Media", "Templates", "Broadcast Lists", "Analytics"],
          status: "Official Partner",
          popularity: 98,
          setupTime: "5 min",
        },
        {
          name: "Facebook Messenger",
          description: "Native Facebook Messenger integration with full feature support",
          logo: "📱",
          features: ["Quick Replies", "Persistent Menu", "Webview", "Handover Protocol"],
          status: "Verified",
          popularity: 95,
          setupTime: "3 min",
        },
        {
          name: "Instagram Direct",
          description: "Instagram Direct Messages integration for visual commerce",
          logo: "📷",
          features: ["Story Replies", "Media Sharing", "Shopping Tags", "Creator Tools"],
          status: "Beta",
          popularity: 87,
          setupTime: "5 min",
        },
        {
          name: "Telegram",
          description: "Telegram Bot API with inline keyboards and rich formatting",
          logo: "✈️",
          features: ["Inline Keyboards", "File Sharing", "Groups", "Channels"],
          status: "Active",
          popularity: 82,
          setupTime: "2 min",
        },
        {
          name: "SMS",
          description: "Global SMS delivery with two-way messaging capabilities",
          logo: "💬",
          features: ["Global Coverage", "Two-way SMS", "Delivery Reports", "Short Codes"],
          status: "Active",
          popularity: 78,
          setupTime: "10 min",
        },
        {
          name: "WeChat",
          description: "WeChat Official Account integration for Chinese market",
          logo: "💚",
          features: ["Mini Programs", "Payments", "QR Codes", "Moments"],
          status: "Active",
          popularity: 75,
          setupTime: "15 min",
        },
      ],
    },
    ecommerce: {
      title: "E-commerce Platforms",
      description: "Integrate with popular e-commerce and CRM systems",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      integrations: [
        {
          name: "Shopify",
          description: "Complete Shopify integration with order management and customer sync",
          logo: "🛒",
          features: ["Order Tracking", "Product Catalog", "Customer Sync", "Abandoned Cart"],
          status: "Verified",
          popularity: 92,
          setupTime: "5 min",
        },
        {
          name: "WooCommerce",
          description: "WordPress WooCommerce plugin with full store integration",
          logo: "🏪",
          features: ["Product Search", "Order Status", "Inventory Updates", "Coupons"],
          status: "Active",
          popularity: 88,
          setupTime: "8 min",
        },
        {
          name: "Magento",
          description: "Enterprise Magento integration for large-scale operations",
          logo: "🏬",
          features: ["Multi-store", "B2B Features", "Advanced Catalog", "Custom Attributes"],
          status: "Active",
          popularity: 76,
          setupTime: "15 min",
        },
        {
          name: "BigCommerce",
          description: "BigCommerce API integration with real-time data sync",
          logo: "🛍️",
          features: ["Real-time Sync", "Multi-channel", "Webhooks", "Custom Fields"],
          status: "Active",
          popularity: 74,
          setupTime: "7 min",
        },
      ],
    },
    crm: {
      title: "CRM & Support",
      description: "Connect with your existing CRM and support tools",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      integrations: [
        {
          name: "Salesforce",
          description: "Native Salesforce integration with lead management and case creation",
          logo: "☁️",
          features: ["Lead Creation", "Case Management", "Contact Sync", "Custom Objects"],
          status: "Verified",
          popularity: 89,
          setupTime: "10 min",
        },
        {
          name: "HubSpot",
          description: "HubSpot CRM integration with contact timeline and deal tracking",
          logo: "🧡",
          features: ["Contact Timeline", "Deal Tracking", "Email Sync", "Workflows"],
          status: "Active",
          popularity: 85,
          setupTime: "5 min",
        },
        {
          name: "Zendesk",
          description: "Zendesk Support integration with ticket creation and agent handoff",
          logo: "🎫",
          features: ["Ticket Creation", "Agent Handoff", "Knowledge Base", "SLA Tracking"],
          status: "Active",
          popularity: 83,
          setupTime: "8 min",
        },
        {
          name: "Intercom",
          description: "Intercom Messenger integration with user profiles and conversations",
          logo: "💬",
          features: ["User Profiles", "Conversation History", "Team Inbox", "Help Articles"],
          status: "Active",
          popularity: 80,
          setupTime: "5 min",
        },
      ],
    },
    analytics: {
      title: "Analytics & Tools",
      description: "Integrate with analytics and business intelligence tools",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      integrations: [
        {
          name: "Google Analytics",
          description: "Track chatbot interactions and conversion events in GA4",
          logo: "📊",
          features: ["Event Tracking", "Conversion Goals", "Custom Dimensions", "Audience Insights"],
          status: "Active",
          popularity: 94,
          setupTime: "3 min",
        },
        {
          name: "Mixpanel",
          description: "Advanced event tracking and user behavior analytics",
          logo: "📈",
          features: ["Event Tracking", "Funnel Analysis", "Cohort Analysis", "A/B Testing"],
          status: "Active",
          popularity: 78,
          setupTime: "5 min",
        },
        {
          name: "Zapier",
          description: "Connect with 5000+ apps through Zapier automation platform",
          logo: "⚡",
          features: ["5000+ Apps", "Multi-step Zaps", "Webhooks", "Custom Triggers"],
          status: "Verified",
          popularity: 91,
          setupTime: "2 min",
        },
        {
          name: "Webhooks",
          description: "Custom webhook integration for real-time data synchronization",
          logo: "🔗",
          features: ["Real-time Events", "Custom Payloads", "Retry Logic", "Authentication"],
          status: "Active",
          popularity: 86,
          setupTime: "15 min",
        },
      ],
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Connect
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Everything
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Integrate ChatFlow with 50+ platforms and tools. From messaging apps to CRM systems, e-commerce platforms to
            analytics tools - connect your entire business ecosystem in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Browse All Integrations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 hover:bg-blue-50/50 group bg-white/60 backdrop-blur-sm border-blue-200/50 text-slate-700"
            >
              <Api className="mr-2 w-5 h-5" />
              API Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-2">
              {Object.entries(integrationCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(integrationCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-12">
                <div className="text-center mb-12">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{category.title}</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.integrations.map((integration, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                              {integration.logo}
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold text-slate-800">{integration.name}</CardTitle>
                              <Badge
                                className={`text-xs mt-1 ${
                                  integration.status === "Official Partner"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : integration.status === "Verified"
                                      ? "bg-blue-100 text-blue-800 border-blue-200"
                                      : integration.status === "Beta"
                                        ? "bg-orange-100 text-orange-800 border-orange-200"
                                        : "bg-slate-100 text-slate-800 border-slate-200"
                                }`}
                              >
                                {integration.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{integration.description}</p>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-slate-600">{integration.popularity}% popularity</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-blue-500" />
                              <span className="text-slate-600">{integration.setupTime} setup</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm font-medium text-slate-700">Key Features:</div>
                            <div className="grid grid-cols-2 gap-2">
                              {integration.features.map((feature, i) => (
                                <div key={i} className="flex items-center text-xs text-slate-500">
                                  <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full transition-all duration-300">
                            Connect Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* API & Custom Integrations */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/60 backdrop-blur-sm text-purple-700 border-purple-200/50 px-4 py-2 shadow-lg">
              🔧 Developer Tools
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              Build Custom
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Integrations
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Use our powerful APIs and webhooks to create custom integrations with any system
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "REST API",
                description: "Comprehensive REST API with full CRUD operations and real-time capabilities",
                features: ["OpenAPI 3.0", "Rate Limiting", "Authentication", "Webhooks"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Webhook,
                title: "Webhooks",
                description: "Real-time event notifications for instant data synchronization",
                features: ["Real-time Events", "Retry Logic", "Custom Headers", "Filtering"],
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Database,
                title: "SDKs & Libraries",
                description: "Official SDKs for popular programming languages and frameworks",
                features: ["Node.js", "Python", "PHP", "React"],
                color: "from-green-500 to-emerald-500",
              },
            ].map((tool, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{tool.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm text-slate-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-white/80"
                  >
                    View Documentation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Need a Custom
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Integration?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Our enterprise team can build custom integrations for your specific needs. From legacy systems to
            cutting-edge platforms, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Contact Enterprise Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-white/80"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
