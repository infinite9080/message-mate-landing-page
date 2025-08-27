import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Target,
  Zap,
  Shield,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former VP of Product at Meta, leading AI messaging innovations for 8+ years",
      image: "👩‍💼",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Google AI researcher with 10+ years in conversational AI and NLP",
      image: "👨‍💻",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Johnson",
      role: "VP of Engineering",
      bio: "Former Principal Engineer at Slack, expert in scalable messaging infrastructure",
      image: "👩‍🔬",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product leader from WhatsApp Business, passionate about user experience",
      image: "👨‍🎨",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Lisa Wang",
      role: "VP of Marketing",
      bio: "Growth marketing expert from HubSpot, specializing in B2B SaaS scaling",
      image: "👩‍💼",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "James Thompson",
      role: "VP of Sales",
      bio: "Enterprise sales leader from Salesforce with 12+ years in B2B software",
      image: "👨‍💼",
      social: { linkedin: "#", twitter: "#" },
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize business messaging",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020",
      title: "First 1,000 Customers",
      description: "Reached our first major milestone during the pandemic",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $15M to accelerate product development and growth",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 50+ countries with multi-language support",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2023",
      title: "AI Revolution",
      description: "Launched GPT-4 powered chatbots and advanced AI features",
      icon: Bot,
      color: "from-indigo-500 to-purple-500",
    },
    {
      year: "2024",
      title: "25,000+ Businesses",
      description: "Serving over 25,000 businesses worldwide with 99.9% uptime",
      icon: Award,
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers' success in mind",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible in conversational AI",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We protect our customers' data with enterprise-grade security",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe great products are built through teamwork and diversity",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "We move fast and iterate quickly to deliver value to our customers",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            We're building the
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              future
            </span>
            <br />
            of business messaging
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            ChatFlow was founded with a simple mission: to make business communication more human, intelligent, and
            accessible. We believe every business should be able to connect with their customers in meaningful ways,
            regardless of size or technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Join Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 hover:bg-blue-50/50 group bg-white/60 backdrop-blur-sm border-blue-200/50 text-slate-700"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25,000+", label: "Businesses Trust Us", icon: Users },
              { number: "500M+", label: "Messages Processed", icon: MessageCircle },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/60 backdrop-blur-sm text-blue-700 border-blue-200/50 px-4 py-2 shadow-lg">
              📖 Our Story
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              From Idea to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Global Platform
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200 px-3 py-1 font-bold">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-2xl font-bold text-slate-800">{milestone.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/60 backdrop-blur-sm text-purple-700 border-purple-200/50 px-4 py-2 shadow-lg">
              💎 Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              What Drives
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our values guide every decision we make and shape the culture we're building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/60 backdrop-blur-sm text-green-700 border-green-200/50 px-4 py-2 shadow-lg">
              👥 Leadership Team
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              Meet the
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience from the world's leading technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl text-3xl`}
                  >
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full w-10 h-10 p-0 border-slate-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full w-10 h-10 p-0 border-slate-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full w-10 h-10 p-0 border-slate-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to join our mission?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for innovation and customer success.
            Join us in building the future of business communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full font-bold bg-white/10 backdrop-blur-sm"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
