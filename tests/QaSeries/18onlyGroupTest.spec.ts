import { test, expect } from '@playwright/test';

//Group 1
test.describe.only('HomepageTests', () =>
{
      test('HomepageTitleTest', async ({ page }) => 
    {
       console.log("Group 1: this is HomepageTitleTest test");
   });

      test('HomepageHeadingTest', async ({ page }) => 
   {
       console.log("Group 1: this is Homepage Heading test");
   }); 
   
});

//Group 2
test.describe('LoginTests', () =>
{

   test('ValidLLoginTest', async ({ page }) => 
   {
       console.log("Group 2: this is Valid Login test");
   });
       test('InvalidLoginTest', async ({ page }) => 
   {
       console.log("Group 2: this is Invalid Login test");
   });
});

   //2 passed (

               // › HomepageTests › HomepageTitleTest
//Group 1: this is HomepageTitleTest test
               // › HomepageTests › HomepageHeadingTest
//Group 1: this is Homepage Heading test

//npx playwright test "tests/QaSeries/18onlyGroupTest.spec.ts" --project=chromium --headed 