//npx tsx pragameTS/Union.ts                  

//Union Means
//let UserId : string |number;

function processUseraID(userId:string| number)
{
    if(typeof userId === "string")
    {
        console.log(` we will send confirmation link at ${userId}`)  // we will send confirmation link at test@j.com
    }
    if(typeof userId === "number")
    {
        console.log(`we will send OTP at ${userId}`);     //we will send OTP at 911238
    }

}
processUseraID("test@j.com");
processUseraID(911238);                 