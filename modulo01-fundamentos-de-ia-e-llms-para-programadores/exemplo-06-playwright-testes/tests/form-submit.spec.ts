import { test, expect } from '@playwright/test';

test('submits form and list is updated with new item', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');

  const main = page.getByRole('main');
  const beforeCount = await main.getByRole('article').count();

  const title = `Copilot Item ${Date.now()}`;
  const url = 'https://picsum.photos/seed/playwright-e2e/200/200';

  await page.getByRole('textbox', { name: 'Image Title' }).fill(title);
  await page.getByRole('textbox', { name: 'Image URL' }).fill(url);
  await page.getByRole('button', { name: 'Submit Form' }).click();

  await expect(main.getByRole('article')).toHaveCount(beforeCount + 1);
  await expect(page.getByRole('heading', { name: title })).toBeVisible();
});
