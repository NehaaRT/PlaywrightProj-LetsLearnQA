
import { test, expect } from '@playwright/test';

// Group 1 - Homepage Tests (Skipped)
test.describe.skip('HomepageTests', () => {

    test('HomepageTitleTest', async ({ page }) => {
        console.log('Group 1: this is HomepageTitleTest test');
    });

    test('HomepageHeadingTest', async ({ page }) => {
        console.log('Group 1: this is Homepage Heading test');
    });

});

// Group 2 - Login Tests (Running)
test.describe('LoginTests', () => {

    test('ValidLoginTest', async ({ page }) => {
        console.log('Group 2: this is Valid Login test');
    });

    test('InvalidLoginTest', async ({ page }) => {
        console.log('Group 2: this is Invalid Login test');
    });

});



     
 //2 skipped
 //2 passed (2.0



        // › LoginTests › ValidLLoginTest
//Group 2: this is Valid Login test
          // /› LoginTests › InvalidLoginTest
//Group 2: this is Invalid Login test




//npx playwright test "tests/QaSeries/18SkipGroupTest.spec.ts" --project=chromium --headed 