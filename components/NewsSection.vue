<template>
  <section id="news" class="news">
    <div class="container">
      <div class="section-header animate-section">
        <h2 class="animate-title">Nos Réalisations</h2>
      </div>

      <div class="news-grid animate-content">
        <article class="news-card animate-item" v-for="(item, index) in newsList" :key="item.id" :style="{ '--animate-delay': `${index * 0.1}s` }">
          <div class="news-image">
            <NuxtImg :src="item.image" :alt="item.title" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div class="news-date">{{ item.date }}</div>
          </div>
          <div class="news-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
            <NuxtLink to="#" class="read-more">Lire la suite →</NuxtLink>
          </div>
        </article>
      </div>

      <div class="news-footer animate-item" style="--animate-delay: 0.4s">
        <NuxtLink to="/actualites" class="btn btn-primary">Voir toutes les actualités</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
}

const newsList: NewsItem[] = [
  {
    id: 1,
    title: 'Titre de l\'article 1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-1.jpg',
    date: '25/11/2024'
  },
  {
    id: 2,
    title: 'Titre de l\'article 2',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-2.jpg',
    date: '24/11/2024'
  },
  {
    id: 3,
    title: 'Titre de l\'article 3',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-3.jpg',
    date: '27/11/2024'
  },
  {
    id: 4,
    title: 'Titre de l\'article 4',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-4.jpg',
    date: '28/11/2024'
  }
]
</script>

<style scoped>
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

.news {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  color: var(--color-primary);
  font-size: 2rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(27, 122, 126, 0.15);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-date {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
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
  font-size: 1.1rem;
  flex: 1;
}

.news-content p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  font-size: 0.95rem;
  line-height: 1.6;
}

.read-more {
  color: var(--color-primary);
  font-weight: 600;
  transition: all var(--transition-speed);
  display: inline-block;
}

.read-more:hover {
  color: var(--color-primary-dark);
  transform: translateX(4px);
}

.news-footer {
  text-align: center;
}

@media (max-width: 768px) {
  .news {
    padding: var(--spacing-2xl) 0;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
