import { TrendingUp, Users, MapPin } from "lucide-react"

export function ProofSection() {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "People Trained",
      description: "In commanding prayer principles"
    },
    {
      icon: TrendingUp,
      number: "73%",
      label: "Success Rate",
      description: "Seeing results within 7 days"
    },
    {
      icon: MapPin,
      number: "35+",
      label: "Countries",
      description: "Using these principles"
    }
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-6 text-foreground">
          It Works Today
        </h2>
        <p className="text-center text-xl text-muted mb-12 max-w-3xl mx-auto">
          From Colombia to California, believers are seeing the same results the early church saw.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-surface dark:bg-surface rounded-lg border border-border"
              >
                <Icon className="w-12 h-12 text-primary dark:text-primary-light mx-auto mb-4" />
                <div className="text-4xl font-display font-black text-primary dark:text-primary-light mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2 text-foreground">{stat.label}</div>
                <div className="text-sm text-muted">{stat.description}</div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-8 rounded-lg border border-primary/20 dark:border-primary-light/20">
          <h3 className="font-display font-bold text-2xl mb-4 text-center text-foreground">
            Real Story from Colombia
          </h3>
          <p className="text-foreground leading-relaxed max-w-3xl mx-auto">
            In a small village outside Bogotá, a group of believers started commanding healing
            instead of begging for it. Within 3 months, they documented over 200 healings.
            The local hospital noticed the drop in chronic pain patients. The village priest
            asked what was happening. Their answer? <span className="font-bold text-primary dark:text-primary-light">"We're just doing what
            Acts says to do."</span>
          </p>
        </div>
      </div>
    </section>
  )
}
