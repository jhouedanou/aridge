<template>
  <div class="expertise-page">
    <PageHero 
      title="Expertise technique"
      description="Ingénierie de pointe, standards internationaux et solutions durables"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            Nous collaborons avec des bureaux d'études internationaux, des fournisseurs certifiés ISO, 
            et des experts locaux pour garantir la qualité, la résilience et la durabilité de chaque projet.
          </p>
        </div>
      </section>

      <!-- Compétences -->
      <section class="competences-section">
        <div class="container">
          <h2 class="section-title">Nos compétences</h2>
          <div class="competences-grid">
            <div class="competence-card">
              <div class="competence-icon"><span class="icon icon-design"></span></div>
              <h3 class="competence-title">Études techniques et conception BIM</h3>
              <p class="competence-description">
                Utilisation de la modélisation des données du bâtiment (BIM) pour optimiser 
                la conception et la coordination des projets.
              </p>
            </div>

            <div class="competence-card">
              <div class="competence-icon"><span class="icon icon-check"></span></div>
              <h3 class="competence-title">Maîtrise d'œuvre tous corps d'état (TCE)</h3>
              <p class="competence-description">
                Coordination complète de tous les métiers du bâtiment pour 
                une exécution harmonieuse des projets.
              </p>
            </div>

            <div class="competence-card">
              <div class="competence-icon"><span class="icon icon-modular"></span></div>
              <h3 class="competence-title">Construction modulaire et préfabriquée</h3>
              <p class="competence-description">
                Solutions de construction rapides et économiques utilisant 
                des éléments préfabriqués en usine.
              </p>
            </div>

            <div class="competence-card">
              <div class="competence-icon"><span class="icon icon-eco"></span></div>
              <h3 class="competence-title">Gestion environnementale & conformité ESG</h3>
              <p class="competence-description">
                Intégration des critères environnementaux, sociaux et de gouvernance 
                dans tous nos projets.
              </p>
            </div>

            <div class="competence-card">
              <div class="competence-icon"><span class="icon icon-maintenance"></span></div>
              <h3 class="competence-title">Maintenance & gestion d'actifs</h3>
              <p class="competence-description">
                Services de maintenance préventive et curative pour prolonger 
                la durée de vie des infrastructures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies et Matériaux -->
      <section class="tech-section">
        <div class="container">
          <div class="tech-grid">
            <div class="tech-block">
              <h3 class="tech-title">Matériaux</h3>
              <ul class="tech-list">
                <li>Béton bas carbone</li>
                <li>Acier recyclé</li>
                <li>Terre stabilisée</li>
                <li>Matériaux locaux</li>
              </ul>
            </div>

            <div class="tech-block">
              <h3 class="tech-title">Techniques de construction</h3>
              <ul class="tech-list">
                <li>Construction modulaire</li>
                <li>Impression 3D béton</li>
                <li>Construction sèche</li>
              </ul>
            </div>

            <div class="tech-block">
              <h3 class="tech-title">Technologies</h3>
              <ul class="tech-list">
                <li>BIM (Building Information Modeling)</li>
                <li>Géomatique</li>
                <li>Capteurs IoT pour maintenance prédictive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="certifications-section">
        <div class="container">
          <h2 class="section-title">Certifications</h2>
          <div class="certification-badge">
            <span class="badge-icon"></span>
            <span class="badge-text">ISO 27001</span>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Besoin d'expertise technique ?</h2>
          <p>Nos équipes d'ingénieurs sont à votre disposition pour discuter de vos projets.</p>
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
  title: 'Expertise Technique - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Expertise technique ARIDGE : BIM, construction modulaire, gestion ESG, maintenance d\'actifs avec des standards internationaux.'
    }
  ]
})
</script>

<style scoped>
.expertise-page {
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

.competences-section {
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

.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.competence-card {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(27, 122, 126, 0.08);
  text-align: center;
}

.competence-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
  border-color: var(--color-primary);
}

.competence-icon {
  margin-bottom: 20px;
}

.competence-icon .icon {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: relative;
}

.competence-icon .icon::before {
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

.icon-design::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22.7 14.3L21.7 15.3l-1.6-1.6 1-1c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1 1-1.6-1.6 1-1c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1 1-1.6-1.6.9-1c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12.6 8 11 6.4 9.6 7.8l1.6 1.6-1 1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1-1 1.6 1.6-1 1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1-1 1.6 1.6-1 1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1-1 1.6 1.6-1 1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1-1 1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4L22.7 14.3zM7.94 5.12L6.49 3.66C4.91 5.24 4 7.51 4 10h2c0-1.85.63-3.55 1.94-4.88zM4 12H2c0 5.19 3.95 9.45 9 9.95v-2.02C7.06 19.44 4 16.07 4 12z'/%3E%3C/svg%3E");
}

.icon-check::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E");
}

.icon-modular::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E");
}

.icon-eco::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93-2.77 2.34-4.71 5.61-5.39 9.32 2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z'/%3E%3C/svg%3E");
}

.icon-maintenance::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/%3E%3C/svg%3E");
}

.competence-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 15px;
  line-height: 1.4;
}

.competence-description {
  color: #555;
  line-height: 1.7;
  font-weight: 300;
}

/* Tech Section */
.tech-section {
  padding: 80px 20px;
  background: white;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.tech-block {
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  padding: 35px;
  border-radius: 16px;
  border-left: 5px solid var(--color-primary);
}

.tech-title {
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 20px;
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li {
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  color: #444;
  font-weight: 300;
  line-height: 1.6;
}

.tech-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* Certifications */
.certifications-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.certification-badge {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 20px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(27, 122, 126, 0.1);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 300px;
}

.badge-icon {
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: relative;
}

.badge-icon::before {
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z'/%3E%3C/svg%3E");
}

.badge-text {
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
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
  .competences-section,
  .tech-section,
  .certifications-section,
  .cta-section {
    padding: 60px 20px;
  }

  .intro-text {
    font-size: 1.15rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tech-block {
    padding: 25px 20px;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }
}
</style>
