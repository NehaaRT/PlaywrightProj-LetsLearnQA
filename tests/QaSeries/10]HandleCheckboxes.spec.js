import { test, expect } from '@playwright/test';

test('checkBox', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo');
    await page.waitForTimeout(2000);

    const allcheckbox = page.locator("input[type='checkbox']")

    //Not check using Assertion
    await expect(allcheckbox.first()).not.toBeChecked();
    
    //check
    await allcheckbox.first().check();
    console.log(await allcheckbox.first().isChecked());     //true
     
    //uncheck
    await page.waitForTimeout(2000)
    await allcheckbox.first().uncheck();
    console.log(await allcheckbox.first().isChecked());     //false
    
    //specific checbox check
    await allcheckbox.nth(4).isEnabled();
    console.log(await allcheckbox.nth(4).isEnabled());      //false
    

    await page.waitForTimeout(5000);
});