<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo" :class="{ scrolled: isScrolled }">
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" alt="Aridge Logo" loading="eager" />
          </NuxtLink>
        </div>
        <div class="rightcontainer">
          <div class="search-container">
            <div class="search-box">
              <input
                type="text"
                class="search-input"
                placeholder="Rechercher..."
                v-model="searchQuery"
                @keyup.enter="handleSearch"
              />
              <button class="search-btn" @click="handleSearch">
                <NuxtImg src="/searchbtn.svg" alt="Rechercher" loading="eager" />
              </button>
            </div>
          </div>
           <nav class="nav" :class="{ active: mobileMenuOpen }">
          <NuxtLink to="/" class="nav-link">{{ navHome }}</NuxtLink>
          <div class="nav-item dropdown" @click="toggleDropdown(0)" :class="{ 'dropdown-open': isDropdownExpanded(0) }">
            <span class="nav-link">{{ navServices }}</span>
            <div class="dropdown-menu" :class="{ active: isDropdownExpanded(0) }">
              <NuxtLink to="/services/infrastructure-genie-civil" class="dropdown-link">Infrastructure & génie civil</NuxtLink>
              <NuxtLink to="/services/habitat-logement" class="dropdown-link">Habitat et logement</NuxtLink>
              <NuxtLink to="/services/hydraulique-assainissement" class="dropdown-link">Hydraulique et assainissement</NuxtLink>
              <NuxtLink to="/services/logistique-zone-economique" class="dropdown-link">Logistique et zone éco</NuxtLink>
            </div>
          </div>
          <div class="nav-item dropdown" @click="toggleDropdown(1)" :class="{ 'dropdown-open': isDropdownExpanded(1) }">
            <span class="nav-link">{{ navExpertise }}</span>
            <div class="dropdown-menu" :class="{ active: isDropdownExpanded(1) }">
              <NuxtLink to="/expertise/technique" class="dropdown-link">Technique</NuxtLink>
              <NuxtLink to="/expertise/financiere" class="dropdown-link">Financière</NuxtLink>
            </div>
          </div>
          <NuxtLink to="/realisations" class="nav-link">{{ navRealizations }}</NuxtLink>
          <div class="nav-item dropdown" @click="toggleDropdown(2)" :class="{ 'dropdown-open': isDropdownExpanded(2) }">
            <span class="nav-link">{{ navNews }}</span>
            <div class="dropdown-menu" :class="{ active: isDropdownExpanded(2) }">
              <NuxtLink to="/carriere" class="dropdown-link">Carrière</NuxtLink>
              <NuxtLink to="/actualites" class="dropdown-link">Actualités</NuxtLink>
              <NuxtLink to="/media" class="dropdown-link">Média</NuxtLink>
            </div>
          </div>
          <NuxtLink to="/contact" class="nav-link">{{ navContact }}</NuxtLink>
        </nav>
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useContent } from '~/composables/useContent'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const expandedDropdowns = ref<Set<number>>(new Set())
const searchQuery = ref('')
const { getText } = useContent()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/recherche',
      query: { q: searchQuery.value.trim() }
    })
    searchQuery.value = ''
  }
}

const toggleDropdown = (index: number) => {
  if (expandedDropdowns.value.has(index)) {
    expandedDropdowns.value.delete(index)
  } else {
    expandedDropdowns.value.add(index)
  }
}

const isDropdownExpanded = (index: number) => {
  return expandedDropdowns.value.has(index)
}

onMounted(() => {
  // Vérifier la position de scroll immédiatement au montage
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navHome = computed(() => getText('header.nav.home', 'Accueil'))
const navServices = computed(() => getText('header.nav.services', 'Services'))
const navExpertise = computed(() => getText('header.nav.expertise', 'Expertise'))
const navRealizations = computed(() => getText('header.nav.realizations', 'Réalisations'))
const navNews = computed(() => getText('header.nav.news', 'Actualités'))
const navContact = computed(() => getText('header.nav.contact', 'Contact'))
</script>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;

  &.scrolled {
    background-color: rgba(10, 102, 120, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}

.search-container {
  display: flex;
  justify-content: flex-end;
  padding-top: 1em;
  padding-bottom: 16.6px;

  @media (max-width: 768px) {
    display: none;
  }
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 175px;
  height: 26px;
  padding: 5px 40px 4.9px 16px;
  border-radius: 13px;
  border: solid 1px #fff;
  background-color: #fff;
  font-family: 'Source Sans Pro', var(--font-primary);
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.24px;
  text-align: left;
  color: #8e8e8e;
  outline: none;
  transition: color 0.3s ease;

  &::placeholder {
    font-family: 'Source Sans Pro', var(--font-primary);
    font-size: 12px;
    font-weight: 300;
    color: #8e8e8e;
  }

  &:focus {
    color: #0a6678;
  }
}

.search-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
  }
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-primary);
  padding-top: 3em;

  a {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    color: inherit;
  }

  img {
    width: 188.9px;
    height: 215px;
    transition: all 0.3s ease;
  }

  &.scrolled {
    padding-top: 0 !important;

    img {
      width: auto;
      height: 110.67px;
    }
  }
}

@media (max-width: 768px) {
  .logo {
    padding-top: 1.5rem;

    img {
      width: 40px;
      height: 45px;
    }

    &.scrolled {
      padding-top: 0.75rem;

      img {
        width: 40px;
        height: 45px;
      }
    }
  }
}

.nav {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  margin-left: auto;
  justify-content: flex-end;
  padding-bottom: 1em;
}

.nav-link {
  font-family: 'Source Sans Pro', var(--font-primary);
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.78;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  position: relative;
  transition: all var(--transition-speed);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #8acde5;
    color: #fff;
  }
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
  padding: 0.5rem;
  margin-right: 1rem;

  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    transition: all var(--transition-speed);
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.nav-item {
  position: relative;
  
  &.dropdown {
    &:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(10, 102, 120, 0.95);
  backdrop-filter: blur(10px);
  padding: 0;
  min-width: 250px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown-link {
  display: flex;
  align-items: center;
  height: 63px;
  padding: 0.75rem 1.5rem;
  font-family: 'Source Sans Pro', var(--font-primary);
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
  border-top: 1px solid #fff;
  
  &:first-child {
    border-top: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 768px) {
  .header {
    background-color: rgba(10, 102, 120, 0.8);
    backdrop-filter: blur(10px);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .header-content {
    align-items: center;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(10, 102, 120, 0.95);
    backdrop-filter: blur(10px);
    padding: var(--spacing-md);
    gap: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    &.active {
      max-height: 100vh;
    }
  }

  .nav-link {
    width: 100%;
    padding: var(--spacing-md);
    font-size: 16px;
    height: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0;
    display: flex;
    justify-content: flex-start;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  }

  .dropdown-menu {
    position: static;
    background-color: rgba(255, 255, 255, 0.05);
    opacity: 0;
    visibility: hidden;
    transform: none;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: none;
    backdrop-filter: none;
    padding: 0;
    min-width: 100%;
    z-index: 1;

    &.active {
      opacity: 1;
      visibility: visible;
      max-height: 500px;
    }
  }

  .dropdown-link {
    padding: 0.75rem 1.5rem;
    font-size: 14px;
    height: auto;
    border-top: none;
    border-left: 3px solid transparent;
    display: flex;
    justify-content: flex-start;

    &:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      border-left-color: #8acde5;
    }
  }

  .nav-item.dropdown {
    &:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: none;
    }
  }
}
</style>