import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to Start Here page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Start Here/i }).first().click();
    await expect(page).toHaveURL('/start-here');
    await expect(page.locator('h1')).toContainText('Start Here');
  });

  test('should navigate to Quiz page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Take.*Quiz/i }).first().click();
    await expect(page).toHaveURL('/quiz');
    await expect(page.locator('h1')).toContainText('Quiz');
  });

  test('should navigate to Challenge page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Challenge/i }).first().click();
    await expect(page).toHaveURL('/challenge');
    await expect(page.locator('h1')).toContainText('Challenge');
  });

  test('should navigate to Learning Path page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Learning Path/i }).first().click();
    await expect(page).toHaveURL('/learning-path');
    await expect(page.locator('h1')).toContainText('Learning Path');
  });

  test('should navigate to Scripture Lookup page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Scripture/i }).first().click();
    await expect(page).toHaveURL('/scripture-lookup');
    await expect(page.locator('h1')).toContainText('Scripture');
  });

  test('should navigate to Testimonies page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Testimonies/i }).first().click();
    await expect(page).toHaveURL('/testimonies');
    await expect(page.locator('h1')).toContainText('Testimonies');
  });

  test('should navigate back to home from nav logo', async ({ page }) => {
    await page.goto('/start-here');
    await page.getByRole('link', { name: 'Jesus Commands' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open mobile menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await page.waitForTimeout(300);

    // Check mobile menu is visible
    await expect(page.getByRole('menuitem', { name: 'Start Here' })).toBeVisible();
  });
});
