//User Interface for The Payment System
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import { Strategy_pattern } from './strategy_pattern';

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu(new Strategy_pattern());
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(sp : Strategy_pattern) {
  while(true){ //run until we exit
    console.log(`Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:
  1. Use a credit card.
  2. Use a bank draft.
  3. Use an online payment system.
  4. Use an offline payment system.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': showCreditCardPaymentMenu(sp); break;
      case '2': showBankDraftPaymentMenu(sp); break;
      case '3': showOnlinePaymentMenu(sp); break;
      case '4': showOfflinePaymentMenu(sp); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function showCreditCardPaymentMenu(sp : Strategy_pattern) {

  let executor = sp.paymentSelect("credit card");

  executor.execute();
}

function showBankDraftPaymentMenu(sp : Strategy_pattern) {

  let executor = sp.paymentSelect("bank draft");

  executor.execute();
}

function showOnlinePaymentMenu(sp : Strategy_pattern) {

  let executor = sp.paymentSelect("online");

  executor.execute();
}

function showOfflinePaymentMenu(sp : Strategy_pattern) {
  
  let executor = sp.paymentSelect("offline");

  executor.execute();
}

