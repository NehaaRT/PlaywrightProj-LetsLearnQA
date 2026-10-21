import { test, expect, Page } from '@playwright/test';

test('validateInventory', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    //login-usernm
    await page.locator('#user-name').fill('standard_user');
    //or
    await page.fill('#user-name', 'standard_user');

    //login-pwd
    await page.fill('#password', 'secret_sauce');

    //submit
    await page.click('#login-button');
   
   //Assertions
     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    //css selector
    await page.locator('#react-burger-menu-btn').click();
 
    //Logout
    //await page.locator('#logout_sidebar_link').click();

    await page.waitForTimeout(5000);

});

//---------------------------------------------------

test('AdddToCart', async ({ page }) => 
{
    await page.goto('https://www.saucedemo.com/');

    //login-usernm
    await page.fill('#user-name', 'standard_user');

    //login-pwd
    await page.fill('#password', 'secret_sauce');

    //submit
    await page.click('#login-button');
    
    //--------------------------
    //Add to Card 
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //Assertions
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();

    //Open the sidebar before logout
    await page.locator('#react-burger-menu-btn').click();

    //Logout
    await page.locator('#logout_sidebar_link').click();

    await page.waitForTimeout(5000);

});



//npx playwright test "tests/QaSeries/17]HooksPlaywright.spec.ts" --project=chromium --headed