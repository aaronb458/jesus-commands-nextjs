import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { BookOpen, Brain, TrendingUp, ArrowRight } from "lucide-react"

export default function StartHerePage() {
  const sections = [
    {
      icon: BookOpen,
      title: "The Bible Says It",
      description: "Pure scripture with no commentary. See what Jesus and the apostles actually did.",
      examples: [
        "Mark 1:25 - Jesus commands a demon",
        "Acts 3:6 - Peter commands healing",
        "Mark 5:41 - Jesus commands life",
        "Acts 9:34 - Peter speaks healing"
      ]
    },
    {
      icon: Brain,
      title: "The Logic",
      description: "Why commanding isn't presumptuous - it's obedient.",
      points: [
        "Jesus said \"greater works than these you will do\" (John 14:12)",
        "He gave us authority over sickness and demons (Luke 10:19)",
        "The early church didn't beg - they commanded",
        "We have the same Holy Spirit they had"
      ]
    },
    {
      icon: TrendingUp,
      title: "The Evidence",
      description: "It's happening today, all over the world.",
      stats: [
        "200+ documented healings in Colombia in 3 months",
        "73% of challenge participants see results in 7 days",
        "10,000+ believers trained in 35+ countries",
        "Growing movement back to Biblical prayer"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Start Here
          </h1>
          <p className="text-xl text-center text-muted mb-16 max-w-3xl mx-auto">
            New to commanding prayer? This is your foundation. Three pillars: Scripture, Logic, Evidence.
          </p>

          <div className="space-y-12 mb-16">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="bg-surface dark:bg-surface p-8 rounded-lg border border-border"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary dark:bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold mb-2">{section.title}</h2>
                      <p className="text-muted">{section.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-16">
                    {(section.examples || section.points || section.stats)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary dark:text-primary-light mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-12 rounded-lg text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Take Action?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              You've seen the scripture, understood the logic, and heard the evidence.
              Now it's time to practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                Take the Quiz
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/challenge"
                className="px-8 py-4 bg-accent hover:bg-accent-dark dark:bg-accent-light dark:hover:bg-accent text-white rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                Start the 7-Day Challenge
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
