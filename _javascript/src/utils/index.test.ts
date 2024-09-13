import { expect, it, describe } from 'vitest';
import {
  double,
  formatCurrencyToIDR,
  calculatePriceWithDiscount,
  getReadableFileSize,
  toCamelCase,
  capitalizeText,
  validateEmail,
  isArrayEmpty,
  getUrlQueryStringAsObject,
  truncateString,
} from './index';

describe('[utils]: double', () => {
  it('should double a number', () => {
    expect(double(2)).toBe(4);
  });
});

describe('[utils: formatCurrencyToID]', () => {
  it('should format a number to IDR', () => {
    expect(formatCurrencyToIDR(1000)).toEqual('Rp 1.000');
  });

  it('should throw an error if the number is negative', () => {
    expect(() => formatCurrencyToIDR(-1000)).toThrow('Currency must be a positive number');
  });
});

describe('[utils: calculatePriceWithDiscount]', () => {
  it('should calculate the price with discount', () => {
    expect(calculatePriceWithDiscount(1000, 50)).toBe(500);
  });

  it('should throw an error if the discount is negative', () => {
    expect(() => calculatePriceWithDiscount(1000, -50)).toThrow('Discount percentage must be between 0 and 100');
  });

  it('should throw an error if the discount is greater than 100', () => {
    expect(() => calculatePriceWithDiscount(1000, 150)).toThrow('Discount percentage must be between 0 and 100');
  });
});

describe('[utils: getReadableFileSize]', () => {
  it('should return file size 1 MB', () => {
    expect(getReadableFileSize(1024 * 1024, 0)).toBe('1 MB');
  });

  it('should return file size 10 MB', () => {
    expect(getReadableFileSize(10485760, 0)).toBe('10 MB');
  });

  it('should return file size 10 MB with padding (10.0 MB)', () => {
    expect(getReadableFileSize(10485760, 1)).toBe('10.0 MB');
  });
});

describe('[utils: toCamelCase]', () => {
  it('should return string "bootcam-frontend" in camel case "bootcampFrontend"', () => {
    expect(toCamelCase('bootcamp-frontend')).toBe('bootcampFrontend');
  });
});

describe('[utils: capitalizeText]', () => {
  it('should return string "bootcam frontend" in capitalize text "Bootcamp Frontend"', () => {
    expect(capitalizeText('bootcamp frontend')).toBe('Bootcamp Frontend');
  });
});

describe('[utils: validateEmail]', () => {
  it('should valid email', () => {
    expect(validateEmail('admin@gmail.com')).toBe('Valid email');
  });

  it('should invalid email', () => {
    expect(validateEmail('admingmail.com')).toBe('Invalid email');
  });

  it('should not be empty', () => {
    expect(validateEmail('')).toBe('This field must not be empty.');
  });
});

describe('[utils: isArrayEmpty]', () => {
  it('should return true if array is empty', () => {
    expect(isArrayEmpty([])).toBeTruthy();
  });
  it('should return false if array is empty', () => {
    expect(isArrayEmpty(['testing'])).toBeFalsy();
  });
});

describe('[utils: getUrlQueryStringAsObject]', () => {
  it('should return object of query string', () => {
    expect(getUrlQueryStringAsObject('?name=john&age=22')).toEqual({
      name: 'john',
      age: '22',
    });
  });
});

describe('[utils: getUrlQueryStringAsObject]', () => {
  it('should return object of query string', () => {
    expect(getUrlQueryStringAsObject('?name=john&age=22')).toEqual({
      name: 'john',
      age: '22',
    });
  });

  it('should contain question mark (?)', () => {
    expect(getUrlQueryStringAsObject('name=john&age=22')).toBe('');
  });
});

describe('[utils: truncateString]', () => {
  it('should return truncated string, example john doe with max length 4 becomes john', () => {
    expect(truncateString('john doe', 4)).toBe('john...');
  });
});
