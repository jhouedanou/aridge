<template>
  <div class="under-construction">
    <div class="container">
      <div class="construction-content">
        <div class="construction-icon">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(100,100)">
              <circle cx="0" cy="0" r="90" fill="none" stroke="var(--color-primary)" stroke-width="3"/>
              <path d="M -30,-20 L -30,30 L 30,30 L 30,-20 Z" fill="var(--color-primary)" opacity="0.3"/>
              <rect x="-20" y="-10" width="10" height="10" fill="var(--color-primary)"/>
              <rect x="10" y="-10" width="10" height="10" fill="var(--color-primary)"/>
              <path d="M -35,-25 L 35,-25 L 35,-35 L -35,-35 Z" fill="var(--color-primary)" opacity="0.2"/>
            </g>
          </svg>
        </div>

        <h1 class="construction-title">{{ t('underConstruction.title') }}</h1>

        <p class="construction-subtitle">
          {{ t('underConstruction.subtitle') }}
        </p>

        <div class="construction-features">
          <div v-for="(feature, index) in t('underConstruction.features')" :key="index" class="feature-item">
            <div class="feature-icon">✓</div>
            <p>{{ feature }}</p>
          </div>
        </div>

        <div class="construction-actions">
          <NuxtLink to="/" class="btn btn-primary">{{ t('underConstruction.backHome') }}</NuxtLink>
          <a href="mailto:contact@aridge.com" class="btn btn-outline">{{ t('underConstruction.contactUs') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

definePageMeta({
  layout: 'default'
})

const { t } = useTranslation()

useHead({
  title: 'Actualités et Réalisations - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les dernières actualités, projets et réalisations d\'ARIDGE dans le domaine de la construction et du financement d\'infrastructures en Afrique.'
    },
    {
      name: 'keywords',
      content: 'actualités, réalisations, projets infrastructure, news ARIDGE, développement Afrique'
    },
    {
      property: 'og:title',
      content: 'Actualités et Réalisations - ARIDGE'
    },
    {
      property: 'og:description',
      content: 'Les derniers projets d\'infrastructure menés par ARIDGE en Afrique de l\'Ouest et subsaharienne.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://aridge.com/actualites'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Actualités - ARIDGE'
    },
    {
      name: 'twitter:description',
      content: 'Suivez les derniers projets et actualités d\'ARIDGE'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://aridge.com/actualites'
    }
  ]
})
</script>

<style scoped>
.under-construction {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-bg-light) 0%, #f0f9fa 100%);
  padding: var(--spacing-3xl) var(--spacing-md);
}

.container {
  width: 100%;
  max-width: 600px;
}

.construction-content {
  text-align: center;
  animation: slideInUp 0.8s ease-out;
}

.construction-icon {
  width: 150px;
  height: 150px;
  margin: 0 auto var(--spacing-3xl);
  animation: bounce 2s infinite;
}

.construction-icon svg {
  width: 100%;
  height: 100%;
}

.construction-title {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

.construction-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-3xl);
  line-height: 1.8;
}

.construction-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-3xl);
  background: white;
  padding: var(--spacing-2xl);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(27, 122, 126, 0.1);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.feature-item p {
  margin: 0;
  color: var(--color-text-dark);
  text-align: left;
}

.construction-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-direction: column;
}

.btn {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  transition: all var(--transition-speed);
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(27, 122, 126, 0.3);
}

.btn-outline {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .construction-title {
    font-size: 2rem;
  }

  .construction-subtitle {
    font-size: 1rem;
  }

  .construction-actions {
    flex-direction: column;
  }

  .construction-features {
    grid-template-columns: 1fr;
  }
}
</style>
