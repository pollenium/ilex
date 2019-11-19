import { Bytes, Bytes1, Bytes32 } from 'pollenium-buttercup';
export declare class Ilex {
    v: Bytes1;
    r: Bytes32;
    s: Bytes32;
    concatenation: Bytes;
    constructor(v: Bytes1, r: Bytes32, s: Bytes32);
    getConcatenation(): Bytes;
    static fromConcatenation(concatenation: Bytes): Ilex;
}
