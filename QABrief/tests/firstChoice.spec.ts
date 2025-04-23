import { test, expect } from '@playwright/test';
//testing input if user selects all first choices
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Eat healthier.cls-1{fill:#').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Breakfast.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Sweet.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Flexible portions.cls-1{fill').click();
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();
}
);