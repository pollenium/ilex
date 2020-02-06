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
        var signerPublicKey = ejsUtil.ecrecover(new Buffer(message.u), this.v.toNumber(), new Buffer(this.r.u), new Buffer(this.s.u));
        return new pollenium_buttercup_1.Address(ejsUtil.publicToAddress(signerPublicKey));
    };
    return Signature;
}());
exports.Signature = Signature;
