import { extractDecimalDigits } from '../../utils/extractDecimalDigits'

describe('utils/extractDecimalDigits', () => {
  it('should return decimals when a float value is provided', () => {
    expect(extractDecimalDigits(100.95)).toBe(95)
  })

  it('should return decimals with two digits when a float value provided had only a single decimal digit', () => {
    expect(extractDecimalDigits(100.9)).toBe(90)
  })

  it('should return zero when an integer is provided', () => {
    expect(extractDecimalDigits(100)).toBe(0)
  })
})
