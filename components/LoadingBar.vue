<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isLoading" class="loading-bar-container">
        <div class="loading-content">
          <!-- Background animation -->
          <div class="bg-gradient"></div>

          <!-- Main content -->
          <div class="loading-box">
            <!-- Logo with glow -->
            <div class="logo-wrapper">
              <div class="logo-glow"></div>
              <NuxtImg src="/logo.svg" alt="Aridge" class="logo" loading="eager" />
            </div>

            <!-- Animated text -->
            <h1 class="loading-title">Aridge</h1>
            <p class="loading-subtitle">Chargement en cours...</p>

            <!-- Advanced progress bar -->
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: progress + '%' }"></div>
                <div class="progress-shine"></div>
              </div>
              <span class="progress-text">{{ Math.round(progress) }}%</span>
            </div>

            <!-- Animated dots -->
            <div class="dots-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)
let progressInterval: NodeJS.Timeout | null = null

const emit = defineEmits<{
  'loading-complete': []
}>()

onMounted(() => {
  // Simuler la progression du chargement
  progressInterval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 25
    }
  }, 250)

  // Cacher la barre de chargement quand le DOM est complètement chargé
  window.addEventListener('load', () => {
    progress.value = 100
    setTimeout(() => {
      isLoading.value = false
      emit('loading-complete')
    }, 600)
  })

  // Fallback: masquer après 3 secondes même si load ne s'est pas déclenché
  setTimeout(() => {
    if (isLoading.value) {
      progress.value = 100
      setTimeout(() => {
        isLoading.value = false
        emit('loading-complete')
      }, 600)
    }
  }, 3000)
})

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>

<style scoped lang="scss">
.loading-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f5f7f8 0%, #ffffff 50%, #f0f5f6 100%);
  opacity: 0.7;
  animation: gradientShift 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes gradientShift {
  0%, 100% {
    background: linear-gradient(135deg, #f5f7f8 0%, #ffffff 50%, #f0f5f6 100%);
  }
  50% {
    background: linear-gradient(135deg, #ffffff 0%, #f0f5f6 50%, #f5f7f8 100%);
  }
}

.loading-box {
  position: relative;
  text-align: center;
  z-index: 2;
  max-width: 320px;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-wrapper {
  position: relative;
  width: 140px;
  height: 160px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-glow {
  position: absolute;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(27, 122, 126, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: glow 3s ease-in-out infinite;
  z-index: 0;
}

@keyframes glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.3;
  }
}

.logo {
  width: 140px;
  height: auto;
  animation: logoFloat 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.loading-title {
  font-size: 28px;
  font-weight: 600;
  color: #1b7a7e;
  margin: 0 0 0.5rem 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 1px;
}

.loading-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0 0 2rem 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.progress-container {
  margin-bottom: 1.5rem;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #e8e8e8;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1b7a7e 0%, #2fa3a7 50%, #1b7a7e 100%);
  background-size: 200% 100%;
  transition: width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(27, 122, 126, 0.3);
  animation: gradient-shift 2s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.progress-shine {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-text {
  display: block;
  font-size: 12px;
  color: #1b7a7e;
  font-weight: 600;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin-top: 0.5rem;
}

.dots-loader {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 1.5rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #1b7a7e;
    animation: bounce 1.4s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }

    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  40% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
