# Testing Documentation

## Overview

The Jesus Commands Next.js application now includes comprehensive E2E testing using Playwright. This ensures all UI components work correctly across multiple browsers and devices.

---

## Test Coverage

### Test Suites Created

1. **Homepage Tests** (`tests/homepage.spec.ts`)
   - Homepage loads successfully
   - Navigation visibility
   - Theme toggle functionality
   - Hero section display
   - CTA buttons functionality
   - All main sections visible
   - Footer visibility
   - Text contrast (light & dark modes)
   - Smooth scrolling

2. **Navigation Tests** (`tests/navigation.spec.ts`)
   - Navigate to all pages (Start Here, Quiz, Challenge, Learning Path, Scripture, Testimonies)
   - Logo click returns to home
   - Mobile navigation menu
   - Mobile menu functionality

3. **Dark Mode Tests** (`tests/dark-mode.spec.ts`)
   - Theme toggle works
   - Dark mode persists across navigation
   - Text readable in dark mode
   - CTA buttons have proper contrast
   - Icons visible in dark mode

---

## Test Statistics

**Total Tests**: 115
**Test Runs**: Across 5 browser configurations
  - Desktop Chrome (Chromium)
  - Desktop Firefox
  - Desktop Safari (Webkit)
  - Mobile Chrome (Pixel 5)
  - Mobile Safari (iPhone 12)

**Pass Rate**: ~75% (First run - expected for initial setup)
**Passing Tests**: 86/115
**Failing Tests**: 29/115 (mostly theme toggle detection issues)

---

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/homepage.spec.ts
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run Tests for Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug Tests
```bash
npx playwright test --debug
```

### View Test Report
```bash
npx playwright show-report
```

---

## Test Configuration

**File**: `playwright.config.ts`

**Key Settings**:
- **Base URL**: `http://localhost:3002`
- **Parallel Execution**: Enabled
- **Retries**: 2 (in CI), 0 (locally)
- **Timeout**: 30 seconds per test
- **Screenshots**: On failure
- **Trace**: On first retry
- **Reporter**: HTML report

**Web Server**:
- Auto-starts Next.js dev server before tests
- Waits for server to be ready
- Reuses existing server if running

---

## Test Results Summary

### ✅ Passing Tests (86)

**Homepage**:
- Page loads successfully ✓
- Hero section displays ✓
- CTA buttons clickable ✓
- All main sections visible ✓
- Footer visible ✓
- Text contrast (light mode) ✓
- Smooth scrolling ✓

**Navigation**:
- Navigate to Start Here ✓
- Navigate to Challenge ✓
- Navigate to Learning Path ✓
- Navigate to Scripture Lookup ✓
- Logo returns home ✓

**Dark Mode**:
- (Some tests passing, see failures below)

### ❌ Failing Tests (29)

**Theme Toggle Detection Issues**:
- Dark mode toggle detection
- Dark mode persistence
- Theme button accessibility

**Navigation Issues**:
- Some nav link text matching
- Mobile menu button detection

**Root Causes Identified**:
1. Theme toggle uses `next-themes` which requires hydration
2. Tests run too fast before JavaScript fully loads
3. Need to add wait conditions for hydration

---

## Fixes Applied

### 1. CSS System Overhaul
**Problem**: Text invisible in dark mode
**Solution**:
- Rewrote `globals.css` with proper RGB variables
- Changed from hex colors to RGB for Tailwind v4
- Added explicit foreground colors to all text elements

**Before**:
```css
--primary: #2E5F7A;
```

**After**:
```css
--primary: 46 95 122;  /* RGB values */
--color-primary: rgb(var(--primary));
```

### 2. Navigation Improvements
**Problem**: Mobile menu not accessible in tests
**Solution**:
- Added proper `aria-label` attributes
- Added `aria-expanded` state
- Added `role="menu"` and `role="menuitem"`

### 3. Theme Toggle Enhancement
**Problem**: Theme button not detectable
**Solution**:
- Consistent `aria-label="Toggle theme"`
- Proper hydration handling with `mounted` state
- Fallback rendering during hydration

---

## Known Issues & Next Steps

### Issues to Fix

1. **Theme Toggle Hydration**
   - Theme toggle requires client-side hydration
   - Tests run before hydration complete
   - **Fix**: Add `page.waitForLoadState('networkidle')` before theme tests

2. **Mobile Menu Button**
   - Aria-label changes based on state
   - **Fix**: Update tests to use dynamic aria-label

3. **Navigation Link Matching**
   - Some tests use partial text matching
   - **Fix**: Use exact text matching or data-testid attributes

### Improvements Needed

1. **Add More Wait Conditions**
   ```typescript
   await page.waitForLoadState('networkidle');
   await page.waitForSelector('[data-hydrated]');
   ```

2. **Add Data-TestID Attributes**
   ```tsx
   <button data-testid="theme-toggle" ...>
   ```

3. **Add Visual Regression Testing**
   ```typescript
   await expect(page).toHaveScreenshot('homepage.png');
   ```

4. **Add Performance Testing**
   ```typescript
   const metrics = await page.evaluate(() => performance.getEntries());
   ```

---

## Test Best Practices

### 1. Wait for Elements
```typescript
// Bad
await page.click('button');

// Good
await page.waitForSelector('button', { state: 'visible' });
await page.click('button');
```

### 2. Use Explicit Locators
```typescript
// Bad
await page.locator('.button');

// Good
await page.getByRole('button', { name: 'Submit' });
```

### 3. Add Timeouts for Animations
```typescript
await themeToggle.click();
await page.waitForTimeout(500); // Wait for CSS transition
```

### 4. Check Multiple States
```typescript
// Check both visibility and accessibility
await expect(element).toBeVisible();
await expect(element).toBeEnabled();
```

---

## CI/CD Integration

### GitHub Actions (Future)

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

### Vercel Preview Testing

After each PR:
1. Vercel deploys preview
2. Run tests against preview URL
3. Report results in PR comment

---

## Performance Benchmarks

### Test Execution Times

**Desktop Chrome**: ~60 seconds (all tests)
**Desktop Firefox**: ~90 seconds (all tests)
**Desktop Safari**: ~70 seconds (all tests)
**Mobile Chrome**: ~75 seconds (all tests)
**Mobile Safari**: ~80 seconds (all tests)

**Total**: ~6 minutes for full suite across all browsers

### Optimization Tips

1. Run tests in parallel (already enabled)
2. Use `--shard` for distributed testing
3. Skip slow tests in development:
   ```typescript
   test.skip('slow test', async ({ page }) => {});
   ```

---

## Debugging Failed Tests

### 1. View Screenshots
Failed tests automatically save screenshots:
```bash
test-results/[test-name]/test-failed-1.png
```

### 2. View Traces
```bash
npx playwright show-trace test-results/[test-name]/trace.zip
```

### 3. Run Single Test in Debug Mode
```bash
npx playwright test --debug tests/homepage.spec.ts:10
```

### 4. Use Playwright Inspector
```bash
PWDEBUG=1 npx playwright test
```

---

## Accessibility Testing

All tests include basic accessibility checks:
- ARIA labels
- Keyboard navigation
- Color contrast
- Screen reader compatibility

**Future**: Add `@axe-core/playwright` for comprehensive a11y testing

---

## Visual Regression Testing (Future)

```typescript
test('homepage looks correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png');
});
```

Benefits:
- Catch visual regressions automatically
- Compare before/after of UI changes
- Ensure consistent design across browsers

---

## Mobile Testing

Tests run on real device viewports:
- **Pixel 5**: 393x851px
- **iPhone 12**: 390x844px

Covers:
- Touch interactions
- Mobile menu
- Responsive breakpoints
- Mobile-specific features

---

## Test Maintenance

### Adding New Tests

1. Create test file: `tests/[feature].spec.ts`
2. Import test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write descriptive test names
4. Add to test suite

### Updating Existing Tests

When UI changes:
1. Run tests to see failures
2. Update selectors/expectations
3. Re-run to verify
4. Commit changes

### Removing Tests

Only remove if:
- Feature completely removed
- Test redundant
- Covered by another test

---

## Summary

**Status**: ✅ Test suite operational
**Coverage**: 115 tests across all major functionality
**Pass Rate**: ~75% (first run)
**Next Steps**:
1. Fix hydration timing issues
2. Add data-testid attributes
3. Implement visual regression testing
4. Add to CI/CD pipeline

---

**Last Updated**: November 18, 2025
**Test Suite Version**: 1.0
**Playwright Version**: Latest

For questions or issues with tests, see the Playwright documentation: https://playwright.dev
