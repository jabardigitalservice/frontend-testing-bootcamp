import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import ProductCard from '@/components/ProductCard.vue';

const productDiscount = {
  name: 'Kaos SALE',
  description: 'kaos promo',
  originalPrice: 130000,
  discount: 50,
}
const productNotDiscount = {
  name: 'Kaos Biasa',
  description: 'tidak promo',
  originalPrice: 150000,
  discount: 0,
}

describe('[component]: ProductCard', () => {
  it('should render image', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productDiscount}
    })

    const element = wrapper.find('img')
    expect(element.exists()).toBe(true);
  })

  it('should render product name', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productDiscount}
    })

    const element = wrapper.find('[data-cy="product-name"]')
    expect(element.text()).not.toBe('');
  })

  it('should render product description', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productDiscount}
    })

    const element = wrapper.find('[data-cy="product-desc"]')
    expect(element.text()).not.toBe('');
  })

  it('should render product price', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productDiscount}
    })

    const element = wrapper.find('[data-cy="product-price"]')
    expect(element.text()).not.toBe('');
  })

  it('should render discount label with striked price if has discount', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productDiscount}
    })

    const label = wrapper.find('[data-cy="product-discount"]')
    expect(label.element.style.display).toBe('');

    const price = wrapper.find('[data-cy="product-price__discount"]')
    expect(price.element.style.display).toBe('');
  })

  it('should not render discount label with no stiked price if has no discount', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {...productNotDiscount}
    })

    const label = wrapper.find('[data-cy="product-discount"]')
    expect(label.element.style.display).toBe('none');

    const price = wrapper.find('[data-cy="product-price__discount"]')
    expect(price.element.style.display).toBe('none');
  })
})