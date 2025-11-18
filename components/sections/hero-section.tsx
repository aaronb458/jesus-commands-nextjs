"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-sage/5 dark:from-primary/10 dark:via-accent/10 dark:to-sage/10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
          Jesus Gave You{" "}
          <span className="text-primary dark:text-primary-light">Commands</span>
          <br />
          Not Suggestions
        </h1>

        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
          Stop begging. Start commanding. Learn to pray with the same authority Jesus demonstrated in the Gospels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/start-here"
            className="group px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Start Here
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/quiz"
            className="px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white rounded-lg font-semibold text-lg transition-all"
          >
            Take the Quiz
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary dark:border-primary-light rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary dark:bg-primary-light rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
