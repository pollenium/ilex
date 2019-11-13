import { Buttercup } from 'pollenium-buttercup'

export class Ilex {
  constructor(
    public v: Buttercup,
    public r: Buttercup,
    public s: Buttercup
  ) {}

  getConcatenation() {
    return this.v.append(this.r).append(this.s)
  }

  static fromConcatenation(concatenation: Buttercup) {
    return new Ilex(
      concatenation.slice(0, 1),
      concatenation.slice(1, 33),
      concatenation.slice(33, 65)
    )
  }
}
