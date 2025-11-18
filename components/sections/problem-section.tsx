export function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-surface dark:bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-8">
          Have You Been Praying Wrong?
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground">
            <span className="font-semibold text-foreground">Hi friend,</span> if you're here,
            something in you is asking: <em className="text-primary dark:text-primary-light font-semibold">"Is there more to prayer than begging God?"</em>
          </p>

          <p className="text-foreground">
            You've probably prayed for someone who's sick. Maybe you've seen pastors lay hands on people.
            You've definitely seen Jesus and the disciples heal in the Bible.
          </p>

          <p className="font-bold text-foreground text-xl">
            But have you ever noticed they didn't beg?
          </p>

          <div className="bg-background dark:bg-background p-6 rounded-lg border-l-4 border-primary dark:border-primary-light my-8">
            <p className="text-xl font-semibold text-primary dark:text-primary-light mb-4">
              They commanded.
            </p>
            <p className="text-foreground">
              No long prayers. No "if it be Your will." No begging for God to maybe, possibly,
              if He feels like it, do something.
            </p>
          </div>

          <p className="text-foreground">
            They spoke <strong className="text-primary dark:text-primary-light">to the problem</strong> with authority. And things changed.
          </p>
        </div>
      </div>
    </section>
  )
}
