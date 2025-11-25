<template>
  <div class="expertise-page">
    <PageHero 
      title="Expertise financière"
      description="Structuration de financements et partenariats public-privé"
    />

    <main class="main-content">
      <!-- Introduction -->
      <section class="intro-section">
        <div class="container">
          <p class="intro-text">
            Imaad Financial Group joue un rôle clé dans la réussite d'ARIDGE, en apportant 
            une expertise financière de premier plan pour structurer et financer 
            les projets d'infrastructures.
          </p>
        </div>
      </section>

      <!-- Services financiers -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Nos services financiers</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon"><span class="icon icon-bank"></span></div>
              <h3 class="service-title">Structuration de financements souverains et institutionnels</h3>
              <p class="service-description">
                Montage de financements avec les banques, fonds d'investissement 
                et compagnies d'assurance.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-partnership"></span></div>
              <h3 class="service-title">Partenariats Public-Privé (PPP)</h3>
              <p class="service-description">
                Montage et sécurisation de PPP avec garanties d'État pour 
                des projets d'infrastructure majeurs.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-global"></span></div>
              <h3 class="service-title">Syndication panafricaine et internationale</h3>
              <p class="service-description">
                Mobilisation de consortiums financiers pour des projets de grande envergure.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-chart"></span></div>
              <h3 class="service-title">Gestion d'actifs infrastructurels</h3>
              <p class="service-description">
                Gestion des actifs liés aux infrastructures : routes à péage, 
                résidences étudiantes, zones économiques spéciales.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon"><span class="icon icon-eco"></span></div>
              <h3 class="service-title">Structuration ESG</h3>
              <p class="service-description">
                Mise en conformité ESG pour attirer les financeurs à impact et green funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Partenaire -->
      <section class="partner-section">
        <div class="container">
          <h2 class="section-title">Notre partenaire financier</h2>
          <div class="partner-card">
            <div class="partner-logo">IFG</div>
            <div class="partner-content">
              <h3>Imaad Financial Group</h3>
              <p class="partner-location"><span class="icon-inline icon-location-inline"></span> Abidjan, Côte d'Ivoire</p>
              <p class="partner-description">
                Banque d'affaires panafricaine de référence spécialisée dans le financement 
                d'infrastructures, les PPP, le conseil stratégique et la structuration financière.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <h2>Besoin de financement pour votre projet ?</h2>
          <p>Nos experts financiers sont à votre disposition pour structurer vos projets d'infrastructure.</p>
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
  title: 'Expertise Financière - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Expertise financière ARIDGE : structuration de financements, PPP, syndication panafricaine et gestion d\'actifs infrastructurels.'
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

.icon-bank::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z'/%3E%3C/svg%3E");
}

.icon-partnership::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63 3.9-3.91-1.18-1.18-3.9 3.91-.38-.38a.9959.9959 0 0 1 0-1.41l4.24-4.24a.9959.9959 0 0 1 1.41 0l1.51 1.51 6.33-6.33c.39-.39 1.04-.39 1.43 0l5.66 5.66c.39.39.39 1.04 0 1.43l-6.33 6.33 1.51 1.51c.39.39.39 1.04 0 1.43l-4.24 4.24a.9959.9959 0 0 1-1.41 0l-.38-.38 3.9-3.9-1.18-1.18-3.9 3.9-.63-.66 7.04-7.05-4.46-4.47z'/%3E%3C/svg%3E");
}

.icon-global::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/%3E%3C/svg%3E");
}

.icon-chart::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'/%3E%3C/svg%3E");
}

.icon-eco::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93-2.77 2.34-4.71 5.61-5.39 9.32 2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z'/%3E%3C/svg%3E");
}

.icon-inline {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 5px;
  position: relative;
  top: -1px;
}

.icon-location-inline {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231b7a7e' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
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

/* Partner Section */
.partner-section {
  padding: 80px 20px;
  background: white;
}

.partner-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  padding: 50px;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(27, 122, 126, 0.1);
}

.partner-logo {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: white;
  flex-shrink: 0;
}

.partner-content h3 {
  font-size: 1.6rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 10px;
}

.partner-location {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: 15px;
}

.partner-description {
  color: var(--color-text-dark);
  line-height: 1.7;
  font-weight: 300;
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
  .partner-section,
  .cta-section {
    padding: 60px 20px;
  }

  .intro-text {
    font-size: 1.15rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .partner-card {
    flex-direction: column;
    text-align: center;
    padding: 35px 25px;
  }

  .partner-logo {
    width: 100px;
    height: 100px;
    font-size: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }
}
</style>
