import { i_payment } from "./i_payment";
import { PaymentSystemExecutor } from "./payment_systems";
import readlineSync = require('readline-sync'); //for easier repeated prompts



/**
 * A bank draft requires: 
 * a name
 * a bank routing number (always 9 digits)
 * a bank account number (always 6 to 12 digits)
 */
export class Bank_draft_payment implements i_payment{
    
    valid : boolean;
    name: string;
    routingNumber : string;
    accountNumber : string;
    pse : PaymentSystemExecutor;

    constructor(){
        this.valid = false;
        this.name = "";
        this.routingNumber = "";
        this.accountNumber = "";
    }

    build(){
        this.pse = new PaymentSystemExecutor(new Bank_draft_payment);
    }

    requestInfo(){
        console.log('Enter Bank Account Details.');
        this.name = readlineSync.question('  Name: ');
        this.routingNumber = readlineSync.question('  Bank Routing Number: ');
        this.accountNumber = readlineSync.question('  Bank Account Number: ');
    }

    checkValid():boolean{
        this.valid = /^[\w.' ]+$/.test(this.name) && /\d{9}/.test(this.routingNumber) && /\d{6,12}/.test(this.accountNumber);
        return this.valid;
    }

    getExecutor():PaymentSystemExecutor{ 
        return this.pse;
    }
    
}