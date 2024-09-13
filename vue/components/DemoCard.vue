<template>
  <article class="...">
    <div
      v-if="isHaveDiscount"
      class="..."
    >
      {{ props.discount }}% off
    </div>
    <img
      :src="props.thumbnail"
      :alt="props.name"
      class="..."
    />
    <div class="...">
      <h1 class="...">
        {{ props.name }}
      </h1>
      <p>
        <strike>{{ originalPriceLabel }}</strike>
        <span class="...">{{ discountedPriceLabel }}</span>
      </p>
      <button class="...">
        Add to cart
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps({
    thumbnail: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
  })

  const isHaveDiscount = computed(() => {
    return props.discount && props.discount > 0
  })

  const originalPriceLabel = computed(() => {
    return `${props.originalPrice.toFixed(2)} USD`
  })

  const priceAfterDiscount = computed(() => {
    const priceBeforeDiscount = props.originalPrice
    const discountValue = props.originalPrice * props.discount / 100
    
    return priceBeforeDiscount - discountValue
  })

  const discountedPriceLabel = computed(() => {
    return `${priceAfterDiscount.value.toFixed(2)} USD`
  })
</script>