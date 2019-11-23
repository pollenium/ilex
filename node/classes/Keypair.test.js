"use strict";
exports.__esModule = true;
var Keypair_1 = require("./Keypair");
var pollenium_buttercup_1 = require("pollenium-buttercup");
test('generate', function () {
    Keypair_1.Keypair.generate();
});
test('getAddress', function () {
    var privateKeyArray = [234, 84, 189, 197, 45, 22, 63, 136, 201, 58, 176, 97, 87, 130, 207, 113, 138, 46, 251, 158, 81, 167, 152, 154, 171, 27, 8, 6, 126, 156, 28, 95];
    var privateKey = pollenium_buttercup_1.Bytes32.fromArray(privateKeyArray);
    var keypair = new Keypair_1.Keypair(privateKey);
    var address = pollenium_buttercup_1.Address.fromHexish('2f015c60e0be116b1f0cd534704db9c92118fb6a');
    expect(keypair.getAddress().getIsEqual(address)).toBe(true);
});
test('getSignature', function () {
    // https://github.com/ethereumjs/ethereumjs-util/blob/master/test/index.js#L531
    var privateKey = pollenium_buttercup_1.Bytes32.fromHexish('3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1');
    var keypair = new Keypair_1.Keypair(privateKey);
    var message = pollenium_buttercup_1.Bytes32.fromHexish('82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28');
    var signatureV = pollenium_buttercup_1.Uint8.fromNumber(27);
    var signatureR = pollenium_buttercup_1.Bytes32.fromHexish('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9');
    var signatureS = pollenium_buttercup_1.Bytes32.fromHexish('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66');
    var signature = keypair.getSignature(message);
    expect(signature.v.getIsEqual(signatureV)).toBe(true);
    expect(signature.r.getIsEqual(signatureR)).toBe(true);
    expect(signature.s.getIsEqual(signatureS)).toBe(true);
});
test('InvalidPrivateKeyError', function () {
    var privateKey = pollenium_buttercup_1.Bytes32.fromArray([]);
    expect(function () {
        new Keypair_1.Keypair(privateKey);
    }).toThrow(Keypair_1.InvalidPrivateKeyError);
});
