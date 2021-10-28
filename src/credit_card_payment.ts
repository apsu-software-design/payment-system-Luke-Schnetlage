import { i_payment } from "./i_payment";
import { PaymentSystemExecutor } from "./payment_systems";
import readlineSync = require('readline-sync'); //for easier repeated prompts

/**
 * A credit card requires: 
 * a name 
 * a credit card number (always 15 to 16 digits)
 * an expiration date in the format of “MM/DD”
 */
export class Credit_card_payment implements i_payment{
    valid : boolean;
    name:string;
    creditCard:string;
    expirationDate:string;
    pse : PaymentSystemExecutor;

    constructor(){
        this.valid = false;
        this.name = "";
        this.creditCard = "";
        this.expirationDate = "";
    }

    build(){
        this.pse = new PaymentSystemExecutor(new Credit_card_payment)
    }

    requestInfo(){
        console.log('Enter Credit Card Payment Details.');

        this.name = readlineSync.question('  Name: ');
        this.creditCard = readlineSync.question('  Credit Card Number: ');
        this.expirationDate = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
    }

    checkValid():boolean{
        this.valid = /^[\w.' ]+$/.test(this.name) && /\d{15,16}/.test(this.creditCard) && /\d\d\/\d\d/.test(this.expirationDate);
        return this.valid;
    }

    getExecutor():PaymentSystemExecutor{ 
       return this.pse;
    }
}