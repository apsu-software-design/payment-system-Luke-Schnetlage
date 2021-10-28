import { Bank_draft_payment } from "./bank_draft_payment";
import { Credit_card_payment } from "./credit_card_payment";
import { Offline_payment } from "./offline_payment";
import { Online_payment } from "./online_payment";
import { PaymentSystemExecutor } from "./payment_systems";

export class Strategy_pattern{

    constructor( ){ }

    paymentSelect(paymentType : string) : PaymentSystemExecutor{
        

        /*
        To scale this to new payment formats, just add an additional "paymentType" to the if else ladder.
        Don't forget to .build() before you return the executor
        */
        if (paymentType == "offline"){
            let pay = new Offline_payment();
            pay.build();
            return pay.getExecutor();

        } else if (paymentType == "online"){
            let pay = new Online_payment();
            pay.build();
            return pay.getExecutor();

        } else if (paymentType == "bank draft"){
            let pay = new Bank_draft_payment();
            pay.build();
            return pay.getExecutor();

        } else if (paymentType == "credit card"){
            let pay = new Credit_card_payment();
            pay.build();
            return pay.getExecutor();        
        }
    }
    
    




}