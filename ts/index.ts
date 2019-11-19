import * as uvaursi from 'pollenium-uvaursi'

export class Ilex {
  private concatenation: Uint8Array;
  constructor(
    public v: Uint8Array,
    public r: Uint8Array,
    public s: Uint8Array
  ) {}

  getConcatenation() {
    if (this.concatenation) {
      return this.concatenation
    }
    this.concatenation = uvaursi.concat([this.v, this.r, this.s])
    return this.concatenation
  }

  static fromConcatenation(concatenation: Uint8Array) {
    return new Ilex(
      concatenation.slice(0, 1),
      concatenation.slice(1, 33),
      concatenation.slice(33, 65)
    )
  }
}
