<template>
  <div class="service-page">
    <PageHero 
      title="Habitat et logement"
      description="Programmes immobiliers et aménagement urbain durable"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            ARIDGE développe des solutions d'habitat adaptées aux besoins africains, 
            du logement social aux quartiers durables, en intégrant des approches innovantes 
            et des partenariats public-privé.
          </p>
        </div>
      </section>

      <!-- Services -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Nos services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon"><span class="icon icon-home"></span></div>
              <h3 class="service-title">Programmes de logements sociaux</h3>
              <p class="service-description">
                Développement de logements abordables et accessibles pour répondre 
                aux besoins des populations à revenus modestes.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-building"></span></div>
              <h3 class="service-title">Logements intermédiaires et de standing</h3>
              <p class="service-description">
                Construction de résidences de qualité pour la classe moyenne et les cadres.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-education"></span></div>
              <h3 class="service-title">Résidences universitaires et casernes</h3>
              <p class="service-description">
                Réalisation d'infrastructures d'hébergement pour les étudiants, 
                les forces armées et les administrations.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-admin"></span></div>
              <h3 class="service-title">Cités administratives</h3>
              <p class="service-description">
                Conception et construction de complexes administratifs modernes et fonctionnels.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-smartcity"></span></div>
              <h3 class="service-title">Villes nouvelles & quartiers durables</h3>
              <p class="service-description">
                Développement de smart cities et quartiers durables intégrant les technologies 
                modernes et les principes de développement durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projets types -->
      <section class="projects-section">
        <div class="container">
          <h2 class="section-title">Projets types</h2>
          <div class="project-highlight">
            <div class="project-icon"><span class="icon icon-location"></span></div>
            <div class="project-content">
              <h3>Programme de logements sociaux avec mix PPP à Abidjan</h3>
              <p>Partenariat public-privé pour répondre aux besoins d'habitat abordable en Côte d'Ivoire.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Vous avez un projet immobilier ?</h2>
          <p>Contactez-nous pour discuter de vos besoins en habitat et logement.</p>
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
  title: 'Habitat et Logement - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'ARIDGE développe des programmes immobiliers durables : logements sociaux, résidences, cités administratives et quartiers durables en Afrique.'
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
  color: var(--color-text-dark);
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

.icon-home::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E");
}

.icon-building::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z'/%3E%3C/svg%3E");
}

.icon-education::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'/%3E%3C/svg%3E");
}

.icon-admin::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.54 7.5 12 10.82 5.46 7.5 12 4.18zM5 16.08V9l6.5 3.67V19l-6.5-2.92z'/%3E%3C/svg%3E");
}

.icon-smartcity::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z'/%3E%3C/svg%3E");
}

.icon-location::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
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
  color: var(--color-text-light);
  line-height: 1.7;
  font-weight: 300;
}

.projects-section {
  padding: 80px 20px;
  background: white;
}

.project-highlight {
  display: flex;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  padding: 40px;
  border-radius: 16px;
  border-left: 5px solid var(--color-primary);
  max-width: 800px;
  margin: 0 auto;
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
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
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
