<template>
  <main class="bg-white">
    <AppNavbar />
    <AppHero />
    <section class="mx-auto max-w-7xl py-24 min-h-[750px]">
      <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">Our Products</h1>
      <p class="mt-6 text-lg leading-8 text-gray-800 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veritatis consequatur
        voluptatem tempora iusto? Error rerum, molestias reprehenderit veniam perspiciatis
        obcaecati.
      </p>

      <div class="grid grid-cols-4 gap-6 mt-8">
        <Searchbar v-model="searchQuery" class="col-span-1 mb-4" />
        <div class="col-span-3" />
        <ProductCard
          v-for="product in filteredProducts"
          data-cy="product-items"
          :key="product.id"
          :name="product.name"
          :description="product.description"
          :discount="product.discount"
          :original-price="product.originalPrice"
        />
        <div class="col-span-4 flex justify-center mt-8">
          <button
            data-cy="button-load"
            v-show="!hasShownAllProducts"
            type="button"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="loadMoreProducts"
          >
            Load more product
          </button>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import { PRODUCTS } from './constants';

const searchQuery = ref('')
const filteredProducts = ref(PRODUCTS.slice(0, 8))

watch(searchQuery, () => {
  if (searchQuery.value) {
    filteredProducts.value = PRODUCTS.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  } else {
    filteredProducts.value = PRODUCTS.slice(0, 8)
  }
})

const hasShownAllProducts = computed(() => {
  if (searchQuery.value) return true

  return filteredProducts.value.length === PRODUCTS.length
})

function loadMoreProducts() {
  const newProducts = PRODUCTS.slice(filteredProducts.value.length)
  filteredProducts.value.push(...newProducts)
}
</script>
