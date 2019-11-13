"use strict";
exports.__esModule = true;
var Ilex = /** @class */ (function () {
    function Ilex(v, r, s) {
        this.v = v;
        this.r = r;
        this.s = s;
    }
    Ilex.prototype.getConcatenation = function () {
        return this.v.append(this.r).append(this.s);
    };
    Ilex.fromConcatenation = function (concatenation) {
        return new Ilex(concatenation.slice(0, 1), concatenation.slice(1, 33), concatenation.slice(33, 65));
    };
    return Ilex;
}());
exports.Ilex = Ilex;
