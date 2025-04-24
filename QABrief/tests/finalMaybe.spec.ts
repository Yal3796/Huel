import { test, expect } from '@playwright/test';

//Final test with all deliverables

test('test', async ({ page }) => {
//declaring variables to be used later (validations)
    const thanks= page.getByText('No thanks, show me the results')
    const productCheck= page.locator('.Card__content').first(); 
    const quizButton = page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' });
  
    try{

    await page.goto('https://huel.com/');
//await page.getByRole('button', { name: 'Some cookies' }).click(); - gives error
    await page.getByRole('button', { name: 'Required cookies only' }).click();
    
//if quiz button hasnt appeared go directly to the url
    if (await quizButton, ({state: 'visible'})) {
        
        quizButton.click()
    } 
    else{
        await page.goto('https://huel.com/pages/which-huel-survey')
    }

//await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
    await page.getByRole('button', { name: 'Get started' }).click();
    await page.getByText('Gain weight.cls-1{fill:#').click();
    await page.getByText('Save time.cls-1{fill:#0a0b0b;}').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Savory.cls-1{fill:#0a0b0b;}').click();
    await page.getByText('Flexible portions.cls-1{fill').click();
//Link validation
    await thanks.waitFor({state: 'visible'});
    await page.getByRole('button', { name: 'No thanks, show me the' }).click();
    await thanks.waitFor({state: 'hidden'});
    console.log("Link has been clicked")
//Product validation - else go straight to full product range

    if (await productCheck, ({state: 'visible'})){

    console.log("Product recommended") 

    }
    else {

    await page.goto('https://huel.com/collections/other-huel-products')

    }
/*
await page.locator('huel-card').filter({ hasText: 'Hot & Savory Meal PacksFrom $' }).getByRole('button').click();
await page.getByRole('img', { name: 'An image showing a meal pack' }).click();
await page.getByTestId('ModalCloseButton').click();

shows the weird card image and jittery card
*/
  } catch (e){  

    console.log(`Error occurred`)

  };
}
  );