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
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var Signature = /** @class */ (function () {
    function Signature(struct) {
        var v = struct.v, r = struct.r, s = struct.s;
        this.v = new pollenium_buttercup_1.Uint8(v);
        this.r = new pollenium_buttercup_1.Bytes32(r);
        this.s = new pollenium_buttercup_1.Bytes32(s);
    }
    Signature.prototype.getSigner = function (message) {
        var signerPublicKey = ejsUtil.ecrecover(new Buffer(pollenium_uvaursi_1.Uu.wrap(message).u), this.v.toNumber(), new Buffer(this.r.u), new Buffer(this.s.u));
        return new pollenium_buttercup_1.Address(ejsUtil.publicToAddress(signerPublicKey));
    };
    return Signature;
}());
exports.Signature = Signature;
