import { test, expect } from '@playwright/test';

test('home loads and has a title', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');

  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AI Alien' })).toBeVisible();
});
