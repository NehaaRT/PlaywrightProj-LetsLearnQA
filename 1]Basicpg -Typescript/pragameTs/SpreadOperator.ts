//npx tsx pragameTS/SpreadOperator.ts
//-----------------------------------------------

//1]------without spread---------
const  number1 = [10,20,30];          //[ 10, 20, 30 ]
console.log(number1); 
//Here , the entired array is treated as a single object              

//2]===========with spread ===============
//1]The spread Operator (...) expands or "spread Out" 
//2]The element of an iterable( Array , string , set ,Map etc.) 
//3]Take all item inside this collection and unpack them
//syntax: ...variable

const  number = [10,20,30];
console.log(...number); 
//the array gets unpacked             //10,20,30


//1]--------without spread-----------------------
//bcoz both variable point to same memeory location
const arr1 =[1,2,3];
const arar2 =arr1;
arar2.push(4);

console.log(arr1);          //[ 1, 2, 3, 4 ]
console.log(arar2);          //[ 1, 2, 3, 4 ]

//2]=========with spread==========
const arrr3 =[5,6,7];
const arrr4 = [...arrr3];

arrr4.push(8);
console.log(arrr3);      //[ 5, 6, 7 ]
console.log(arrr4);      //[ 5, 6, 7, 8 ]
  
//3]===========Merage Aaray==========
const arr4 =[1,2];
const arr5 =[3,4];

const result =[...arr4 ,...arr5];
console.log(result);              //[ 1, 2, 3, 4 ]

//============Remove Duplicates==========//Note *= most common intervirew 
//Note *= most common intervirew 
//1]Sets automatically remove duplicates.
//2]converts the sets back into an Array

//1]--------without spread-----------------------
const numbers =[1,2,3,2,4,1,7];
const uniques = new Set(numbers);
console.log(uniques);              //Set(5) { 1, 2, 3, 4, 7 }

//2]=========with spread==========
const s =[1,2,3,2,4,1,7];
const uniquess = [...new Set(numbers)];
console.log(uniquess);               //[ 1, 2, 3, 4, 7 ]

