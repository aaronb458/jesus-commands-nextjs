"use client"

import { BookOpen } from "lucide-react"
import { useState } from "react"
import { BibleVerseModal } from "./bible-verse-modal"

interface ScriptureRefProps {
  reference: string
  text?: string
  inline?: boolean
}

export function ScriptureRef({ reference, text, inline = true }: ScriptureRefProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (inline) {
    return (
      <>
        <span className="inline-flex items-baseline gap-1 group">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-primary-light hover:underline cursor-pointer"
            title="Click to view verse in context"
          >
            <BookOpen className="w-3 h-3" />
            <span>{reference}</span>
          </button>
        </span>
        <BibleVerseModal
          reference={reference}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    )
  }

  return (
    <>
      <div className="flex items-start gap-2 text-sm">
        <BookOpen className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-semibold text-primary dark:text-primary-light hover:underline cursor-pointer"
            title="Click to view verse in context"
          >
            {reference}
          </button>
        </div>
      </div>
      <BibleVerseModal
        reference={reference}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
