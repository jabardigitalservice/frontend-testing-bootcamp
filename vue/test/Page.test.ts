import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import App from '~/app.vue';
import { PRODUCTS } from '~/constants';

describe('Main App', () => {
  it('should render 8 product in initial', async () => {
    const wrapper = await mountSuspended(App);

    const elements = wrapper.findAll('[data-cy="product-items"]');
    expect(elements.length).toBe(8);
  })

  it('should input search matched with product', async () => {
    const wrapper = await mountSuspended(App);

    const query = 'Celana Kulot Hitam';
    const input = wrapper.find('input');
    await input.setValue(query);

    const product = wrapper.findAll('[data-cy="product-name"]');
    expect(product.length).toBe(1);
    expect(product[0].text()).toBe(query);

    const button = wrapper.find('[data-cy="button-load"]');
    expect(button.element.style.display).toBe('none');

    await input.setValue('');
    const product2 = wrapper.findAll('[data-cy="product-name"]');
    expect(product2.length).toBe(8);
  })

  it('should render all product when button load clicked', async () => {
    const wrapper = await mountSuspended(App);

    const button = wrapper.find('[data-cy="button-load"]');
    await button.trigger('click');

    const products = wrapper.findAll('[data-cy="product-name"]')
    expect(products.length).toBe(PRODUCTS.length);

    const button2 = wrapper.find('[data-cy="button-load"]');
    expect(button2.element.style.display).toBe('none');
  })
})