import { PaymentSystemExecutor } from "./payment_systems";
import readlineSync = require('readline-sync'); //for easier repeated prompts


export interface i_payment{
    valid : boolean;

    checkValid():boolean;
    requestInfo():void;
    build():void;
    getExecutor() : PaymentSystemExecutor;
    
}