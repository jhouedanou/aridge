# Architecture - Aridge Website

## Vue d'ensemble

Ce document décrit l'architecture et la structure du site web Aridge, construit avec Nuxt 3 et Vue 3.

## Stack Technologique

- **Framework Frontend**: Nuxt 3 (v4.2.0)
- **Framework UI**: Vue 3 (v3.5.22)
- **Build Tool**: Vite (v7.1.12)
- **Server**: Nitro (v2.12.9)
- **Language**: TypeScript
- **Styling**: CSS3 avec Variables CSS
- **Font**: Source Sans Pro (Google Fonts) - Weights: 400, 600, 700
- **Node.js**: v18.17.0+

## Structure du Projet

```
aridge/
├── app.vue                      # Composant racine Nuxt
├── nuxt.config.ts             # Configuration Nuxt
├── package.json               # Dépendances et scripts
├── .gitignore                 # Configuration Git
├── .nvmrc                     # Version Node
├── README.md                  # Documentation générale
├── ARCHITECTURE.md            # Ce fichier
│
├── assets/
│   └── styles/
│       └── main.css           # Styles globaux avec variables CSS
│
├── components/
│   ├── Header.vue             # Navigation sticky avec menu mobile
│   ├── Footer.vue             # Pied de page avec liens
│   ├── HeroSection.vue        # Section héros d'accueil
│   ├── ServicesSection.vue    # Services et partenaires
│   ├── ExpertiseSection.vue   # Domaines d'expertise
│   ├── RealizationsSection.vue # Galerie des projets
│   ├── NewsSection.vue        # Section actualités
│   └── ContactSection.vue     # Formulaire de contact
│
├── layouts/
│   └── default.vue            # Layout par défaut avec Header/Footer
│
├── pages/
│   └── index.vue              # Page d'accueil
│
├── public/
│   ├── logo.svg               # Logo Aridge
│   ├── hero-beach.jpg         # Image héros
│   ├── hh-group.svg           # Logo HH Group
│   ├── imaar.svg              # Logo IMAAR
│   ├── construction.jpg       # Image de construction
│   ├── workers.jpg            # Image d'équipe
│   ├── equipment.jpg          # Image d'équipements
│   ├── infrastructure.jpg     # Image d'infrastructure
│   ├── technical.jpg          # Image d'expertise technique
│   ├── financial.jpg          # Image d'expertise financière
│   ├── project[1-4].jpg       # Images de projets
│   ├── realization-[1-4].jpg  # Images de réalisations
│   └── news-[1-4].jpg         # Images d'actualités
│
└── scripts/
    └── generate-images.js     # Script de génération d'images
```

## Pages et Routes

### `/` (Accueil)
Route principale affichant tous les composants de section:
- Hero Section
- Services Section
- Expertise Section
- Realizations Section
- News Section
- Contact Section

## Composants

### Header (`components/Header.vue`)
- Navigation sticky en haut de page
- Menu mobile responsive avec toggle
- Logo et branding Aridge
- **Props**: Aucune
- **Events**: Aucun
- **State**: `mobileMenuOpen` (ref boolean)

### HeroSection (`components/HeroSection.vue`)
- Section d'accueil avec image de bannière
- Titre principal et sous-titre
- Bouton d'appel à l'action
- Animations d'entrée
- **Props**: Aucune
- **State**: Aucun

### ServicesSection (`components/ServicesSection.vue`)
- Présentation de Aridge et ses partenaires
- Carte de services (HH Group, IMAAR)
- Description de l'expertise technique et financière
- Grille de solutions avec images
- **Props**: Aucune
- **State**: Aucun

### ExpertiseSection (`components/ExpertiseSection.vue`)
- Trois domaines d'expertise principaux
- Galerie de projets (4 items)
- Descriptions détaillées avec listes à puces
- **Props**: Aucune
- **State**: Aucun

### RealizationsSection (`components/RealizationsSection.vue`)
- Slider de réalisations (4 projets)
- Cartes avec images, titre et description
- Boutons de navigation (Précédent/Suivant)
- **Props**: Aucune
- **State**: Aucun

### NewsSection (`components/NewsSection.vue`)
- Grille d'actualités (4 articles)
- Date, titre, excerpt et image pour chaque article
- Bouton "Lire la suite"
- Lien vers page complète des actualités
- **Props**: Aucune
- **State**: `newsList` (ref array avec interface NewsItem)
- **Interface**:
  ```typescript
  interface NewsItem {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
  }
  ```

### ContactSection (`components/ContactSection.vue`)
- Formulaire de contact (nom, email, sujet, message)
- Informations de contact (adresse, téléphone, email)
- Responsive layout (côte à côte sur desktop, empilé sur mobile)
- **Props**: Aucune
- **Events**: Formulaire soumis via `@submit`
- **State**: `form` (ref object avec interface ContactForm)
- **Interface**:
  ```typescript
  interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
  }
  ```

### Footer (`components/Footer.vue`)
- 4 sections de contenu (Aridge, Navigation, HH Group, Réseaux)
- Liens de réseaux sociaux avec icônes SVG
- Liens légaux (Conditions, Confidentialité)
- Copyright
- **Props**: Aucune
- **State**: Aucun

## Styles et Théme

### Variables CSS Globales
Définis dans `assets/styles/main.css`:

```css
/* Couleurs */
--color-primary: #1b7a7e           /* Couleur primaire */
--color-primary-dark: #0f5156      /* Variante sombre */
--color-primary-light: #2fa3a7     /* Variante claire */
--color-secondary: #5ba3a7         /* Couleur secondaire */
--color-text-dark: #333333         /* Texte principal */
--color-text-light: #666666        /* Texte secondaire */
--color-bg-light: #f5f7f8          /* Arrière-plan clair */
--color-bg-white: #ffffff          /* Arrière-plan blanc */
--color-accent: #4db8c4            /* Couleur d'accent */

/* Typographie */
--font-primary: 'Source Sans Pro', sans-serif
--font-weight-regular: 400         /* Texte courant */
--font-weight-semibold: 600        /* Boutons et éléments UI */
--font-weight-bold: 700            /* Titres et éléments gras */

/* Espacement */
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
--spacing-3xl: 4rem
```

### Typographie
- **Font**: Source Sans Pro (Google Fonts)
- **Regular (400)**: Utilisée pour le texte courant et les paragraphes
- **Semibold (600)**: Utilisée pour les boutons et éléments UI importants
- **Bold (700)**: Utilisée pour tous les titres (h1-h6) et texte gras

### Points de Rupture Responsive
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Classes Utilitaires
- `.container` - Largeur maximale 1200px
- `.grid-2`, `.grid-3`, `.grid-4` - Grilles auto-fit
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline` - Boutons
- `.card` - Cartes avec ombre
- Margin/Padding utilities (mt-sm, mb-lg, p-md, etc.)

## Configuration Nuxt

### `nuxt.config.ts`
```typescript
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  ssr: true // Rendu côté serveur activé
})
```

## Scripts et Commandes

### Development
```bash
npm run dev          # Démarrer le serveur de dev (port 3000)
```

### Build & Deployment
```bash
npm run build        # Construire pour la production
npm run generate     # Générer le site statique
npm run preview      # Prévisualiser la build
```

### Utilitaires
```bash
npm run generate:images  # Générer les images placeholder
npm postinstall          # Auto-exécuté après npm install
```

## Gestion des Images

Les images sont stockées dans le dossier `/public` et servies statiquement.

### Script `scripts/generate-images.js`
Génère des images SVG placeholder pour le développement. Peut être exécuté manuellement:
```bash
npm run generate:images
```

Images générées:
- Logo et images de section
- Images de projets et réalisations
- Images pour actualités

## Performance et Optimisations

### Optimisations Implémentées
1. **CSS Variables** - Centralisation des styles
2. **Responsive Design** - Mobile-first approach
3. **Lazy Loading** - Images natives HTML
4. **Component Splitting** - Composants modulaires
5. **Production Build** - Minification et bundling via Vite

### Bonnes Pratiques
- Utilisation de `NuxtLink` pour la navigation interne
- Composition API pour la réactivité
- TypeScript pour la type safety
- Animations CSS pour meilleures performances

## SEO

### Configuré dans
- `pages/index.vue` avec `useHead()`
- Meta tags: title, description
- Structure sémantique HTML5

## Déploiement

### Build Statique (Recommended)
```bash
npm run generate
```
Crée un dossier `.output` avec le site pré-rendu prêt pour CDN/serveur statique.

### Déploiement SSR
```bash
npm run build
# Déployer sur serveur Node.js
npm run preview
```

## Future Enhancements

- [ ] Intégration d'un CMS pour les actualités
- [ ] Page détails pour chaque projet
- [ ] Système de cache optimisé
- [ ] Analytics et tracking
- [ ] Multilingual support (FR/EN)
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA)
- [ ] Formulaire de contact avec backend

## Support et Maintenance

- Mettre à jour régulièrement Nuxt et Vue
- Monitorer les dépendances avec `npm outdated`
- Tester le responsive design régulièrement
- Valider l'accessibilité (WCAG 2.1)
