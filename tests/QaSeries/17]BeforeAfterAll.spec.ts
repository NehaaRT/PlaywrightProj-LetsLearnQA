import { test, expect, Page } from '@playwright/test';

/*let page: Page;
test.beforeAll(async ({ browser }) => 
{
   page = await browser.newPage();

    //---Login-------
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
});

test.afterAll(async () =>
{
    //Open the sidebar 
    await page.locator('#react-burger-menu-btn').click();

    await expect(page.locator('#logout_sidebar_link')).toBeVisible();
});
//-----------------------------------

test('validateInventory', async ({}) => {

    //await page.goto('https://www.saucedemo.com/');

    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(5000);

});

test('AdddToCart', async ({}) => 
{
  
    //Add to Card 
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //Assertions
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();


    await page.waitForTimeout(5000);

});*/


let page: Page;

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();

    // Login
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

});

test('validateInventory', async () => {

    // Validate URL
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

    await page.waitForTimeout(5000);

});

test('AdddToCart', async () => {

    // Add to Cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Assertion
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();

    await page.waitForTimeout(5000);

});

test.afterAll(async () => {

    // Open sidebar
    await page.locator('#react-burger-menu-btn').click();

    // Verify Logout
    await expect(page.locator('#logout_sidebar_link')).toBeVisible();

    // Close browser
    await page.context().close();

});





