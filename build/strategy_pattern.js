"use strict";
exports.__esModule = true;
exports.Strategy_pattern = void 0;
var bank_draft_payment_1 = require("./bank_draft_payment");
var credit_card_payment_1 = require("./credit_card_payment");
var offline_payment_1 = require("./offline_payment");
var online_payment_1 = require("./online_payment");
var Strategy_pattern = /** @class */ (function () {
    function Strategy_pattern() {
    }
    Strategy_pattern.prototype.paymentSelect = function (paymentType) {
        if (paymentType == "offline") {
            var pay = new offline_payment_1.Offline_payment();
            pay.build();
            return pay.getExecutor();
        }
        else if (paymentType == "online") {
            var pay = new online_payment_1.Online_payment();
            pay.build();
            return pay.getExecutor();
        }
        else if (paymentType == "bank draft") {
            var pay = new bank_draft_payment_1.Bank_draft_payment();
            pay.build();
            return pay.getExecutor();
        }
        else if (paymentType == "credit card") {
            var pay = new credit_card_payment_1.Credit_card_payment();
            pay.build();
            return pay.getExecutor();
        }
    };
    return Strategy_pattern;
}());
exports.Strategy_pattern = Strategy_pattern;
