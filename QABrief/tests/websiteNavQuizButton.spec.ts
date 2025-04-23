import { test, expect } from '@playwright/test';
//navigating to huel website using url + locating and clicking the "Take the Quiz" button
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
});
