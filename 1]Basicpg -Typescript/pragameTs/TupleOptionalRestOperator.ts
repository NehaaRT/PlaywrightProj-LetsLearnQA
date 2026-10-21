


//npx tsx pragameTS/TupleOptionalRestOperator.ts

//=========Tuple Declartions===========

//1]Fixed number of element
let employess : [string , number] = ["1deepak ", 12344 ,"QA"];    //error :Type '[string, number, string]' is not assignable to type '[string, number]'.Source has 3 element(s) but target allows only 2.
console.log(employess);

//2]each element has a specific type
//3]order matters
let person : [string , number] = [ 212344,"deepak"]      //Type 'number' is not assignable to type 'string'.
console.log(person);

//4]it  is used when you know the exact number of element and thier type in adavnce.


//-----------Best practise------------------------
let employee :[empnmae :string , empid : number ]= ["3depak",401110];
console.log(employee)

//---------optional Elements-----------
let optionalemp :[string , number, string?]= ["4depak",401110];
console.log(optionalemp);

let optionalemp1 :[string , number, string?]= ["5depak",401110,"neha"];  //with add 
console.log(optionalemp1);


//-----------Rest operator----------
let user1 :[string,number]= ["neha",11,12,13,14];  //Type '[string, number, number, number, number]' is not assignable to type '[string, number]'
//Source has 5 element(s) but target allows only 2.

let user :[string, ...number[]]= ["neha",11,12,13,14];
console.log(user);

