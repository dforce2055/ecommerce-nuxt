<template>
  <section>
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative mb-6"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Product } from '../../types/product';
definePageMeta({
  layout: 'products'
})

const { data } = await useFetch('https://fakestoreapi.com/products')
const products: Product[] = data

</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Products",
    data: () => ({}),
})

</script>
<style lang="scss" scoped>
</style>