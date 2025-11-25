<template>
  <div class="contact-page">
    <PageHero 
      title="Contactez-nous"
      description="N'hésitez pas à nous contacter pour toute demande d'information ou de partenariat"
    />

    <main class="main-content">
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <!-- Formulaire -->
            <div class="form-wrapper">
              <h2 class="form-title">Envoyez-nous un message</h2>
              <form @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="nom" class="form-label">Nom complet *</label>
                    <input
                      type="text"
                      id="nom"
                      v-model="formData.nom"
                      required
                      class="form-input"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email" class="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      required
                      class="form-input"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="telephone" class="form-label">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      v-model="formData.telephone"
                      class="form-input"
                      placeholder="+253 XX XX XX XX"
                    />
                  </div>

                  <div class="form-group">
                    <label for="entreprise" class="form-label">Entreprise / Organisation</label>
                    <input
                      type="text"
                      id="entreprise"
                      v-model="formData.entreprise"
                      class="form-input"
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="sujet" class="form-label">Sujet *</label>
                  <select
                    id="sujet"
                    v-model="formData.sujet"
                    required
                    class="form-input form-select"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="devis">Demande de devis</option>
                    <option value="carriere">Carrière</option>
                    <option value="presse">Presse / Média</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Message *</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    class="form-textarea"
                    rows="6"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>

                <div class="form-actions">
                  <button type="submit" class="submit-button" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">Envoyer le message</span>
                    <span v-else>Envoi en cours...</span>
                  </button>
                </div>
              </form>
            </div>

            <!-- Informations de contact -->
            <div class="contact-info">
              <div class="info-card">
                <h3 class="info-title">Siège social</h3>
                <div class="info-content">
                  <p class="info-address">
                    Zone Franche de Damerjog<br>
                    Route de Doraleh Zone industrielle<br>
                    Bureau A204<br>
                    <strong>Djibouti</strong>
                  </p>
                  <p class="info-bp">BP 6284</p>
                  <div class="info-contacts">
                    <a href="tel:+25321354408" class="info-link">
                      <span class="icon-inline icon-phone-inline"></span> +253 21 35 44 08
                    </a>
                    <span class="info-link">
                      <span class="icon-inline icon-fax-inline"></span> +253 21 35 44 21
                    </span>
                  </div>
                </div>
              </div>

              <div class="info-card">
                <h3 class="info-title">Bureau régional</h3>
                <div class="info-content">
                  <p class="info-address">
                    Plateau<br>
                    <strong>Abidjan, Côte d'Ivoire</strong>
                  </p>
                </div>
              </div>

              <div class="info-card email-card">
                <h3 class="info-title">Email</h3>
                <a href="mailto:info@aridge.africa" class="email-link">
                  info@aridge.africa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Contact - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Contactez ARIDGE pour vos projets d\'infrastructure en Afrique. Siège social à Djibouti, bureau régional à Abidjan.'
    }
  ]
})

const formData = reactive({
  nom: '',
  email: '',
  telephone: '',
  entreprise: '',
  sujet: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    const sujetLabels: Record<string, string> = {
      information: 'Demande d\'information',
      partenariat: 'Proposition de partenariat',
      devis: 'Demande de devis',
      carriere: 'Carrière',
      presse: 'Presse / Média',
      autre: 'Autre'
    }

    const emailBody = `
NOUVEAU MESSAGE - SITE WEB ARIDGE

=== COORDONNÉES ===
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone || 'Non renseigné'}
Entreprise: ${formData.entreprise || 'Non renseignée'}

=== DEMANDE ===
Sujet: ${sujetLabels[formData.sujet] || formData.sujet}

Message:
${formData.message}

---
Ce message a été envoyé via le formulaire de contact du site web ARIDGE.
    `.trim()

    const subject = `[Site Web] ${sujetLabels[formData.sujet]} - ${formData.nom}`

    const mailtoLink = `mailto:info@aridge.africa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink

    setTimeout(() => {
      isSubmitting.value = false
    }, 1000)

  } catch (error) {
    console.error('Erreur lors de la soumission:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Form Wrapper */
.form-wrapper {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
}

.form-title {
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 35px;
  position: relative;
  padding-bottom: 15px;
}

.form-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 2px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 8px;
  color: var(--color-text-dark);
  font-size: 0.95rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background-color: #fafbfc;
}

.form-input:hover,
.form-select:hover,
.form-textarea:hover {
  border-color: #d1d5db;
  background-color: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(27, 122, 126, 0.12);
  background-color: white;
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 45px;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-actions {
  margin-top: 30px;
}

.submit-button {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: 16px 40px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(27, 122, 126, 0.3);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(27, 122, 126, 0.08);
}

.info-title {
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f8f9;
}

.info-address {
  color: #444;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 10px;
}

.info-address strong {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
}

.info-bp {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.info-contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon-inline {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-phone-inline {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231b7a7e' viewBox='0 0 24 24'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E");
}

.icon-fax-inline {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231b7a7e' viewBox='0 0 24 24'%3E%3Cpath d='M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z'/%3E%3C/svg%3E");
}

.info-link {
  color: #444;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

a.info-link:hover {
  color: var(--color-primary);
}

.email-card {
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  border-left: 5px solid var(--color-primary);
}

.email-link {
  color: var(--color-primary);
  font-size: 1.15rem;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info {
    order: -1;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .info-card {
    flex: 1;
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 20px;
  }

  .form-wrapper {
    padding: 35px 25px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .contact-info {
    flex-direction: column;
  }

  .info-card {
    min-width: unset;
  }
}
</style>
