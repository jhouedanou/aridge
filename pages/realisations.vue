<template>
  <div class="realisations-page">
    <PageHero 
      title="Nos réalisations"
      description="Découvrez nos projets d'infrastructures à travers l'Afrique"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            ARIDGE accompagne la transformation structurelle de l'Afrique à travers des projets 
            d'infrastructures d'envergure. Fiches projets types, références techniques 
            et modélisations disponibles sur demande.
          </p>
        </div>
      </section>

      <!-- Projets -->
      <section class="projects-section">
        <div class="container">
          <div class="projects-grid">
            <div class="project-card">
              <div class="project-category">Infrastructure & Génie Civil</div>
              <h3 class="project-title">Route régionale Djibouti-Éthiopie</h3>
              <p class="project-location"><span class="icon-inline icon-location-inline"></span> Djibouti / Éthiopie</p>
              <p class="project-description">
                Projet de route régionale reliant Djibouti à l'Éthiopie, 
                renforçant les corridors commerciaux de la Corne de l'Afrique.
              </p>
              <div class="project-status">
                <span class="status-badge">En développement</span>
              </div>
            </div>

            <div class="project-card">
              <div class="project-category">Habitat et Logement</div>
              <h3 class="project-title">Programme de logements sociaux PPP</h3>
              <p class="project-location"><span class="icon-inline icon-location-inline"></span> Abidjan, Côte d'Ivoire</p>
              <p class="project-description">
                Programme de logements sociaux développé en partenariat public-privé 
                pour répondre aux besoins d'habitat abordable.
              </p>
              <div class="project-status">
                <span class="status-badge">En développement</span>
              </div>
            </div>

            <div class="project-card">
              <div class="project-category">Logistique et Zone Économique</div>
              <h3 class="project-title">Plateforme logistique Port de Kribi</h3>
              <p class="project-location"><span class="icon-inline icon-location-inline"></span> Kribi, Cameroun</p>
              <p class="project-description">
                Plateforme logistique intégrée près du Port de Kribi pour faciliter 
                les échanges commerciaux régionaux.
              </p>
              <div class="project-status">
                <span class="status-badge">En développement</span>
              </div>
            </div>

            <div class="project-card">
              <div class="project-category">Hydraulique et Assainissement</div>
              <h3 class="project-title">Station d'épuration zone sahélienne</h3>
              <p class="project-location"><span class="icon-inline icon-location-inline"></span> Zone sahélienne</p>
              <p class="project-description">
                Station d'épuration et réseau hydraulique pour améliorer l'accès 
                à l'eau potable et l'assainissement.
              </p>
              <div class="project-status">
                <span class="status-badge">En développement</span>
              </div>
            </div>

            <div class="project-card">
              <div class="project-category">Hydraulique et Assainissement</div>
              <h3 class="project-title">Déploiement de forages solaires</h3>
              <p class="project-location"><span class="icon-inline icon-location-inline"></span> Zones rurales</p>
              <p class="project-description">
                Déploiement de 100 forages solaires dans les zones rurales 
                pour garantir l'accès à l'eau potable.
              </p>
              <div class="project-status">
                <span class="status-badge">En développement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Présence géographique -->
      <section class="presence-section">
        <div class="container">
          <h2 class="section-title">Notre présence panafricaine</h2>
          <div class="presence-grid">
            <div class="presence-block">
              <h3>Projets pilotes en cours</h3>
              <div class="country-tags">
                <span class="country-tag"><span class="flag flag-dj"></span> Djibouti</span>
                <span class="country-tag"><span class="flag flag-mz"></span> Mozambique</span>
                <span class="country-tag"><span class="flag flag-zm"></span> Zambie</span>
              </div>
            </div>
            <div class="presence-block">
              <h3>Présence</h3>
              <div class="country-tags">
                <span class="country-tag"><span class="flag flag-et"></span> Éthiopie</span>
                <span class="country-tag"><span class="flag flag-td"></span> Tchad</span>
                <span class="country-tag"><span class="flag flag-ci"></span> Côte d'Ivoire</span>
                <span class="country-tag"><span class="flag flag-km"></span> Comores</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Intéressé par nos projets ?</h2>
          <p>Fiches projets types, références techniques ou modélisations disponibles sur demande.</p>
          <NuxtLink to="/contact" class="cta-button">Demander des informations</NuxtLink>
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
  title: 'Nos Réalisations - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les projets d\'infrastructures d\'ARIDGE en Afrique : routes, logements, hydraulique, logistique.'
    }
  ]
})
</script>

<style scoped>
.realisations-page {
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

.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(27, 122, 126, 0.08);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
  border-color: var(--color-primary);
}

.project-category {
  font-size: 0.85rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.project-title {
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 10px;
  line-height: 1.3;
}

.project-location {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.icon-inline {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  vertical-align: middle;
}

.icon-location-inline {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231b7a7e' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
}

.project-description {
  color: #555;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 20px;
}

.project-status {
  margin-top: auto;
}

.status-badge {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: var(--font-weight-semibold);
}

/* Présence Section */
.presence-section {
  padding: 80px 20px;
  background: white;
}

.presence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.presence-block {
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  padding: 35px;
  border-radius: 16px;
  text-align: center;
}

.presence-block h3 {
  font-size: 1.3rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 25px;
}

.country-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.country-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: white;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: var(--font-weight-semibold);
  color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.flag {
  display: inline-block;
  width: 20px;
  height: 14px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
}

.flag-dj {
  background: linear-gradient(180deg, #6ab2e7 50%, #12ad2b 50%);
  position: relative;
}

.flag-mz {
  background: linear-gradient(180deg, #009a44 33%, #000 33%, #000 50%, #fce100 50%, #fce100 67%, #d21034 67%);
}

.flag-zm {
  background: #198a00;
}

.flag-et {
  background: linear-gradient(180deg, #078930 33%, #fcdd09 33%, #fcdd09 67%, #da121a 67%);
}

.flag-td {
  background: linear-gradient(90deg, #002664 33%, #fecb00 33%, #fecb00 67%, #c60c30 67%);
}

.flag-ci {
  background: linear-gradient(90deg, #f77f00 33%, #fff 33%, #fff 67%, #009e60 67%);
}

.flag-km {
  background: linear-gradient(180deg, #ffc61e 25%, #fff 25%, #fff 50%, #ce1126 50%, #ce1126 75%, #3d8e33 75%);
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
  .projects-section,
  .presence-section,
  .cta-section {
    padding: 60px 20px;
  }

  .intro-text {
    font-size: 1.15rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 25px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }
}
</style>
