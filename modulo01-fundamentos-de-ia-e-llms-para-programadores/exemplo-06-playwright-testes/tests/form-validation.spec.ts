import { test, expect } from '@playwright/test';

test('does not add new item when form is empty', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');

  const main = page.getByRole('main');
  const beforeCount = await main.getByRole('article').count();

  await page.getByRole('textbox', { name: 'Image Title' }).fill('');
  await page.getByRole('textbox', { name: 'Image URL' }).fill('');
  await page.getByRole('button', { name: 'Submit Form' }).click();

  await expect(main.getByRole('article')).toHaveCount(beforeCount);
});

test('does not add new item with invalid URL', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');

  const main = page.getByRole('main');
  const beforeCount = await main.getByRole('article').count();

  const title = `Invalid URL ${Date.now()}`;
  await page.getByRole('textbox', { name: 'Image Title' }).fill(title);
  await page.getByRole('textbox', { name: 'Image URL' }).fill('not-a-url');
  await page.getByRole('button', { name: 'Submit Form' }).click();

  await expect(main.getByRole('article')).toHaveCount(beforeCount);
});
