import { Uint8, Bytes32, Address, Uintable } from 'pollenium-buttercup'
import * as ejsUtil from 'ethereumjs-util'
import { Uish, Uu } from 'pollenium-uvaursi'

export interface SignatureStruct {
  v: Uintable,
  r: Uish,
  s: Uish,
}

export class Signature implements SignatureStruct {

  v: Uint8;
  r: Bytes32;
  s: Bytes32;

  constructor(struct: SignatureStruct) {
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

  getEncoding(): Uu {
    return Uu.genConcat([
      this.v,
      this.r,
      this.s
    ])
  }

  static fromEncoding(encodingUish: Uish) {
    const encoding = Uu.wrap(encodingUish)
    return new Signature({
      v: encoding.u.slice(0, 1),
      r: encoding.u.slice(1, 33),
      s: encoding.u.slice(33, 65)
    })
  }
}
