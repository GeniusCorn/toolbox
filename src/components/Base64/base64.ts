import { encode, decode } from 'js-base64'

function encodeText(text: string) {
  return encode(text)
}

function decodeText(text: string) {
  return decode(text)
}

export { encodeText, decodeText }
