import { describe, expect, it } from 'vitest'
import { encodeText, decodeText } from './base64'

describe('base64', () => {
  it('encode text', () => {
    expect(encodeText('123')).toBe('MTIz')
  })

  it('decode text', () => {
    expect(decodeText('MTIz')).toBe('123')
  })
})
