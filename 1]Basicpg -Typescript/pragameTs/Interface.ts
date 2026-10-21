//Interface
//1]/An Interfcae in Typescript is used to define the structure (shape) of object 
//2]it tell TYpescript what properties an Object should have thier type
//3]It act like a contact for object creations

interface TestData
{
    userName :string;
    password: string, 


}
const loginData : TestData ={

    userName :"neha",
    password:'as123',
    url:     'ex1222.com'

}



//============readonly interfcae=============

interface TestData
{
    userName :string;
    password: string, 
    readonly url: string ;        //Cannot assign to 'url' because it is a read-only property.

}
const loginData1 : TestData ={

    userName :"neha",
    password:'as123',
    url:     'ex1222.com'

}
 loginData1.url ='test@com';           