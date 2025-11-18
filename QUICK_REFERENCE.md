# Quick Reference Card 🎯

> **For when you just need the answer fast**

## 📂 Where Does This Go?

| I'm creating... | Put it in... | Example |
|-----------------|--------------|---------|
| A new page | `app/[route]/page.tsx` | `app/quiz/page.tsx` |
| An API endpoint | `app/api/[name]/route.ts` | `app/api/submit-lead/route.ts` |
| A reusable UI component | `components/ui/` | `components/ui/button.tsx` |
| A page section | `components/sections/` | `components/sections/hero-section.tsx` |
| Layout component | `components/layout/` | `components/layout/navigation.tsx` |
| Type definition | `types/[domain].ts` | `types/quiz.ts` |
| Hook | `lib/hooks/use[Name].ts` | `lib/hooks/useQuizState.ts` |
| API client | `lib/api/[service].ts` | `lib/api/highlevel.ts` |
| Constants | `lib/constants/[category].ts` | `lib/constants/routes.ts` |
| Configuration | `config/[feature].ts` | `config/quiz-questions.ts` |
| Static data (JSON) | `data/[category]/` | `data/scripture/healing.json` |
| Utility function | `lib/utils.ts` | `export function cn() {...}` |

---

## 🎨 Colors (Use These Classes)

### Backgrounds
```tsx
bg-background       // Main background (white/dark)
bg-surface          // Card backgrounds (cream/dark gray)
bg-primary          // Primary color button
bg-accent           // Accent color button
```

### Text
```tsx
text-foreground     // Main text (dark/light)
text-muted          // Secondary text (gray)
text-primary        // Primary color text
text-accent         // Accent color text
```

### Dark Mode Overrides
```tsx
dark:bg-primary-light
dark:text-primary-light
dark:hover:bg-surface
```

---

## 🔧 Commands

```bash
# Start dev
npm run dev

# Build
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Clean restart
rm -rf .next && npm run dev

# Deploy
vercel
```

---

## 📦 Import Paths

```tsx
// Components
import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Utils
import { cn } from "@/lib/utils"

// Types (future)
import type { Scripture } from "@/types/scripture"

// Config (future)
import { QUIZ_QUESTIONS } from "@/config/quiz-questions"

// Next.js
import Link from "next/link"
import { useRouter } from "next/navigation"

// Icons
import { ArrowRight, Moon, Sun } from "lucide-react"

// Hooks
import { useTheme } from "next-themes"
```

---

## 🏗️ Component Template

```tsx
"use client" // Only if using hooks/interactivity

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MyComponent() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">
          Section Title
        </h2>

        <div className="bg-surface dark:bg-surface p-8 rounded-lg">
          {/* Content */}
        </div>
      </div>
    </section>
  )
}
```

---

## 🎯 Page Template

```tsx
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export default function MyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-center">
            Page Title
          </h1>

          {/* Content */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

---

## 🔌 API Route Template

```tsx
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Your logic here

    return NextResponse.json({
      success: true,
      data: {}
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}
```

---

## 📝 Type Definition Template

```tsx
// types/feature.ts

export interface MyType {
  id: string
  name: string
  createdAt: string
  // ...
}

export interface MySubmission {
  name: string
  email: string
  // ...
}

export type MyCategory = 'option1' | 'option2' | 'option3'
```

---

## 🎣 Hook Template

```tsx
// lib/hooks/useMyFeature.ts
"use client"

import { useState, useEffect } from 'react'

export function useMyFeature() {
  const [state, setState] = useState(null)

  useEffect(() => {
    // Logic
  }, [])

  return {
    state,
    setState,
    // Other exports
  }
}
```

---

## 🌐 Environment Variables

```env
# .env.local
NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL=
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Access in code:**
```tsx
const webhookUrl = process.env.NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL
```

---

## 🎨 Responsive Design

```tsx
// Breakpoints
className="
  text-base      // Mobile
  md:text-lg     // Tablet (768px+)
  lg:text-xl     // Desktop (1024px+)
"

// Grid
className="
  grid
  grid-cols-1    // Mobile: 1 column
  md:grid-cols-2 // Tablet: 2 columns
  lg:grid-cols-3 // Desktop: 3 columns
  gap-6
"

// Flexbox
className="
  flex
  flex-col       // Mobile: stack
  md:flex-row    // Tablet+: side by side
  gap-4
"
```

---

## 🔍 Common Patterns

### Link Button
```tsx
<Link
  href="/quiz"
  className="px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary-light text-white rounded-lg font-semibold transition-all"
>
  Take Quiz
</Link>
```

### Icon Button
```tsx
<button className="w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
  <Icon className="w-5 h-5" />
</button>
```

### Card
```tsx
<div className="bg-surface dark:bg-surface p-6 rounded-lg border border-border hover:shadow-lg transition-all">
  {/* Content */}
</div>
```

### Section
```tsx
<section className="py-20 px-4 bg-surface dark:bg-surface">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

---

## 🐛 Debugging

### TypeScript Error
1. Check import paths (`@/` instead of relative)
2. Check type definitions exist
3. Run `npx tsc --noEmit` to see all errors

### Style Not Applying
1. Check class name is valid Tailwind
2. Check globals.css has `@import "tailwindcss";`
3. Restart dev server

### Dark Mode Issue
1. Check component has `dark:` variants
2. Check globals.css has `.dark` definitions
3. Check `suppressHydrationWarning` in layout.tsx

### Build Error
1. Remove `.next` folder
2. Run `npm install`
3. Run `npm run build`

---

## 📚 Must-Read Files

1. **CLAUDE_START_HERE.md** - Navigation guide
2. **ARCHITECTURE.md** - Structure explanation
3. **README.md** - Feature build prompts

---

**Keep this handy. Refer often. Build confidently.** 🚀
