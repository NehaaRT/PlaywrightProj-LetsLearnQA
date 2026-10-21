import { test, expect } from '../../Fixture/loginfixture';

test('ClickProduct', async ({ loggedPage}) =>
{

 //Loggedinpage
 
await loggedPage.locator('#item_4_title_link').click();

await loggedPage.waitForTimeout(5000);
});
 

 test('ClickAddToCart', async ({ loggedPage }) =>
{

 
await loggedPage.locator('#add-to-cart-sauce-labs-backpack').click(); 
 
await loggedPage.locator('.shopping_cart_link').click(); 
});