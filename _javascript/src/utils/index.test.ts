import { expect, it, describe } from 'vitest'
import { 
  double, 
  formatCurrencyToIDR, 
  calculatePriceWithDiscount ,
  getReadableFileSize,
  toCamelCase,
  capitalizeText,
  isArrayEmpty,
  getUrlQueryStringAsObject,
  truncateString,
  validateEmail,
} from './index'

describe('[utils]: double', () => {
  it('should double a number', () => {
    expect(double(2)).toBe(4)
  })
})

describe('[utils]: formatCurrencyToID', () => {
  it('should format a number to IDR', () => {
    expect(formatCurrencyToIDR(1000)).toEqual('Rp 1.000')
  })

  it('should throw an error if the number is negative', () => {
    expect(() => formatCurrencyToIDR(-1000)).toThrow('Currency must be a positive number')
  })
})

describe('[utils]: calculatePriceWithDiscount', () => {
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

describe('[utils]: getReadableFileSize', () => {
  it('should convert bytes into units', () => {
    expect(getReadableFileSize(1025, 0)).toBe('1 KB')
  })
})

describe('[utils]: toCamelCase', () => {
  it('should convert string to camelCase', () => {
    expect(toCamelCase('front-end_bootcamp')).toBe('frontEndBootcamp')
  })
})

describe('[utils]: capitalizeText', () => {
  it('should convert string to capitalizeText', () => {
    expect(capitalizeText('frontend bootcamp')).toBe('Frontend Bootcamp')
  })
})

describe('[utils]: validateEmail', () => {
  it('should check format email is valid', () => {
    expect(validateEmail('email@test.com')).toBe('Valid email')
  })
  it('should check format email is not valid', () => {
    expect(validateEmail('email@testcom')).toBe('Invalid email')
  })
})

describe('[utils]: isArrayEmpty', () => {
  it('should check isArrayEmpty false', () => {
    expect(isArrayEmpty([])).toBe(true)
  })
  it('should check isArrayEmpty true', () => {
    expect(isArrayEmpty([1])).toBe(false)
  })
})

describe('[utils]: getUrlQueryStringAsObject', () => {
  it('should convert url into object of params', () => {
    expect(getUrlQueryStringAsObject('http://test.com?search=test&id=2')).toStrictEqual({
      search: 'test',
      id: '2'
    })
  })
})

describe('[utils]: truncateString', () => {
  it('should truncate string with maxlegth', () => {
    expect(truncateString('frontend bootcamp', 8)).toBe('frontend...')
  })
})