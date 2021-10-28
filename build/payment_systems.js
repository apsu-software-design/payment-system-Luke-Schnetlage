"use strict";
exports.__esModule = true;
exports.PaymentSystemExecutor = void 0;
/**
 * a factory class that does the following:
 * Gather Information
 * Validate the User Input
 * Test for valid Input
 * "Encrypt" the payment information
 * Begin "processing" the payment
 * Report that the payment information is invalid.
 * Requirments:
 * This class must be Open-Closed
 * The class needs a method to outline which information to obtain.
 * The class needs a method to outline how to validate that information.
 *	I recommend making a constructor require two functions as arguments that (when called) perform their assigned tasks.
 *	Create a method named “execute()” that steps through the workflow and prints the relevant information to the screen.
 */
var PaymentSystemExecutor = /** @class */ (function () {
    function PaymentSystemExecutor(paymentSystem) {
        this.paymentSystem = paymentSystem;
    }
    /**
     * Steps performed in execute
     * 1.	The required information is requested from the user.
     * 2.	The information is then validated.
     * 3.	If the information is valid:
     *   1.	Encrypt that information.
     *   2.	Begin processing the payment.
     * 4.	OR If the payment is not valid:
     *   1.	Report that the payment is invalid.
  
     */
    PaymentSystemExecutor.prototype.execute = function () {
        this.paymentSystem.requestInfo();
        var valid = this.paymentSystem.checkValid();
        if (valid) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
