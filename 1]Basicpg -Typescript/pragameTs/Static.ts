//npx tsx pragameTS/Static.ts
//----------------------------------


//Normally
//propertites & method belong to object (intstance)

class counter
{
    count : number =1;
    increment()
    {
        this.count++;
        console.log(this.count);
    }
}
const c1 = new counter ()
c1.increment();           //2
const c2 = new counter ()
c2.increment();          //2

//===================Static=========================
//Static keyword in typescript is used to define properties or method that belong to the class itself,not to object (instances)

class counter1
{
     static count : number =1;
     static increment()
    {
        this.count++;
        console.log(this.count);
    }
}
counter1.increment();           //2
counter1.increment();           //3

//------0r----------
 class mathMulti
 {
    static pi: number = 3.14;
    
    static calculateArea(radius : number)
    {
      return this.pi *radius *radius ; 
    }
 }
 //Access using class name
  console.log(mathMulti.pi);
  console.log(mathMulti.calculateArea(5));

//Key Rule 
//Static Memeber are accessed Using

