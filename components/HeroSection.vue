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
      @ended="handleVideoEnd"
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
    <button v-if="videoEnded" class="scroll-button" @click="scrollToNextSection" aria-label="Scroll to next section">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useContent } from '~/composables/useContent'

const { getText } = useContent()
const videoElement = ref<HTMLVideoElement | null>(null)
const heroSection = ref<HTMLElement | null>(null)
const videoEnded = ref(false)

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

const handleVideoEnd = () => {
  videoEnded.value = true
}

const scrollToNextSection = () => {
  if (heroSection.value) {
    const nextSection = heroSection.value.nextElementSibling as HTMLElement
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
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

@media (max-width: 768px) {
  .hero-content {
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-md);
    padding-bottom: 3em;
  }
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

.scroll-button {
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  background: var(--color-primary);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite, pulse 2s infinite, blink 0.6s infinite, fadeIn 0.6s ease-out;
  box-shadow: 0 4px 12px rgba(27, 122, 126, 0.3);
  transition: all 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
    stroke: white;
    stroke-width: 3;
  }

  &:hover {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 8px 24px rgba(27, 122, 126, 0.5);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(27, 122, 126, 0.3);
  }
  50% {
    box-shadow: 0 4px 24px rgba(27, 122, 126, 0.6);
  }
}

@keyframes blink {
  0%, 25%, 100% {
    opacity: 1;
  }
  37.5%, 62.5% {
    opacity: 0.4;
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
    height: 380px;
    background-attachment: scroll;
    margin-top: 80px;
  }

  .hero-content {
    max-width: 100%;
    padding: var(--spacing-lg) var(--spacing-md);
    padding-bottom: 2rem;
  }

  .hero-title {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .scroll-button {
    bottom: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 300px;
    margin-top: 70px;
  }

  .hero-title {
    font-size: 1.3rem;
  }

  .scroll-button {
    bottom: 1rem;
    width: 2rem;
    height: 2rem;

    svg {
      stroke-width: 2;
    }
  }
}
</style>
