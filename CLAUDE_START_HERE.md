# 👋 Hey Future Claude! Start Here

> **You're working on the Jesus Commands project**
> A Next.js app teaching believers to pray with Biblical authority (commanding vs. begging)

## ⚡ 60-Second Context

**What is this?**
- Modern React/Next.js 15 landing page + multi-page funnel
- Teaching Christians to pray like Acts (commanding) instead of begging
- HighLevel CRM integration for lead capture
- Full dark mode, TypeScript, Tailwind CSS v4

**Current State:**
- ✅ Home page with hero + 5 sections complete
- ✅ Start Here page complete
- ✅ Navigation + footer complete
- ✅ Dark mode working (system + manual)
- ✅ API route for lead submission ready
- 🏗️ Quiz, Challenge, Scripture Lookup, Testimonies, Learning Path = stub pages (need implementation)

**Tech Stack:**
- Next.js 15 (App Router, Turbopack)
- TypeScript 5.3+
- Tailwind CSS v4 (using CSS variables in globals.css)
- next-themes for dark mode
- Lucide React for icons

---

## 📖 Read These First (In Order)

1. **[ARCHITECTURE.md](./ARCHITECTURE.md)** ← **START HERE**
   - Explains folder structure
   - "Why" each folder exists
   - One-concern-per-file philosophy
   - File size limits (under 300 lines)

2. **[README.md](./README.md)**
   - Quick start commands
   - Environment variables
   - **Claude Code SDK prompts** for building features
   - Deployment info

3. **This file** (you're reading it)
   - Quick navigation guide
   - Common tasks
   - What to do next

---

## 🗺️ Navigation Guide

### "Where do I find...?"

| Looking for... | Go to... |
|----------------|----------|
| Page components | `app/[route]/page.tsx` |
| API endpoints | `app/api/[endpoint]/route.ts` |
| Reusable UI components | `components/ui/` or `components/layout/` |
| Home page sections | `components/sections/` |
| Type definitions | `types/` (create if needed) |
| Static data | `data/` (create if needed) |
| App configuration | `config/` (create if needed) |
| Utility functions | `lib/utils.ts` |
| API client code | `lib/api/` (create if needed) |
| Custom hooks | `lib/hooks/` (create if needed) |
| Global styles | `app/globals.css` |
| Theme logic | `components/theme-provider.tsx` + `components/ui/theme-toggle.tsx` |

### "I need to..."

| Task | Files to check |
|------|----------------|
| Adjust colors | `app/globals.css` (search for `:root` and `.dark`) |
| Add navigation link | `components/layout/navigation.tsx` |
| Change footer | `components/layout/footer.tsx` |
| Modify home page | `app/page.tsx` + `components/sections/` |
| Create new page | `app/[new-route]/page.tsx` |
| Add API endpoint | `app/api/[endpoint]/route.ts` |
| Update metadata | `app/layout.tsx` |

---

## 🎯 Common Tasks

### Task 1: Build a New Feature (e.g., Quiz)

1. **Read the prompt** from README.md → "Claude Code SDK Prompts" section
2. **Create types** in `types/quiz.ts`
3. **Add config** in `config/quiz-questions.ts`
4. **Create hook** in `lib/hooks/useQuizState.ts`
5. **Update page** in `app/quiz/page.tsx`
6. **Add components** in `components/quiz/`
7. **Test** dark mode + mobile responsiveness

### Task 2: Fix a Bug

1. **Identify** which file handles that concern
2. **Check** ARCHITECTURE.md if unsure
3. **Read** the file (look for comments explaining logic)
4. **Fix** the issue
5. **Test** in both light and dark mode

### Task 3: Add New API Integration

1. **Create** `lib/api/[service].ts`
2. **Export** typed functions (e.g., `submitToService()`)
3. **Add** environment variable to `.env.local`
4. **Create** API route if needed: `app/api/[endpoint]/route.ts`
5. **Document** in README.md

### Task 4: Adjust Styling

**Colors:**
- Edit `app/globals.css`
- Update both `:root` (light) and `.dark` (dark mode)
- Use CSS variables, not hard-coded hex

**Components:**
- Use Tailwind utility classes
- Use `text-primary`, `bg-surface`, etc. (defined in globals.css)
- Check dark mode: `dark:bg-primary-light`

### Task 5: Add Content

**Static content** (scripture, testimonies):
- Create JSON in `data/[category]/[file].json`
- Create type in `types/[category].ts`
- Import in component

**Configuration** (quiz questions, email sequences):
- Create `config/[feature].ts`
- Export const objects
- Import where needed

---

## 🚨 Important Rules

### **DO:**
✅ Keep files under 300 lines (split if larger)
✅ One concern per file (navigation.tsx does ONLY navigation)
✅ Use descriptive names (`hero-section.tsx` not `component1.tsx`)
✅ Put types in `types/`, config in `config/`, data in `data/`
✅ Test dark mode for every change
✅ Use TypeScript for all new code
✅ Add comments explaining complex logic

### **DON'T:**
❌ Create 500+ line monster files
❌ Mix concerns (don't put API logic in UI components)
❌ Hard-code colors (use CSS variables)
❌ Skip dark mode testing
❌ Put everything in one folder
❌ Use vague names like `utils.tsx`, `helpers.tsx`

---

## 🎨 Design System Quick Reference

### Colors (from `app/globals.css`)

**Light Mode:**
```
--primary: #2E5F7A       (Soft Teal Blue)
--accent: #E8A87C        (Warm Peach)
--sage: #8BA888          (Soft Green)
--background: #FFFFFF
--foreground: #2D2D2D    (Text color)
--surface: #FAF7F0       (Card backgrounds)
```

**Dark Mode:**
```
--primary: #4A7C9B       (Lighter Teal)
--accent: #F5C49B        (Light Peach)
--sage: #A5C4A1          (Light Green)
--background: #0F1419
--foreground: #E5E5E5    (Text color)
--surface: #1A1F26       (Card backgrounds)
```

**Usage in JSX:**
```tsx
<div className="bg-surface text-foreground">
<h1 className="text-primary dark:text-primary-light">
<button className="bg-accent hover:bg-accent-dark">
```

### Typography

- **Headings**: Font Montserrat (900 weight)
- **Body**: Font Inter (400-700 weights)
- Defined in `app/globals.css` via Google Fonts import

---

## 🔧 Development Commands

```bash
# Start dev server (usually running on port 3002 if 3000 is taken)
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Clean restart
rm -rf .next && npm run dev
```

---

## 📦 Package Management

**Current Dependencies:**
- next, react, react-dom
- typescript, @types/*
- tailwindcss
- next-themes
- lucide-react
- clsx, tailwind-merge

**When adding new packages:**
1. Install: `npm install [package]`
2. Document in README.md why it's needed
3. Add type definitions if available (`@types/[package]`)

---

## 🐛 Common Issues & Solutions

### Issue: Dev server won't start
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Issue: Type errors
```bash
npx tsc --noEmit  # See all type errors
```

### Issue: Styles not applying
- Check `app/globals.css` has `@import "tailwindcss";` at top
- Restart dev server
- Check class names are valid Tailwind classes

### Issue: Dark mode not working
- Check `components/theme-provider.tsx` is wrapping app
- Check `html` tag has `suppressHydrationWarning` in `app/layout.tsx`
- Verify CSS variables defined in both `:root` and `.dark`

### Issue: Text invisible
- Check color contrast in `app/globals.css`
- Ensure `text-foreground` is used (not hard-coded white/black)
- Test both light and dark mode

---

## 🚀 What to Build Next

### Priority 1: Core Features
1. **Quiz** - 10-question assessment (prompt in README.md)
2. **Scripture Lookup** - Searchable database (prompt in README.md)
3. **7-Day Challenge** - Progress tracking (prompt in README.md)

### Priority 2: Engagement
4. **Learning Path** - 10-level progression (prompt in README.md)
5. **Testimonies** - Submit + display (prompt in README.md)
6. **PDF Generator** - Lead magnet download

### Priority 3: Optimization
7. **Analytics** - GA4, Facebook Pixel
8. **Email Sequence** - 7-day drip integration
9. **Performance** - Image optimization, lazy loading

**See README.md "Claude Code SDK Prompts" for exact implementation prompts**

---

## 💡 Pro Tips

1. **Use the prompts**: README.md has copy-paste ready prompts for each feature
2. **Read comments**: Files have comments explaining "why"
3. **Check examples**: Look at existing components for patterns
4. **Ask about structure**: If unsure where something goes, check ARCHITECTURE.md
5. **Keep it simple**: Simpler is better. Don't over-engineer.
6. **Split early**: If a file is getting long, split it before 300 lines

---

## 🎓 Learning the Codebase

**5-minute tour:**
1. Open `app/page.tsx` - see how sections are composed
2. Open `components/sections/hero-section.tsx` - see component structure
3. Open `app/globals.css` - see theme system
4. Open `components/layout/navigation.tsx` - see routing + dark mode

**15-minute deep dive:**
1. Read ARCHITECTURE.md fully
2. Browse each folder in `components/`
3. Check `app/` structure
4. Look at `app/api/submit-lead/route.ts` for API pattern

---

## 🆘 Need Help?

1. **Structure questions**: Read ARCHITECTURE.md
2. **Build questions**: Check README.md prompts
3. **Style questions**: See `app/globals.css`
4. **Type questions**: Look in `types/` (or create the type you need)

---

## ✅ Before Finishing Your Session

- [ ] Test dark mode works
- [ ] Test mobile responsiveness
- [ ] Run `npx tsc --noEmit` to check types
- [ ] Update README.md if you added features
- [ ] Update ARCHITECTURE.md if you changed structure
- [ ] Verify dev server still runs

---

**Remember**: This project follows Ken-Style architecture. One concern per file. Descriptive names. Built for "Claude Tomorrow" (which is you!).

**Now go build something amazing.** 🚀
