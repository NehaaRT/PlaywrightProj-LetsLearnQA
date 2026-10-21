import{test , expect} from '@playwright/test'

test ('Check Locators',async({page})=>
{
      test.setTimeout(60000);
   
    //======== 1]getByRole========
   await page.goto('http://practicetestautomation.com/practice-test-login/');
   
   await page.getByRole('button', { name: 'Submit' }).click();

   await page.getByRole('link', { name: 'Blog' }).click();

   //========= 2]getByText=====
    await page.goto('http://testmuai.com/selenium-playground/input-form-demo/');

    await page.getByText('Get Started Free').click(); 

   //========= 2]getByPalceholder=====
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin')
    
    await page.getByPlaceholder('Password').fill('admin123');
    
    //=========3]getByTitle============
    await page.goto('http://testmuai.com/selenium-playground/input-form-demo/');

    await page.getByTitle('Hello, have a question? Let’s chat.').click();

    //=========3]getByAlt============
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByAltText('logo image').click();

    //=========3]getByLabe============
    await page.goto('http://practicetestautomation.com/practice-test-login/');

    await page.getByLabel('Username').fill('Admin');
    
    await page.getByLabel('password').fill('Admin123');



    






await page.waitForTimeout(5000);

})




//npx playwright test "tests/QaSeries/4comninbuidloctor.spec.ts" --project=chromium --headed