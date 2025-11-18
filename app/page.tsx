import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { TruthSection } from "@/components/sections/truth-section"
import { MethodSection } from "@/components/sections/method-section"
import { ProofSection } from "@/components/sections/proof-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <TruthSection />
        <MethodSection />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
