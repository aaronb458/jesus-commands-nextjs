import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function ScriptureLookupPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Scripture Database
          </h1>
          <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
            80+ curated examples of commanding prayer from the Bible
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">Scripture Lookup Coming Soon</p>
            <p className="text-muted">
              Search by condition, category, or keyword. Find exactly what the Bible says
              about healing, deliverance, and authority.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
