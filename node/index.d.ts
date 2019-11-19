export declare class Ilex {
    v: Uint8Array;
    r: Uint8Array;
    s: Uint8Array;
    private concatenation;
    constructor(v: Uint8Array, r: Uint8Array, s: Uint8Array);
    getConcatenation(): Uint8Array;
    static fromConcatenation(concatenation: Uint8Array): Ilex;
}
