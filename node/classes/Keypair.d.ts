import { Signature } from './Signature';
import { Bytes32, Address } from 'pollenium-buttercup';
export declare class InvalidPrivateKeyError extends Error {
    constructor(privateKey: Bytes32);
}
export declare class Keypair {
    privateKey: Bytes32;
    private address;
    constructor(privateKey: Bytes32);
    getAddress(): Address;
    getSignature(message: Bytes32): Signature;
    static generate(): Keypair;
}
