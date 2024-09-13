import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DemoCard from './DemoCard.vue'



describe('DemoCard', async () => {
  const component = await mountSuspended(DemoCard, {
    props: {
      thumbnail: 'https://picsum.photos/id/100/200/300',
      name: 'Agung',
      originalPrice: 100,
      discount: 10,
    }
  })

  it('should render DemoCard component', () => {
    expect(component.exists()).toBe(true)
  })

  it('should render thumbnail image', () => {
    const image = component.find('[data-cy="product-card__image"]')

    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe('https://picsum.photos/id/100/200/300')
  })

  it('should render product name', () => {
    const title = component.find('[data-cy="product-card__title"]')

    expect(title.text()).toContain('My New Product')
  })

  it('should render button Add to Cart', () => {
    const button = component.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text()).toContain(/add to cart/i)
  })
})



