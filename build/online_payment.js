"use strict";
exports.__esModule = true;
exports.Online_payment = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var payment_systems_1 = require("./payment_systems");
/**
 * An online payment system requires:
 * a valid email address
 * a password to the system.
 */
var Online_payment = /** @class */ (function () {
    function Online_payment() {
        this.valid = false;
        this.emailAddress = "";
        this.password = "";
    }
    Online_payment.prototype.build = function () {
        this.pse = new payment_systems_1.PaymentSystemExecutor(new Online_payment);
    };
    Online_payment.prototype.requestInfo = function () {
        console.log('Enter Online Payment Details.');
        this.emailAddress = readlineSync.question('  Enter Your Email Address: ');
        this.password = readlineSync.question('  Enter Your Payment Password: ');
    };
    Online_payment.prototype.checkValid = function () {
        this.valid = /^[\w@.]+$/.test(this.emailAddress) && /\w+/.test(this.password);
        return this.valid;
    };
    Online_payment.prototype.getExecutor = function () {
        return this.pse;
    };
    return Online_payment;
}());
exports.Online_payment = Online_payment;
