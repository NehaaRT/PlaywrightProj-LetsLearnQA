//Super keyword is used in the inheritance scenario to acess the parent class

//1] you mainly used it for
//2] acess parent class constructor
//3]acess parent class method

////npx tsx pragameTS/Superpayment.ts

class payment
{
    customerName: string;
    amount: number;

    constructor(constomerName:string , amount:number)
    {
        this.customerName = constomerName;
        this.amount = amount;
    }
    processpayment()
    {
        console.log(`processing the payment of amount $(this.amount)`)
    }
}