import{test}from '@playwright/test'

test ('scrrenshort',async({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
      
    await page.waitForTimeout(3000);
    
    //viewport screenshort
    //await page.screenshot({path:'tests/QaSeries/8ViewPort.png'});

    //full page
     await page.screenshot({path: 'tests/QaSeries/8ViewPortfullpage.png',fullPage: true});

     //Element Scrrenshort
     const ele1 = await page.getByText('Get Started Free');
  
     await ele1.screenshot({path: 'tests/QaSeries/8Viewportparticaulrtxt.png'})



})
