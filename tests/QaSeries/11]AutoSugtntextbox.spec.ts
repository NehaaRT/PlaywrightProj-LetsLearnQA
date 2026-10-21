import{test , expect} from "@playwright/test";

test('AutoSuggestion',async({page})=>
{

    await page.goto('https://www.youtube.com/@LetsLearnQA');
    
    await page.getByPlaceholder('Search').fill('playwright');

    await page.waitForSelector('.ytSuggestionComponentLeftContainer')

    const AutoSuggestion = await page.locator('.ytSuggestionComponentLeftContainer');

    const  count = await AutoSuggestion.count();

    for(let i =0 ; i < count ; i++)
    {
       const text= await AutoSuggestion.nth(i).textContent(); 
       console.log(text);
      //expect(text).toContain('playwright');

    }


});