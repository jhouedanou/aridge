<template>
  <div class="service-page">
    <PageHero 
      title="Infrastructure & génie civil"
      description="Construction et réhabilitation d'infrastructures routières et ouvrages d'art"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            ARIDGE conçoit, finance et réalise des infrastructures routières de haute qualité, 
            répondant aux normes internationales pour soutenir le développement économique 
            et l'intégration régionale en Afrique.
          </p>
        </div>
      </section>

      <!-- Services -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Nos services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon"><span class="icon icon-road"></span></div>
              <h3 class="service-title">Routes nationales, régionales et transfrontalières</h3>
              <p class="service-description">
                Construction et réhabilitation de routes structurantes pour le désenclavement 
                et l'intégration économique régionale.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-city"></span></div>
              <h3 class="service-title">Voiries urbaines et pistes rurales</h3>
              <p class="service-description">
                Aménagement de voiries urbaines modernes et de pistes rurales pour améliorer 
                l'accessibilité des zones enclavées.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-factory"></span></div>
              <h3 class="service-title">Voies d'accès industrielles</h3>
              <p class="service-description">
                Conception et construction de voies d'accès pour les zones industrielles 
                et économiques.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-bridge"></span></div>
              <h3 class="service-title">Ouvrages d'art</h3>
              <p class="service-description">
                Réalisation de ponts, échangeurs et tranchées couvertes avec des techniques 
                de construction avancées.
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
              <h3>Projet de route régionale reliant Djibouti à l'Éthiopie</h3>
              <p>Renforcement des corridors commerciaux de la Corne de l'Afrique.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Vous avez un projet d'infrastructure ?</h2>
          <p>Contactez-nous pour discuter de vos besoins en construction routière et génie civil.</p>
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
  title: 'Infrastructure & Génie Civil - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'ARIDGE conçoit et réalise des infrastructures routières de haute qualité : routes, voiries, ouvrages d\'art pour le développement de l\'Afrique.'
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

/* Intro Section */
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

/* Services Section */
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

.icon-road::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'/%3E%3C/svg%3E");
}

.icon-city::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z'/%3E%3C/svg%3E");
}

.icon-factory::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-3l-1-8h-1l-1 8h-2V9.95z'/%3E%3C/svg%3E");
}

.icon-bridge::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M7 14v-4h2v4h6v-4h2v4h3v2H4v-2h3zM3 8h18v2H3V8zm2-4h14v2H5V4z'/%3E%3C/svg%3E");
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
  color: #555;
  line-height: 1.7;
  font-weight: 300;
}

/* Projects Section */
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
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
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

/* Responsive */
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
