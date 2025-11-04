import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '../public')

// Créer le répertoire s'il n'existe pas
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true })
}

// Fonction pour créer un SVG de placeholder
const createPlaceholderSVG = (width, height, text, color = '#1b7a7e') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}" opacity="0.1"/>
  <rect width="${width}" height="${height}" fill="none" stroke="${color}" stroke-width="2"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${color}" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`
}

// Créer les images
const images = [
  { name: 'logo.svg', width: 200, height: 60, text: 'ARIDGE' },
  { name: 'hero-beach.jpg', width: 600, height: 400, text: 'Hero Image' },
  { name: 'hh-group.svg', width: 150, height: 100, text: 'HH Group' },
  { name: 'imaar.svg', width: 150, height: 100, text: 'IMAAR' },
  { name: 'construction.jpg', width: 300, height: 300, text: 'Construction' },
  { name: 'workers.jpg', width: 300, height: 300, text: 'Workers' },
  { name: 'equipment.jpg', width: 300, height: 300, text: 'Equipment' },
  { name: 'infrastructure.jpg', width: 300, height: 300, text: 'Infrastructure' },
  { name: 'technical.jpg', width: 300, height: 300, text: 'Technical' },
  { name: 'financial.jpg', width: 300, height: 300, text: 'Financial' },
  { name: 'project1.jpg', width: 300, height: 300, text: 'Project 1' },
  { name: 'project2.jpg', width: 300, height: 300, text: 'Project 2' },
  { name: 'project3.jpg', width: 300, height: 300, text: 'Project 3' },
  { name: 'project4.jpg', width: 300, height: 300, text: 'Project 4' },
  { name: 'realization-1.jpg', width: 300, height: 200, text: 'Réalisation 1' },
  { name: 'realization-2.jpg', width: 300, height: 200, text: 'Réalisation 2' },
  { name: 'realization-3.jpg', width: 300, height: 200, text: 'Réalisation 3' },
  { name: 'realization-4.jpg', width: 300, height: 200, text: 'Réalisation 4' },
  { name: 'news-1.jpg', width: 300, height: 200, text: 'News 1' },
  { name: 'news-2.jpg', width: 300, height: 200, text: 'News 2' },
  { name: 'news-3.jpg', width: 300, height: 200, text: 'News 3' },
  { name: 'news-4.jpg', width: 300, height: 200, text: 'News 4' },
]

console.log('Generating placeholder images...')

images.forEach((image) => {
  const imagePath = path.join(assetsDir, image.name)
  const svg = createPlaceholderSVG(image.width, image.height, image.text)
  fs.writeFileSync(imagePath, svg)
  console.log(`✓ Created ${image.name}`)
})

console.log('\n✅ All placeholder images created successfully!')
