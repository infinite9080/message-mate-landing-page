import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export default function PressKitPage() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Press Kit</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the ChatFlow press kit. Here you will find our brand assets and guidelines.
          </p>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We are working hard to bring you our press kit. Please check back later!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
