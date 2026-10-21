//Superupi.ts

import { Superpayment } from "./Superpayment";


class UPI extends Superpayment
{
    upiID: string;

    constructor(customerName:string , amount :number ,upiId:string)
    {
        super(customerName,amount);
        this.upiID = upiId;
    }
    makePayment()
    {
        super.processpayment()
        console.log(`${this.} pa`)
    }

}