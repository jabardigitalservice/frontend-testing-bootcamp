import { expect, it, describe } from 'vitest'
import { double, formatCurrencyToIDR, calculatePriceWithDiscount } from './index'

describe('[utils]: double', () => {
  it('should double a number', () => {
    expect(double(2)).toBe(4)
  })
})

describe('[utils: formatCurrencyToID]', () => {
  it('should format a number to IDR', () => {
    expect(formatCurrencyToIDR(1000)).toEqual('Rp 1.000')
  })

  it('should throw an error if the number is negative', () => {
    expect(() => formatCurrencyToIDR(-1000)).toThrow('Currency must be a positive number')
  })
})

describe('[utils: calculatePriceWithDiscount]', () => {
  it('should calculate the price with discount', () => {
    expect(calculatePriceWithDiscount(1000, 50)).toBe(500)
  })

  it('should throw an error if the discount is negative', () => {
    expect(() => calculatePriceWithDiscount(1000, -50)).toThrow('Discount percentage must be between 0 and 100')
  })

  it('should throw an error if the discount is greater than 100', () => {
    expect(() => calculatePriceWithDiscount(1000, 150)).toThrow('Discount percentage must be between 0 and 100')
  })
})
