# Jesus Commands - Architecture Documentation

> **Built following Ken-Style Project Architect principles**
> One concern per file. Descriptive names. Built for "Claude Tomorrow".

## 📁 Project Structure

```
next-app/
│
├── app/                          # Next.js 15 App Router
│   ├── api/                      # API Routes
│   │   └── submit-lead/         # HighLevel lead submission
│   │       └── route.ts         # POST endpoint for lead capture
│   │
│   ├── (pages)/                 # All page routes
│   │   ├── page.tsx             # Home page
│   │   ├── challenge/           # 7-Day Challenge
│   │   ├── learning-path/       # 10-Level Learning Path
│   │   ├── pdf/                 # PDF Lead Magnet
│   │   ├── quiz/                # Prayer Assessment Quiz
│   │   ├── scripture-lookup/    # Scripture Database Search
│   │   ├── start-here/          # Getting Started Hub
│   │   ├── testimonies/         # Testimony Submission & Display
│   │   └── thank-you/           # Post-Submission Thank You
│   │
│   ├── layout.tsx               # Root layout with ThemeProvider
│   └── globals.css              # Global styles, CSS variables, theme

├── components/
│   ├── layout/                  # Layout components (nav, footer)
│   │   ├── navigation.tsx       # Main nav + mobile menu + theme toggle
│   │   └── footer.tsx           # Site footer with links
│   │
│   ├── sections/                # Page section components (Home page)
│   │   ├── hero-section.tsx     # Hero with CTA
│   │   ├── problem-section.tsx  # Problem statement
│   │   ├── truth-section.tsx    # Biblical examples
│   │   ├── method-section.tsx   # 5-step method from Acts 3
│   │   ├── proof-section.tsx    # Stats & Colombia story
│   │   └── cta-section.tsx      # Call-to-action paths
│   │
│   ├── ui/                      # Reusable UI components
│   │   └── theme-toggle.tsx     # Dark mode toggle button
│   │
│   └── theme-provider.tsx       # next-themes wrapper component

├── lib/
│   ├── api/                     # API client functions
│   │   └── (future: highlevel.ts, analytics.ts)
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── (future: useLocalStorage.ts, useScripture.ts)
│   │
│   ├── constants/               # App-wide constants
│   │   └── (future: routes.ts, categories.ts)
│   │
│   └── utils.ts                 # Utility functions (cn, etc.)

├── types/                       # TypeScript type definitions
│   └── (future: scripture.ts, testimony.ts, quiz.ts)

├── data/                        # Static data files
│   ├── scripture/               # Scripture database JSON
│   │   └── (future: healing.json, deliverance.json)
│   │
│   └── testimonies/             # Sample testimonies
│       └── (future: samples.json)

├── config/                      # Configuration files
│   └── (future: email-sequences.ts, quiz-questions.ts)

├── public/                      # Static assets
│   └── (images, fonts, etc.)

├── .env.local                   # Environment variables (git-ignored)
├── .env.local.example           # Template for environment variables
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration (v4 uses globals.css)
├── README.md                    # Getting started guide
└── ARCHITECTURE.md              # This file - explains the "why"
```

---

## 🧠 Design Philosophy

### 1. **One Concern Per File**
- `navigation.tsx` handles ONLY navigation (not theme logic)
- `theme-toggle.tsx` handles ONLY dark mode toggle
- `route.ts` in `api/submit-lead/` handles ONLY lead submission

### 2. **Descriptive Names**
- ❌ `component1.tsx`, `utils.ts`, `helpers.ts`
- ✅ `hero-section.tsx`, `theme-toggle.tsx`, `submit-lead/route.ts`

### 3. **Separation of Concerns**

| Folder | Purpose | Example |
|--------|---------|---------|
| `app/` | Routing & pages | `quiz/page.tsx` |
| `components/` | Reusable UI | `navigation.tsx` |
| `lib/` | Business logic | API clients, hooks, utilities |
| `types/` | Type definitions | Interfaces, enums |
| `data/` | Static content | Scripture JSON, sample data |
| `config/` | Configuration | Email sequences, quiz questions |

### 4. **Built for "Claude Tomorrow"**
Any AI (or developer) should be able to:
- Read `ARCHITECTURE.md` → Understand the entire structure
- See `components/sections/` → Know these are Home page sections
- Open `lib/api/` → Find all external API integrations
- Check `types/` → Get type definitions instantly

---

## 🎯 What Lives Where

### **Components (`components/`)**

#### Layout Components
- Purpose: Site-wide structural elements
- Examples: Navigation, Footer, Sidebar
- Rule: These should work on ANY page

#### Section Components
- Purpose: Page-specific content blocks
- Examples: HeroSection, TruthSection, MethodSection
- Rule: Currently used only on Home page, but reusable

#### UI Components
- Purpose: Atomic, reusable interface elements
- Examples: Buttons, Cards, Modals, ThemeToggle
- Rule: No business logic, just presentation

### **Library (`lib/`)**

#### API Clients (`lib/api/`)
- Purpose: External service integrations
- Future: `highlevel.ts`, `analytics.ts`, `bible-api.ts`
- Rule: Each service gets its own file

#### Hooks (`lib/hooks/`)
- Purpose: Reusable React hooks
- Future: `useLocalStorage.ts`, `useQuizState.ts`, `useScripture.ts`
- Rule: One hook per file, clear naming

#### Constants (`lib/constants/`)
- Purpose: App-wide constants
- Future: `routes.ts`, `scripture-categories.ts`, `quiz-scoring.ts`
- Rule: Group related constants, export named

#### Utils (`lib/utils.ts`)
- Purpose: Pure utility functions
- Current: `cn()` for className merging
- Rule: Keep it under 200 lines, split if needed

### **Types (`types/`)**

- Purpose: TypeScript interfaces and types
- Future structure:
  ```
  types/
    scripture.ts      # Scripture, ScriptureCategory
    testimony.ts      # Testimony, TestimonySubmission
    quiz.ts           # QuizQuestion, QuizResult
    user.ts           # User, LeadSubmission
  ```
- Rule: One domain per file

### **Data (`data/`)**

- Purpose: Static JSON/content files
- Future structure:
  ```
  data/
    scripture/
      healing.json        # 80+ healing scriptures
      deliverance.json    # Deliverance examples
      authority.json      # Authority scriptures
    testimonies/
      samples.json        # Sample testimonies
  ```
- Rule: JSON only, no logic

### **Config (`config/`)**

- Purpose: Application configuration
- Future structure:
  ```
  config/
    email-sequences.ts   # 7-day email content
    quiz-questions.ts    # Quiz questions & scoring
    learning-path.ts     # 10 levels with requirements
  ```
- Rule: Export const objects, no functions

---

## 🚦 Development Workflow

### **Adding a New Feature**

1. **Ask**: What is the ONE thing this feature does?
2. **Check**: Does it fit in an existing folder?
3. **Create**:
   - If new API → `lib/api/[service].ts`
   - If new page → `app/[route]/page.tsx`
   - If new component → `components/[category]/[name].tsx`
   - If new type → `types/[domain].ts`
4. **Document**: Add entry to this ARCHITECTURE.md

### **Example: Adding Quiz Feature**

```
1. Create types/quiz.ts
   - QuizQuestion, QuizAnswer, QuizResult interfaces

2. Create config/quiz-questions.ts
   - Export const QUIZ_QUESTIONS: QuizQuestion[]

3. Create lib/hooks/useQuizState.ts
   - Manage quiz progress, scoring logic

4. Update app/quiz/page.tsx
   - Import types, config, hook
   - Build UI

5. Create components/quiz/
   - question-card.tsx (one concern: display question)
   - progress-bar.tsx (one concern: show progress)
   - results-display.tsx (one concern: show results)
```

### **File Size Warning System**

- ✅ Under 150 lines: Perfect
- ⚠️ 150-300 lines: Consider splitting
- 🚨 Over 300 lines: MUST split into smaller files

---

## 🎨 Styling Strategy

### **Tailwind CSS v4 with CSS Variables**

- All colors defined in `app/globals.css` as CSS variables
- Light mode in `:root`
- Dark mode in `.dark` class
- Mapped to Tailwind via `@theme inline`

### **Why This Approach**

1. **Single Source of Truth**: Colors defined once
2. **Dark Mode**: Automatic theme switching
3. **Type Safety**: Use `text-primary` not `text-[#2E5F7A]`
4. **Future Proof**: Easy to rebrand entire site

---

## 🔌 API Integration

### **Current: HighLevel Webhook**

- Endpoint: `/api/submit-lead`
- Purpose: Capture leads and send to HighLevel CRM
- Environment: `NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL`

### **Future Integrations**

When adding new APIs, create:
```
lib/api/
  highlevel.ts     # HighLevel client
  bible-api.ts     # Bible verse fetching
  analytics.ts     # Google Analytics, Facebook Pixel
```

Each file should export:
- Client initialization function
- Typed API methods
- Error handling

---

## 📦 Dependencies Strategy

### **Core Dependencies**
- `next` - Framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `next-themes` - Dark mode

### **UI Dependencies**
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Utility for className merging

### **Future Dependencies** (when needed)
- `zod` - Runtime validation
- `react-hook-form` - Form handling
- `@tanstack/react-query` - Data fetching
- `jspdf` - PDF generation
- Database client (if needed)

**Rule**: Only add dependencies when actually implementing the feature

---

## 🧪 Testing Strategy (Future)

```
__tests__/
  components/
    navigation.test.tsx
  lib/
    api/
      highlevel.test.ts
  hooks/
    useQuizState.test.ts
```

**One test file per source file**

---

## 🚀 Deployment

### **Vercel Deployment**

1. Environment variables set in Vercel dashboard
2. Automatic deployments from `main` branch
3. Preview deployments for PRs

### **Required Environment Variables**

- `NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL` - HighLevel integration
- (Future) `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics
- (Future) `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel

---

## 📝 Documentation Standards

### **Every File Should Have**

1. **Top Comment**:
   ```typescript
   /**
    * Scripture Lookup Hook
    *
    * Purpose: Search and filter scripture database by category, keyword, or condition
    * Used by: scripture-lookup/page.tsx
    */
   ```

2. **Exported Functions**:
   ```typescript
   /**
    * Searches scripture database by query string
    * @param query - Search term (checks title, keywords, text)
    * @param category - Optional category filter
    * @returns Filtered array of Scripture objects
    */
   export function searchScripture(query: string, category?: string): Scripture[] {
     // ...
   }
   ```

3. **Complex Logic**:
   ```typescript
   // Step 1: Filter by category if provided
   // Step 2: Search across title, keywords, and text
   // Step 3: Sort by relevance (exact match > partial match)
   ```

---

## 🎯 Success Criteria

**A future Claude (or developer) should be able to:**

1. Read this file and understand the entire project in 5 minutes
2. Find any component/function in under 30 seconds
3. Add a new feature without breaking existing code
4. Understand the "why" behind every folder

**If any of these are false, the structure needs improvement.**

---

## 🔄 When to Refactor

**Trigger Points:**

1. File exceeds 300 lines
2. Component has 3+ responsibilities
3. Folder has 10+ files at one level
4. New developer (or Claude) asks "where should this go?"

**Refactoring Checklist:**

- [ ] Split large files by concern
- [ ] Move shared logic to `lib/`
- [ ] Extract types to `types/`
- [ ] Move constants to `config/`
- [ ] Update this ARCHITECTURE.md

---

## 📚 Learning Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react)

---

**Last Updated**: November 17, 2025
**Maintained By**: Project lead (with help from Claude)

**Remember**: This structure exists to make your life easier. If it's getting in the way, we adjust it. But we ALWAYS document the "why" when we do.
