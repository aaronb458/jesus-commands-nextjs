import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Jesus Commands/);
    await expect(page.locator('h1')).toContainText('Jesus Gave You');
  });

  test('should have visible navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check all nav links are visible
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Start Here' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Take Quiz' })).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    const themeButton = page.locator('button[aria-label="Toggle theme"]');
    await expect(themeButton).toBeVisible();

    // Click theme toggle
    await themeButton.click();
    await page.waitForTimeout(500);

    // Check if dark mode is applied
    const html = page.locator('html');
    const htmlClass = await html.getAttribute('class');
    expect(htmlClass).toContain('dark');
  });

  test('should display hero section', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Commands');
    await expect(page.locator('text=Stop begging')).toBeVisible();
  });

  test('should have clickable CTA buttons', async ({ page }) => {
    const startHereButton = page.getByRole('link', { name: /Start Here/i }).first();
    await expect(startHereButton).toBeVisible();
    await expect(startHereButton).toBeEnabled();

    const quizButton = page.getByRole('link', { name: /Take the Quiz/i }).first();
    await expect(quizButton).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    // Check for main section headings
    await expect(page.locator('text=Have You Been Praying Wrong')).toBeVisible();
    await expect(page.locator('text=What the Bible Actually Shows')).toBeVisible();
    await expect(page.locator('text=The 5-Step Method')).toBeVisible();
    await expect(page.locator('text=It Works Today')).toBeVisible();
    await expect(page.locator('text=What\'s Your Next Step')).toBeVisible();
  });

  test('should have visible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Jesus Commands');
    await expect(footer).toContainText(new Date().getFullYear().toString());
  });

  test('should have proper text contrast in light mode', async ({ page }) => {
    // Check that text is not the same color as background
    const heading = page.locator('h2').first();
    const headingColor = await heading.evaluate(el => window.getComputedStyle(el).color);
    const bgColor = await page.locator('body').evaluate(el => window.getComputedStyle(el).backgroundColor);

    expect(headingColor).not.toBe(bgColor);
  });

  test('should have proper text contrast in dark mode', async ({ page }) => {
    const themeButton = page.locator('button[aria-label="Toggle theme"]');
    await themeButton.click();
    await page.waitForTimeout(500);

    // Check text visibility in dark mode
    const heading = page.locator('h2').first();
    await expect(heading).toBeVisible();

    const headingColor = await heading.evaluate(el => window.getComputedStyle(el).color);
    const bgColor = await page.locator('body').evaluate(el => window.getComputedStyle(el).backgroundColor);

    expect(headingColor).not.toBe(bgColor);
  });

  test('should scroll smoothly to sections', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
  });
});
