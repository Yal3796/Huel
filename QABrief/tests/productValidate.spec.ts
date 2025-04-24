import { test, expect } from '@playwright/test';
  //after product page when clicked skip - shows error page 404

  //Product validation + Error handling with screenshots


test('test', async ({ page }) => {

  //catch errors
  try{

  await page.goto('https://huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Gain weight.cls-1{fill:#').click();
  await page.getByText('Save time.cls-1{fill:#0a0b0b;}').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Savory.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Flexible portions.cls-1{fill').click();
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();

  //state check - to validate huel product is shown
  const productCheck= await page.locator('.Card__content').first();
  await productCheck.waitFor({state: `visible`})
  console.log("Product recommended")

  //read more to show expanded card 
  await page.locator('huel-card').filter({ hasText: 'Hot & Savory Meal PacksFrom $' }).getByRole('button').click();
  
  // expanded card shows weirldy cropped product image
  await page.getByRole('img', { name: 'An image showing a meal pack' }).click();
  await page.getByTestId('ModalCloseButton').click();

  //any errors caught will return a console log + saved screenshot of the current page
  } catch (e){  
    // dont work - await page.screenshot({ path: 'screenshot.png', fullPage: true }) changed in config file
    console.log(`Error occurred`)

  };
}
  );