import { test, expect } from '@playwright/test'
import { LoginPage } from '../../Pages/loginPages';

 

 
test('ValidateLogin', async ({ page }) =>
{
const loginpage: LoginPage = new LoginPage(page);
await loginpage.openApplication();
 
await loginpage.doLogin();
 
expect(await page).toHaveURL("https://www.saucedemo.com/inventory.html");

await page.waitForTimeout(3000);
});

test('ValidateAddToCart', async ({ page }) =>
{
   const loginpage: LoginPage = new LoginPage(page);
   await loginpage.openApplication();
   await loginpage.doLogin();

   const productlistpage = new  productlistpage(page);
   await productlistpage.clickAddtocardbutton();
   expect(await productlistpage.cardBadegeIcon)
   expect(await page).toHaveURL("https://www.saucedemo.com/inventory.html");
   await page.waitForTimeout(3000); 
});
