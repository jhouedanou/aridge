<template>
  <div class="layout-default">
    <Header />
    <SocialSidebar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useIntersectionAnimation } from '~/composables/useIntersectionAnimation'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import SocialSidebar from '~/components/SocialSidebar.vue'

// Initialiser les animations d'intersection
useIntersectionAnimation()
</script>

<style scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
