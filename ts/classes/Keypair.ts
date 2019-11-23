import { Signature } from './Signature'
import { Bytes32, Address, Uint8, Bytes } from 'pollenium-buttercup'
import * as ejsUtil from 'ethereumjs-util'
import crypto from 'crypto'

export class InvalidPrivateKeyError extends Error {
  constructor(privateKey: Bytes32) {
    super(`Invalid privateKey: ${privateKey.getHex()}`)
    Object.setPrototypeOf(this, InvalidPrivateKeyError.prototype)
  }
}

export class Keypair {

  private address: Address;

  constructor(public privateKey: Bytes32) {
    if (!ejsUtil.isValidPrivate(privateKey.getBuffer())) {
      throw new InvalidPrivateKeyError(privateKey)
    }
  }

  getAddress(): Address {
    if (this.address) {
      return this.address
    }
    this.address = Address.fromBuffer(
      ejsUtil.privateToAddress(
        this.privateKey.getBuffer()
      )
    )
    return this.address
  }

  getSignature(message: Bytes32): Signature {
    const ejsUtilSignature = ejsUtil.ecsign(
      message.getBuffer(),
      this.privateKey.getBuffer()
    )
    return new Signature({
      v: Uint8.fromNumber(ejsUtilSignature.v),
      r: Bytes32.fromBuffer(ejsUtilSignature.r),
      s: Bytes32.fromBuffer(ejsUtilSignature.s)
    })
  }


  static generate(): Keypair {
    let privateKeyBuffer

    do {
      privateKeyBuffer = crypto.randomBytes(32)
    } while (
      !ejsUtil.isValidPrivate(privateKeyBuffer)
    )

    const privateKey = Bytes32.fromBuffer(privateKeyBuffer)

    return new Keypair(privateKey)
  }
}
