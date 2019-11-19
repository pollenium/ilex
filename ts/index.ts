import { Bytes, Bytes1, Bytes32 } from 'pollenium-buttercup'

export class Ilex {
  concatenation: Bytes;
  constructor(
    public v: Bytes1,
    public r: Bytes32,
    public s: Bytes32
  ) {}

  getConcatenation() {
    if (this.concatenation) {
      return this.concatenation
    }
    this.concatenation =
      Bytes.fromArray([])
        .getAppended(this.v)
        .getAppended(this.r)
        .getAppended(this.s)
    return this.concatenation
  }

  static fromConcatenation(concatenation: Bytes) {
    return new Ilex(
      concatenation.getSlice(0, 1).getCasted(Bytes1),
      concatenation.getSlice(1, 33).getCasted(Bytes32),
      concatenation.getSlice(33, 65).getCasted(Bytes32)
    )
  }
}
