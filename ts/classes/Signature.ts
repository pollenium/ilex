import { Uint8, Bytes32, Address, Uintable } from 'pollenium-buttercup'
import * as ejsUtil from 'ethereumjs-util'
import { Uish, Uu } from 'pollenium-uvaursi'

export class Signature {

  v: Uint8;
  r: Bytes32;
  s: Bytes32;

  constructor(struct: {
    v: Uintable,
    r: Uish,
    s: Uish,
  }) {
    const { v, r, s } = struct
    this.v = new Uint8(v)
    this.r = new Bytes32(r)
    this.s = new Bytes32(s)
  }

  getSigner(message: Uish): Address {
    const signerPublicKey = ejsUtil.ecrecover(
      new Buffer(Uu.wrap(message).u),
      this.v.toNumber(),
      new Buffer(this.r.u),
      new Buffer(this.s.u)
    )

    return new Address(
      ejsUtil.publicToAddress(signerPublicKey)
    )
  }
}
