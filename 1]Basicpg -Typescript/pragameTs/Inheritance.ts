//npx tsx pragameTS/inheritance.ts
export {};

//Inhertiance allows one class to reuse properties and method of another class

//Inheritance = aquaring properties + behaviour from another class

//Core Objective is code reuablity

//extends keybord is used for inheritance

//parent class/Base class /super class
//Child class/Derived Class/Sub class

class vehicle
{ 
    start(): void
    {
        console.log("vehicle i starting")

    }
}
class Bike extends vehicle
{
     ride(): void
    {
        console.log("Bike is riding ")

    }
}
const bike1:Bike = new Bike();
bike1.start();     //vehicle i starting
bike1.ride();      //Bike is riding                  


