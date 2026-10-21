//Typescript- understanding variabe (var , let , const)
//--------------------------------

//1]in Typescript , var let and const are used to decalred variable
//2 They differntly in terms of scope , decalartion , reassignment and best practise

//1==================var=============================   var is old way of declaring varaibles

//1]function Scoped
function addition()
{
    if(true)
    {
        var a=5;
        var b =6;
        console.log(a+b)            //11;
    }
    console.log(a);                  //5
    console.log(b);                  //6
}
addition();

//-------------------------------------------
//2]may or may not intiallised when declared
function DeclaredVar()
{
    if(true)
    {
        var a;
        var b ;
                 
    }
    console.log(a);                  //undefine 
    console.log(b);                //undefined          
}
 DeclaredVar ();

 //--------------------------------------
 //3]can be redeclared
 function reDeclaredVar()
{
    if(true)
    {
        var a=10;
        var b=12 ;
        
        var a=13;
        var b=2;
       console.log(a);                  // 13
       console.log(b);                  //  2  
    }     
}
 reDeclaredVar ();

 //-------------------------------------------
 //4]can be reassigned*/
 function reassignedVar()
{
    if(true)
    {
        var a=10;
        var b=12 ;
        
         a=30;
         b=40;
       console.log(a);                  // 30
       console.log(b);                  // 40  
    }     
}
 reassignedVar ();



//===================let================================ let is it recommended way to decalred variable when the value may changed

/*1 Block Scope

4] can be eassigned
*/

function Letvar()
{
    if(true)
    {
        let a1=5;
        let b1 =6;
        console.log(a1+b1)            //11;
    }
    //console.log(a1);                  //it block scope
    //console.log(b1);                  //Cannot find name 'b1'.
}
Letvar();

//------------------------------------------
//2] may or may not initialized when decalred
function Letdeclared()
{
    if(true)
    {
        let a;
        let b;
        console.log(a)            //Undefine
        console.log(a)             //undefined
    }

}
Letdeclared();

//-------------------------------
//3] cannot be redeclard
function reDeclaredLet()
{
    if(true)
    {
        let a=10;
        let b=12 ;
        
       // let a=13;                       //Cannot redeclare block-scoped variable 'a'. & b
       //let b=2;
       console.log(a);                 
       console.log(b);                    
    }     
}
 reDeclaredLet ();

 //----------------------------------------------
 function reassignedLet()
{
    if(true)
    {
        var a=10;
        var b=12 ;
        
         a=50;
         b=60;
        
       console.log(a);                  // 50
       console.log(b);                  // 60  
    }     
}
 reassignedLet();

//==============const====================   const is used wheb teh varaible should never changed

/*1]Block scoped

  function constvar()
{
    if(true)
    {
        const a=5;
        const b =6;
        console.log(a+b)                //11;
    }
    // console.log(a);                  //Cannot find name .
    //console.log(b);                  
}
constvar();

//-------------------------------------
//2]must be intialized when decalred
function constdeclared()
{
    if(true)
    {
        //const c;                  //'const' declarations must be initialized.
        const a=5;
        const b =6;
        console.log(a)           //5         
        console.log(b);          //6
    }                  
}
constdeclared();

//------------------------------
//3] cannot be redeclared
function reDeclaredconst()
{
    if(true)
    {
        //const a=10;
        //const b=12 ;
        
        const a=13;                       //Cannot redeclare block-scoped variable 'a'. & b
        const b=2;
       console.log(a);                 
       console.log(b);                    
    }     
}
 reDeclaredconst ();

 //-----------------------------
//4] cannot be reassigned*/
 function reassignedconst()
{
    if(true)
    {
        var a=10;
        var b=12 ;
        
         a=70;
         b=80;
       console.log(a);                  // 30
       console.log(b);                  // 40  
    }     
}
 reassignedconst();
