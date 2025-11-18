export function MethodSection() {
  const steps = [
    {
      number: 1,
      title: "See the Problem",
      description: "Peter saw the lame man. Don't ignore what's in front of you.",
      scripture: "Acts 3:2-3"
    },
    {
      number: 2,
      title: "Look at Them",
      description: '"Look at us!" Peter commanded his attention first.',
      scripture: "Acts 3:4"
    },
    {
      number: 3,
      title: "Give What You Have",
      description: '"Silver and gold I do not have, but what I do have I give you."',
      scripture: "Acts 3:6a"
    },
    {
      number: 4,
      title: "Command in Jesus\' Name",
      description: '"In the name of Jesus Christ of Nazareth, rise up and walk!"',
      scripture: "Acts 3:6b"
    },
    {
      number: 5,
      title: "Take Action",
      description: "Peter grabbed his hand and pulled him up. Faith with works.",
      scripture: "Acts 3:7"
    }
  ]

  return (
    <section className="py-20 px-4 bg-surface dark:bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-6">
          The 5-Step Method
        </h2>
        <p className="text-center text-xl text-muted mb-12 max-w-2xl mx-auto">
          From Acts 3:1-8 - Peter healing the lame beggar
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-background dark:bg-background p-6 rounded-lg border-2 border-primary/20 dark:border-primary-light/20 hover:border-primary dark:hover:border-primary-light transition-all"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary dark:bg-primary-light text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>

              <h3 className="font-display font-bold text-lg mb-2 mt-2">
                {step.title}
              </h3>

              <p className="text-sm text-muted mb-3">
                {step.description}
              </p>

              <p className="text-xs text-primary dark:text-primary-light font-semibold">
                {step.scripture}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-accent/10 dark:bg-accent/20 p-8 rounded-lg">
          <p className="text-xl font-semibold mb-2">
            This is reproducible.
          </p>
          <p className="text-muted">
            It's not a magic formula, but there IS a pattern. And you can learn it.
          </p>
        </div>
      </div>
    </section>
  )
}
