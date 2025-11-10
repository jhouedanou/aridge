<template>
  <div id="app">
    <!-- Loading Bar -->
    <LoadingBar @loading-complete="isPageReady = true" />

    <!-- Page Content - Masqué pendant le loading -->
    <Transition name="fade" mode="out-in">
      <div v-if="isPageReady" key="content" class="page-content">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useContent } from '~/composables/useContent'

const isPageReady = ref(false)
const { loadContent } = useContent()

onMounted(() => {
  loadContent()
})
</script>

<style scoped>
#app {
  min-height: 100vh;
}

.page-content {
  animation: fadeIn 0.6s ease-in;
}

/* Transition pour l'apparition du contenu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
