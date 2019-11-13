import { Buttercup } from 'pollenium-buttercup';
export declare class Ilex {
    v: Buttercup;
    r: Buttercup;
    s: Buttercup;
    constructor(v: Buttercup, r: Buttercup, s: Buttercup);
    getConcatenation(): Buttercup;
    static fromConcatenation(concatenation: Buttercup): Ilex;
}
