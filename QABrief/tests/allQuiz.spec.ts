import { test, expect } from '@playwright/test';
//first run checking results if all available buttons are pressed
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Eat healthier.cls-1{fill:#').click();
  await page.getByText('Lose weight.cls-1{fill:#').click();
  await page.getByText('Gain weight.cls-1{fill:#').click();
  await page.getByText('Fitness goals.cls-1{fill:#').click();
  await page.getByText('Save money.cls-1{fill:#0a0b0b').click();
  await page.getByText('Save time.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Be more sustainable.cls-1{').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Breakfast.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Lunch.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Snack.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Supplement.cls-1{fill:#0a0b0b').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Savory.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Eating on the go.cls-1{fill:#').click();
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();
});