<template>
  <div class="search-page">
    <div class="search-hero animate-section">
      <div class="container">
        <h1 class="animate-title">{{ pageTitle }}</h1>
        <div class="search-input-wrapper animate-content">
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="performSearch"
            :placeholder="searchPlaceholder"
            class="search-input-large"
          />
          <button @click="performSearch" class="search-btn-large">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
        <p class="search-query-display" v-if="currentQuery">
          Résultats pour : <strong>"{{ currentQuery }}"</strong>
        </p>
      </div>
    </div>

    <div class="container search-container">
      <div v-if="!currentQuery" class="no-search animate-item">
        <div class="search-icon-large">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <h2>{{ noSearchTitle }}</h2>
        <p>{{ noSearchDescription }}</p>
      </div>

      <div v-else-if="searchResults.length === 0" class="no-results animate-item">
        <div class="no-results-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h2>{{ noResultsTitle }}</h2>
        <p>{{ noResultsDescription }}</p>
      </div>

      <div v-else class="results-section">
        <p class="results-count animate-item">
          {{ searchResults.length }} {{ searchResults.length > 1 ? 'résultats trouvés' : 'résultat trouvé' }}
        </p>

        <div class="results-grid">
          <div
            v-for="(result, index) in searchResults"
            :key="result.id"
            class="result-card animate-item"
            :style="{ '--animate-delay': `${index * 0.1}s` }"
          >
            <div class="result-type">{{ result.type }}</div>
            <h3 class="result-title">{{ result.title }}</h3>
            <p class="result-excerpt">{{ result.excerpt }}</p>
            <NuxtLink :to="result.link" class="result-link">
              Voir plus →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContent } from '~/composables/useContent'

interface SearchResult {
  id: string
  type: string
  title: string
  excerpt: string
  link: string
  content: string
}

const route = useRoute()
const { getText, getContent } = useContent()

const searchQuery = ref('')
const currentQuery = ref('')
const searchResults = ref<SearchResult[]>([])

const pageTitle = computed(() => getText('searchPage.title', 'Rechercher'))
const searchPlaceholder = computed(() => getText('searchPage.placeholder', 'Que recherchez-vous ?'))
const noSearchTitle = computed(() => getText('searchPage.noSearchTitle', 'Commencez votre recherche'))
const noSearchDescription = computed(() => getText('searchPage.noSearchDescription', 'Saisissez un mot-clé pour rechercher dans nos actualités, services et réalisations'))
const noResultsTitle = computed(() => getText('searchPage.noResultsTitle', 'Aucun résultat trouvé'))
const noResultsDescription = computed(() => getText('searchPage.noResultsDescription', 'Essayez avec d\'autres mots-clés'))

const performSearch = () => {
  if (searchQuery.value.trim()) {
    currentQuery.value = searchQuery.value.trim()
    executeSearch(currentQuery.value)
  }
}

const executeSearch = (query: string) => {
  const results: SearchResult[] = []
  const lowerQuery = query.toLowerCase()

  // Search in news articles
  const newsArticles = getContent('news.articles', [])
  if (Array.isArray(newsArticles)) {
    newsArticles.forEach((article: any) => {
      if (
        article.title?.toLowerCase().includes(lowerQuery) ||
        article.excerpt?.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          id: `news-${article.id}`,
          type: 'Actualité',
          title: article.title,
          excerpt: article.excerpt,
          link: '/actualites',
          content: article.excerpt
        })
      }
    })
  }

  // Search in services
  const servicesTitle = getText('services.title', '')
  const servicesDesc = getText('services.description', '')
  const sectors = getContent('services.sectors', {})

  if (servicesTitle.toLowerCase().includes(lowerQuery) || servicesDesc.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: 'services-main',
      type: 'Services',
      title: servicesTitle,
      excerpt: servicesDesc,
      link: '/#services',
      content: servicesDesc
    })
  }

  if (typeof sectors === 'object') {
    Object.entries(sectors).forEach(([key, value]: [string, any]) => {
      if (value?.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `service-${key}`,
          type: 'Service',
          title: value,
          excerpt: `Découvrez nos services en ${value.toLowerCase()}`,
          link: '/#services',
          content: value
        })
      }
    })
  }

  // Search in expertise
  const expertiseTitle = getText('expertise.title', '')
  const expertiseDesc = getText('expertise.description', '')
  const expertiseSkills = getContent('expertise.skills', [])

  if (expertiseTitle.toLowerCase().includes(lowerQuery) || expertiseDesc.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: 'expertise-main',
      type: 'Expertise',
      title: expertiseTitle,
      excerpt: expertiseDesc,
      link: '/#expertise',
      content: expertiseDesc
    })
  }

  if (Array.isArray(expertiseSkills)) {
    expertiseSkills.forEach((skill: string, index: number) => {
      if (skill.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `expertise-skill-${index}`,
          type: 'Expertise',
          title: skill,
          excerpt: `Notre expertise en ${skill.toLowerCase()}`,
          link: '/#expertise',
          content: skill
        })
      }
    })
  }

  // Search in realizations
  const realizationsTitle = getText('realizations.title', '')
  const realizationsDesc = getText('realizations.description', '')
  const realizationsSkills = getContent('realizations.skills', [])

  if (realizationsTitle.toLowerCase().includes(lowerQuery) || realizationsDesc.toLowerCase().includes(lowerQuery)) {
    results.push({
      id: 'realizations-main',
      type: 'Réalisations',
      title: realizationsTitle,
      excerpt: realizationsDesc,
      link: '/#realizations',
      content: realizationsDesc
    })
  }

  if (Array.isArray(realizationsSkills)) {
    realizationsSkills.forEach((skill: string, index: number) => {
      if (skill.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `realization-skill-${index}`,
          type: 'Réalisation',
          title: skill,
          excerpt: `Nos réalisations en ${skill.toLowerCase()}`,
          link: '/#realizations',
          content: skill
        })
      }
    })
  }

  searchResults.value = results
}

onMounted(() => {
  const query = route.query.q as string
  if (query) {
    searchQuery.value = query
    currentQuery.value = query
    executeSearch(query)
  }
})

useHead({
  title: 'Recherche - ARIDGE',
  meta: [
    {
      name: 'description',
      content: 'Recherchez dans nos actualités, services et réalisations'
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

.search-page {
  min-height: 100vh;
  background-color: var(--color-bg-light);
}

.search-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xl);
  }
}

.search-input-wrapper {
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  position: relative;
}

.search-input-large {
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-xl);
  padding-right: 60px;
  border: none;
  border-radius: 50px;
  font-family: 'Source Sans Pro', var(--font-primary);
  font-size: 1.1rem;
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  }
}

.search-btn-large {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-speed);

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-50%) scale(1.05);
  }
}

.search-query-display {
  font-size: 1rem;
  opacity: 0.9;
  margin-top: var(--spacing-md);

  strong {
    font-weight: var(--font-weight-bold);
  }
}

.search-container {
  padding: var(--spacing-3xl) 0;
}

.no-search,
.no-results {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-xl);
  max-width: 500px;
  margin: 0 auto;

  h2 {
    color: var(--color-primary);
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
    font-weight: var(--font-weight-bold);
  }

  p {
    color: var(--color-text-light);
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.search-icon-large,
.no-results-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto var(--spacing-xl);
  color: var(--color-primary);
  opacity: 0.3;

  svg {
    width: 100%;
    height: 100%;
  }
}

.results-section {
  max-width: 900px;
  margin: 0 auto;
}

.results-count {
  color: var(--color-text-light);
  font-size: 1rem;
  margin-bottom: var(--spacing-2xl);
  font-weight: var(--font-weight-semibold);
}

.results-grid {
  display: grid;
  gap: var(--spacing-xl);
}

.result-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.result-type {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
}

.result-title {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-bold);
}

.result-excerpt {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.result-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: all var(--transition-speed);

  &:hover {
    color: var(--color-primary-dark);
    transform: translateX(4px);
  }
}

@media (max-width: 768px) {
  .search-hero {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);

    h1 {
      font-size: 2rem;
    }
  }

  .search-input-large {
    font-size: 1rem;
    padding: var(--spacing-md) var(--spacing-lg);
    padding-right: 55px;
  }

  .search-btn-large {
    width: 42px;
    height: 42px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .search-container {
    padding: var(--spacing-2xl) 0;
  }

  .no-search,
  .no-results {
    padding: var(--spacing-2xl) var(--spacing-md);

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .result-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .search-hero h1 {
    font-size: 1.5rem;
  }

  .search-input-large {
    font-size: 0.95rem;
  }

  .result-card {
    padding: var(--spacing-lg);
  }
}
</style>
