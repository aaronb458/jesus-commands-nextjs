import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function QuizPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Are You <span className="text-primary dark:text-primary-light">Begging</span> or{" "}
            <span className="text-accent dark:text-accent-light">Commanding</span>?
          </h1>
          <p className="text-xl text-center text-muted mb-12">
            Take this 10-question assessment to discover how you currently pray.
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">Quiz Coming Soon</p>
            <p className="text-muted">
              This interactive quiz is being built. It will help you assess whether your prayer style
              aligns with Biblical commanding prayer or traditional begging prayer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
