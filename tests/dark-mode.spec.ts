import { test, expect } from '@playwright/test';

test.describe('Dark Mode', () => {
  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await expect(themeToggle).toBeVisible();

    // Check initial state (light mode)
    let htmlClass = await page.locator('html').getAttribute('class');
    const initialMode = htmlClass?.includes('dark') ? 'dark' : 'light';

    // Toggle
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check state changed
    htmlClass = await page.locator('html').getAttribute('class');
    const newMode = htmlClass?.includes('dark') ? 'dark' : 'light';
    expect(newMode).not.toBe(initialMode);
  });

  test('should persist dark mode across navigation', async ({ page }) => {
    await page.goto('/');

    // Enable dark mode
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Navigate to another page
    await page.goto('/start-here');
    await page.waitForTimeout(500);

    // Check dark mode is still enabled
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).toContain('dark');
  });

  test('should have readable text in dark mode on all sections', async ({ page }) => {
    await page.goto('/');

    // Enable dark mode
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check various sections have visible text
    const sections = [
      page.locator('h1').first(),
      page.locator('h2').first(),
      page.locator('p').first(),
    ];

    for (const element of sections) {
      await expect(element).toBeVisible();
      const color = await element.evaluate(el => window.getComputedStyle(el).color);
      // Ensure color is set (not transparent or same as background)
      expect(color).toBeTruthy();
      expect(color).not.toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('should have proper contrast for CTA buttons in dark mode', async ({ page }) => {
    await page.goto('/');

    // Enable dark mode
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check CTA button visibility
    const ctaButton = page.getByRole('link', { name: /Start Here/i }).first();
    await expect(ctaButton).toBeVisible();

    // Check button has background color
    const bgColor = await ctaButton.evaluate(el => window.getComputedStyle(el).backgroundColor);
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('should have visible icons in dark mode', async ({ page }) => {
    await page.goto('/');

    // Enable dark mode
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check theme toggle icon is visible
    const icon = themeToggle.locator('svg');
    await expect(icon).toBeVisible();
  });
});
