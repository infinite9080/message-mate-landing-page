import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function CareersPage() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Careers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our team and help us build the future of business communication. We are looking for talented individuals to join us on our mission.
          </p>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Open Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We currently have no open positions. Please check back later!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
