// npm init -y                                    pacakage.json
//npm install typescript --save-dev                node_module

//npx tsx  pragameTS/1Basic.ts                       Run pg
//npx tsx  pragameTS/2Variabel.ts




//Typescript immediatly shows an error during development so 
// developer can fix problem before running the code

//why Typescript in popular with playwright
//------------------------------------------
//Type Safely
/*1] you get error during coding

  2]Auto Suggest (intellisense)
   In Editior liske Visual Studio code , Typescript gives very powerful suggection
   example: 
   Imediatly Shows method like
   Click()
   fill()
   goto()
   locator()

   3]better code Maintenace
   in framework like page Object Model, Typecsript make large framework easier to maintain

  4]Esay Refactoring 
  If you rename a function or varaible, TYpescript help update all refernce update all refernce safely*/



function calculateTotalAmount


(price:number , tax: number ):number
{
    return price+ tax;
    
}
let totalAmount = calculteAmount(100 , 10);
console.log(totalAmount)
