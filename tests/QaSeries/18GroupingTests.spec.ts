import { test, expect } from '@playwright/test';

//group1
test.describe('HomepageTests', () =>
{
      test('HomepageTitleTest', async ({ page }) => 
    {
       console.log("this is HomepageTitleTest test");
   });

      test('HomepageHeadingTest', async ({ page }) => 
   {
       console.log("group1: this is Homepage Heading test");
   }); 
   
});
//group2
test.describe('LoginTests', () =>
{

   test('ValidLLoginTest', async ({ page }) => 
   {
       console.log("group2: this is Valid Login test");
   });
       test('InvalidLoginTest', async ({ page }) => 
   {
       console.log("group2: this is Invalid Login test");
   });
});


















//npx playwright test "tests/QaSeries/18GroupingTests.spec.ts" --project=chromium --headed  
