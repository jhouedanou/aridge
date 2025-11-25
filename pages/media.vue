<template>
  <div class="media-page">
    <div class="media-hero animate-section">
      <div class="container">
        <h1 class="animate-title">{{ pageTitle }}</h1>
        <p class="animate-content">{{ pageDescription }}</p>
      </div>
    </div>

    <div class="container media-container">
      <div class="media-grid animate-content">
        <div class="media-card animate-item" style="--animate-delay: 0s">
          <div class="media-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="media-content">
            <h3>{{ documentTitle }}</h3>
            <p class="media-description">{{ documentDescription }}</p>
            <div class="media-meta">
              <span class="media-type">PDF</span>
              <span class="media-size">{{ documentSize }}</span>
            </div>
          </div>
          <div class="media-actions">
            <a :href="pdfUrl" target="_blank" rel="noopener noreferrer" class="btn btn-view">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Lire
            </a>
            <a :href="pdfUrl" download class="btn btn-download">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger
            </a>
          </div>
        </div>
      </div>

      <div class="pdf-viewer animate-item" style="--animate-delay: 0.2s">
        <h2 class="viewer-title">Aperçu du document</h2>
        <div class="iframe-wrapper">
          <iframe
            :src="pdfUrl"
            class="pdf-iframe"
            title="Visualiseur PDF"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

definePageMeta({
  layout: 'default'
})

const { getText } = useContent()

const pageTitle = computed(() => getText('mediaPage.title', 'Nos Médias'))
const pageDescription = computed(() => getText('mediaPage.description', 'Consultez nos brochures et documents'))
const documentTitle = computed(() => getText('mediaPage.documentTitle', 'Brochure ARIDGE'))
const documentDescription = computed(() => getText('mediaPage.documentDescription', 'Découvrez notre brochure complète présentant nos services et réalisations'))
const documentSize = computed(() => getText('mediaPage.documentSize', '2.5 MB'))

const pdfUrl = '/brochure-aridge.pdf'

useHead({
  title: 'Médias - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Téléchargez et consultez nos brochures et documents présentant les projets et services d\'ARIDGE.'
    },
    {
      property: 'og:title',
      content: 'Médias - ARIDGE'
    },
    {
      property: 'og:description',
      content: 'Accédez à nos documents et brochures'
    }
  ]
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.animate-section {
  animation: subtleFadeIn 0.9s ease-out;
}

.animate-title {
  animation: subtleSlideInUp 0.9s ease-out;
}

.animate-content {
  animation: subtleFadeIn 0.9s ease-out 0.2s both;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.media-page {
  min-height: 100vh;
  background-color: var(--color-bg-light);
}

.media-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
}

.media-container {
  padding: var(--spacing-3xl) 0;
}

.media-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.media-card {
  background: white;
  border-radius: 12px;
  padding: var(--spacing-2xl);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-xl);
  align-items: center;
  transition: all var(--transition-speed);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.media-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 40px;
    height: 40px;
  }
}

.media-content {
  h3 {
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
    font-weight: var(--font-weight-bold);
  }

  .media-description {
    color: var(--color-text-light);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
}

.media-meta {
  display: flex;
  gap: var(--spacing-md);
  font-size: 0.9rem;

  .media-type {
    background-color: var(--color-primary);
    color: white;
    padding: 4px 12px;
    border-radius: 16px;
    font-weight: var(--font-weight-semibold);
  }

  .media-size {
    color: var(--color-text-light);
  }
}

.media-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 31px;
  text-decoration: none;
  font-family: "Source Sans Pro", var(--font-primary);
  font-size: 14px;
  font-weight: 600;
  transition: all var(--transition-speed);
  white-space: nowrap;
  min-width: 140px;
}

.btn-view {
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
  }
}

.btn-download {
  background-color: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
}

.pdf-viewer {
  background: white;
  border-radius: 12px;
  padding: var(--spacing-2xl);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  .viewer-title {
    color: var(--color-primary);
    font-size: 1.8rem;
    margin-bottom: var(--spacing-xl);
    font-weight: var(--font-weight-bold);
  }
}

.iframe-wrapper {
  width: 100%;
  height: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 1024px) {
  .media-card {
    grid-template-columns: auto 1fr;
    gap: var(--spacing-lg);

    .media-actions {
      grid-column: 1 / -1;
      flex-direction: row;
      justify-content: center;
    }
  }

  .iframe-wrapper {
    height: 600px;
  }
}

@media (max-width: 768px) {
  .media-hero {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0 var(--spacing-md);
    }
  }

  .media-container {
    padding: var(--spacing-2xl) 0;
  }

  .media-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--spacing-xl);

    .media-actions {
      flex-direction: column;
    }
  }

  .media-icon {
    margin: 0 auto;
  }

  .iframe-wrapper {
    height: 500px;
  }

  .pdf-viewer {
    padding: var(--spacing-lg);

    .viewer-title {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 480px) {
  .media-hero h1 {
    font-size: 1.5rem;
  }

  .media-hero p {
    font-size: 0.9rem;
  }

  .media-card {
    padding: var(--spacing-lg);

    h3 {
      font-size: 1.2rem;
    }
  }

  .iframe-wrapper {
    height: 400px;
  }

  .btn {
    width: 100%;
  }
}
</style>
