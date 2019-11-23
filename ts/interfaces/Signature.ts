import { Uint8, Bytes32 } from 'pollenium-buttercup'

export interface SignatureInterface {
  v: Uint8;
  r: Bytes32;
  s: Bytes32;
}
