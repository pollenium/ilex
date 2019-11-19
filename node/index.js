"use strict";
exports.__esModule = true;
var pollenium_buttercup_1 = require("pollenium-buttercup");
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
        this.concatenation =
            pollenium_buttercup_1.Bytes.fromArray([])
                .getAppended(this.v)
                .getAppended(this.r)
                .getAppended(this.s);
        return this.concatenation;
    };
    Ilex.fromConcatenation = function (concatenation) {
        return new Ilex(concatenation.getSlice(0, 1).getCasted(pollenium_buttercup_1.Bytes1), concatenation.getSlice(1, 33).getCasted(pollenium_buttercup_1.Bytes32), concatenation.getSlice(33, 65).getCasted(pollenium_buttercup_1.Bytes32));
    };
    return Ilex;
}());
exports.Ilex = Ilex;
