import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

describe('App Component', async () => {
    const component = await mountSuspended(App, { 
        route: '/', 
        attachTo: document.body
     })

    it('should show 8 product at first time open', () => {
        expect(component.findAll('.product-card')).toHaveLength(8)
    })

    it('should show related product when search', async () => {
        const searchQuery = 'Kaos'
        const searchInput = component.find('#search')
        await searchInput.setValue(searchQuery)

        const products = component.findAll('[data-cy="product-card__name"]').map((item) => {
            return item.text().toLowerCase().includes(searchQuery.toLowerCase())
        })

        expect(products).toContain(true)
    })

    it('should show initial product data', async () => {
        const searchInput = component.find('#search')
        await searchInput.setValue('')

        expect(component.findAll('.product-card')).toHaveLength(8)
    })

    it('should 16 data', async () => {
        const buttonLoadMore = component.find('[data-cy="button__load-more"]')
        await buttonLoadMore.trigger('click')

        expect(component.findAll('.product-card')).toHaveLength(16)
    })

    it('button load more should be hidden', async () => {
        const buttonLoadMore = component.find('[data-cy="button__load-more"]')

        expect((buttonLoadMore).isVisible()).toBe(false)
    })
})