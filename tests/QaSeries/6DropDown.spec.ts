import{test ,expect} from 'playwright/test'

test('Dropdown Test', async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/');

 await page.waitForTimeout(3000);

 //===========Label==============
 
 //-----1st way------
 //await page.locator("#country").selectOption({label:'India'});

 //-----2nd way------
 //await page.locator("//select[@id='country']").selectOption({label:'India'});

 //-----3rd way------
 //await page.locator('[id= country]').selectOption({label:'India'});

//===========index===========
 
 //-----1st way------
 //await page.locator('[id= country]').selectOption({index:3});

 //=============volume===========

 //await page.locator('#country').selectOption({value: 'france'});

//==============Lenghth==================

//1]check number of options in dropdown 
   //const options=await page.$$('#country option')

  //console.log("number of option.length",options.length)        //number of option.length 10
  /*OR*/
  //await expect(options.length).toBe(10)

//============textContent===========
  //3]check presence of value in the dropdown 
    //const content=await page.locator('#country').textContent()

 //============toBeTruthy============= 
    //await expect(content?.includes('India')).toBeTruthy();           //true
    //console.log(content?.includes('India'));

   //await expect(content?.includes('xyz')).toBeTruthy();            // false


  //============$$==============
  //5]check presence of value in the dropdown  using looping

   const options=await page.$$('#country option')
     let status=false;
    for(const option of options)
    {
        console.log(await option.textContent())
        
        let value=await option.textContent();
        if(value?.includes('France'))
        {

            status=true;
            break
        }
    }
    expect(status).toBeTruthy();


  console.log("France present:", status);


 await page.waitForTimeout(5000);

})