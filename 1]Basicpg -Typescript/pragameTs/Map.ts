 
//Map is a built-in collection that stores key-value pairs.
 
//How to Create a Map
const students1 = new Map<number, string>();

//========= //set -==================

//Eg. Student has "rollNo and Name" Product has "productID and productPrice"
const students = new Map<number, string>(); 
students.set(1000,"neha");               //  1000 => 'neha',
students.set(1002,"nakhil");            //  1002 => 'nakhil',
students.set(1003,"amol");              // 1003 => 'amol',
students.set(1004,"rucha");            // 1004 => 'rucha'

console.log(students);              

//Duplicate keys are not allowed in Map, if it is there, it will update the value.
students.set(1000,"sneha");                //  1000 => 'neha',
students.set(1002,"nanda");                 //1002 => 'nanda',  

console.log(students);





