import{test , expect} from '@playwright/test'

// page is provide ready made browesr or it fixture ,its object
test('validate page Title',async({page})=>
{
    await page.goto('https://demoblaze.com/');

    await expect(page).toHaveTitle('STORE');
    
})




//npx playwright test "tests/QaSeries/3HomepageTit.spec.ts" --project=chromium --headed

