import { i_payment } from "./i_payment";
import readlineSync = require('readline-sync'); //for easier repeated prompts
import { PaymentSystemExecutor } from "./payment_systems";

/**
 * An online payment system requires: 
 * a valid email address 
 * a password to the system.
 */
export class Online_payment implements i_payment{
    valid : boolean;
    emailAddress: string;
    password : string;
    pse : PaymentSystemExecutor;

    constructor(){
        this.valid = false;
        this.emailAddress = "";
        this.password = "";
        
    }

    build(){
        this.pse = new PaymentSystemExecutor(new Online_payment);
    }

    requestInfo(){
        console.log('Enter Online Payment Details.');
        this.emailAddress = readlineSync.question('  Enter Your Email Address: ');
        this.password = readlineSync.question('  Enter Your Payment Password: ');
    }

    checkValid():boolean{
        this.valid = /^[\w@.]+$/.test(this.emailAddress) && /\w+/.test(this.password);
        return this.valid;
    }

    getExecutor():PaymentSystemExecutor{ 
        return this.pse;
    }
}