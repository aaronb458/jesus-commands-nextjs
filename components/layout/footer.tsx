import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface dark:bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary dark:text-primary-light">
              Jesus Commands
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Teaching believers to pray with Biblical authority. Not begging - commanding.
              Just like Jesus showed us in the Gospels and Acts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/start-here" className="text-muted hover:text-primary transition-colors text-sm">
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-muted hover:text-primary transition-colors text-sm">
                  Take the Quiz
                </Link>
              </li>
              <li>
                <Link href="/challenge" className="text-muted hover:text-primary transition-colors text-sm">
                  7-Day Challenge
                </Link>
              </li>
              <li>
                <Link href="/learning-path" className="text-muted hover:text-primary transition-colors text-sm">
                  Learning Path
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/scripture-lookup" className="text-muted hover:text-primary transition-colors text-sm">
                  Scripture Database
                </Link>
              </li>
              <li>
                <Link href="/testimonies" className="text-muted hover:text-primary transition-colors text-sm">
                  Testimonies
                </Link>
              </li>
              <li>
                <Link href="/pdf" className="text-muted hover:text-primary transition-colors text-sm">
                  Free PDF Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted text-sm">
            © {currentYear} Jesus Commands. All rights reserved. Teaching believers to walk in Biblical authority.
          </p>
        </div>
      </div>
    </footer>
  )
}
