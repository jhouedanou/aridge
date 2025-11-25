<template>
  <div class="news-page">
    <div class="news-hero animate-section">
      <div class="container">
        <h1 class="animate-title">{{ pageTitle }}</h1>
        <p class="animate-content">{{ pageDescription }}</p>
      </div>
    </div>

    <div class="container news-container">
      <div class="news-grid animate-content">
        <article class="news-card animate-item" v-for="(item, index) in paginatedNews" :key="item.id"
          :style="{ '--animate-delay': `${index * 0.1}s` }">
          <div class="news-image" :style="{ backgroundImage: `url('${item.image}')` }">
            <div class="fiona">
              <div class="news-date">{{ item.date }}</div>
              <div class="news-month">{{ item.month }}</div>
            </div>
          </div>
          <div class="news-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
            <NuxtLink :to="`/actualites/${item.id}`" class="read-more">{{ readMoreText }}</NuxtLink>
          </div>
        </article>
      </div>

      <div class="pagination animate-item" v-if="totalPages > 1" style="--animate-delay: 0.4s">
        <button
          class="pagination-btn"
          @click="previousPage"
          :disabled="currentPage === 1"
          :class="{ disabled: currentPage === 1 }"
        >
          ← Précédent
        </button>

        <div class="pagination-numbers">
          <button
            v-for="page in totalPages"
            :key="page"
            class="pagination-number"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>

        <button
          class="pagination-btn"
          @click="nextPage"
          :disabled="currentPage === totalPages"
          :class="{ disabled: currentPage === totalPages }"
        >
          Suivant →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContent } from '~/composables/useContent'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  month: string
}

definePageMeta({
  layout: 'default'
})

const { getText, getContent } = useContent()

const pageTitle = computed(() => getText('newsPage.title', 'Nos Actualités'))
const pageDescription = computed(() => getText('newsPage.description', 'Découvrez les dernières nouvelles et projets d\'ARIDGE'))
const readMoreText = computed(() => getText('news.readMore', 'Lire la suite →'))

const currentPage = ref(1)
const itemsPerPage = 4

const allNews = computed<NewsItem[]>(() => {
  const articles = getContent('news.articles', [])
  return articles && Array.isArray(articles) ? articles : []
})

const totalPages = computed(() => Math.ceil(allNews.value.length / itemsPerPage))

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allNews.value.slice(start, end)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToTop()
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToTop()
  }
}

const goToPage = (page: number) => {
  currentPage.value = page
  scrollToTop()
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

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

.news-page {
  min-height: 100vh;
  background-color: var(--color-bg-light);
}

.news-hero {
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

  h1 {
    font-size: 3.5rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 24px;
    position: relative;
    z-index: 3;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.35rem;
    max-width: 750px;
    margin: 0 auto;
    line-height: 1.7;
    position: relative;
    z-index: 3;
    font-weight: 300;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    padding: 20px 30px !important;
    border-radius: 12px !important;
    backdrop-filter: blur(8px) !important;
  }
}

.news-container {
  padding: var(--spacing-3xl) 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all var(--transition-speed);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.news-image {
  position: relative;
  height: 192px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform var(--transition-speed);
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.fiona {
  width: 51px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  top: 0;
  position: absolute;
  flex-direction: column;
}

.news-date {
  font-family: 'Source Sans Pro';
  font-size: 25px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: center;
  color: var(--color-primary);
  text-transform: uppercase;
}

.news-month {
  margin-top: 1em;
  font-family: 'Source Sans Pro';
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: center;
  color: var(--color-primary);
}

.news-content {
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-content h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  flex: 1;
}

.news-content p {
  @include paragraph-text;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  flex: 1;
}

.read-more {
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  cursor: pointer;
  transition: all var(--transition-speed);
  text-decoration: none;
  margin-top: var(--spacing-lg);
  background-color: var(--color-primary);
  font-family: "Source Sans Pro", var(--font-primary);
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  border-radius: 31px;
  width: fit-content;
}

.read-more:hover {
  background-color: var(--color-primary-dark);
  transform: translateX(4px);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-3xl);
  flex-wrap: wrap;
}

.pagination-btn {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 31px;
  cursor: pointer;
  transition: all var(--transition-speed);
  font-family: "Source Sans Pro", var(--font-primary);
  font-size: 14px;
  font-weight: 600;
  min-width: 120px;
}

.pagination-btn:hover:not(.disabled) {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

.pagination-btn.disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.pagination-numbers {
  display: flex;
  gap: var(--spacing-sm);
}

.pagination-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background-color: white;
  color: var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-speed);
  font-family: "Source Sans Pro", var(--font-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-number:hover {
  background-color: var(--color-primary);
  color: white;
  transform: scale(1.1);
}

.pagination-number.active {
  background-color: var(--color-primary);
  color: white;
}

@media (max-width: 768px) {
  .news-hero {
    padding: 120px 20px 80px;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.1rem;
      padding: 18px 24px !important;
      color: white !important;
      background-color: rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      backdrop-filter: blur(8px) !important;
    }
  }

  .news-container {
    padding: var(--spacing-2xl) 0;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .pagination {
    gap: var(--spacing-sm);
  }

  .pagination-btn {
    min-width: 100px;
    font-size: 12px;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .pagination-number {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .news-hero {
    padding: 100px 15px 70px;

    &::after {
      height: 60px;
    }
  }

  .news-hero h1 {
    font-size: 1.8rem;
  }

  .news-hero p {
    font-size: 1rem;
    padding: 15px 20px !important;
    color: white !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    border-radius: 10px !important;
    backdrop-filter: blur(8px) !important;
  }

  .news-content h3 {
    font-size: 1.2rem;
  }

  .news-content p {
    font-size: 0.9rem;
  }

  .pagination {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .pagination-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
