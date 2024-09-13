<template>
  <div class="group relative">
    <div v-show="hasDiscount" data-cy="product-discount" class="absolute top-3 right-3 z-10">
      <span class="bg-red-500 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white">
        {{ discount }}%
      </span>
    </div>
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 border border-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt="Front of men&#039;s Basic Tee in black."
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-md font-bold text-gray-700 pr-4 line-clamp-1">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            <span data-cy="product-name">{{ props.name }}</span>
          </a>
        </h3>
        <p data-cy="product-desc" class="font-sm text-gray-500 line-clamp-1 pr-4">{{ props.description }}</p>
      </div>
      <div class="flex flex-col flex-shrink-0 justify-start">
        <strike data-cy="product-price__discount" v-show="hasDiscount" class="text-gray-500 text-sm text-end">{{ formattedOriginalPrice }}</strike>
        <p data-cy="product-price" class="text-md font-bold text-gray-900">{{ formattedDiscountedPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatCurrencyToIDR, calculatePriceWithDiscount } from '@/utils';
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  originalPrice: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  }
})

const hasDiscount = computed(() => props.discount > 0);

const formattedOriginalPrice = computed(() => {
  return formatCurrencyToIDR(props.originalPrice);
});

const formattedDiscountedPrice = computed(() => {
  const discountedPrice = calculatePriceWithDiscount(props.originalPrice, props.discount);
  return formatCurrencyToIDR(discountedPrice);
})
</script>
