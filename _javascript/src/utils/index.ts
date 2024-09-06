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

  return price - (price * discount / 100);
};