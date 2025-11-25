<template>
  <section class="page-hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p v-if="description" class="hero-description">{{ description }}</p>
        <div v-if="$slots.default" class="hero-extra">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<style scoped>
.page-hero {
  position: relative;
  background: linear-gradient(135deg, #0a6678 0%, #1b7a7e 50%, #156266 100%);
  color: white;
  padding: 160px 20px 100px;
  text-align: center;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(138, 205, 229, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(27, 122, 126, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
}

.page-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(248, 249, 250, 0.2));
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  animation: heroFadeIn 0.8s ease-out;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  line-height: 1.2;
  color: white;
}

.hero-description {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
  opacity: 0.95;
  animation: heroFadeIn 1s ease-out;
}

.hero-extra {
  margin-top: 30px;
  animation: heroFadeIn 1.2s ease-out;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 130px 20px 70px;
    min-height: 260px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 110px 15px 60px;
    min-height: 220px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}
</style>
