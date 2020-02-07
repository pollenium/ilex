import { Signature } from './Signature'
import { Bytes32, Address, Uint8, Bytes, Uintable } from 'pollenium-buttercup'
import { Uish, Uu } from 'pollenium-uvaursi'
import * as ejsUtil from 'ethereumjs-util'
import crypto from 'crypto'

export class InvalidPrivateKeyError extends Error {
  constructor(privateKey: Bytes32) {
    super(`Invalid privateKey: ${privateKey.uu.toHex()}`)
    Object.setPrototypeOf(this, InvalidPrivateKeyError.prototype)
  }
}

export class Keypair {

  readonly privateKey: Bytes32;

  private address: Address;

  constructor(privateKeyUish: Uish) {
    this.privateKey = new Bytes32(privateKeyUish)
    if (!ejsUtil.isValidPrivate(new Buffer(this.privateKey.u))) {
      throw new InvalidPrivateKeyError(this.privateKey)
    }
  }

  getAddress(): Address {
    if (this.address) {
      return this.address
    }
    this.address = new Address(
      ejsUtil.privateToAddress(
        new Buffer(this.privateKey.u)
      )
    )
    return this.address
  }

  getSignature(message: Uish): Signature {
    const ejsUtilSignature = ejsUtil.ecsign(
      new Buffer(Uu.wrap(message).u),
      new Buffer(this.privateKey.u)
    )
    return new Signature({
      v: new Uint8(ejsUtilSignature.v),
      r: new Bytes32(ejsUtilSignature.r),
      s: new Bytes32(ejsUtilSignature.s)
    })
  }


  static generate(): Keypair {
    let privateKeyBuffer

    do {
      privateKeyBuffer = crypto.randomBytes(32)
    } while (
      !ejsUtil.isValidPrivate(privateKeyBuffer)
    )

    return new Keypair(privateKeyBuffer)
  }
}
