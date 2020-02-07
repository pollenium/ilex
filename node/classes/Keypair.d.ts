import { Signature } from './Signature';
import { Bytes32, Address } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
export declare class InvalidPrivateKeyError extends Error {
    constructor(privateKey: Bytes32);
}
export declare class Keypair {
    readonly privateKey: Bytes32;
    private address;
    constructor(privateKeyUish: Uish);
    getAddress(): Address;
    getSignature(message: Uish): Signature;
    static generate(): Keypair;
}
