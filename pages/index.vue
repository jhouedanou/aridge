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
  title: 'Aridge - Construction et financement d\'infrastructure',
  meta: [
    {
      name: 'description',
      content: 'Aridge spécialiste de la conception, du financement et de la réalisation d\'infrastructures'
    }
  ]
})
</script>

<style scoped>
.home-page {
  background-color: #F8F8F8;
}
</style>
