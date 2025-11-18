import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function ChallengePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            7-Day Activation Challenge
          </h1>
          <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
            Transform your prayer life in one week. Daily assignments to move from begging to commanding.
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">Challenge Coming Soon</p>
            <p className="text-muted">
              This 7-day progressive challenge will be available soon. Track your progress,
              complete daily assignments, and see real results.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
