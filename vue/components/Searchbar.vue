<template>
  <div class="mt-2">
    <input
      v-model="model"
      type="text"
      name="search"
      id="search"
      class="block w-full rounded-lg border-0 py-3 px-3 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="find your product"
    />
  </div>
</template>

<script setup lang="ts">
  const model = defineModel()
</script>

<style scoped></style>
