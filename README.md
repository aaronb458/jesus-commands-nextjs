# Jesus Commands - Modern React Application

> **Built following Ken-Style Project Architect principles**
> Clean structure. One concern per file. Built for "Claude Tomorrow".

A modern, fully responsive Next.js application for the Jesus Commands ministry, teaching believers to pray with Biblical authority.

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Claude Code SDK Prompts](#-claude-code-sdk-prompts)
- [Deployment](#-deployment)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.local .env.local
# Edit .env.local and add your HighLevel webhook URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS v4
- **Theme**: next-themes (system preference + manual toggle)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

---

## ✨ Features

### Implemented ✅
- Full dark mode (system + manual)
- Multi-page architecture
- Responsive navigation with mobile menu
- Type-safe with TypeScript
- SEO optimized metadata
- Accessibility (ARIA, reduced motion)
- HighLevel API integration

### Pages Created
| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Home with hero + sections | ✅ Complete |
| `/start-here` | Biblical foundation | ✅ Complete |
| `/quiz` | Prayer assessment | 🏗️ Stub ready |
| `/challenge` | 7-day activation | 🏗️ Stub ready |
| `/learning-path` | 10-level progression | 🏗️ Stub ready |
| `/scripture-lookup` | Scripture database | 🏗️ Stub ready |
| `/testimonies` | Story submission | 🏗️ Stub ready |
| `/pdf` | Lead magnet | 🏗️ Stub ready |
| `/thank-you` | Post-submission | ✅ Complete |

---

## 📁 Project Structure

```
next-app/
├── app/                    # Next.js pages & API routes
├── components/
│   ├── layout/            # Nav, Footer
│   ├── sections/          # Home page sections
│   ├── ui/                # Reusable UI components
│   └── theme-provider.tsx
├── lib/
│   ├── api/               # API clients (future)
│   ├── hooks/             # Custom hooks (future)
│   ├── constants/         # App constants (future)
│   └── utils.ts           # Utility functions
├── types/                 # TypeScript definitions (future)
├── data/                  # Static JSON data (future)
├── config/                # App configuration (future)
└── public/                # Static assets
```

**📖 See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed explanation of "why" each folder exists.**

---

## 🎨 Design System

### Colors

**Light Mode:**
- Primary: `#2E5F7A` (Soft Teal)
- Accent: `#E8A87C` (Warm Peach)
- Sage: `#8BA888` (Growth Green)

**Dark Mode:**
- Primary: `#4A7C9B` (Lighter Teal)
- Accent: `#F5C49B` (Light Peach)
- Sage: `#A5C4A1` (Light Green)

### Typography
- **Display**: Montserrat (bold, black)
- **Body**: Inter (regular to bold)

All defined in `app/globals.css` as CSS variables.

---

## 💻 Development

### Prerequisites
- Node.js 18+ or Bun
- npm/pnpm/yarn/bun

### Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create `.env.local`:

```env
# HighLevel Integration
NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL=https://your-webhook-url

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## 🤖 Claude Code SDK Prompts

> **Copy-paste these prompts into Claude Code to build features**

### Prompt #1: Quiz Feature

```
In the existing Jesus Commands Next.js project at next-app/:

📦 CREATE QUIZ FEATURE

1. Create types/quiz.ts with:
   - QuizQuestion interface (id, question, options, correctAnswer, category)
   - QuizAnswer interface (questionId, selectedAnswer)
   - QuizResult interface (score, percentage, category, recommendations)

2. Create config/quiz-questions.ts with:
   - Export const QUIZ_QUESTIONS: QuizQuestion[] (10 questions)
   - Questions about "begging vs commanding" prayer style
   - Categories: "beggar" (0-40%), "mixed" (40-75%), "commander" (75-100%)

3. Create lib/hooks/useQuizState.ts with:
   - State management for current question, answers, score
   - calculateResult() function
   - Progress tracking

4. Update app/quiz/page.tsx with:
   - Quiz interface using the hook
   - Question display component
   - Progress bar
   - Results display with personalized recommendations
   - Email capture before showing results

5. Create components/quiz/:
   - question-card.tsx (display single question)
   - progress-bar.tsx (visual progress)
   - results-display.tsx (show score + next steps)

Requirements:
- Mobile responsive
- Dark mode compatible
- Store progress in localStorage
- Integration with /api/submit-lead before showing results

Success criteria: User can complete quiz, see results, and be added to email list.
```

### Prompt #2: Scripture Lookup Feature

```
In the existing Jesus Commands Next.js project at next-app/:

📦 CREATE SCRIPTURE LOOKUP FEATURE

1. Create types/scripture.ts with:
   - Scripture interface (id, reference, title, person, condition, method, words, result, fullText, category, keywords)
   - ScriptureCategory type (healing, deliverance, authority, etc.)

2. Create data/scripture/healing.json with:
   - 50+ healing examples from Gospels & Acts
   - Each with all Scripture interface fields
   - Categories: physical-healing, chronic-illness, pain, deliverance

3. Create lib/hooks/useScripture.ts with:
   - searchScripture(query: string, category?: string)
   - filterByCondition(condition: string)
   - getAllCategories()

4. Update app/scripture-lookup/page.tsx with:
   - Search bar with real-time filtering
   - Category filter buttons
   - Scripture card grid display
   - Copy-to-clipboard function for each verse
   - "Quick search" buttons for common conditions

5. Create components/scripture/:
   - search-bar.tsx (search input + filters)
   - scripture-card.tsx (display single scripture)
   - category-filter.tsx (filter buttons)

Requirements:
- Search across title, keywords, condition, and text
- Mobile responsive grid layout
- Dark mode compatible
- Highlight search terms in results
- Share to social media functionality

Success criteria: User can search for "headache" and find relevant commanding prayers from Bible.
```

### Prompt #3: 7-Day Challenge Feature

```
In the existing Jesus Commands Next.js project at next-app/:

📦 CREATE 7-DAY CHALLENGE FEATURE

1. Create types/challenge.ts with:
   - DayAssignment interface (day, title, description, scripture, task, completed)
   - ChallengeProgress interface (currentDay, streak, completedDays, startDate)

2. Create config/challenge-days.ts with:
   - Export const CHALLENGE_DAYS: DayAssignment[] (7 days)
   - Day 1: Read the Scriptures
   - Day 2: Pray for Yourself
   - Day 3: Ask Someone Close
   - Day 4: Try Again
   - Day 5: Go Public
   - Day 6: Embrace Failures
   - Day 7: Share Your Experience

3. Create lib/hooks/useChallengeProgress.ts with:
   - Load/save progress to localStorage
   - markDayComplete(day: number)
   - calculateStreak()
   - resetChallenge()

4. Update app/challenge/page.tsx with:
   - Progress dashboard (overall progress, streak counter)
   - Daily assignment cards (locked/unlocked based on progress)
   - Completion checkboxes
   - Motivational content for each day
   - Share progress button

5. Create components/challenge/:
   - progress-dashboard.tsx (stats + visual progress)
   - day-card.tsx (individual day assignment)
   - streak-display.tsx (gamified streak counter)

Requirements:
- Persist progress in localStorage
- Unlock days sequentially (can't skip ahead)
- Visual celebrations on completion
- Dark mode compatible
- Mobile responsive

Success criteria: User can track 7-day progress, see streak, and complete daily assignments.
```

### Prompt #4: Testimonies Feature

```
In the existing Jesus Commands Next.js project at next-app/:

📦 CREATE TESTIMONIES FEATURE

1. Create types/testimony.ts with:
   - Testimony interface (id, name, email, location, condition, story, date, upvotes, approved)
   - TestimonySubmission interface (name, email, location, condition, story)

2. Create data/testimonies/samples.json with:
   - 10 sample approved testimonies
   - Variety of conditions (healing, deliverance, provision)

3. Create lib/api/testimonies.ts with:
   - submitTestimony(data: TestimonySubmission)
   - getTestimonies(filter?: string)
   - upvoteTestimony(id: string)

4. Update app/testimonies/page.tsx with:
   - Testimony submission form
   - Display grid of approved testimonies
   - Filter by condition dropdown
   - Upvote functionality (localStorage to prevent duplicates)
   - Sort by date/popularity
   - Share to social media

5. Create components/testimonies/:
   - testimony-form.tsx (submission form with validation)
   - testimony-card.tsx (display single testimony)
   - filter-dropdown.tsx (condition filter)

6. Create app/api/submit-testimony/route.ts:
   - POST endpoint to receive testimony
   - Validation
   - Send to HighLevel for moderation
   - Return success response

Requirements:
- Form validation (required fields)
- Character limit on story (500 words)
- Filter by condition
- Upvote system with localStorage
- Dark mode compatible
- Mobile responsive

Success criteria: User can submit testimony and see it pending approval, view others' stories filtered by condition.
```

### Prompt #5: Learning Path Feature

```
In the existing Jesus Commands Next.js project at next-app/:

📦 CREATE LEARNING PATH FEATURE

1. Create types/learning-path.ts with:
   - PathLevel interface (level, title, description, requirements, assignments, downloadUrl, unlocked)
   - UserProgress interface (currentLevel, completedLevels, certificates)

2. Create config/learning-path.ts with:
   - Export const LEARNING_LEVELS: PathLevel[] (10 levels)
   - Level 1: Never heard this before
   - Level 2: Heard about it, don't know how
   - ...
   - Level 10: Preaching/teaching this

3. Create lib/hooks/useLearningPath.ts with:
   - Track user progress in localStorage
   - unlockNextLevel()
   - downloadCertificate(level)
   - markAssignmentComplete(level, assignmentId)

4. Update app/learning-path/page.tsx with:
   - Visual progression path (vertical timeline)
   - Level cards (locked/unlocked states)
   - Current level highlighted
   - Required scriptures for each level
   - Practical assignments checklist
   - Certificate download when level complete

5. Create components/learning-path/:
   - level-card.tsx (individual level with unlock state)
   - progress-timeline.tsx (visual vertical path)
   - assignment-checklist.tsx (track assignments)
   - certificate-button.tsx (download certificate)

Requirements:
- Levels unlock sequentially
- Visual feedback on current level
- Assignments checklist per level
- Certificate generation (future: PDF)
- Dark mode compatible
- Mobile responsive

Success criteria: User can see 10-level path, track progress, complete assignments, and see locked future levels.
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables on Vercel

Add in project settings:
- `NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL`
- `NEXT_PUBLIC_API_URL`

### Build Configuration

Already configured in `next.config.ts` and `vercel.json`.

---

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Complete project structure explanation (READ THIS FIRST!)
- **[Next.js Docs](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling reference

---

## 🎯 Development Roadmap

### Phase 1: Core Features (Current)
- [x] Project setup
- [x] Dark mode
- [x] Navigation
- [x] Home page
- [x] Start Here page
- [ ] Quiz feature
- [ ] Scripture lookup
- [ ] 7-day challenge

### Phase 2: Engagement
- [ ] Learning path
- [ ] Testimonies
- [ ] PDF generation
- [ ] Email sequence integration

### Phase 3: Analytics & Optimization
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] A/B testing
- [ ] Performance optimization

---

## 🤝 Contributing

### Before Adding Features

1. Read [ARCHITECTURE.md](./ARCHITECTURE.md)
2. Follow one-concern-per-file principle
3. Use TypeScript for all new code
4. Ensure dark mode compatibility
5. Test on mobile devices

### Code Style

- Use descriptive names
- Keep files under 300 lines
- Add comments for complex logic
- Export types from `types/`
- Put constants in `config/`

---

## 🔧 Troubleshooting

### Dev server won't start
```bash
rm -rf .next
npm install
npm run dev
```

### Type errors
```bash
npx tsc --noEmit
```

### Tailwind not working
Check `app/globals.css` has `@import "tailwindcss";` at top

---

## 📄 License

All rights reserved. Jesus Commands ministry.

---

## 🙏 Credits

Built with:
- Next.js team for the framework
- Vercel for hosting
- Claude for architecture guidance
- Ken for the project structure philosophy

---

**Last Updated**: November 17, 2025

**Remember**: Read ARCHITECTURE.md before building features. It explains the "why" behind every folder.
