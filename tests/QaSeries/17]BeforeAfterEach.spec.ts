import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    //---Login-------
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/.*inventory\.html/);

});
test.afterEach(async ({ page }) => {

    //Open the sidebar 
    await page.locator('#react-burger-menu-btn').click();

    await expect(page.locator('#logout_sidebar_link')).toBeVisible();

    //Logout
    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

})

test('validateInventory', async ({ page }) => {

    //await page.goto('https://www.saucedemo.com/');

    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(5000);

});

//---------------------------------------------------

test('AdddToCart', async ({ page }) => 
{
  
    //Add to Card 
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //Assertions
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();


    await page.waitForTimeout(5000);

});







 //npx playwright test "tests/QaSeries/17]BeforeAfterAll.spec.t" --project=chromium --headed


