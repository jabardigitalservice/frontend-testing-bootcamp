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
        <Searchbar class="col-span-1 mb-4" />
        <div class="col-span-3" />
        <ProductCard
          v-for="i in 8"
          :key="i"
          name="Test Product Dengan Nama Panjang Banget gaes"
          description="lorem ipsum"
          :discount="0"
          :original-price="100000"
        />
        <div class="col-span-4 flex justify-center mt-8">
          <button
            type="button"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Load more product
          </button>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>
