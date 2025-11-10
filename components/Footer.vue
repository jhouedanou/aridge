<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content container">
        <div class="row">
      <!-- Section ARIDGE -->
        <div class="footer-section col-md-4 col-12">
          <h3 class="footer-title">ARIDGE</h3>
          <p class="footer-text">Construction et financement d'infrastructures</p>
        </div>

        <!-- Section HALT GROUP -->
        <div class="footer-section col-md-2 col-12">
          <h3 class="footer-title">HALT GROUP</h3>
          <p class="footer-text">
            Halt International<br>
            Building<br>
            J542+HC2, Avenue<br>
            Franchet d'Esperey,<br>
            Plateau Serpent,<br>
            Djibouti
          </p>
        </div>

        <!-- Section IMAAD FG -->
        <div class="footer-section col-md-2 col-12">
          <h3 class="footer-title">IMAAD FG</h3>
          <p class="footer-text">
            Abidjan Cocody<br>
            Riviera IV, Rue Sol Béni,<br>
            Immeuble KAYOA
          </p>
        </div>

        <!-- Section Social Media -->
        <div class="footer-section col-md-3 col-12">
          <h3 class="footer-title">Social media</h3>
          <div class="social-links d-flex flex-row flex-wrap">
            <a href="#" class="social-link" title="LinkedIn">Linkedin</a>
            <a href="#" class="social-link" title="Instagram">Instagram</a>
            <a href="#" class="social-link" title="YouTube">Youtube</a>
            <a href="#" class="social-link" title="X (Twitter)">X</a>
            <a href="#" class="social-link" title="Facebook">Facebook</a>
          </div>
        </div>
        </div>
  
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>&copy; 2024 ARIDGE. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped lang="scss">
.footer {
  background-color: #f5f5f5;
  padding: var(--spacing-3xl) 0 var(--spacing-2xl);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-family: 'Source Sans Pro';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #0a6678;
  margin-bottom: var(--spacing-md);
  margin-top: 0;
}

.footer-text {
  font-family: 'Source Sans Pro';
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #0a6678;
  margin: 0;
}

.social-links {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  transition: all var(--transition-speed);
  color: #0a6678;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #0a6678;
    color: white;
  }
}

.footer-bottom {
  border-top: 1px solid #ddd;
  padding-top: var(--spacing-2xl);
  text-align: center;

  p {
    font-family: 'Source Sans Pro';
    font-size: 14px;
    font-weight: 300;
    color: #0a6678;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .footer-title {
    font-size: 16px;
  }

  .footer-text {
    font-size: 14px;
  }

  .footer-bottom {
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-lg);
  }
}
</style>
