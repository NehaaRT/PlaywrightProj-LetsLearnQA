//npx tsx pragameTS/callbackFunction.ts

//callback function is a function that is passes an argument to another function

//we use callback function when the excuation of one function depends on the the completion of another function

//Realist eg- food order in a Restaurant
//--------------------------------
/*1]Imagine you go to a Restaurant
 2]you place an order
 3]the chef preapare the FontFaceSetLoadEventwheb food is ready , the waiter calls you
 4]that : calling wheb food is ready " is like callback function"*/

function preaparedfood()
 {

        console.log("chef is preapring food")        //chef is preapring food
   
 }
 function notifyCustomer()
 {
    console.log(" food is ready please collect") ;
 }
 preaparedfood();                              //chef is preapring food
 notifyCustomer()                              // food is ready please collect

 //---------- setTimeout----------------------------------------------

 function preaparedfood1()
 {
 
    setTimeout(()=>{                                      //after wait 2 sec print 2nd function  
        console.log("chef is preapring food")           // food is ready please collect
   
    },5000);
 }
 function notifyCustomer1()
 {
    console.log(" food is ready please collect") ;
 }
 notifyCustomer1()                                     //chef is preapring food

 //--------------callback fun----------------------
 function preaparedfood2(notify:()=>void )
 {
 
    setTimeout(()=>{                                            //after 2 sec wait after print
        console.log("chef is preapring food")                  //chef is preapring food
       notify()
    },5000);
 }
 function notifyCustomer2()
 {
    console.log(" food is ready please collect") ;
 }
 preaparedfood2( notifyCustomer2);                              // food is ready please collect          
 