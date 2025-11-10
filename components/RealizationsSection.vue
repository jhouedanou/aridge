<template>
  <section id="realizations" class="realizations background-secondary mb-4">
    <div class="container p-0 woubi w-100">
      <div class="who-content animate-section">
        <h2 class="animate-title">Notre expertise financière</h2>
        <div class="container">
          <div class="row">

            <div class="col-md-6 col-12 letexte animate-content expertise-text">
              <p>Imaad Financial Group joue un rôle clé dans la réussite d’ARIDGE, en apportant :

              <ul>
                <li class="animate-item" style="--animate-delay: 0.1s">Structuration de financements souverains et
                  institutionnels (banques, fonds, assureurs)</li>
                <li class="animate-item" style="--animate-delay: 0.2s"><strong>Montage et sécurisation de Partenariats
                    Public-Privé (PPP)</strong> avec garanties d'État</li>
                <li class="animate-item" style="--animate-delay: 0.3s"><strong>Levier de syndication</strong>
                  panafricaine et internationale</li>
                <li class="animate-item" style="--animate-delay: 0.4s"><strong>Gestion d'actifs</strong> liés aux
                  infrastructures (routes à péage, résidences étudiantes, zones économiques spéciales)</li>
                <li class="animate-item" style="--animate-delay: 0.5s"><strong>Structuration ESG</strong> pour attirer
                  les financeurs à impact et green funds</li>
              </ul>
              </p>

            </div>
            <div class="col-md-6 col-12 lesimages">
              <div class="row">
                <div class="col-md-12 col-12 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/01.webp')"></div>
                </div>
                <div class="col-md-6 col-12 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/02.webp')"></div>
                </div>
                <div class="col-md-6 col-2 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/03.webp')"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section id="realizations" class="realizations background-secondary mb-4">
    <div class="container p-0 woubi w-100">
      <div class="who-content animate-section">
        <h2 class="animate-title">Nos réalisations</h2>
        <div class="container">
          <div class="row">

            <div class="col-md-4 col-12 letexte animate-content expertise-text">
              <p>Imaad Financial Group joue un rôle clé dans la réussite d’ARIDGE, en apportant :

              <ul>
                <li class="animate-item" style="--animate-delay: 0.1s">Structuration de financements souverains et
                  institutionnels (banques, fonds, assureurs)</li>
                <li class="animate-item" style="--animate-delay: 0.2s"><strong>Montage et sécurisation de Partenariats
                    Public-Privé (PPP)</strong> avec garanties d'État</li>
                <li class="animate-item" style="--animate-delay: 0.3s"><strong>Levier de syndication</strong>
                  panafricaine et internationale</li>
                <li class="animate-item" style="--animate-delay: 0.4s"><strong>Gestion d'actifs</strong> liés aux
                  infrastructures (routes à péage, résidences étudiantes, zones économiques spéciales)</li>
                <li class="animate-item" style="--animate-delay: 0.5s"><strong>Structuration ESG</strong> pour attirer
                  les financeurs à impact et green funds</li>
              </ul>
              </p>

            </div>
            <div class="col-md-8 col-12 lesimages">
              <div class="row">
                <div class="col-md-12 col-12 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/01.webp')"></div>
                </div>
                <div class="col-md-6 col-12 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/02.webp')"></div>
                </div>
                <div class="col-md-6 col-2 expertise-image m-4">
                  <div class="inner" style="background-image: url('/financiere/03.webp')"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Realizations section component
</script>

<style scoped>
.animate-section {
  animation: subtleFadeIn 0.9s ease-out;
}

.animate-title {
  animation: subtleSlideInUp 0.9s ease-out;
}

.animate-content {
  animation: subtleFadeIn 0.9s ease-out 0.2s both;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

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
