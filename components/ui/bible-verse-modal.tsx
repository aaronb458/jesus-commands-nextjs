"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface BibleVerseModalProps {
  reference: string
  isOpen: boolean
  onClose: () => void
}

interface VerseData {
  verse: number
  text: string
}

// Map book names to Bolls.life book codes
const BOOK_CODES: Record<string, number> = {
  "Genesis": 1, "Exodus": 2, "Leviticus": 3, "Numbers": 4, "Deuteronomy": 5,
  "Joshua": 6, "Judges": 7, "Ruth": 8, "1 Samuel": 9, "2 Samuel": 10,
  "1 Kings": 11, "2 Kings": 12, "1 Chronicles": 13, "2 Chronicles": 14,
  "Ezra": 15, "Nehemiah": 16, "Esther": 17, "Job": 18, "Psalms": 19,
  "Proverbs": 20, "Ecclesiastes": 21, "Song of Solomon": 22, "Isaiah": 23,
  "Jeremiah": 24, "Lamentations": 25, "Ezekiel": 26, "Daniel": 27,
  "Hosea": 28, "Joel": 29, "Amos": 30, "Obadiah": 31, "Jonah": 32,
  "Micah": 33, "Nahum": 34, "Habakkuk": 35, "Zephaniah": 36, "Haggai": 37,
  "Zechariah": 38, "Malachi": 39, "Matthew": 40, "Mark": 41, "Luke": 42,
  "John": 43, "Acts": 44, "Romans": 45, "1 Corinthians": 46, "2 Corinthians": 47,
  "Galatians": 48, "Ephesians": 49, "Philippians": 50, "Colossians": 51,
  "1 Thessalonians": 52, "2 Thessalonians": 53, "1 Timothy": 54, "2 Timothy": 55,
  "Titus": 56, "Philemon": 57, "Hebrews": 58, "James": 59, "1 Peter": 60,
  "2 Peter": 61, "1 John": 62, "2 John": 63, "3 John": 64, "Jude": 65,
  "Revelation": 66
}

export function BibleVerseModal({ reference, isOpen, onClose }: BibleVerseModalProps) {
  const [verses, setVerses] = useState<VerseData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [translation, setTranslation] = useState<"KJV" | "NASB" | "NLT">("NASB")

  useEffect(() => {
    if (!isOpen) return

    const fetchVerses = async () => {
      try {
        setLoading(true)
        setError(null)

        // Parse reference like "John 14:12" or "Mark 1:25-27"
        const match = reference.match(/^(\d?\s?[A-Za-z]+)\s+(\d+):(\d+)(?:-(\d+))?/)
        if (!match) {
          setError("Invalid reference format")
          return
        }

        const [, bookName, chapterStr, verseStr, endVerseStr] = match
        const chapter = parseInt(chapterStr)
        const verse = parseInt(verseStr)
        const endVerse = endVerseStr ? parseInt(endVerseStr) : verse

        // Find book code
        const bookCode = BOOK_CODES[bookName.trim()]
        if (!bookCode) {
          setError(`Book not found: ${bookName}`)
          return
        }

        // Calculate verse range (3 before, target verse(s), 3 after)
        const startVerse = Math.max(1, verse - 3)
        const finalEndVerse = endVerse + 3

        // Fetch chapter to get verses
        const response = await fetch(
          `https://bolls.life/get-text/${translation}/${bookCode}/${chapter}/`
        )

        if (!response.ok) {
          throw new Error("Failed to fetch verses")
        }

        const data = await response.json()

        // Extract verses in range
        const versesInRange = data
          .filter((v: VerseData) => v.verse >= startVerse && v.verse <= finalEndVerse)
          .map((v: VerseData) => ({
            verse: v.verse,
            text: v.text,
            isHighlighted: v.verse >= verse && v.verse <= endVerse
          }))

        setVerses(versesInRange)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load verses")
      } finally {
        setLoading(false)
      }
    }

    fetchVerses()
  }, [reference, isOpen, translation])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[80vh] bg-background dark:bg-surface rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-primary dark:bg-primary-light text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <h2 className="text-xl font-display font-bold">{reference}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Translation selector */}
        <div className="px-6 py-3 bg-surface dark:bg-background border-b border-border flex gap-2">
          {(["KJV", "NASB", "NLT"] as const).map((trans) => (
            <button
              key={trans}
              onClick={() => setTranslation(trans)}
              className={`px-4 py-2 rounded font-semibold text-sm transition-colors ${
                translation === trans
                  ? "bg-primary dark:bg-primary-light text-white"
                  : "bg-background dark:bg-surface text-foreground hover:bg-primary/10"
              }`}
            >
              {trans}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-160px)]">
          {loading && (
            <div className="text-center py-12 text-muted">
              Loading verses...
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-error">
              {error}
            </div>
          )}

          {!loading && !error && verses.length > 0 && (
            <div className="space-y-3">
              {verses.map((v: any) => (
                <div
                  key={v.verse}
                  className={`p-4 rounded-lg transition-colors ${
                    v.isHighlighted
                      ? "bg-primary/10 dark:bg-primary-light/10 border-l-4 border-primary dark:border-primary-light"
                      : "bg-surface dark:bg-background/50"
                  }`}
                >
                  <div className="flex gap-3">
                    <span className="font-bold text-primary dark:text-primary-light flex-shrink-0">
                      {v.verse}
                    </span>
                    <p className={`text-foreground leading-relaxed ${
                      v.isHighlighted ? "font-medium" : ""
                    }`}>
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 px-6 py-3 bg-surface dark:bg-background border-t border-border text-sm text-muted text-center">
          <p>Showing context: 3 verses before and after</p>
          <p className="text-xs mt-1">Powered by Bolls.life Bible API</p>
        </div>
      </div>
    </div>
  )
}
