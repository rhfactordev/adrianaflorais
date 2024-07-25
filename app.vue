<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: computed(() => {
      return [ 'purple' ];
    }),
  },
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
