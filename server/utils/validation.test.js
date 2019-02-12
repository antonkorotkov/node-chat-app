const expect = require('expect')

const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(true)).toBeFalsy()
  })
  it('should reject spaces', () => {
    expect(isRealString('    ')).toBeFalsy()
  })
  it('should allow strings', () => {
    expect(isRealString(' Evil ')).toBeTruthy()
  })
})
