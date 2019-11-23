import { Uint8, Bytes32, Address } from 'pollenium-buttercup';
import { SignatureInterface } from '../interfaces/Signature';
export declare class Signature implements SignatureInterface {
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
    constructor(struct: SignatureInterface);
    getSigner(message: Bytes32): Address;
}
