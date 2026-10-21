//npx tsx pragameTS/MapFitterReduce.ts

//TypeScript Array's Methods Map, Filter, Reduce
 
//===========Map Method========================
 
//Apply common operation and Transforms each element of an array and returns a new arra
//Original array is unchanged New array is returned
 
//Real World Example
 
//Add GST (18%) to course prices
let price = [1000, 2000, 3000];

let finalprice= price.map(price=>price + price*0.18)
console.log(price);             //[ 1000, 2000, 3000 ]
console.log(finalprice);       //[ 1180, 2360, 3540 ]

 
//=========Filter Method=====================
 //Filters elements based on a condition and returns a new array.
 
//Real world Example
 let marks =[45,70,80,50];

 let eligable = marks.filter(marks=> marks>60);
 console.log(marks);          //[ 45, 70, 80, 50 ]
 console.log(eligable);      //[ 70, 80 ]

 //Real world example
let prices =[999,1500,2500,500];

let finalprices=prices          //it create array
   .filter(price=>price>1000)
   .map(price=>price + 100);
console.log(prices);           //[ 999, 1500, 2500, 500 ]
console.log(finalprice);        // [ 1180, 2360, 3540 ]

//========Rduces Method=============
//reduce the entire array into a single PaymentMethodChangeEvent

//KeyTerms
// accumulator -> the store result step bu step 
// currentValue -> the current array element in loop
// initialValue -> the starting value for the accumulator

let number =[10,20.30];
let sum = number.reduce((acc,number) =>acc * num ,20)