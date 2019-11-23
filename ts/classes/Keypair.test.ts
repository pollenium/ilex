import { Keypair, InvalidPrivateKeyError } from './Keypair'
import { Bytes32, Uint8, Address } from 'pollenium-buttercup'

test('generate', () => {
  Keypair.generate()
})

test('getAddress', () => {
  const privateKeyArray = [234, 84, 189, 197, 45, 22, 63, 136, 201, 58, 176, 97, 87, 130, 207, 113, 138, 46, 251, 158, 81, 167, 152, 154, 171, 27, 8, 6, 126, 156, 28, 95]
  const privateKey = Bytes32.fromArray(privateKeyArray)
  const keypair = new Keypair(privateKey)
  const address = Address.fromHexish('2f015c60e0be116b1f0cd534704db9c92118fb6a')

  expect(keypair.getAddress().getIsEqual(address)).toBe(true)
})

test('getSignature', () => {
  // https://github.com/ethereumjs/ethereumjs-util/blob/master/test/index.js#L531
  const privateKey = Bytes32.fromHexish('3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1')
  const keypair = new Keypair(privateKey)

  const message = Bytes32.fromHexish('82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28')
  const signatureV = Uint8.fromNumber(27)
  const signatureR = Bytes32.fromHexish('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9')
  const signatureS = Bytes32.fromHexish('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66')

  const signature = keypair.getSignature(message)

  expect(signature.v.getIsEqual(signatureV)).toBe(true)
  expect(signature.r.getIsEqual(signatureR)).toBe(true)
  expect(signature.s.getIsEqual(signatureS)).toBe(true)
})

test('InvalidPrivateKeyError', () => {
  const privateKey = Bytes32.fromArray([])
  expect(() => {
    new Keypair(privateKey)
  }).toThrow(InvalidPrivateKeyError)
})
