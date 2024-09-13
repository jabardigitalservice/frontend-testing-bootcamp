import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeEach } from 'vitest';
import ProductCard from '~/components/ProductCard.vue'

describe('ProductCard.vue', async () => {
  const wrapper = await mountSuspended(ProductCard, {
    props: {
      name: 'Test Product',
      description: 'This is a test product',
      originalPrice: 100000,
      discount: 0
    }
  })

  const wrapperDiscount = await mountSuspended(ProductCard, {
    props: {
      name: 'Test Product',
      description: 'This is a test product',
      originalPrice: 100000,
      discount: 20
    }
  })

  it('should showing product image', async () => {
    const img = wrapper.find('[data-cy="product-image"]')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg')
  })

  it('should showing product name', () => {
    const name = wrapper.find('[data-cy="product-card__name"]')
    expect(name.text()).toBe('Test Product')
  })

  it('should showing product description', () => {
    const description = wrapper.find('[data-cy="product-description"]')
    expect(description.text()).toBe('This is a test product')
  })

  it('should showing product price', () => {
    const price = wrapper.find('[data-cy="product-discounted-price"]')
    expect(price.text()).toBe('Rp\xa0100.000')
  })

  it('should show discount label on top right corner if product has discount', async () => {
    const discountLabel = wrapperDiscount.find('span.bg-red-500')
    expect(discountLabel.exists()).toBe(true)
    expect(discountLabel.text()).toBe('20%')
  })

  it('should show real product price with striketrough and show price after discount if product has discount', () => {
    const price = wrapperDiscount.find('[data-cy="product-original-price"]')
    const discountedPrice = wrapperDiscount.find('[data-cy="product-discounted-price"]')
    expect(price.element.tagName).toBe('DEL')
    expect(discountedPrice.text()).toBe('Rp\xa080.000')
  })

  it('should not show original price with striketrough if product does not have discount', () => {
    const price = wrapper.find('[data-cy="product-original-price"]').element as HTMLElement
    expect(price.style.display).toBe('none')
  });  
})