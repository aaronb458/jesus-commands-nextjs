"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Trophy, Search } from "lucide-react"

export function CTASection() {
  const actions = [
    {
      icon: BookOpen,
      title: "Start Here",
      description: "New to this? Begin with the Biblical foundation.",
      href: "/start-here",
      color: "primary"
    },
    {
      icon: Trophy,
      title: "7-Day Challenge",
      description: "Ready to practice? Take the activation challenge.",
      href: "/challenge",
      color: "accent"
    },
    {
      icon: Search,
      title: "Scripture Lookup",
      description: "Need specific verses? Search by condition.",
      href: "/scripture-lookup",
      color: "sage"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-sage/5 dark:from-primary/10 dark:via-accent/10 dark:to-sage/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            What's Your Next Step?
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Choose your path. Each one will help you move from begging to commanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                href={action.href}
                className="group bg-background dark:bg-surface p-8 rounded-lg border-2 border-border hover:border-primary dark:hover:border-primary-light transition-all hover:shadow-xl"
              >
                <Icon className="w-12 h-12 text-primary dark:text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {action.title}
                </h3>
                <p className="text-muted mb-4">{action.description}</p>
                <div className="flex items-center text-primary dark:text-primary-light font-semibold group-hover:gap-2 transition-all">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Or Take the Quiz First
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
