"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var uvaursi = __importStar(require("pollenium-uvaursi"));
var Ilex = /** @class */ (function () {
    function Ilex(v, r, s) {
        this.v = v;
        this.r = r;
        this.s = s;
    }
    Ilex.prototype.getConcatenation = function () {
        if (this.concatenation) {
            return this.concatenation;
        }
        this.concatenation = uvaursi.concat([this.v, this.r, this.s]);
        return this.concatenation;
    };
    Ilex.fromConcatenation = function (concatenation) {
        return new Ilex(concatenation.slice(0, 1), concatenation.slice(1, 33), concatenation.slice(33, 65));
    };
    return Ilex;
}());
exports.Ilex = Ilex;
