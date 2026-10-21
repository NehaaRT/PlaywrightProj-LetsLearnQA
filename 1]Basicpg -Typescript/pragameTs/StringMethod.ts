//npx tsx pragameTS/StringMethod.ts

//1A string is used to store text data.
 
//2]let str1: string "Hello"; // Double quotes
 
//3]let str2: string 'Hello'; // Single quotes
 
//4]let str3: string = Hello`; // Template string with backtick
 
//5]I No functional difference between using single quotes (') and double quotes (") for strings.
 
//6]The choice between them typically depends on the following factors:
 
//-----------Handling Embedded Quotes:--------------
 
//1]1Use double quotes if the string contains a single quote: "It's a great day".
 
//2]Use single quotes if the string contains double quotes: 'She said "Hello""
 
//----------Ease of Typing-----------------
 
//Many developers prefer single quotes because they do not require pressing the Shift key on most keyboards.
 
//-------Methods-------
let subjects : string ="Typescript with playwright";

//length()
console.log(subjects.length);         //26

//toUppercase()
console.log(subjects.toUpperCase());   //TYPESCRIPT WITH PLAYWRIGHT

//toLowecase()
console.log(subjects.toLowerCase());    //typescript with playwright

//includes()
console.log(subjects.includes("with"));   //true

//startsWith()
console.log(subjects.startsWith("Ty"));   //true

//endWith()
console.log(subjects.endsWith("right"));   //true

//indexOf()
console.log(subjects.indexOf("with"));      //11   

//CharAt()
console.log(subjects.charAt(4));          //s          

//slice()  we can use - 
console.log(subjects.slice(-6));           //wright          //

//substring()  we are not use -
console.log(subjects.substring(11));         //with playwright  //11 start to next rest string
console.log(subjects.substring(11,17));      //with p


//repalace()
console.log(subjects.replace("with","using"));  //Typescript using playwright

//trim()
console.log(subjects.trim());


//split()
console.log(subjects.split());
