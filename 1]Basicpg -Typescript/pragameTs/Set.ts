//npx tsx pragameTS/Set.ts

//1]A Set is a built-in collection that stores unique values only.

//3]Values are stored in insertion order.
//4]You can store numbers, strings, objects, etc.

//----------Set Creation Syntax-------

//1]const empIds = new Set<number>();
 const subject= new Set<string>

//------1]add()-----------
subject.add("nehha");
subject.add("snehha");
subject.add("niha");

console.log(subject)       //Set(3) { 'nehha', 'snehha', 'niha' }

//2]Duplicate values are automatically ignored
const subject1 = new Set<string>();

subject1.add("naka");
subject1.add("sumi");
subject1.add("nira");
subject1.add("sumi");
subject1.add("nira");

console.log(subject1);      //Set(3) { 'naka', 'sumi', 'nira' }

 //----------2]has()------------
const color = new Set<string>();

color.add("red");
color.add("pink");
color.add("blue");

console.log(color.has("red"));         //true

//----------3]delete()-------------

color.delete ("pink"); 
console.log(color)                    //Set(2) { 'red', 'blue' }

//-----------4]clear()-------------
color.clear (); 
console.log(color)
 
//size Returns number of elements.
const fruit = new Set<string>();

fruit.add("mango");
console.log(fruit.size);             //1

const flower = new Set<string>();
flower.add("rose");
flower.add("lily");
for(const flowers of flower)
{
    console.log(flower);             //Set(2) { 'rose', 'lily' }
} 
