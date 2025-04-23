import { test, expect } from '@playwright/test';


//Checking if browser record works
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
});