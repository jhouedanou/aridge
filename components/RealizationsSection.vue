<template>
  <section id="realizations" class="realizations">
    <div class="container">
      <div class="section-header">
        <h2>Nos Réalisations</h2>
      </div>

      <div class="realizations-slider">
        <div class="realizations-container">
          <div class="realization-card">
            <img src="/realization-1.jpg" alt="Réalisation 1" />
            <div class="card-content">
              <h3>Projet 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <NuxtLink to="#" class="btn btn-primary">En savoir plus</NuxtLink>
            </div>
          </div>

          <div class="realization-card">
            <img src="/realization-2.jpg" alt="Réalisation 2" />
            <div class="card-content">
              <h3>Projet 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <NuxtLink to="#" class="btn btn-primary">En savoir plus</NuxtLink>
            </div>
          </div>

          <div class="realization-card">
            <img src="/realization-3.jpg" alt="Réalisation 3" />
            <div class="card-content">
              <h3>Projet 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <NuxtLink to="#" class="btn btn-primary">En savoir plus</NuxtLink>
            </div>
          </div>

          <div class="realization-card">
            <img src="/realization-4.jpg" alt="Réalisation 4" />
            <div class="card-content">
              <h3>Projet 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <NuxtLink to="#" class="btn btn-primary">En savoir plus</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-controls">
        <button class="btn btn-outline">Précédent</button>
        <button class="btn btn-outline">Suivant</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Realizations section component
</script>

<style scoped>
.realizations {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-white);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  color: var(--color-primary);
  font-size: 2rem;
}

.realizations-slider {
  margin-bottom: var(--spacing-2xl);
  overflow: hidden;
  border-radius: 8px;
}

.realizations-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.realization-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed);
}

.realization-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
}

.realization-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.realization-card:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: var(--spacing-lg);
}

.card-content h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

.card-content p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  font-size: 0.95rem;
  line-height: 1.6;
}

.slider-controls {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
}

.slider-controls .btn {
  padding: var(--spacing-md) var(--spacing-xl);
}

@media (max-width: 768px) {
  .realizations {
    padding: var(--spacing-2xl) 0;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .realizations-container {
    grid-template-columns: 1fr;
  }

  .slider-controls {
    flex-direction: column;
  }

  .slider-controls .btn {
    width: 100%;
  }
}
</style>
