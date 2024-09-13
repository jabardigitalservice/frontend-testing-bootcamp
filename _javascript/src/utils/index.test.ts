import { expect, it, describe } from 'vitest'
import { double, formatCurrencyToIDR, calculatePriceWithDiscount, getReadableFileSize, toCamelCase, capitalizeText, validateEmail, isArrayEmpty, getUrlQueryStringAsObject, truncateString } from './index'

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

describe('[utils]: isArrayEmpty', () => {
  it('should return true if array is empty', () => {
    expect(isArrayEmpty([])).toBe(true);
  })

  it('should return false for a non-empty array', () => {
    expect(isArrayEmpty([1, 2, 3])).toBe(false);
  });

})

describe('[utils]: getUrlQueryStringAsObject', () => {
  it('should return an empty object for a URL without a query string', () => {
    expect(getUrlQueryStringAsObject('http://testing.co.id')).toEqual('');
  });

  it('should return a correct object for a URL with a query string', () => {
    expect(getUrlQueryStringAsObject('http://testing.co.id?param1=value1&param2=value2')).toEqual({
      param1: 'value1',
      param2: 'value2'
    });
  });

  it('should handle URLs with special characters', () => {
    expect(getUrlQueryStringAsObject('http://testing.co.id?param1=value%201&param2=value%202')).toEqual({
      param1: 'value 1',
      param2: 'value 2'
    });
  });

  it('should return an empty object if query string is missing', () => {
    expect(getUrlQueryStringAsObject('http://testing.co.id?')).toEqual({});
  });
});

describe('[utils]: truncateString', () => {
  it('should return the same string if it is shorter than the maxLength', () => {
    expect(truncateString('test', 5)).toBe('test');
  });

  it('should truncate the string if it is longer than the maxLength', () => {
    expect(truncateString('longer than five', 5)).toBe('longe...');
  });

  it('should handle strings exactly equal to the maxLength', () => {
    expect(truncateString('five5', 5)).toBe('five5');
  });

  it('should use the default maxLength if none is provided', () => {
    expect(truncateString('this is longer than five')).toBe('this ...');
  });
});
