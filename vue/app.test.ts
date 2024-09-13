import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

describe('App Component', async () => {
    const component = await mountSuspended(App, { route: '/' })

    it('should show 8 product at first time open', () => {
        expect(component.findAll('.product-card')).toHaveLength(8)
    })
})