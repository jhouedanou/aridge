<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2>Qui sommes-nous ?</h2>
        <p>Aridge Roads & Infrastructure Development Group spécialiste de la conception, du financement et de la réalisation d'infrastructures, notamment dans les domaines de la logistique et des services industriels.</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-logo">
            <img src="/hh-group.svg" alt="HH Group" />
          </div>
          <h3>Hatt International Group</h3>
          <p>Conception d'infrastructures routières et autoroutières avec expertise en BTP. Leader sur le marché international des grands projets.</p>
        </div>

        <div class="service-card">
          <div class="service-logo">
            <img src="/imaar.svg" alt="IMAAR Financial Group" />
          </div>
          <h3>Imaar Financial Group (IFG)</h3>
          <p>Spécialisé dans le financement structuré des infrastructures, notamment infrastructures publiques, BTP, routes, autoroutes et ports.</p>
        </div>
      </div>

      <div class="expertise-sections">
        <div class="expertise-box">
          <h3>Nos services d'assistance</h3>
          <ul>
            <li>Études techniques et conception BIM</li>
            <li>Construction modulaire et préfabriquée</li>
            <li>Gestion environnementale et ESG</li>
            <li>Maintenance et gestion d'actifs d'infrastructures</li>
          </ul>
        </div>

        <div class="expertise-box">
          <h3>Nos services Financiers</h3>
          <p>Structuration de financements souverains et institutionnels</p>
          <p>Spécialisation dans les domaines de l'Afrique Subsaharienne</p>
          <ul class="inline-list">
            <li>Levée de fonds syndicalisés</li>
            <li>Partenariats Public-Privés</li>
            <li>Gestion d'actifs de infrastructures</li>
          </ul>
        </div>
      </div>

      <div class="solutions-grid">
        <div class="solution-item">
          <img src="/construction.jpg" alt="Construction" />
          <p>Solutions de construction intégrées</p>
        </div>
        <div class="solution-item">
          <img src="/workers.jpg" alt="Experts" />
          <p>Expertise technique éprouvée</p>
        </div>
        <div class="solution-item">
          <img src="/equipment.jpg" alt="Équipements" />
          <p>Équipements modernes et performants</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Services section component
</script>

<style scoped>
.services {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-white);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.service-card {
  background: var(--color-bg-light);
  padding: var(--spacing-2xl);
  border-radius: 8px;
  text-align: center;
  transition: all var(--transition-speed);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
}

.service-logo {
  height: 80px;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-logo img {
  max-height: 100%;
  max-width: 100%;
}

.service-card h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.3rem;
}

.service-card p {
  color: var(--color-text-light);
  line-height: 1.8;
}

.expertise-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
  padding: var(--spacing-2xl);
  background: var(--color-bg-light);
  border-radius: 8px;
}

.expertise-box h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-size: 1.2rem;
}

.expertise-box ul {
  list-style-position: inside;
  color: var(--color-text-light);
}

.expertise-box li {
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-md);
}

.inline-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.inline-list li {
  list-style: none;
  padding: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  font-size: 0.9rem;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.solution-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 250px;
}

.solution-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.solution-item:hover img {
  transform: scale(1.05);
}

.solution-item p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  padding: var(--spacing-lg);
  margin: 0;
  font-weight: 600;
}

@media (max-width: 768px) {
  .services {
    padding: var(--spacing-2xl) 0;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .services-grid,
  .expertise-sections {
    grid-template-columns: 1fr;
  }
}
</style>
