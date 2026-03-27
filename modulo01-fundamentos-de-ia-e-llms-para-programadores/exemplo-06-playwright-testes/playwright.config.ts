import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 5000,
  expect: { timeout: 5000 },
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://erickwendel.github.io/vanilla-js-web-app-example/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
