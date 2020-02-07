import { Uint8, Bytes32, Address, Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
export declare class Signature {
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
    constructor(struct: {
        v: Uintable;
        r: Uish;
        s: Uish;
    });
    getSigner(message: Uish): Address;
}
