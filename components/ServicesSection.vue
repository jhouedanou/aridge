<template>
  <section id="services" class="services">
    <div class="container">
      <div class="who-section">
        <div class="who-content">
          <h2>Qui sommes-nous ?</h2>
          <p>Aridge Roads & Infrastructure Development Group spécialiste de la conception, du financement et de la réalisation d'infrastructures, notamment dans les domaines de la logistique et des services industriels.</p>
        </div>

        <div class="who-logos">
          <div class="logo-item">
            <img src="/hh-group.svg" alt="HH Group" />
            <h4>Hatt International Group</h4>
            <p>Conception d'infrastructures routières et autoroutières avec expertise en BTP.</p>
          </div>

          <div class="logo-item">
            <img src="/imaar.svg" alt="IMAAR Financial Group" />
            <h4>Imaar Financial Group (IFG)</h4>
            <p>Spécialisé dans le financement structuré des infrastructures.</p>
          </div>
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

.who-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: flex-start;
  margin-bottom: var(--spacing-3xl);
}

.who-content h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
}

.who-content p {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.who-logos {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
}

.logo-item {
  background: var(--color-bg-light);
  padding: var(--spacing-2xl);
  border-radius: 8px;
  text-align: center;
  transition: all var(--transition-speed);
}

.logo-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(27, 122, 126, 0.1);
}

.logo-item img {
  height: 60px;
  margin-bottom: var(--spacing-lg);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.logo-item h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

.logo-item p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
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

  .who-section {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .who-content h2 {
    font-size: 1.5rem;
  }

  .expertise-sections {
    grid-template-columns: 1fr;
  }
}
</style>
