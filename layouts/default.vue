<template>
  <section>
    <Navbar />
    <main>
      <slot />
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})

</script>
