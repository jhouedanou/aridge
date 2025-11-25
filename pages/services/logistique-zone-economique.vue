<template>
  <div class="service-page">
    <PageHero 
      title="Logistique et zone économique"
      description="Hubs logistiques, zones industrielles et infrastructures portuaires"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            ARIDGE développe des infrastructures logistiques et économiques stratégiques 
            pour faciliter les échanges commerciaux et attirer les investissements en Afrique.
          </p>
        </div>
      </section>

      <!-- Services -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Nos services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon"><span class="icon icon-hub"></span></div>
              <h3 class="service-title">Hubs logistiques</h3>
              <p class="service-description">
                Conception et construction de centres logistiques modernes 
                pour optimiser les chaînes d'approvisionnement.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-train"></span></div>
              <h3 class="service-title">Plateformes intermodales</h3>
              <p class="service-description">
                Développement de plateformes combinant différents modes de transport 
                (route, rail, mer, air).
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-truck"></span></div>
              <h3 class="service-title">Ports secs</h3>
              <p class="service-description">
                Réalisation de ports secs pour désengorger les ports maritimes 
                et rapprocher les services douaniers des zones de production.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-factory"></span></div>
              <h3 class="service-title">Zones industrielles intégrées</h3>
              <p class="service-description">
                Aménagement de zones industrielles complètes avec toutes 
                les infrastructures nécessaires.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-tech"></span></div>
              <h3 class="service-title">Parcs technologiques</h3>
              <p class="service-description">
                Création de parcs dédiés à l'innovation et aux technologies de pointe.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-customs"></span></div>
              <h3 class="service-title">Infrastructures douanières</h3>
              <p class="service-description">
                Construction de postes frontières et d'installations douanières modernes.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-warehouse"></span></div>
              <h3 class="service-title">Entrepôts modernes</h3>
              <p class="service-description">
                Réalisation d'entrepôts de stockage répondant aux normes internationales.
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
              <h3>Plateforme logistique intégrée près du Port de Kribi</h3>
              <p>Facilitation des échanges commerciaux régionaux au Cameroun.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Vous avez un projet logistique ?</h2>
          <p>Contactez-nous pour discuter de vos besoins en infrastructures économiques.</p>
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
  title: 'Logistique et Zone Économique - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'ARIDGE développe des infrastructures logistiques stratégiques : hubs, ports secs, zones industrielles pour le commerce en Afrique.'
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

.icon-hub::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z'/%3E%3C/svg%3E");
}

.icon-train::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/%3E%3C/svg%3E");
}

.icon-truck::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/%3E%3C/svg%3E");
}

.icon-factory::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-3l-1-8h-1l-1 8h-2V9.95z'/%3E%3C/svg%3E");
}

.icon-tech::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z'/%3E%3C/svg%3E");
}

.icon-customs::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z'/%3E%3C/svg%3E");
}

.icon-warehouse::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22 21V7L12 3 2 7v14h5v-9h10v9h5zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z'/%3E%3C/svg%3E");
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
