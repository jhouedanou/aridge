<template>
  <section id="expertise" class="expertise">
    <div class="container">
      <div class="section-header">
        <h2>Nos domaines d'expertise</h2>
      </div>

      <div class="expertise-wrapper">
        <div class="expertise-content">
          <div class="expertise-item">
            <h3>Infrastructure routière & génie civil</h3>
            <p>Routes, autoroutes, ports et infrastructure complète incluant des solutions innovantes et durables.</p>
          </div>

          <div class="expertise-item">
            <h3>Expertise Technique</h3>
            <p>Nos collaborateurs avec les meilleurs difficultés internationaux pour délivrer les meilleurs standards de l'industrie.</p>
            <ul>
              <li>Études techniques et conception BIM</li>
              <li>Construction modulaire et préfabriquée</li>
              <li>Gestion environnementale et ESG</li>
              <li>Maintenance & gestion d'actifs d'infrastructures</li>
            </ul>
          </div>

          <div class="expertise-item">
            <h3>Expertise Financière</h3>
            <p>Structuration de financements souverains et institutionnels</p>
            <p>Spécialisation dans les domaines de l'Afrique Subsaharienne</p>
            <ul>
              <li>Levée de fonds syndicalisés</li>
              <li>Partenariats Public-Privés</li>
              <li>Gestion d'actifs de infrastructures</li>
              <li>Sécurisation d'emprunteurs avec une expertise Publics-Privé</li>
            </ul>
          </div>
        </div>

        <div class="expertise-image">
          <img src="/infrastructure.jpg" alt="Infrastructure" />
        </div>
      </div>

      <div class="expertise-gallery">
        <div class="gallery-item">
          <img src="/project1.jpg" alt="Projet 1" />
        </div>
        <div class="gallery-item">
          <img src="/project2.jpg" alt="Projet 2" />
        </div>
        <div class="gallery-item">
          <img src="/project3.jpg" alt="Projet 3" />
        </div>
        <div class="gallery-item">
          <img src="/project4.jpg" alt="Projet 4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Expertise section component
</script>

<style scoped>
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
}
</style>
