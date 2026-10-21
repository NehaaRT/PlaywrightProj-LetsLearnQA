
//npx tsx pragameTS/TypeGuard.ts
//------------------------------------

//Type Guards in Typescript are used to arrow

//implemented by putting a condition that chcek type ofa variable

//They are very important when working with
//union types
//unknown/ any type
//Dyanmic data (API responcse , UI)

//Type of Type Guard
//---------------------
//1] typeof Type Guard
// used for primtive type


  function checkType(value:string |number)
  {
    if(typeof  value === "string")
    {
        console.log("String:",value.toUpperCase());

    }else
    {
        console.log("Number:", value.toFixed(2));

    }
  }
  checkType("neha")         //String: NEHA
  checkType(445455)         //Number: 445455.00