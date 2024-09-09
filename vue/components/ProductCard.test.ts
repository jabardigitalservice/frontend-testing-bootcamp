import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductCard from './ProductCard.vue'

const defaultProps = {
  name: 'My New Product',
  description: 'This is the description of My Product',
  originalPrice: 10000,
  discount: 0
}

describe('ProductCard', () => {
  it('should render product card', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: { ...defaultProps }
    })

    const productCard = wrapper.find('[data-cy="product-card"]')
    expect(productCard.exists()).toBe(true)
  })

  it('should render product card image', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: { ...defaultProps }
    })

    const productImage = wrapper.find('[data-cy="product-card__image"]')
    expect(productImage.exists()).toBe(true)
  })

  it('should render product card name', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: { ...defaultProps }
    })

    const title = wrapper.find('[data-cy="product-card__title"]')
    expect(title.text()).toContain('My New Product')
  })

  it('should render product card description', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: { ...defaultProps }
    })

    const description = wrapper.find('[data-cy="product-card__description"]')
    expect(description.text()).toContain('This is the description of My Product')
  })

  it('should not render product card discount pill when discount is 0', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: { ...defaultProps }
    })

    const discountPill = wrapper.find('[data-cy="product-card__discount-pill"]')
    expect(discountPill.exists()).toBe(false)
  })

  it('should render product card discounted price', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        ...defaultProps,
        discount: 10
      }
    })

    const discountedPrice = wrapper.find('[data-cy="product-card__discounted-price"]')
    expect(discountedPrice.text()).toContain('Rp 9.000')
  })

  it('should render product card discount pill when discount is greater than 0', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        ...defaultProps,
        discount: 10
      }
    })

    const discountPill = wrapper.find('[data-cy="product-card__discount-pill"]')
    expect(discountPill.html()).toContain('10%')
  })

  it('should render original price when discount is greater than 0', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        ...defaultProps,
        discount: 10
      }
    })

    const originalPrice = wrapper.find('[data-cy="product-card__original-price"]')
    expect(originalPrice.html()).toContain('Rp 10.000')
  })
})
