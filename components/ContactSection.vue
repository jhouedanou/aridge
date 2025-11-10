<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info animate-content">
          <h2 class="animate-title">Restez en contact</h2>
          <p class="animate-item" style="--animate-delay: 0.1s">Nous serions heureux de vous aider dans vos projets d'infrastructure.</p>

          <div class="info-items">
            <div class="info-item animate-item" style="--animate-delay: 0.2s">
              <h4>Adresse</h4>
              <p>123 Rue de l'Infrastructure<br />75000 Paris, France</p>
            </div>
            <div class="info-item animate-item" style="--animate-delay: 0.3s">
              <h4>Téléphone</h4>
              <p><a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
            </div>
            <div class="info-item animate-item" style="--animate-delay: 0.4s">
              <h4>Email</h4>
              <p><a href="mailto:contact@aridge.com">contact@aridge.com</a></p>
            </div>
          </div>
        </div>

        <form class="contact-form animate-content" style="--animate-delay: 0.1s" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nom</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              placeholder="Votre nom"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Sujet</label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              placeholder="Sujet de votre message"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              placeholder="Votre message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Envoyer le message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  // Implement form submission logic
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.animate-content {
  animation: subtleSlideInUp 0.9s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.animate-title {
  animation: subtleSlideInUp 0.9s ease-out;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.contact {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: flex-start;
}

.contact-info h2 {
  color: white;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
}

.contact-info p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.8;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.info-item h4 {
  color: white;
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
}

.info-item p {
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.info-item a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color var(--transition-speed);
}

.info-item a:hover {
  color: white;
}

.contact-form {
  background: rgba(255, 255, 255, 0.95);
  padding: var(--spacing-2xl);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: var(--font-primary);
  font-size: 0.95rem;
  transition: border-color var(--transition-speed);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(27, 122, 126, 0.1);
}

.form-group textarea {
  resize: vertical;
}

.contact-form .btn {
  width: 100%;
  margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
  .contact {
    padding: var(--spacing-2xl) 0;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .contact-info h2 {
    font-size: 1.5rem;
  }

  .contact-form {
    padding: var(--spacing-lg);
  }
}
</style>
