import { Uint8, Bytes32, Address } from 'pollenium-buttercup'
import { SignatureInterface } from '../interfaces/Signature'
import * as ejsUtil from 'ethereumjs-util'

export class Signature implements SignatureInterface {

  v: Uint8;
  r: Bytes32;
  s: Bytes32;

  constructor(struct: SignatureInterface) {
    Object.assign(this, struct)
  }

  getSigner(message: Bytes32): Address {
    const signerPublicKey = ejsUtil.ecrecover(
      new Buffer(message.u),
      this.v.toNumber(),
      new Buffer(this.r.u),
      new Buffer(this.s.u)
    )

    return new Address(
      ejsUtil.publicToAddress(signerPublicKey)
    )
  }
}
