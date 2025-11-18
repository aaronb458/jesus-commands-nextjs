import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function TestimoniesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Real Stories, Real Results
          </h1>
          <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
            See what happens when believers command instead of beg
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">Testimonies Coming Soon</p>
            <p className="text-muted">
              Submit your testimony, read others' stories, and filter by condition.
              A growing database of real healings from commanding prayer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
