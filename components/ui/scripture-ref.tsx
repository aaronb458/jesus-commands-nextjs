"use client"

import { BookOpen } from "lucide-react"
import { useState } from "react"

interface ScriptureRefProps {
  reference: string
  text?: string
  inline?: boolean
}

export function ScriptureRef({ reference, text, inline = true }: ScriptureRefProps) {
  const [showText, setShowText] = useState(false)

  if (inline) {
    return (
      <span className="inline-flex items-baseline gap-1 group">
        <button
          onClick={() => setShowText(!showText)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-primary-light hover:underline cursor-pointer"
          title={text ? `Click to ${showText ? 'hide' : 'show'} verse` : undefined}
        >
          <BookOpen className="w-3 h-3" />
          <span>{reference}</span>
        </button>
        {text && showText && (
          <span className="block mt-2 text-sm italic text-muted bg-surface dark:bg-surface p-3 rounded border-l-2 border-primary dark:border-primary-light">
            "{text}" — {reference}
          </span>
        )}
      </span>
    )
  }

  return (
    <div className="flex items-start gap-2 text-sm">
      <BookOpen className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
      <div>
        <button
          onClick={() => text && setShowText(!showText)}
          className="font-semibold text-primary dark:text-primary-light hover:underline"
        >
          {reference}
        </button>
        {text && showText && (
          <p className="mt-2 text-muted italic">"{text}"</p>
        )}
      </div>
    </div>
  )
}
