<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Construction et financement d'infrastructure</h1>
        <p class="hero-subtitle">En savoir plus</p>
        <button class="btn btn-primary">En savoir plus</button>
      </div>
      <div class="hero-image">
        <img src="/hero-beach.jpg" alt="Aridge Infrastructure" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.hero-text {
  animation: slideInUp 0.8s ease-out;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--spacing-lg);
  color: white;
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.hero-image {
  position: relative;
  animation: fadeIn 1s ease-out;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero {
    padding: var(--spacing-2xl) 0;
  }
}
</style>
