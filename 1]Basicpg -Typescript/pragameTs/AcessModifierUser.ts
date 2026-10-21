
//npx tsx pragameTS/AcessModifierUser.ts
//---------------------------------------------------------------
//TypeScript Access Modifiers (public, private, protected)
 
//1]Access modifiers are used to control the visibility (accessibility) of class properties and methods

//2]Accessible everywhere (inside class, outside class, child class)
 

//==========public Defalu==============

class User
{
    userName :string;
    password:number;

 
  constructor(UserName:string , password:number)
 {
    this.userName =UserName;
    this.password= password;
  }

  showUserInfo():void
  {
    console.log(`UserName is ${this.userName} and password ${this.password}`)
  }
}
const User1 =  new User("neha", 123)
console.log(User1.userName);            //neha
console.log(User1.password);            //123

//==========private================
//private Accessible only inside the same class Used to hide sensitive data (like balance, password, etc.)
 
class Userr
{
    userName :string;
    private password:number;

 
  constructor(UserName:string , password:number)
 {
    this.userName =UserName;
    this.password= password;
  }

  private showUserInfo():void
  {
    console.log(`UserName is ${this.userName} and password ${this.password}`)
  }
}
const User2 =  new Userr("neha", 123)
console.log(User2.userName);            //neha

//console.log(User2.)                     //password not suugest bcoz it private
//User2.showUserInfo()                     //Property 'showUserInfo' is private and only accessible within class 'Userr'.

//============proected================
//protected Accessible: Inside the same class, Inside child class (inheritance)
//Not Accessible: Outside class


