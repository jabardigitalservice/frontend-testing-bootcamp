export const double = (number: number) => {
  return number * 2;
};

export const formatCurrencyToIDR = (amount: number) => {
  if (amount < 0) {
    throw new Error('Currency must be a positive number');
  }

  return amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const calculatePriceWithDiscount = (price: number, discount: number) => {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount percentage must be between 0 and 100');
  }

  return price - (price * discount) / 100;
};

export function getReadableFileSize(fileSizeInBytes: number, padding: number = 1) {
  let i = 0;
  const byteUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  while (fileSizeInBytes >= 1024) {
    fileSizeInBytes /= 1024;
    i++;
  }

  return `${Math.max(fileSizeInBytes, 0.1).toFixed(padding)} ${byteUnits[i]}`;
}

export function toCamelCase(str: string) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

export function capitalizeText(str: string) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase());
}

export function validateEmail(str: string) {
  if (!str) return 'This field must not be empty.';

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(str)) {
    return 'Invalid email';
  }

  return 'Valid email';
}

export function isArrayEmpty(arr: Array<any>) {
  return Array.isArray(arr) && arr.length === 0;
}

export function getUrlQueryStringAsObject(url: string) {
  const questionMarkIndex = url.indexOf('?');

  if (questionMarkIndex === -1) {
    return '';
  }

  const queryString = url.slice(questionMarkIndex + 1);
  return Object.fromEntries(new URLSearchParams(queryString));
}

export function truncateString(str: string, maxLength: number = 5) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
}
