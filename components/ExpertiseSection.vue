<template>
  <section id="expertise" class="expertise background-secondary mb-4">
    <div class="container p-0 woubi w-100">
      <div class="who-content animate-section">
        <h2 class="animate-title">Notre expertise technique</h2>
        <div class="container">
          <div class="row">

            <div class="col-md-6 col-12 letexte animate-content expertise-text">
              <p>Nous collaborons avec des bureaux d'études internationaux, des <strong>fournisseurs certifiés
                  ISO</strong>, et des experts locaux pour garantir la qualité, la résilience et la durabilité de chaque
                projet.</p>
              <p class="animate-item" style="--animate-delay: 0.1s"><strong>Études techniques et conception BIM</strong>
              </p>
              <ul>
                <li class="animate-item" style="--animate-delay: 0.2s">Maîtrise d'œuvre tous corps d'état (TCE)</li>
                <li class="animate-item" style="--animate-delay: 0.3s">Construction modulaire et préfabriquée</li>
                <li class="animate-item" style="--animate-delay: 0.4s">Gestion environnementale & conformité ESG</li>
                <li class="animate-item" style="--animate-delay: 0.5s">Maintenance & gestion d'actifs infrastructurels
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-12 lesimages">
              <div class="row">
                <div class="col-md-6 col-12 expertise-image mb-2"><div class="inner" style="background-image: url('/expertise/01.webp')"></div></div>
                <div class="col-md-6 col-12 expertise-image m-4"><div class="inner" style="background-image: url('/expertise/02.webp')"></div></div>
                <div class="col-md-6 col-12 expertise-image m-4"><div class="inner" style="background-image: url('/expertise/03.webp')"></div></div>
                <div class="col-md-6 col-12 expertise-image m-4"><div class="inner" style="background-image: url('/expertise/04.webp')"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Expertise section component
</script>

<style lang="scss">
.animate-section {
  animation: subtleFadeIn 0.9s ease-out;
}

.animate-title {
  animation: subtleSlideInUp 0.9s ease-out;
}

.animate-content {
  animation: subtleSlideInUp 0.9s ease-out 0.2s both;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.expertise-text {

  ul {
    padding-left: 1em;

    li {
      line-height: 2em;
    }
  }
}

.expertise-image {
  margin-bottom: var(--spacing-md);
  position: relative;
}

.expertise-image .inner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 200px;
  margin: .05rem;
}

.expertise {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  color: var(--color-primary);
  font-size: 2rem;
}

.expertise-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: flex-start;
  margin-bottom: var(--spacing-3xl);
}

.expertise-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
}

.expertise-item {
  background: white;
  border-radius: 8px;
  padding: var(--spacing-2xl);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed);
}

.expertise-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(27, 122, 126, 0.1);
}

.expertise-item h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

.expertise-item p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-md);
}

.expertise-item ul {
  list-style-position: inside;
  padding-left: 0;
}

.expertise-item li {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.expertise-image {
  position: sticky;
  top: var(--spacing-2xl);
}

.expertise-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.expertise-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.gallery-item {
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .expertise-wrapper {
    grid-template-columns: 1fr;
  }

  .expertise-image {
    position: static;
  }
}

@media (max-width: 768px) {
  .expertise {
    padding: var(--spacing-2xl) 0;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .expertise-wrapper {
    grid-template-columns: 1fr;
  }

  .expertise-gallery {
    grid-template-columns: 1fr;
  }

  .expertise-text {
    ul {
      padding-left: 1.5rem;

      li {
        line-height: 1.8em;
        font-size: 0.95rem;
      }
    }
  }

  .expertise-image .inner {
    min-height: 150px;
  }
}

@media (max-width: 480px) {
  .expertise {
    padding: var(--spacing-lg) 0;
  }

  .section-header h2 {
    font-size: 1.3rem;
  }

  .expertise-text {
    padding: 0 var(--spacing-md);

    p {
      font-size: 0.9rem;
    }

    ul {
      padding-left: 1rem;

      li {
        line-height: 1.6em;
        font-size: 0.9rem;
      }
    }
  }

  .expertise-image {
    margin-bottom: var(--spacing-sm);

    .inner {
      min-height: 120px;
    }
  }
}
</style>
