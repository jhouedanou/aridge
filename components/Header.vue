<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/">
            <img src="/logo.svg" alt="Aridge Logo" />
            <span class="logo-text">ARIDGE</span>
          </NuxtLink>
        </div>
        <nav class="nav" :class="{ active: mobileMenuOpen }">
          <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
          <NuxtLink to="#services" class="nav-link">Services</NuxtLink>
          <NuxtLink to="#expertise" class="nav-link">Expertise</NuxtLink>
          <NuxtLink to="#realizations" class="nav-link">Réalisations</NuxtLink>
          <NuxtLink to="#news" class="nav-link">Actualités</NuxtLink>
          <NuxtLink to="#contact" class="nav-link">Contact</NuxtLink>
        </nav>
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.header {
  background-color: var(--color-bg-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-primary);
}

.logo a {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: inherit;
}

.logo img {
  height: 40px;
  width: auto;
}

.logo-text {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-link {
  color: var(--color-text-dark);
  font-weight: 500;
  position: relative;
  transition: color var(--transition-speed);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-speed);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 2px;
  transition: all var(--transition-speed);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-bg-white);
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-speed);
  }

  .nav.active {
    max-height: 500px;
  }

  .nav-link {
    width: 100%;
    padding: var(--spacing-md);
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover {
    background-color: var(--color-bg-light);
    border-radius: 4px;
  }
}
</style>
