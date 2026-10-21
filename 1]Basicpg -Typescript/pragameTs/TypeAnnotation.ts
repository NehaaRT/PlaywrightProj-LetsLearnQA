//In TypeScript , Two very important Cocept are type annoation and Type Inference

//Theses help Typescript undestand the type of data (string , number,boolean)used in pragram.

//Type Annotation (Explict Type)
//-------------------------------

let username : string = "neha";
let age : number = 20;
let isTeacher : Boolean = true;

function addition1(a: number , b:number):number           //a: number b:number : number -> returnType
{
 return a+b;
}
const result = addition1(5,10)    
const resul1t = addition1("ne",10)                        //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(result);

//Type Inference (Autoamatic Type)
//-------------------------------
//Inference mean the process ofa arriving at a certain conclusion using reasoning or evidence,
//  which makes then more than just asscumption

let username1 = "neha";
let age1  = 20;
let isTeacher1 = true;

username1 = 56              //Type 'number' is not assignable to type 'string'.

