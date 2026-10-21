import {test}from '@playwright/test';

test('iFrameTest', async({page})=>
{
await page.goto("https://jqueryui.com/autocomplete/");

//const myframe= await page.frameLocator('.demo-frame')

//await myframe.locator('id=tags').fill('java');



const parentFrame = page.frameLocator('#parent-frame');

const childFrame = parentFrame.frameLocator('#child-frame');

await childFrame.locator('button').click();

await page.waitForTimeout(5000);

});