//What is An Array
//------------------

//Array Declaration
 let score: number[] = [10, 20, 30,40];
 let student: string[] = ["Deepak", "Rahul", "Amit"];

 
//Mixed Array (More than one type)
 let priority: ( number|string ) []= [1,"Dipa", 215, "Art"];

//Accessing Array Elements
 let student1: string[] = ["Deepak", "Rahul", "Amit"];
console.log(student1[1]) ;             //Rahul
 
//Length of Array
 console.log(score.length);             //4

//pop
let flower: string[] = ["rose", "lilly", "chafa"];
flower.pop()
console.log(flower);

//push
flower.push()
console.log(flower);

//for each - Aaary
student.forEach((item)=>
{
    console.log(item);
});                    //Deepak Rahul Amit

//Readonly
let color: readonly string[] = ["red", "green", "blue"];

//Typescript is not runtime language , it is static type check sfor javascript
//Property 'push' does not exist on type 'readonly string[]'.but perform when i run o/p come push pop
color.push()                                  .
console.log(color);                          

color.pop()  
console.log(color);      [ 'red', 'green' ]   




