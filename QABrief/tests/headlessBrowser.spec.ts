import { test, expect } from '@playwright/test';
//initial check 
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
});