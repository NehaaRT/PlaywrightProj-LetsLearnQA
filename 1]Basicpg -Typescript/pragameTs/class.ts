//A class in TypeScript is a blueprint used to create object
// it is help you grou[ properties(variable and method (function toghter)]

//Simple Defination : A class is used to define
//what data will have (properties)
//what action it can perform(methods)

//npx tsx pragameTS/class.ts

class car
{
   name: string ="Tata" ;
   speed : number=149;
   color:  string= "white" ;


   start():void               //method1
   {
     console.log(`the car ${this.name} is started`);

   }
   run():void                   //method2
   {
    console.log(`the car ${this.name} is running at speed of ${this.speed}`)
   }

}
const car1: car = new car();
console.log(car1.name);       //Tata
car1.start()                 //the car Tata is started


const car2: car = new car();
console.log(car2.name);    //Tata
car2.start()               //using obj method call :The car Tata is started

//both o/p same bcoz value same intiallise


//================constructor===============
//A constructor i used to intialize (Assign value to) object properties when the object is created"

//it is a special method in a clas that ia automatically calles when you create an object of that class."

class bike
{
   name: string;
   speed : number;
   color:  string;

  constructor( name: string ,speed:number ,color:  string)
  {
       this.name = name;
       this.speed=speed;
       this.color = color;
  }
  start():void               //method1
   {
     console.log(`the bike ${this.name} is started`);

   }
   run():void                   //method2
   {
    console.log(`the bike ${this.name} is running at speed of ${this.speed} and color ${this.color}`)
   }

}
const bike1 = new bike("fz",100,"red");

const bike2 = new bike("splendeer",70,"pink");

bike1.run();
bike2.run();
