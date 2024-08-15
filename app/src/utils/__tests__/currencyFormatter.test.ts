import { currencyFormatter } from '@/utils'

describe('utils/currencyFormatter', () => {
  it('should format currency values to pt-BR pattern correctly', () => {
    const result = currencyFormatter({ currency: 'BRL', value: 10000.4 })
    expect(result).toEqual('R$ 10.000')
  })

  it('should format currency values to en-US pattern correctly', () => {
    const result = currencyFormatter({ currency: 'USD', value: 55000 })
    expect(result).toEqual('$55,000')
  })
})
