<template>
  <div class="carriere-page">


    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="hero-title">Rejoignez notre équipe</h1>
          <p class="hero-description">
            Faites partie d'une entreprise panafricaine innovante qui construit l'avenir des infrastructures en Afrique.
          </p>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="application-section">
        <div class="container">
          <div class="form-wrapper">
            <h2 class="section-title">Postuler à ARIDGE</h2>
            <p class="section-description">
              Remplissez le formulaire ci-dessous pour soumettre votre candidature. Tous les champs sont obligatoires.
            </p>

            <form @submit.prevent="handleSubmit" class="application-form">
              <!-- Personal Information -->
              <div class="form-section">
                <h3 class="form-section-title">Informations personnelles</h3>

                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName" class="form-label">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      v-model="formData.firstName"
                      required
                      class="form-input"
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div class="form-group">
                    <label for="lastName" class="form-label">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      v-model="formData.lastName"
                      required
                      class="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div class="form-row">
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

                  <div class="form-group">
                    <label for="phone" class="form-label">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="formData.phone"
                      required
                      class="form-input"
                      placeholder="+253 XX XX XX XX"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="address" class="form-label">Adresse *</label>
                  <input
                    type="text"
                    id="address"
                    v-model="formData.address"
                    required
                    class="form-input"
                    placeholder="Votre adresse complète"
                  />
                </div>
              </div>

              <!-- Position Information -->
              <div class="form-section">
                <h3 class="form-section-title">Informations sur le poste</h3>

                <div class="form-group">
                  <label for="position" class="form-label">Poste souhaité *</label>
                  <select
                    id="position"
                    v-model="formData.position"
                    required
                    class="form-input form-select"
                  >
                    <option value="">Sélectionnez un poste</option>
                    <option value="ingenieur-civil">Ingénieur Civil</option>
                    <option value="architecte">Architecte</option>
                    <option value="chef-projet">Chef de Projet</option>
                    <option value="conducteur-travaux">Conducteur de Travaux</option>
                    <option value="gestionnaire-financier">Gestionnaire Financier</option>
                    <option value="charge-etudes">Chargé d'Études</option>
                    <option value="technicien-btp">Technicien BTP</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div class="form-group" v-if="formData.position === 'autre'">
                  <label for="otherPosition" class="form-label">Précisez le poste *</label>
                  <input
                    type="text"
                    id="otherPosition"
                    v-model="formData.otherPosition"
                    :required="formData.position === 'autre'"
                    class="form-input"
                    placeholder="Décrivez le poste souhaité"
                  />
                </div>

                <div class="form-group">
                  <label for="experience" class="form-label">Années d'expérience *</label>
                  <select
                    id="experience"
                    v-model="formData.experience"
                    required
                    class="form-input form-select"
                  >
                    <option value="">Sélectionnez votre expérience</option>
                    <option value="0-2">0-2 ans</option>
                    <option value="3-5">3-5 ans</option>
                    <option value="6-10">6-10 ans</option>
                    <option value="10+">Plus de 10 ans</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="availability" class="form-label">Disponibilité *</label>
                  <select
                    id="availability"
                    v-model="formData.availability"
                    required
                    class="form-input form-select"
                  >
                    <option value="">Sélectionnez votre disponibilité</option>
                    <option value="immediatement">Immédiatement</option>
                    <option value="1-mois">Dans 1 mois</option>
                    <option value="2-mois">Dans 2 mois</option>
                    <option value="3-mois">Dans 3 mois ou plus</option>
                  </select>
                </div>
              </div>

              <!-- File Uploads -->
              <div class="form-section">
                <h3 class="form-section-title">Documents requis</h3>

                <div class="form-group">
                  <label for="cv" class="form-label">Curriculum Vitae (CV) *</label>
                  <div class="file-input-wrapper">
                    <input
                      type="file"
                      id="cv"
                      ref="cvInput"
                      @change="handleFileUpload($event, 'cv')"
                      accept=".pdf,.doc,.docx"
                      required
                      class="file-input"
                    />
                    <label for="cv" class="file-label">
                      <span class="file-icon">📄</span>
                      <span class="file-text">
                        {{ formData.cvFile ? formData.cvFile.name : 'Choisir un fichier (PDF, DOC, DOCX)' }}
                      </span>
                    </label>
                  </div>
                  <p class="file-info" v-if="formData.cvFile">
                    Taille: {{ formatFileSize(formData.cvFile.size) }}
                  </p>
                </div>

                <div class="form-group">
                  <label for="coverLetter" class="form-label">Lettre de motivation *</label>
                  <div class="file-input-wrapper">
                    <input
                      type="file"
                      id="coverLetter"
                      ref="coverLetterInput"
                      @change="handleFileUpload($event, 'coverLetter')"
                      accept=".pdf,.doc,.docx"
                      required
                      class="file-input"
                    />
                    <label for="coverLetter" class="file-label">
                      <span class="file-icon">📝</span>
                      <span class="file-text">
                        {{ formData.coverLetterFile ? formData.coverLetterFile.name : 'Choisir un fichier (PDF, DOC, DOCX)' }}
                      </span>
                    </label>
                  </div>
                  <p class="file-info" v-if="formData.coverLetterFile">
                    Taille: {{ formatFileSize(formData.coverLetterFile.size) }}
                  </p>
                </div>
              </div>

              <!-- Additional Message -->
              <div class="form-section">
                <h3 class="form-section-title">Message complémentaire</h3>

                <div class="form-group">
                  <label for="message" class="form-label">Votre message (optionnel)</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    class="form-textarea"
                    rows="5"
                    placeholder="Parlez-nous de vos motivations, compétences particulières, ou tout autre information pertinente..."
                  ></textarea>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button type="submit" class="submit-button" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Envoyer ma candidature</span>
                  <span v-else>Envoi en cours...</span>
                </button>
              </div>

              <!-- Info Message -->
              <div class="form-info">
                <p>
                  En soumettant ce formulaire, vos informations seront envoyées par email à notre équipe RH.
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Why Join Us Section -->
      <section class="why-join-section">
        <div class="container">
          <h2 class="section-title">Pourquoi rejoindre ARIDGE ?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon"><span class="icon-globe"></span></div>
              <h3 class="benefit-title">Impact Panafricain</h3>
              <p class="benefit-description">
                Contribuez à construire les infrastructures qui transforment l'Afrique
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon"><span class="icon-rocket"></span></div>
              <h3 class="benefit-title">Innovation</h3>
              <p class="benefit-description">
                Travaillez avec des technologies de pointe et des méthodologies modernes
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon"><span class="icon-team"></span></div>
              <h3 class="benefit-title">Équipe Multiculturelle</h3>
              <p class="benefit-description">
                Collaborez avec des professionnels talentueux de toute l'Afrique
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon"><span class="icon-growth"></span></div>
              <h3 class="benefit-title">Évolution de Carrière</h3>
              <p class="benefit-description">
                Développez vos compétences et progressez dans un environnement dynamique
              </p>
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

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  position: '',
  otherPosition: '',
  experience: '',
  availability: '',
  cvFile: null as File | null,
  coverLetterFile: null as File | null,
  message: ''
})

const isSubmitting = ref(false)
const cvInput = ref<HTMLInputElement | null>(null)
const coverLetterInput = ref<HTMLInputElement | null>(null)

const handleFileUpload = (event: Event, type: 'cv' | 'coverLetter') => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Le fichier est trop volumineux. Taille maximale : 5MB')
      target.value = ''
      return
    }

    if (type === 'cv') {
      formData.cvFile = file
    } else {
      formData.coverLetterFile = file
    }
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  // Validate files
  if (!formData.cvFile || !formData.coverLetterFile) {
    alert('Veuillez joindre votre CV et votre lettre de motivation')
    return
  }

  isSubmitting.value = true

  try {
    // Prepare email body
    const position = formData.position === 'autre' ? formData.otherPosition : formData.position

    const emailBody = `
NOUVELLE CANDIDATURE - ARIDGE

=== INFORMATIONS PERSONNELLES ===
Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Adresse: ${formData.address}

=== INFORMATIONS SUR LE POSTE ===
Poste souhaité: ${position}
Années d'expérience: ${formData.experience}
Disponibilité: ${formData.availability}

=== MESSAGE COMPLÉMENTAIRE ===
${formData.message || 'Aucun message'}

=== DOCUMENTS JOINTS ===
CV: ${formData.cvFile.name} (${formatFileSize(formData.cvFile.size)})
Lettre de motivation: ${formData.coverLetterFile.name} (${formatFileSize(formData.coverLetterFile.size)})

---
Cette candidature a été soumise via le formulaire en ligne sur le site web ARIDGE.
    `.trim()

    const subject = `Candidature ${position} - ${formData.firstName} ${formData.lastName}`

    // Create mailto link
    const mailtoLink = `mailto:info@aridge.dj?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    // Note: File attachments cannot be added via mailto
    // Opening the email client
    window.location.href = mailtoLink

    // Show success message
    setTimeout(() => {
      alert('Votre client email va s\'ouvrir. Veuillez joindre manuellement votre CV et votre lettre de motivation avant d\'envoyer l\'email.\n\nFichiers à joindre:\n- ' + formData.cvFile?.name + '\n- ' + formData.coverLetterFile?.name)
      isSubmitting.value = false
    }, 500)

  } catch (error) {
    console.error('Erreur lors de la soumission:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.carriere-page {
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

/* Hero Section */
.hero-section {
  position: relative;
  background: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 140px 20px 100px;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(10, 102, 120, 0.85) 0%, rgba(27, 122, 126, 0.75) 50%, rgba(21, 98, 102, 0.85) 100%);
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(248, 249, 250, 0.3));
    pointer-events: none;
    z-index: 2;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 24px;
  position: relative;
  z-index: 3;
  animation: subtleFadeIn 0.8s ease-out;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-description {
  font-size: 1.35rem;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 3;
  animation: subtleFadeIn 1s ease-out;
  font-weight: 300;
  color: white !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  padding: 20px 30px !important;
  border-radius: 12px !important;
  backdrop-filter: blur(8px) !important;
}

/* Application Section */
.application-section {
  padding: 100px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
}

.form-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 50px 60px;
  border-radius: 20px;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  animation: subtleScaleIn 0.6s ease-out;
  border: 1px solid rgba(27, 122, 126, 0.08);
}

.section-title {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    border-radius: 2px;
  }
}

.section-description {
  text-align: center;
  color: #555;
  margin-bottom: 50px;
  margin-top: 30px;
  line-height: 1.8;
  font-size: 1.1rem;
  font-weight: 300;
}

/* Form Sections */
.form-section {
  margin-bottom: 45px;
  padding-bottom: 45px;
  border-bottom: 1px solid #e9ecef;
  animation: subtleSlideInUp 0.6s ease-out;
  animation-fill-mode: both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 30px;
}

.form-section-title {
  font-size: 1.6rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 30px;
  padding-left: 15px;
  border-left: 4px solid var(--color-accent);
  letter-spacing: -0.3px;
}

/* Form Groups */
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
  color: #333;
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
  
  &:hover {
    border-color: #d1d5db;
    background-color: white;
  }
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(27, 122, 126, 0.12);
  background-color: white;
  transform: translateY(-1px);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* File Upload */
.file-input-wrapper {
  position: relative;
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.file-label {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 24px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #fafbfc 0%, #f9fafb 100%);
}

.file-label:hover {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, rgba(27, 122, 126, 0.05) 0%, rgba(27, 122, 126, 0.08) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(27, 122, 126, 0.1);
}

.file-icon {
  font-size: 1.5rem;
}

.file-text {
  flex: 1;
  color: #666;
  font-size: 0.95rem;
}

.file-info {
  margin-top: 8px;
  font-size: 0.85rem;
  color: #666;
}

/* Form Actions */
.form-actions {
  margin-top: 40px;
  text-align: center;
}

.submit-button {
  background: linear-gradient(135deg, var(--color-primary) 0%, #156266 100%);
  color: white;
  padding: 18px 56px;
  border: none;
  border-radius: 12px;
  font-size: 1.15rem;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 280px;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #156266 0%, #0f5156 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(27, 122, 126, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(27, 122, 126, 0.3);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.form-info {
  margin-top: 35px;
  padding: 24px 28px;
  background: linear-gradient(135deg, #f0f8f9 0%, #e8f4f5 100%);
  border-left: 5px solid var(--color-primary);
  border-radius: 10px;
  position: relative;
}

.form-info p {
  margin: 0;
  color: #444;
  font-size: 0.95rem;
  line-height: 1.7;
  font-weight: 300;
}

/* Why Join Section */
.why-join-section {
  padding: 100px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
    opacity: 0.3;
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 35px;
  margin-top: 60px;
}

.benefit-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 16px;
  background: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(27, 122, 126, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
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
  
  &:hover::before {
    transform: scaleX(1);
  }
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
  border-color: var(--color-primary);
}

.benefit-icon {
  font-size: 3.5rem;
  margin-bottom: 24px;
  display: inline-block;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.15) rotate(5deg);
}

.benefit-title {
  font-size: 1.35rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: 16px;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.benefit-card:hover .benefit-title {
  color: #156266;
}

.benefit-description {
  color: #555;
  line-height: 1.7;
  font-weight: 300;
  font-size: 1.05rem;
}

/* Icon styles */
.benefit-icon span {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: relative;
}

.benefit-icon span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-globe::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
}

.icon-rocket::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.5c-3.5 3.5-5 7-5 10.5 0 2.5 1 4.5 2.5 6l.5.5.5-.5c1.5-1.5 2.5-3.5 2.5-6 0-3.5-1.5-7-5-10.5zm0 13c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM4.5 19l3-3c-.5-1-1-2-1-3.5 0-1 .2-2 .5-3L3 13.5V19h1.5zm15 0V13.5L15.5 9.5c.3 1 .5 2 .5 3 0 1.5-.5 2.5-1 3.5l3 3H19.5z'/%3E%3C/svg%3E");
}

.icon-team::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E");
}

.icon-growth::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'/%3E%3C/svg%3E");
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 120px 20px 80px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1.1rem;
    padding: 18px 24px !important;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    border-radius: 12px !important;
    backdrop-filter: blur(8px) !important;
  }

  .form-wrapper {
    padding: 35px 25px;
    border-radius: 16px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .section-title {
    font-size: 1.8rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }

  .form-section-title {
    font-size: 1.35rem;
    padding-left: 12px;
    border-left-width: 3px;
  }

  .submit-button {
    width: 100%;
    min-width: unset;
    padding: 16px 40px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .benefit-card {
    padding: 35px 25px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 70px;
    
    &::after {
      height: 60px;
    }
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
    padding: 15px 20px !important;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    border-radius: 10px !important;
    backdrop-filter: blur(8px) !important;
  }

  .application-section,
  .why-join-section {
    padding: 70px 15px;
  }

  .form-wrapper {
    padding: 30px 20px;
    border-radius: 12px;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .section-description {
    font-size: 1rem;
    margin-bottom: 35px;
  }
  
  .form-section {
    margin-bottom: 35px;
    padding-bottom: 35px;
  }
  
  .form-section-title {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    padding: 12px 16px;
    font-size: 0.95rem;
  }
  
  .file-label {
    padding: 15px 18px;
  }
  
  .benefit-card {
    padding: 30px 20px;
  }
  
  .benefit-icon {
    font-size: 2.8rem;
  }
  
  .benefit-title {
    font-size: 1.15rem;
  }
  
  .benefit-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 20px;
  }

  .application-section,
  .why-join-section {
    padding: 60px 20px;
  }

  .form-wrapper {
    padding: 25px 15px;
  }
}
</style>
