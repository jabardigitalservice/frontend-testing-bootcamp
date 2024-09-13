import { expect, it, describe } from 'vitest'
import { double, formatCurrencyToIDR, calculatePriceWithDiscount, getReadableFileSize, toCamelCase, capitalizeText, validateEmail } from './index'

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

describe('[utils: getReadableFileSize]', () => {
  it('should return the size of the file with unit size', () => {
      expect(getReadableFileSize(1024)).toBe('1.0 KB')
  })
})

describe('[utils: toCamelCase]', () => {
  it('should return string with camelCased format', () => {
      expect(toCamelCase('hello-warudo')).toBe('helloWarudo')
  })
})

describe('[utils: capitalizeText]', () => {
  it('should return string with capitalize every first char of word', () => {
      expect(capitalizeText('Halo teman-teman frontend')).toBe('Halo Teman-teman Frontend')
  })
})

describe('[utils: validateEmail]', () => {
  it('should return "Valid Email"', () => {
      expect(validateEmail('agung@example.com')).toBe('Valid email')
  })

  it('should return "Invalid Email"', () => {
      expect(validateEmail('Waduh waduh waduh')).toBe('Invalid email')
  })
})
