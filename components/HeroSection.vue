<template>
  <section class="hero" :style="{ backgroundImage: `url('/bg.jpg')` }">
    <div class="container p-0 woubi">
      <div class="hero-content">

      <div class="hero-text">
        <h1 class="hero-title">{{ heroTitle }}</h1>
        <button class="btn btn-primary">{{ heroCTA }}</button>
      </div>
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

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
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
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.btn {
  margin-top: var(--spacing-lg);
  
  &.btn-primary {
    background-color: #0a6678;
    font-family: 'Source Sans Pro', var(--font-primary);
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.64;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    border-radius: 10px;
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
