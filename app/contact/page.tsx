import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We would love to hear from you. Please reach out to us with any questions or feedback.
          </p>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                You can reach us at:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed">
                <li>Email: support@chatflow.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
