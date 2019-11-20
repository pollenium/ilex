import { Uint8, Bytes32, Bytes } from 'pollenium-buttercup'

export class Ilex {
  private concatenation: Bytes;
  constructor(
    public v: Uint8,
    public r: Bytes32,
    public s: Bytes32
  ) {}

  getConcatenation(): Bytes {
    if (this.concatenation) {
      return this.concatenation
    }
    this.concatenation = Bytes.fromArray([])
      .getAppended(this.v)
      .getAppended(this.r)
      .getAppended(this.s)
    return this.concatenation
  }

  static fromConcatenation(concatenation: Bytes) {
    return new Ilex(
      concatenation.getSlice(0, 1).getCasted(Uint8),
      concatenation.getSlice(1, 33).getCasted(Bytes32),
      concatenation.getSlice(33, 65).getCasted(Bytes32)
    )
  }
}
