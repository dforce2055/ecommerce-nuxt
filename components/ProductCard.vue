<template>
  <section>
    <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
      <img 
        :src="product.image" 
        :alt="product.description" 
        class="h-full w-full object-cover object-center" 
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      <NuxtLink :to="`/products/${ product.id }`">
        <span class="absolute inset-0" />
        {{ product.title }}
      </NuxtLink>
    </h3>
    <!-- <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p> -->
    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../types';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    }
  },
  data: () => ({

  })
})

</script>
<style lang="scss" scoped>
</style>