# Configuration - Aridge Website

## ✅ Projet Completement Configuré

Un site web moderne et responsive a été créé avec **Nuxt 3** et **Vue 3** les dernières versions.

## 📦 Versions Installées

```json
{
  "nuxt": "4.2.0",
  "vue": "3.5.22",
  "vite": "7.1.12",
  "nitro": "2.12.9",
  "node": "18.17.0+"
}
```

## 🎨 Design et Typographie

### Police de Caractères
- **Source Sans Pro** intégrée via Google Fonts
- **Poids 400** (Regular) - Texte courant
- **Poids 600** (Semibold) - Boutons et éléments UI
- **Poids 700** (Bold) - Titres et texte en gras

### Système de Couleurs
```css
Primaire: #1b7a7e
Primaire Sombre: #0f5156
Primaire Clair: #2fa3a7
Secondaire: #5ba3a7
Texte Sombre: #333333
Texte Clair: #666666
Arrière-plan Clair: #f5f7f8
```

## 📱 Responsive Design

- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px
- Design mobile-first avec CSS flexible
- Grilles auto-fit pour adaptabilité

## 🧩 8 Sections Principales

1. **Header** - Navigation sticky avec menu mobile
2. **Hero** - Section d'accueil avec image
3. **Services** - Présentation d'Aridge et partenaires
4. **Expertise** - Domaines clés et galerie
5. **Réalisations** - Portfolio de projets
6. **Actualités** - Blog et articles
7. **Contact** - Formulaire de contact
8. **Footer** - Navigation et informations

## 🚀 Démarrage Rapide

### Installation
```bash
cd /Users/houedanou/Documents/aridge
npm install
```

### Développement
```bash
npm run dev
# Le site est accessible à http://localhost:3000
```

### Build Production
```bash
npm run build      # Build SSR
npm run generate   # Build statique
npm run preview    # Prévisualiser la build
```

## 📁 Structure Composants

```
components/
├── Header.vue              # Navigation
├── Footer.vue              # Pied de page
├── HeroSection.vue         # Section d'accueil
├── ServicesSection.vue     # Services
├── ExpertiseSection.vue    # Expertise
├── RealizationsSection.vue # Projets
├── NewsSection.vue         # Actualités
└── ContactSection.vue      # Formulaire
```

## 🎯 Caractéristiques

✅ Responsive design (mobile-first)
✅ Performance optimisée avec Vite
✅ SEO ready avec Nuxt 3
✅ Composants modulaires Vue 3
✅ CSS variables pour thème cohérent
✅ Animations fluides et transitions
✅ Formulaire de contact
✅ Navigation sticky avec menu mobile toggle
✅ Images optimisées (SVG + placeholder)
✅ TypeScript support
✅ DevTools activé pour développement

## 📊 Performance

- Serveur Nitro ultra-rapide
- Bundling optimisé avec Vite
- CSS modules scoped pour chaque composant
- Pre-connexion aux fonts Google
- Images lazy-loaded

## 📚 Documentation

- **README.md** - Guide général
- **ARCHITECTURE.md** - Architecture détaillée
- **SETUP.md** - Ce fichier

## 🔗 Ressources

- Nuxt Docs: https://nuxt.com
- Vue 3 Docs: https://vuejs.org
- Google Fonts Source Sans Pro: https://fonts.google.com/specimen/Source+Sans+Pro

## 💡 Prochaines Étapes Recommandées

- [ ] Intégrer un backend pour le formulaire de contact
- [ ] Ajouter une page détails pour les projets
- [ ] Implémenter les actualités dynamiques
- [ ] Ajouter Google Analytics
- [ ] Multi-langue (FR/EN)
- [ ] Dark mode toggle
- [ ] PWA support
- [ ] Sitemap et robots.txt

## 📞 Support

Pour des questions ou problèmes:
- Voir la documentation dans les fichiers .md
- Consulter la configuration dans `nuxt.config.ts`
- Vérifier les styles dans `assets/styles/main.css`

---

**Projet créé avec Nuxt 3 & Vue 3** ⚡
