<template>
  <section>
    <Navbar />
    <main class="container mx-auto px-4 content-center min-h-screen mt-10">
      <slot />
    </main>
    <Footer />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductLayout',
})

</script>
<style lang="scss" scoped>
</style>