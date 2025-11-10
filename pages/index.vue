<template>
  <div class="home-page">
    <HeroSection />
    <ServicesSection />
    <ExpertiseSection />
    <RealizationsSection />
    <NewsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ExpertiseSection from '~/components/ExpertiseSection.vue'
import RealizationsSection from '~/components/RealizationsSection.vue'
import NewsSection from '~/components/NewsSection.vue'
import ContactSection from '~/components/ContactSection.vue'

useHead({
  title: 'ARIDGE - Construction et Financement d\'Infrastructures en Afrique',
  meta: [
    {
      name: 'description',
      content: 'ARIDGE est une entreprise panafricaine spécialisée dans l\'ingénierie, la construction et le financement d\'infrastructures routières, hydrauliques et résidentielles avec expertise en PPP et ESG.'
    },
    {
      name: 'keywords',
      content: 'infrastructure, construction, financement, Afrique, PPP, génie civil, ingénierie, routes, hydraulique, ESG, développement'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'ARIDGE - Leader Africain de la Construction et Financement d\'Infrastructures'
    },
    {
      property: 'og:description',
      content: 'Découvrez comment ARIDGE transforme l\'Afrique à travers des projets d\'infrastructure innovants, durables et financièrement structurés avec Imaad Financial Group.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://aridge.com'
    },
    {
      property: 'og:image',
      content: 'https://aridge.com/og-image.jpg'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:site_name',
      content: 'ARIDGE'
    },
    {
      property: 'og:locale',
      content: 'fr_FR'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'ARIDGE - Infrastructure en Afrique'
    },
    {
      name: 'twitter:description',
      content: 'Projets d\'infrastructure innovants et durables en Afrique. Expertise en construction, financement et PPP.'
    },
    {
      name: 'twitter:image',
      content: 'https://aridge.com/og-image.jpg'
    },
    {
      name: 'author',
      content: 'ARIDGE'
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'ie=edge'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://aridge.com'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style scoped>
.home-page {
  background-color: #F8F8F8;
}
</style>
