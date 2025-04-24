import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Gain weight.cls-1{fill:#').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Savory.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Something to chew.cls-1{fill').click();
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();
  await page.locator('.Card__content').first().click();
  
  await page.getByRole('button', { name: 'Close' }).click();
});