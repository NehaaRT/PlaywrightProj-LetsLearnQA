import { test, expect } from '@playwright/test';
import testLogin from '../../TestData/LoginData.json';

test('LoginTest', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('username').fill(testLogin.username);

  await page.getByLabel('password').fill(testLogin.password);
 
//await page.getByRole('button', name: 'Submit'}).click();
 
//await page.waitForTimeout(5000
 
    
});





//npx playwright test "tests/QaSeries/19ReadataJSON.spec.ts" --project=chromium --headed


 20CreUseCustFixt.spec.ts