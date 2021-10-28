"use strict";
exports.__esModule = true;
exports.Bank_draft_payment = void 0;
var payment_systems_1 = require("./payment_systems");
var readlineSync = require("readline-sync"); //for easier repeated prompts
/**
 * A bank draft requires:
 * a name
 * a bank routing number (always 9 digits)
 * a bank account number (always 6 to 12 digits)
 */
var Bank_draft_payment = /** @class */ (function () {
    function Bank_draft_payment() {
        this.valid = false;
        this.name = "";
        this.routingNumber = "";
        this.accountNumber = "";
    }
    Bank_draft_payment.prototype.build = function () {
        this.pse = new payment_systems_1.PaymentSystemExecutor(new Bank_draft_payment);
    };
    Bank_draft_payment.prototype.requestInfo = function () {
        console.log('Enter Bank Account Details.');
        this.name = readlineSync.question('  Name: ');
        this.routingNumber = readlineSync.question('  Bank Routing Number: ');
        this.accountNumber = readlineSync.question('  Bank Account Number: ');
    };
    Bank_draft_payment.prototype.checkValid = function () {
        this.valid = /^[\w.' ]+$/.test(this.name) && /\d{9}/.test(this.routingNumber) && /\d{6,12}/.test(this.accountNumber);
        return this.valid;
    };
    Bank_draft_payment.prototype.getExecutor = function () {
        return this.pse;
    };
    return Bank_draft_payment;
}());
exports.Bank_draft_payment = Bank_draft_payment;
