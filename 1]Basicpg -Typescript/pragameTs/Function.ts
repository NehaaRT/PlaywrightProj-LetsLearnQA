//NamedFunction.ts

//==============Named Function==============
//A named function has a function name and can called using that name

function totalBill(qty:number,price:number)
{
    console.log("total price = "+ (qty*price));     //total price = 276
}
totalBill(12,23);         //Nmaed function

//=============Ananymous Function==========
/*An anonymus Function is a function without name 
it is usally assigned to a variable*/

let getToalBill = function (qty:number,price:number)     //create var getToBill
{
    console.log("total price = "+ (qty*price));     //total price = 276
}
getToalBill(12,23);         //Anoymouse function


//=============Arrow function
//Arrow Function is short and morden syntax for writing function
//its is used => arrow symbol


let GetTotalBill =(qty:number,price:number)=>     //create var getToBill and no need write function word
{
    console.log("total price = "+ (qty*price));     //total price = 276
}
GetTotalBill(12,23);    

