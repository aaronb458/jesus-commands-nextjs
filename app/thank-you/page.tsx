import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-success mx-auto mb-6" />

          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Check your email for your free guide. In the meantime, here's what you can do next:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/quiz"
              className="bg-surface dark:bg-surface p-6 rounded-lg hover:shadow-lg transition-all border border-border hover:border-primary dark:hover:border-primary-light"
            >
              <h3 className="font-display font-bold text-xl mb-2">Take the Quiz</h3>
              <p className="text-sm text-muted mb-4">
                Discover if you're begging or commanding
              </p>
              <div className="text-primary dark:text-primary-light font-semibold inline-flex items-center gap-1">
                Start Quiz <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/challenge"
              className="bg-surface dark:bg-surface p-6 rounded-lg hover:shadow-lg transition-all border border-border hover:border-primary dark:hover:border-primary-light"
            >
              <h3 className="font-display font-bold text-xl mb-2">Start Challenge</h3>
              <p className="text-sm text-muted mb-4">
                7 days to activate your prayer life
              </p>
              <div className="text-primary dark:text-primary-light font-semibold inline-flex items-center gap-1">
                Begin Challenge <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/scripture-lookup"
              className="bg-surface dark:bg-surface p-6 rounded-lg hover:shadow-lg transition-all border border-border hover:border-primary dark:hover:border-primary-light"
            >
              <h3 className="font-display font-bold text-xl mb-2">Search Scripture</h3>
              <p className="text-sm text-muted mb-4">
                Find verses by condition or category
              </p>
              <div className="text-primary dark:text-primary-light font-semibold inline-flex items-center gap-1">
                Search Now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
