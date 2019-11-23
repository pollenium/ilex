"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var pollenium_buttercup_1 = require("pollenium-buttercup");
var ejsUtil = __importStar(require("ethereumjs-util"));
var Signature = /** @class */ (function () {
    function Signature(struct) {
        Object.assign(this, struct);
    }
    Signature.prototype.getSigner = function (message) {
        var signerPublicKey = ejsUtil.ecrecover(message.getBuffer(), this.v.getNumber(), this.r.getBuffer(), this.s.getBuffer());
        return pollenium_buttercup_1.Address.fromBuffer(ejsUtil.publicToAddress(signerPublicKey));
    };
    return Signature;
}());
exports.Signature = Signature;
