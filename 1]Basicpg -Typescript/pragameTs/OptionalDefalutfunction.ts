//npx tsx pragameTS/OptionalDefalutfunction.ts

//TypeScript Optional and Default Parameters in Function
 

//Real Time Example
 
  
//-----------1]Scenario: Online Shopping Discount System
 function calDiscounBill(amount: number ,discount :number)
{
    let finalamount = amount - discount ;
    console.log(`Final Amount is ${finalamount}`)    //900
}
calDiscounBill(1000,100)       


//-----------Case 1] Discount may or may not be there (Optional)
 function optionalDisBill(amount: number ,discount? :number)
{
    if(discount)
    {
    let finalamount = amount - discount ;
    console.log(`Final Amount is ${finalamount}`)    
     }
     else
     {
    console.log(`Final Amount is ${amount}`)    //Final Amount is 1000
     }
}
optionalDisBill(1000)     

//------------Case 2] = 50 Rs disount will be always given by default if no other discount is there.
function alwaysdefalutDisBill(amount: number ,discount :number=50)
{
  
    let finalamount = amount - discount ;
    console.log(`Final Amount is ${finalamount}`)    //  Final Amount is 950

}
alwaysdefalutDisBill(1000)                      

//--------------case 3]I provide a default discount when calling the function.”
function calltimeDisBill(amount: number ,discount :number=50)
{
  
    let finalamount = amount - discount ;
    console.log(`Final Amount is ${finalamount}`)    //  Final Amount is 750

}
 calltimeDisBill(1000)                       //250 use in discalount using call



//=========optional parameter
 
//An optional parameter means the function may or may not receive that value.
 
//? makes the parameter optional
 
//=========default parameter
 
//A default parameter automatically gets a value if no argument is passed.
 