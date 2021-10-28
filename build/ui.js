"use strict";
//User Interface for The Payment System
//@author James Church
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var strategy_pattern_1 = require("./strategy_pattern");
/**
 * Function to run the UI
 */
function start() {
    showMainMenu(new strategy_pattern_1.Strategy_pattern());
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(sp) {
    while (true) { //run until we exit
        console.log("Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:\n  1. Use a credit card.\n  2. Use a bank draft.\n  3. Use an online payment system.\n  4. Use an offline payment system.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                showCreditCardPaymentMenu(sp);
                break;
            case '2':
                showBankDraftPaymentMenu(sp);
                break;
            case '3':
                showOnlinePaymentMenu(sp);
                break;
            case '4':
                showOfflinePaymentMenu(sp);
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function showCreditCardPaymentMenu(sp) {
    var executor = sp.paymentSelect("credit card");
    executor.execute();
    /*
      console.log('Enter Credit Card Payment Details.');
    
      let name:string = readlineSync.question('  Name: ');
      let creditCardNumber:string = readlineSync.question('  Credit Card Number: ');
      let creditCardExpirationDate:string = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
      
      let valid = /^[\w.' ]+$/.test(name) && /\d{15,16}/.test(creditCardNumber) && /\d\d\/\d\d/.test(creditCardExpirationDate);
      
      if (valid) {
          console.log("Your payment information is being encrypted.");
    
          console.log("The payment is being processed.")
      }
      else {
          console.log('The payment is invalid.');
      }
      */
}
function showBankDraftPaymentMenu(sp) {
    var executor = sp.paymentSelect("bank draft");
    executor.execute();
    /*
    console.log('Enter Bank Account Details.');
    let name:string = readlineSync.question('  Name: ');
    let bankRoutingNumber:string = readlineSync.question('  Bank Routing Number: ');
    let bankAccountNumber:string = readlineSync.question('  Bank Account Number: ');
  
    let valid = /^[\w.' ]+$/.test(name) && /\d{9}/.test(bankRoutingNumber) && /\d{6,12}/.test(bankAccountNumber);
  
    if (valid) {
        console.log("Your payment information is being encrypted.");
  
        console.log("The payment is being processed.")
    }
    else {
        console.log('The payment is invalid.');
    }
    */
}
function showOnlinePaymentMenu(sp) {
    var executor = sp.paymentSelect("online");
    executor.execute();
    /*
    console.log('Enter Online Payment Details.');
    let email:string = readlineSync.question('  Enter Your Email Address: ');
    let paymentPassword:string = readlineSync.question('  Enter Your Payment Password: ');
  
    let valid = /^[\w@.]+$/.test(email) && /\w+/.test(paymentPassword);
  
    if (valid) {
        console.log("Your payment information is being encrypted.");
  
        console.log("The payment is being processed.")
    }
    else {
        console.log('The payment is invalid.');
    }
    */
}
function showOfflinePaymentMenu(sp) {
    var executor = sp.paymentSelect("offline");
    executor.execute();
    /*
    console.log('Enter Offline Payment Details.');
    let name:string = readlineSync.question('  Name: ');
    let billingAddress:string = readlineSync.question('  Enter Your Billing Address: ');
  
    var offline_payment = new offline_payment();
    let valid = /^[\w.' ]+$/.test(name) && /^[\w.' ]+$/.test(billingAddress);
  
    psc.execute(payment = new offline_payment());
    
    if (valid) {
        console.log("Your payment information is being encrypted.");
  
        console.log("The payment is being processed.")
    }
    else {
        console.log('The payment is invalid.');
    }
    */
}
