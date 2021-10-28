import { i_payment } from "./i_payment";
import readlineSync = require('readline-sync');
import { PaymentSystemExecutor } from "./payment_systems";

/**
 * An offline payment system requires: 
 * a name
 * a billing address.
 */

export class Offline_payment implements i_payment{
    valid : boolean;
    name : string;
    billingAddress: string;
    pse : PaymentSystemExecutor;

    constructor(){
        this.valid = false;
        this.name = "";
        this.billingAddress = "";
        //this.pse = new PaymentSystemExecutor(Offline_payment);
    }

    build(){
        this.pse = new PaymentSystemExecutor(new Offline_payment);
    }

    requestInfo(){
        console.log('Enter Offline Payment Details.');
        this.name =  readlineSync.question('  Name: ');
        this.billingAddress = readlineSync.question('  Enter Your Billing Address: ');
    }
  
    checkValid():boolean{
        this.valid = /^[\w.' ]+$/.test(this.name) && /^[\w.' ]+$/.test(this.billingAddress);
        return this.valid;
    }

    getExecutor():PaymentSystemExecutor{ 
        return this.pse;
    }
}