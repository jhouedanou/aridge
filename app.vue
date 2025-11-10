<template>
  <div id="app">
    <LoadingBar @loading-complete="isPageReady = true" />
    <div v-show="isPageReady" class="page-content">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPageReady = ref(false)
</script>

<style scoped>
#app {
  min-height: 100vh;
}

.page-content {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
