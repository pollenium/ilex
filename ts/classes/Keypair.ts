import { Signature } from './Signature'
import { Bytes32, Address, Uint8, Bytes } from 'pollenium-buttercup'
import * as ejsUtil from 'ethereumjs-util'
import crypto from 'crypto'

export class InvalidPrivateKeyError extends Error {
  constructor(privateKey: Bytes32) {
    super(`Invalid privateKey: ${privateKey.uu.toHex()}`)
    Object.setPrototypeOf(this, InvalidPrivateKeyError.prototype)
  }
}

export class Keypair {

  private address: Address;

  constructor(public privateKey: Bytes32) {
    if (!ejsUtil.isValidPrivate(new Buffer(privateKey.u))) {
      throw new InvalidPrivateKeyError(privateKey)
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

  getSignature(message: Bytes32): Signature {
    const ejsUtilSignature = ejsUtil.ecsign(
      new Buffer(message.u),
      new Buffer(this.privateKey.u)
    )
    return new Signature({
      v: Uint8.fromNumber(ejsUtilSignature.v),
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

    const privateKey = new Bytes32(privateKeyBuffer)

    return new Keypair(privateKey)
  }
}
