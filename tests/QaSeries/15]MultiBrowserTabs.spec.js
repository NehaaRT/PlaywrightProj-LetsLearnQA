
import { test, expect } from '@playwright/test';

test('Multi Browser Tabs', async ({ page, context }) => {

const pagePromise = context.waitForEvent('page')   
 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
});