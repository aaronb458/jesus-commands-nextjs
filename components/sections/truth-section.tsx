import { BookOpen } from "lucide-react"

export function TruthSection() {
  const examples = [
    {
      reference: "Acts 3:6",
      person: "Peter",
      words: '"In the name of Jesus Christ of Nazareth, rise up and walk!"',
      result: "Instantly healed"
    },
    {
      reference: "Mark 1:25",
      person: "Jesus",
      words: '"Be quiet, and come out of him!"',
      result: "Demon left immediately"
    },
    {
      reference: "Acts 9:34",
      person: "Peter",
      words: '"Jesus Christ heals you. Get up and roll up your mat."',
      result: "Paralyzed man healed instantly"
    },
    {
      reference: "Mark 5:41",
      person: "Jesus",
      words: '"Little girl, I say to you, get up!"',
      result: "Dead girl came back to life"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">
          What the Bible Actually Shows
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-surface dark:bg-surface p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary dark:text-primary-light flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{example.person}</h3>
                  <p className="text-sm text-muted">{example.reference}</p>
                </div>
              </div>

              <p className="text-primary dark:text-primary-light font-semibold mb-3 italic">
                {example.words}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Result:</span> {example.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-foreground mb-4">
            Notice the pattern?
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            They didn't pray TO God ABOUT the problem. They spoke TO the problem WITH God's authority.
          </p>
        </div>
      </div>
    </section>
  )
}
