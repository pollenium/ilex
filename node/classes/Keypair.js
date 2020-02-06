"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Signature_1 = require("./Signature");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var ejsUtil = __importStar(require("ethereumjs-util"));
var crypto_1 = __importDefault(require("crypto"));
var InvalidPrivateKeyError = /** @class */ (function (_super) {
    __extends(InvalidPrivateKeyError, _super);
    function InvalidPrivateKeyError(privateKey) {
        var _this = _super.call(this, "Invalid privateKey: " + privateKey.uu.toHex()) || this;
        Object.setPrototypeOf(_this, InvalidPrivateKeyError.prototype);
        return _this;
    }
    return InvalidPrivateKeyError;
}(Error));
exports.InvalidPrivateKeyError = InvalidPrivateKeyError;
var Keypair = /** @class */ (function () {
    function Keypair(privateKey) {
        this.privateKey = privateKey;
        if (!ejsUtil.isValidPrivate(new Buffer(privateKey.u))) {
            throw new InvalidPrivateKeyError(privateKey);
        }
    }
    Keypair.prototype.getAddress = function () {
        if (this.address) {
            return this.address;
        }
        this.address = new pollenium_buttercup_1.Address(ejsUtil.privateToAddress(new Buffer(this.privateKey.u)));
        return this.address;
    };
    Keypair.prototype.getSignature = function (message) {
        var ejsUtilSignature = ejsUtil.ecsign(new Buffer(message.u), new Buffer(this.privateKey.u));
        return new Signature_1.Signature({
            v: pollenium_buttercup_1.Uint8.fromNumber(ejsUtilSignature.v),
            r: new pollenium_buttercup_1.Bytes32(ejsUtilSignature.r),
            s: new pollenium_buttercup_1.Bytes32(ejsUtilSignature.s)
        });
    };
    Keypair.generate = function () {
        var privateKeyBuffer;
        do {
            privateKeyBuffer = crypto_1["default"].randomBytes(32);
        } while (!ejsUtil.isValidPrivate(privateKeyBuffer));
        var privateKey = new pollenium_buttercup_1.Bytes32(privateKeyBuffer);
        return new Keypair(privateKey);
    };
    return Keypair;
}());
exports.Keypair = Keypair;
