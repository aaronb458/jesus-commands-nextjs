import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function PDFPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Free PDF Guide
          </h1>
          <p className="text-xl text-center text-muted mb-12">
            Complete 20+ page guide to commanding prayer
          </p>

          <div className="bg-surface dark:bg-surface p-12 rounded-lg text-center">
            <p className="text-2xl font-semibold mb-4">PDF Guide Coming Soon</p>
            <p className="text-muted">
              Downloadable comprehensive guide with scripture, examples, and practical steps.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
