//npx tsx pragameTS/TypeGuard1.ts

//2]instance of Type Gurad
//used for class object

class creaditCardPayment
  {
    payCC()
    {

        console.log("paid using credait card");

    }
}
   class UpiPayment
   {
       payUPI()
       {
        console.log("paid using UPI")
       }

   } 
 function processPayment(payment: creaditCardPayment|UpiPayment)
 {
    if(payment instanceof creaditCardPayment)
    {
        payment.payCC();
    }
    else
    {
        payment.payUPI();
    }
 }
 const cc1 = new creaditCardPayment();
 const unit = new UpiPayment();

 processPayment(cc1);         //paid using credait card
 processPayment(unit);        //paid using UPI
