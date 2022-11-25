<template>
  <section class="mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">
      {{ error.statusCode }}
    </p>
    <p class="mt-5 text-7xl">
      Ooopss
    </p>
    <p class="mt-7">
      {{ error.message }}
    </p>
    <button
      @click="handleError"
      class="btn mt-5"
      >
        Go Home
      </button>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  name: 'ErrorPage',
  methods: {
    handleError() {
      clearError({ redirect: '/' })
    }
  }
})

</script>
<style lang="scss" scoped>
</style>