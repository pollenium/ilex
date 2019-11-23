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
      message.getBuffer(),
      this.v.getNumber(),
      this.r.getBuffer(),
      this.s.getBuffer()
    )

    return Address.fromBuffer(
      ejsUtil.publicToAddress(signerPublicKey)
    )
  }
}
