//Priority - low , medium , Higest

//When you have fixed set of value fir some varaible.
//and taht avraible can only be one

//An Enum is used to define and represnt a fixed set of value in a clean and readable way

//Avoid Typos
//improve readablity
//provide autocomplete in editors




enum priority
{
    Low ,    //0 defalut
    MEDIUM,  //1 defalut
    HIGH,     //2 defalut
    HIGHEST   //3 defalut
}
let taskpriority = priority.HIGHEST;
console.log(taskpriority); //3


enum priority1
{
    Low =22,    
    MEDIUM,  
    HIGH=99,     
    HIGHEST=77   
}
let taskpriorityy = priority1.HIGHEST;
console.log(taskpriorityy);             //77