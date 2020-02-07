import { Uint8, Bytes32, Address, Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
export interface SignatureStruct {
    v: Uintable;
    r: Uish;
    s: Uish;
}
export declare class Signature implements SignatureStruct {
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
    constructor(struct: SignatureStruct);
    getSigner(message: Uish): Address;
}
