# Content Management Guide - Aridge Website

## Vue d'ensemble

Le site Aridge utilise un système de gestion de contenu centralisé via un fichier JSON pour faciliter:
- Les mises à jour de contenu sans modifier le code
- La gestion multilingue (FR/EN)
- La maintenabilité et la cohérence des textes

## Structure du Fichier JSON

Le fichier `public/content.json` contient la structure suivante:

```
{
  "fr": {
    "header": {...},
    "hero": {...},
    "services": {...},
    "expertise": {...},
    "realizations": {...},
    "news": {...},
    "contact": {...},
    "footer": {...}
  },
  "en": {
    // Same structure in English
  }
}
```

## Utilisation dans les Composants

### 1. Importer le composable

```typescript
import { useContent } from '~/composables/useContent'
```

### 2. Initialiser dans le composant

```typescript
const { getText, getContent, setLanguage } = useContent()
```

### 3. Accéder au contenu

#### Pour du texte simple:
```typescript
const heroTitle = getText('hero.title', 'Fallback text')
```

#### Pour des objets ou tableaux:
```typescript
const partners = getContent('services.partners', [])
const articles = getContent('news.articles', [])
```

### 4. Changer la langue

```typescript
setLanguage('en') // Passer à l'anglais
setLanguage('fr') // Retour au français
```

## Exemple Complet - Composant Hero

```vue
<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">{{ heroTitle }}</h1>
        <p class="hero-subtitle">{{ heroSubtitle }}</p>
        <button class="btn btn-primary">{{ heroCTA }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

const { getText } = useContent()

const heroTitle = computed(() => getText('hero.title', ''))
const heroSubtitle = computed(() => getText('hero.subtitle', ''))
const heroCTA = computed(() => getText('hero.cta', ''))
</script>
```

## Exemple Complet - Services avec Partenaires

```vue
<template>
  <section id="services" class="services">
    <div class="container">
      <h2>{{ servicesTitle }}</h2>
      <p>{{ servicesDescription }}</p>

      <div class="partners">
        <div v-for="partner in partners" :key="partner.name" class="partner-card">
          <h3>{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

const { getText, getContent } = useContent()

const servicesTitle = computed(() => getText('services.title', ''))
const servicesDescription = computed(() => getText('services.description', ''))
const partners = computed(() => getContent('services.partners', []))
</script>
```

## Structure du JSON par Section

### Header
```json
{
  "header": {
    "logo": "ARIDGE",
    "nav": {
      "home": "Accueil",
      "services": "Services",
      ...
    }
  }
}
```

### Hero
```json
{
  "hero": {
    "title": "Construction et financement d'infrastructure",
    "subtitle": "En savoir plus",
    "cta": "En savoir plus"
  }
}
```

### Services
```json
{
  "services": {
    "title": "Qui sommes-nous ?",
    "description": "...",
    "partners": [
      {
        "name": "Hatt International Group",
        "description": "..."
      }
    ],
    "technicalServices": {
      "title": "Nos services d'assistance",
      "items": ["item1", "item2"]
    },
    "financialServices": {
      "title": "Nos services Financiers",
      "items": ["item1", "item2"]
    },
    "solutions": [
      {"title": "...", "image": "..."}
    ]
  }
}
```

### Expertise
```json
{
  "expertise": {
    "title": "Nos domaines d'expertise",
    "items": [
      {
        "title": "Infrastructure routière",
        "description": "...",
        "list": ["item1", "item2"]
      }
    ]
  }
}
```

### Realizations
```json
{
  "realizations": {
    "title": "Nos Réalisations",
    "projects": [
      {
        "id": 1,
        "title": "Projet 1",
        "description": "...",
        "image": "realization-1.jpg",
        "cta": "En savoir plus"
      }
    ],
    "sliderButtons": {
      "prev": "Précédent",
      "next": "Suivant"
    }
  }
}
```

### News
```json
{
  "news": {
    "title": "Nos Réalisations",
    "articles": [
      {
        "id": 1,
        "title": "Titre",
        "excerpt": "...",
        "date": "25/11/2024",
        "image": "news-1.jpg",
        "readMore": "Lire la suite →"
      }
    ],
    "viewAll": "Voir toutes les actualités"
  }
}
```

### Contact
```json
{
  "contact": {
    "title": "Restez en contact",
    "description": "...",
    "form": {
      "nameLabel": "Nom",
      "namePlaceholder": "Votre nom",
      ...
    },
    "info": {
      "address": {"title": "Adresse", "value": "..."},
      "phone": {"title": "Téléphone", "value": "..."},
      "email": {"title": "Email", "value": "..."}
    }
  }
}
```

### Footer
```json
{
  "footer": {
    "sections": {
      "aridge": {"title": "...", "description": "..."},
      "navigation": {"title": "...", "links": []},
      "hattGroup": {"title": "...", "description": "..."},
      "social": {"title": "...", "links": []}
    },
    "bottom": {
      "copyright": "© Aridge 2025...",
      "links": []
    }
  }
}
```

## Mise à jour du Contenu

### 1. Éditer le JSON
Simplement modifier `/public/content.json` avec les nouveau textes:

```json
{
  "fr": {
    "hero": {
      "title": "Mon nouveau titre",
      ...
    }
  }
}
```

### 2. Les changements sont appliqués immédiatement
Grâce au plugin Nuxt, le contenu est rechargé automatiquement.

## Support Multilingue

### Ajouter une langue

1. Ajouter une nouvelle clé de langue dans le JSON:
```json
{
  "de": {
    "header": {...},
    "hero": {...},
    ...
  }
}
```

2. Changer la langue dans le composant:
```typescript
setLanguage('de')
```

### Sélecteur de langue (Exemple)

```vue
<template>
  <select @change="changeLanguage">
    <option value="fr">Français</option>
    <option value="en">English</option>
    <option value="de">Deutsch</option>
  </select>
</template>

<script setup>
const { setLanguage } = useContent()

const changeLanguage = (e) => {
  setLanguage(e.target.value)
}
</script>
```

## Avantages de ce Système

✅ **Centralisation**: Tous les textes au même endroit
✅ **Facilité de mise à jour**: Pas besoin de modifier les composants
✅ **Multilingue**: Support facile de plusieurs langues
✅ **Maintenabilité**: Structure claire et organisée
✅ **Scalabilité**: Facile d'ajouter du contenu
✅ **Performance**: Chargement unique du JSON

## Fichiers Impliqués

- `/public/content.json` - Données de contenu
- `/composables/useContent.ts` - Composable pour accéder au contenu
- `/plugins/content.ts` - Plugin pour initialiser le système
- Composants (utilise la composable)

## Prochaines Étapes

- [ ] Migrer tous les composants pour utiliser `useContent`
- [ ] Ajouter validation de contenu
- [ ] Ajouter système de cache
- [ ] Intégrer un CMS pour gestion du contenu
- [ ] Ajouter plus de langues (ES, DE, etc.)
