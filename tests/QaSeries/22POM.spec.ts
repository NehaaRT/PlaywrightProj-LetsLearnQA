import {Page ,Locator, test, expect} from 'playwright/test'
import {LoginPage} from '../../Pages/loginPages'


test('ValidateLogin',async ({page})=>
{
    const loginpage = new LoginPage(page);
    await loginpage .openApplication()
    await loginpage.doLogin();
    expect(await page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await page.waitForTimeout(3000)

})

//npx playwright test "tests/QaSeries/22POM.spec.ts" --project=chromium --headed 

 //npx playwright test "tests/QaSeries/22POM.spec.ts" 