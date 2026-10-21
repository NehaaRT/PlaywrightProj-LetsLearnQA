import { test, expect } from '@playwright/test';

test('Assertion', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  const usernameField = page.getByLabel('Username');

  await expect(usernameField).toBeVisible();

  await expect(usernameField).toBeEnabled();

  //soft Assertion             test fail but next o/p show
  await expect.soft(usernameField).not.toBeEnabled();

  //--------------exact text-------------------------
  const heading = page.locator('h2');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Test login');

  //---------partial text--------------------------
  await expect(heading).toContainText('login');

  //--------------------------------------------
  await usernameField.fill('student');

  await page.getByLabel('Password').fill('Password123');

  //---------------------------------------------
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  await page.waitforTimeout(5000);

});