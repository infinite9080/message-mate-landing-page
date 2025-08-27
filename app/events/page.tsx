import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function EventsPage() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Events</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join us at our next event. We would love to see you there.
          </p>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We have no upcoming events at this time. Please check back later!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
