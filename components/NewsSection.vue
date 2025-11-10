<template>
  <section id="news" class="news bg-white">
    <div class="container">
      <div class="section-header animate-section">
        <div class="pixel who-section who-content animate-section mt-0 pb-0 d-flex justify-content-start">
          <h2 class="animate-title white-text certu">Nos Réalisations</h2>
        </div>
      </div>
      <div class="news-grid animate-content">
        <article class="news-card animate-item" v-for="(item, index) in newsList" :key="item.id"
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
            <NuxtLink to="/actualites" class="read-more">Lire la suite →</NuxtLink>
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
    date: '30',
    month:'Oct'
  },
  {
    id: 2,
    title: 'Titre de l\'article 2',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-2.jpg',
    date: '30',
    month:'Oct'
  },
  {
    id: 3,
    title: 'Titre de l\'article 3',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-3.jpg',
    date: '30',
    month:'Oct'
  },
  {
    id: 4,
    title: 'Titre de l\'article 4',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/news-4.jpg',
    date: '20',
    month:'Oct'
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
  padding: 0;
  background-color: var(--color-bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}
.certu {
  color: white !important;
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
  top:0;
  position: absolute;
  flex-direction:column;
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
  color: #0a6678;
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
  color: #0a6678;
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

.who-content {
  margin-top: 0em !important;
  padding-top: 4em !important;
}
.bg-white {
  background-color: white !important;
}
.pixel {
  background-color: white !important;
}
</style>
