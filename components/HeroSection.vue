<template>
  <section class="hero" :style="{ backgroundImage: `url('/hero-beach.jpg')` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Construction et financement d'infrastructure</h1>
        <p class="hero-subtitle">En savoir plus</p>
        <button class="btn btn-primary">En savoir plus</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
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
