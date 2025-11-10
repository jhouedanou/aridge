<template>
  <section class="hero" :style="{ backgroundImage: `url('/bg.jpg')` }" ref="heroSection">
    <video
      ref="videoElement"
      class="hero-video"
      autoplay
      muted
      playsinline
      preload="metadata"
      poster="/bg.jpg"
    >
      <source src="/videoGood.webm" type="video/webm">
      <source src="/videoGood.mp4" type="video/mp4">
    </video>
    <div class="container p-0 woubi w-100">
      <div class="hero-content">

      <div class="hero-text">
        <h1 class="hero-title animate-title">{{ heroTitle }}</h1>
        <button class="btn btn-primary animate-button">{{ heroCTA }}</button>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useContent } from '~/composables/useContent'

const { getText } = useContent()
const videoElement = ref<HTMLVideoElement | null>(null)

const heroTitle = computed(() => getText('hero.title', 'Construction et financement d\'infrastructures'))
const heroCTA = computed(() => getText('hero.cta', 'En savoir plus'))

const playVideo = () => {
  if (videoElement.value) {
    videoElement.value.currentTime = 0
    videoElement.value.play().catch(error => {
      console.log('Video autoplay prevented:', error)
    })
  }
}

onMounted(() => {
  // Relancer la vidéo chaque fois que le hero est affiché
  playVideo()

  // Observer pour relancer la vidéo quand l'utilisateur scroll vers le hero
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playVideo()
        }
      })
    },
    { threshold: 0.5 }
  )

  if (videoElement.value) {
    observer.observe(videoElement.value)
  }

  return () => {
    observer.disconnect()
  }
})
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 0;
  padding-bottom: 6em;
  width: 442px;
  animation: slideInUp 0.8s ease-out;
  margin: 0;
  margin-bottom: 0em;
}

.hero-text {
  width: 100%;
}

.hero-title {
  text-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
  font-family: 'Source Sans Pro', var(--font-primary);
  font-size: 61px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-bottom: var(--spacing-lg);

  &.animate-title {
    animation: subtleSlideInUp 0.9s ease-out;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.btn {
  margin-top: var(--spacing-lg);

  &.btn-primary {
    @include primary-button;
  }

  &.animate-button {
    animation: subtleSlideInUp 1s ease-out 0.2s both;
  }
}

@media (max-width: 1024px) {
  .hero {
    height: 450px;
    background-attachment: scroll;
  }

  .hero-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 400px;
    background-attachment: scroll;
  }

  .hero-content {
    max-width: 100%;
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
