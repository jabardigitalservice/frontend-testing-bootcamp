import { useMemo } from 'react';
import { formatCurrencyToIDR, calculatePriceWithDiscount } from '@/utils';

type parameter = {
  discount: number,
  originalPrice: number,
  name: string,
  description: string,
}

export default function ProductCard(props: parameter) {
  const hasDiscount = useMemo(() => {
    return props.discount;
  }, [props.discount]);

  const formattedOriginalPrice = useMemo(() => {
    return formatCurrencyToIDR(props.originalPrice);
  }, [props.originalPrice]);

  const formattedDiscountedPrice = useMemo(() => {
    const discountedPrice = calculatePriceWithDiscount(props.originalPrice, props.discount);
    return formatCurrencyToIDR(discountedPrice);
  }, [props.originalPrice, props.discount]);

  return (
    <div className="group relative">
      {hasDiscount && 
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-red-500 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white">
            { hasDiscount }%
          </span>
        </div>
      }
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 border border-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
      >
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-bold text-gray-700 pr-4 line-clamp-1">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              { props.name }
            </a>
          </h3>
          <p className="font-sm text-gray-500 line-clamp-1 pr-4">{ props.description }</p>
        </div>
        <div className="flex flex-col flex-shrink-0 justify-start">
          {hasDiscount && 
            <s className="text-gray-500 text-sm text-end">{ formattedOriginalPrice }</s>
          }
          <p className="text-md font-bold text-gray-900">{ formattedDiscountedPrice }</p>
        </div>
      </div>
    </div>
  );
}