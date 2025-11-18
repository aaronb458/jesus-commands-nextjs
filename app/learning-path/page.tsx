import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function LearningPathPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Your Learning Path
          </h1>
          <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
            10 progressive levels from "never heard this" to "teaching others"
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">Learning Path Coming Soon</p>
            <p className="text-muted">
              A comprehensive 10-level progression system is being built. Track where you are
              and what you need to learn next.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
