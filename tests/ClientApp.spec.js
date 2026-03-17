const {test, expect} = require('@playwright/test');

test('@WC Client App Login', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client");
    
    await page.locator("#userEmail").fill("abdullah.aydogan@testinium.com");
    await page.locator("#userPassword").fill("12345asd@A");
    await page.locator("[value='Login']").click();

    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});