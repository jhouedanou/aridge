<template>
  <div class="service-page">
    <PageHero 
      title="Hydraulique et assainissement"
      description="Réseaux d'eau potable, assainissement et irrigation"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            ARIDGE met en œuvre des solutions hydrauliques complètes pour garantir l'accès 
            à l'eau potable, le traitement des eaux usées et l'irrigation agricole, 
            contribuant à la santé publique et à la sécurité alimentaire.
          </p>
        </div>
      </section>

      <!-- Services -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Nos services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon"><span class="icon icon-water"></span></div>
              <h3 class="service-title">Réseaux d'eau potable et forages</h3>
              <p class="service-description">
                Construction de réseaux d'adduction d'eau potable et réalisation de forages 
                pour les communautés urbaines et rurales.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-pump"></span></div>
              <h3 class="service-title">Stations de pompage</h3>
              <p class="service-description">
                Installation de stations de pompage modernes pour la distribution d'eau.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-recycle"></span></div>
              <h3 class="service-title">Traitement des eaux usées</h3>
              <p class="service-description">
                Conception et construction de stations d'épuration respectant 
                les normes environnementales.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-drainage"></span></div>
              <h3 class="service-title">Canalisations et drainage</h3>
              <p class="service-description">
                Mise en place de systèmes de canalisation et de drainage pour 
                la gestion des eaux pluviales et usées.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-agriculture"></span></div>
              <h3 class="service-title">Irrigation agricole</h3>
              <p class="service-description">
                Développement de systèmes d'irrigation pour soutenir l'agriculture 
                et renforcer la sécurité alimentaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projets types -->
      <section class="projects-section">
        <div class="container">
          <h2 class="section-title">Projets types</h2>
          <div class="projects-list">
            <div class="project-highlight">
              <div class="project-icon"><span class="icon icon-location"></span></div>
              <div class="project-content">
                <h3>Station d'épuration et réseau hydraulique en zone sahélienne</h3>
                <p>Amélioration de l'accès à l'eau potable et à l'assainissement dans les régions arides.</p>
              </div>
            </div>

            <div class="project-highlight">
              <div class="project-icon"><span class="icon icon-solar"></span></div>
              <div class="project-content">
                <h3>Déploiement de 100 forages solaires dans les zones rurales</h3>
                <p>Solutions durables pour garantir l'accès à l'eau potable avec énergie renouvelable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Vous avez un projet hydraulique ?</h2>
          <p>Contactez-nous pour discuter de vos besoins en eau et assainissement.</p>
          <NuxtLink to="/contact" class="cta-button">Nous contacter</NuxtLink>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Hydraulique et Assainissement - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'ARIDGE met en œuvre des solutions hydrauliques complètes : réseaux d\'eau potable, traitement des eaux usées, irrigation pour le développement de l\'Afrique.'
    }
  ]
})
</script>

<style scoped>
.service-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro-section {
  padding: 80px 20px;
  background: white;
}

.intro-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #444;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
}

.services-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.section-title {
  font-size: 2.2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 50px;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 2px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(27, 122, 126, 0.08);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
  border-color: var(--color-primary);
}

.service-icon {
  margin-bottom: 20px;
}

.service-icon .icon {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: relative;
}

.service-icon .icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-water::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z'/%3E%3C/svg%3E");
}

.icon-pump::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'/%3E%3C/svg%3E");
}

.icon-recycle::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
}

.icon-drainage::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z'/%3E%3C/svg%3E");
}

.icon-agriculture::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 22a9 9 0 0 0 9-9c0-1.95-.64-3.93-1.53-5.42l-7.47 7.47-3.35-3.35-.71.71 4.06 4.06 6.17-6.17c.48.92.83 1.87.83 2.7 0 3.87-3.13 7-7 7s-7-3.13-7-7a6.98 6.98 0 0 1 3.77-6.19L12 9.14l4.66-4.66A8.98 8.98 0 0 0 12 3C6.48 3 2 7.48 2 13s4.48 10 10 10z'/%3E%3C/svg%3E");
}

.icon-location::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
}

.icon-solar::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z'/%3E%3C/svg%3E");
}

.project-icon .icon {
  display: block;
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: relative;
}

.project-icon .icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.service-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 15px;
  line-height: 1.4;
}

.service-description {
  color: #555;
  line-height: 1.7;
  font-weight: 300;
}

.projects-section {
  padding: 80px 20px;
  background: white;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.project-highlight {
  display: flex;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  padding: 40px;
  border-radius: 16px;
  border-left: 5px solid var(--color-primary);
}

.project-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.project-content h3 {
  font-size: 1.3rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 10px;
}

.project-content p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #0a6678 0%, #1b7a7e 100%);
  text-align: center;
  color: white;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: white;
}

.cta-section p {
  font-size: 1.15rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
}

.cta-button {
  display: inline-block;
  background: white;
  color: var(--color-primary);
  padding: 16px 40px;
  border-radius: 10px;
  font-weight: var(--font-weight-semibold);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .intro-section,
  .services-section,
  .projects-section,
  .cta-section {
    padding: 60px 20px;
  }

  .intro-text {
    font-size: 1.15rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .project-highlight {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }
}
</style>
