import { Uint8, Bytes32, Bytes } from 'pollenium-buttercup';
export declare class Ilex {
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
    private concatenation;
    constructor(v: Uint8, r: Bytes32, s: Bytes32);
    getConcatenation(): Bytes;
    static fromConcatenation(concatenation: Bytes): Ilex;
}
