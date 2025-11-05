<template>
  <section class="hero" :style="{ backgroundImage: `url('/hero-beach.jpg')` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">{{ heroTitle }}</h1>
        <p class="hero-subtitle">{{ heroSubtitle }}</p>
        <button class="btn btn-primary">{{ heroCTA }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

const { getText } = useContent()

const heroTitle = computed(() => getText('hero.title', 'Construction et financement d\'infrastructure'))
const heroSubtitle = computed(() => getText('hero.subtitle', 'En savoir plus'))
const heroCTA = computed(() => getText('hero.cta', 'En savoir plus'))
</script>

<style scoped>
.hero {
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(27, 122, 126, 0.85) 0%, rgba(47, 163, 167, 0.75) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: var(--spacing-3xl) var(--spacing-md);
  max-width: 600px;
  animation: slideInUp 0.8s ease-out;
}

.hero-text {
  width: 100%;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
  color: white;
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.btn {
  margin-top: var(--spacing-lg);
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
