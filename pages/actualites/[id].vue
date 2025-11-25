<template>
  <div class="article-page">
    <div class="article-hero animate-section">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Accueil</NuxtLink>
          <span class="separator">→</span>
          <NuxtLink to="/actualites">Actualités</NuxtLink>
          <span class="separator">→</span>
          <span class="current">{{ article?.title }}</span>
        </div>
      </div>
    </div>

    <div class="container article-container" v-if="article">
      <article class="article-content animate-content">
        <div class="article-header">
          <div class="article-meta">
            <span class="article-date">{{ article.date }} {{ article.month }} 2024</span>
            <span class="article-category">{{ article.category || 'Actualité' }}</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
        </div>

        <div class="article-image" v-if="article.image">
          <img :src="article.image" :alt="article.title" />
        </div>

        <div class="article-body">
          <div class="article-intro">
            {{ article.excerpt }}
          </div>

          <div class="article-sections" v-if="article.fullContent">
            <div v-for="(section, index) in article.fullContent" :key="index" class="content-section">
              <h2 v-if="section.subtitle">{{ section.subtitle }}</h2>
              <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="article-tags" v-if="article.tags && article.tags.length > 0">
            <h3>Tags</h3>
            <div class="tags-list">
              <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="article-footer">
          <div class="share-section">
            <h3>Partager cet article</h3>
            <div class="share-buttons">
              <a :href="shareUrls.facebook" target="_blank" rel="noopener noreferrer" class="share-btn facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a :href="shareUrls.twitter" target="_blank" rel="noopener noreferrer" class="share-btn twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
              <a :href="shareUrls.linkedin" target="_blank" rel="noopener noreferrer" class="share-btn linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <NuxtLink to="/actualites" class="back-btn">
            ← Retour aux actualités
          </NuxtLink>
        </div>
      </article>

      <aside class="related-articles animate-item" style="--animate-delay: 0.2s">
        <h2>Articles similaires</h2>
        <div class="related-grid">
          <NuxtLink
            v-for="related in relatedArticles"
            :key="related.id"
            :to="`/actualites/${related.id}`"
            class="related-card"
          >
            <div class="related-image" :style="{ backgroundImage: `url('${related.image}')` }">
              <div class="related-date">{{ related.date }} {{ related.month }}</div>
            </div>
            <h3>{{ related.title }}</h3>
          </NuxtLink>
        </div>
      </aside>
    </div>

    <div class="container" v-else>
      <div class="not-found">
        <h1>Article non trouvé</h1>
        <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
        <NuxtLink to="/actualites" class="back-btn">← Retour aux actualités</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useContent } from '~/composables/useContent'
import articlesContentData from '~/locales/articlesContent.json'

const route = useRoute()
const { getContent } = useContent()

const articleId = computed(() => parseInt(route.params.id as string))

const allArticles = computed(() => {
  const articles = getContent('news.articles', [])
  return articles && Array.isArray(articles) ? articles : []
})

const article = computed(() => {
  const baseArticle = allArticles.value.find((a: any) => a.id === articleId.value)
  if (!baseArticle) return null

  // Merge with full content
  const fullContent = articlesContentData[articleId.value.toString()]
  return {
    ...baseArticle,
    ...fullContent
  }
})

const relatedArticles = computed(() => {
  return allArticles.value
    .filter((a: any) => a.id !== articleId.value)
    .slice(0, 3)
})

const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return ''
})

const shareUrls = computed(() => ({
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`,
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(article.value?.title || '')}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`
}))

useHead({
  title: article.value ? `${article.value.title} - ARIDGE` : 'Article - ARIDGE',
  meta: [
    {
      name: 'description',
      content: article.value?.excerpt || 'Actualités ARIDGE'
    },
    {
      property: 'og:title',
      content: article.value?.title || 'Article - ARIDGE'
    },
    {
      property: 'og:description',
      content: article.value?.excerpt || ''
    },
    {
      property: 'og:image',
      content: article.value?.image || '/og-image.jpg'
    }
  ]
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.animate-section {
  animation: subtleFadeIn 0.9s ease-out;
}

.animate-content {
  animation: subtleFadeIn 0.9s ease-out 0.2s both;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.article-page {
  min-height: 100vh;
  background-color: var(--color-bg-light);
}

.article-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  padding: 140px 20px 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  flex-wrap: wrap;

  a {
    color: white;
    text-decoration: none;
    transition: opacity var(--transition-speed);

    &:hover {
      opacity: 0.8;
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.6);
  }

  .current {
    color: rgba(255, 255, 255, 0.9);
    font-weight: var(--font-weight-semibold);
  }
}

.article-container {
  max-width: 1000px;
  padding: var(--spacing-4xl) var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3xl);
}

.article-content {
  background: white;
  padding: var(--spacing-3xl);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: var(--spacing-2xl);
}

.article-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.article-date,
.article-category {
  font-size: 0.9rem;
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: var(--font-weight-semibold);
}

.article-date {
  background-color: #e8f4f5;
  color: var(--color-primary);
}

.article-category {
  background-color: var(--color-primary);
  color: white;
}

.article-title {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.3;
  margin: 0;
}

.article-image {
  margin-bottom: var(--spacing-3xl);
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.article-body {
  color: var(--color-text-dark);
  line-height: 1.8;
}

.article-intro {
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  padding-left: var(--spacing-lg);
  border-left: 4px solid var(--color-primary);
}

.content-section {
  margin-bottom: var(--spacing-2xl);

  h2 {
    font-size: 1.8rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-bottom: var(--spacing-lg);
  }

  p {
    margin-bottom: var(--spacing-lg);
    font-size: 1.1rem;
  }
}

.article-tags {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid #e5e7eb;

  h3 {
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
}

.tags-list {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  background-color: #f0f8f9;
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: var(--font-weight-semibold);
}

.article-footer {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 2px solid #e5e7eb;
}

.share-section {
  margin-bottom: var(--spacing-2xl);

  h3 {
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
}

.share-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 25px;
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-speed);
  color: white;

  svg {
    width: 20px;
    height: 20px;
  }

  &.facebook {
    background-color: #1877f2;

    &:hover {
      background-color: #0d65d9;
    }
  }

  &.twitter {
    background-color: #000000;

    &:hover {
      background-color: #333333;
    }
  }

  &.linkedin {
    background-color: #0a66c2;

    &:hover {
      background-color: #004182;
    }
  }
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 31px;
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-speed);

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateX(-4px);
  }
}

.related-articles {
  h2 {
    font-size: 1.8rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-bottom: var(--spacing-xl);
  }
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.related-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all var(--transition-speed);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    padding: var(--spacing-lg);
    color: var(--color-primary);
    font-size: 1.1rem;
    font-weight: var(--font-weight-semibold);
    margin: 0;
  }
}

.related-image {
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
}

.related-date {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background-color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.not-found {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-md);

  h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-lg);
  }

  p {
    font-size: 1.2rem;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-2xl);
  }
}

@media (max-width: 768px) {
  .article-hero {
    padding: 120px 20px 30px;
  }

  .article-content {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  .article-title {
    font-size: 1.8rem;
  }

  .article-intro {
    font-size: 1.1rem;
  }

  .content-section {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .article-container {
    padding: var(--spacing-2xl) var(--spacing-sm);
  }

  .article-content {
    padding: var(--spacing-lg);
  }

  .article-title {
    font-size: 1.5rem;
  }

  .share-buttons {
    flex-direction: column;
  }

  .share-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
