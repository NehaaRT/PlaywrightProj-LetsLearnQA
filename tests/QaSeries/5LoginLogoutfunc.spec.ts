import{test ,expect} from '@playwright/test';

test('LoginTest',async ({page})=>
{

    await page.goto('http://practicetestautomation.com/practice-test-login/');

    //====validate by page Title======
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    //=========3]getByLabe============
    await page.getByLabel('Username').fill('student');
    
    await page.getByLabel('password').fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).click();

    //======validate sucessful login====== //Assertion
    await expect(page).toHaveTitle('Logged In Succesfully | practice Test Automation');
   
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
   
    await page.getByRole('link',{name :'Blog'}).click();

    await page.getByText('Get started free').click();

    await page.waitForTimeout(3000);


    



})













// npx playwright test "tests/QaSeries/5LoginLogoutfun.spec.ts

