"use strict";
exports.__esModule = true;
exports.Offline_payment = void 0;
var readlineSync = require("readline-sync");
var payment_systems_1 = require("./payment_systems");
/**
 * An offline payment system requires:
 * a name
 * a billing address.
 */
var Offline_payment = /** @class */ (function () {
    function Offline_payment() {
        this.valid = false;
        this.name = "";
        this.billingAddress = "";
        //this.pse = new PaymentSystemExecutor(Offline_payment);
    }
    Offline_payment.prototype.build = function () {
        this.pse = new payment_systems_1.PaymentSystemExecutor(new Offline_payment);
    };
    Offline_payment.prototype.requestInfo = function () {
        console.log('Enter Offline Payment Details.');
        this.name = readlineSync.question('  Name: ');
        this.billingAddress = readlineSync.question('  Enter Your Billing Address: ');
    };
    Offline_payment.prototype.checkValid = function () {
        this.valid = /^[\w.' ]+$/.test(this.name) && /^[\w.' ]+$/.test(this.billingAddress);
        return this.valid;
    };
    Offline_payment.prototype.getExecutor = function () {
        return this.pse;
    };
    return Offline_payment;
}());
exports.Offline_payment = Offline_payment;
