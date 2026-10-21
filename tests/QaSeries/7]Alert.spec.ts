import {test ,expect} from 'playwright/test'

test('AlertsDemo',async({page})=>
{
    page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    
    await page.waitForTimeout(3000);
    
    //event listener 
    page.on(`dialog` , async dialog=>
    {
        //await dialog.accept();
        
       //await dialog.dismiss()

        console.log(await dialog.message());
        await dialog.accept("neha");
       

    })

     //await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click();
 
     //await page.locator("(//button[contains(text(),'Click Me')])[2]").click();

     //await page.locator("/html/body/div[1]/div/main/section[2]/div/div/div/div[2]/div/p[2]").click();


    await page.locator("//div[3]//p[1]//button[1]").click();


 
      await page.pause();

});
