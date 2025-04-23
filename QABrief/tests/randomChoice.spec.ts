import { test, expect, chromium } from '@playwright/test';
import { isContext } from 'vm';
//testing random choices on the quiz selection
//verifying that a response is recieved after clicking the link after an action is performed
test('test', async ({ page }) => {
  await page.goto('https://huel.com/');
  const cookie = page.getByText('Required cookies only')
  
  //const hiddenCookie = await cookie.waitFor({state: `hidden`})
  //^cookies popup wont alway appear
  //if its invisible skip pressing the button and instead go straight to "Take the quiz"
  
  if (await cookie.isVisible){
    await page.getByRole('button', { name: 'Required cookies only' }).click();
  } 
  
  //else if (hiddenCookie) {} same if the popup doesnt appear then this would run the take quiz line
  
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Save time.cls-1{fill:#0a0b0b;}').click();
  await page.getByText('Gain weight.cls-1{fill:#').click();
  await page.getByText('Save money.cls-1{fill:#0a0b0b').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('g:nth-child(3) > image').first().click();
  await page.getByText('Lunch.cls-1{fill:#0a0b0b;}').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('I’m not picky.cls-1{fill:#').click();
  await page.getByText('Something refreshing.cls-1{').click();
 
  //awaiting for state change to signify button has been clicked
  //waiting until button appears->when button is clicked it disappears
  //console log message
 
  const thanks= page.getByText('No thanks, show me the results')
  await thanks.waitFor({state: 'visible'});
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();
  await thanks.waitFor({state: 'hidden'});
  console.log("Link has been clicked")
});