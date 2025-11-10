<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Aridge</h4>
        <p>Construction et financement d'infrastructure.</p>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-11c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5zm2.5-7h-10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="#services">Services</NuxtLink></li>
          <li><NuxtLink to="#expertise">Expertise</NuxtLink></li>
          <li><NuxtLink to="#realizations">Réalisations</NuxtLink></li>
          <li><NuxtLink to="#news">Actualités</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Hatt International Group</h4>
        <p>Conception d'infrastructures routières et autoroutières.</p>
      </div>

      <div class="footer-section">
        <h4>Réseaux Sociaux</h4>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; Aridge 2025. All rights reserved.</p>
      <div class="footer-links">
        <NuxtLink to="#">Termes et conditions</NuxtLink>
        <NuxtLink to="#">Politique de confidentialité</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  color: white;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: var(--spacing-sm);
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-speed);
}

.footer-section a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: background-color var(--transition-speed);
}

.social-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-bottom {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }
}
</style>
