<template>
  <section id="news" class="news bg-white pb-5">
    <div class="container">
      <div class="section-header animate-section">
        <div class="pixel who-section who-content animate-section mt-0 pb-0 d-flex justify-content-start">
          <h2 class="animate-title white-text certu">{{ newsTitle }}</h2>
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
            <NuxtLink :to="`/actualites/${item.id}`" class="read-more">Lire la suite →</NuxtLink>
          </div>
        </article>
      </div>

      <!-- <div class="news-footer animate-item" style="--animate-delay: 0.4s">
        <NuxtLink to="/actualites" class="btn btn-primary kush">Voir toutes les actualités</NuxtLink>
      </div> -->
    </div>
    <div class="container">
      <div class="section-header animate-section">
        <div class="pixel who-section who-content animate-section mt-0 pb-0 d-flex flex-column">
          <div class="d-flex justify-content-center align-items-center w-100 flex-row">

            <h2 class="animate-title white-text certu mb-lg">{{ joinUsTitle }}</h2>
          </div>
            <div class="liberia w-80 animate-content pt-0 mt-lg pb-4 bg-white">
              <div class="row mouf">
                <div class="col-md-6 col-12 caro-image" style="background-image: url('/caro.webp')">
                </div>
                <div id="peace" class="col-md-6 col-12">
                  <NuxtLink to="/carriere" class="button">{{ recruitmentEmail }}</NuxtLink>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  month: string
}

const { getText, getContent } = useContent()

const newsTitle = computed(() => getText('news.title', 'Nos Réalisations'))
const joinUsTitle = computed(() => getText('news.joinUs', 'Rejoignez nous'))
const recruitmentEmail = computed(() => getText('news.recruitmentEmail', 'recrutement@aridge.com'))

const newsList = computed<NewsItem[]>(() => {
  const articles = getContent('news.articles', [])
  return articles && Array.isArray(articles) ? articles : []
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
  transition: all var(--transition-speed);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
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
  font-size: 1.5rem;
  flex: 1;
}

.news-content p {
  @include paragraph-text;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
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
  background-color: #0a6678;
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
  animation: subtleSlideInUp 1s ease-out 0.2s both;
  opacity: 1;
  transform: translateY(0px);
  width: fit-content;
}

.read-more:hover {
  background-color: var(--color-primary-dark);
  transform: translateX(4px);
}

#peace {
  border-top:20px solid white;
  background-color: #d8e1e3;
  border-bottom:20px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  .button{
      width: 298px;
  height: 35px;
  border-radius: 17.5px;
  background-color: #0a6678;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.63;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  }
}

.caro-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
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
    gap: var(--spacing-md);
  }

  .news-card {
    margin-bottom: var(--spacing-md);
  }

  .news-content h3 {
    font-size: 1.3rem;
  }

  .news-content p {
    font-size: 0.95rem;
  }

  .caro-image {
    min-height: 250px;
  }

  #peace {
    border-top: 15px solid white;
    border-bottom: 15px solid white;

    .button {
      width: 90%;
      height: 40px;
      font-size: 16px;
    }
  }
}

@media (max-width: 480px) {
  .news {
    padding: var(--spacing-lg) 0;
  }

  .section-header h2 {
    font-size: 1.3rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .news-image {
    height: 160px;
  }

  .fiona {
    width: 45px;
    height: 42px;
  }

  .news-date {
    font-size: 20px;
  }

  .news-month {
    font-size: 14px;
    margin-top: 0.5em;
  }

  .news-content {
    padding: var(--spacing-md);

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  .read-more {
    font-size: 12px;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .caro-image {
    min-height: 200px;
  }

  #peace {
    border-top: 10px solid white;
    border-bottom: 10px solid white;

    .button {
      width: 85%;
      height: 36px;
      font-size: 14px;
    }
  }

  .mouf {
    max-width: 100%;
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
.mouf {
 max-width:850px;margin:0 auto;}
</style>
