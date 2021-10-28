"use strict";
exports.__esModule = true;
exports.Credit_card_payment = void 0;
var payment_systems_1 = require("./payment_systems");
var readlineSync = require("readline-sync"); //for easier repeated prompts
/**
 * A credit card requires:
 * a name
 * a credit card number (always 15 to 16 digits)
 * an expiration date in the format of “MM/DD”
 */
var Credit_card_payment = /** @class */ (function () {
    function Credit_card_payment() {
        this.valid = false;
        this.name = "";
        this.creditCard = "";
        this.expirationDate = "";
    }
    Credit_card_payment.prototype.build = function () {
        this.pse = new payment_systems_1.PaymentSystemExecutor(new Credit_card_payment);
    };
    Credit_card_payment.prototype.requestInfo = function () {
        console.log('Enter Credit Card Payment Details.');
        this.name = readlineSync.question('  Name: ');
        this.creditCard = readlineSync.question('  Credit Card Number: ');
        this.expirationDate = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
    };
    Credit_card_payment.prototype.checkValid = function () {
        this.valid = /^[\w.' ]+$/.test(this.name) && /\d{15,16}/.test(this.creditCard) && /\d\d\/\d\d/.test(this.expirationDate);
        return this.valid;
    };
    Credit_card_payment.prototype.getExecutor = function () {
        return this.pse;
    };
    return Credit_card_payment;
}());
exports.Credit_card_payment = Credit_card_payment;
