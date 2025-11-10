<template>
  <section id="services" class="services">
    <div class="container">
      <!-- qui sommes nous ? -->
        <div class="who-content animate-section">
          <h2 class="animate-title">Qui sommes-nous ?</h2>
          <div class="row">
            <div class="col-md-5 col-12">
              <p>Africa Roads &amp; Infrastructure Development Group (ARIDGE) est une <strong>entreprise panafricaine d'ingénierie</strong>, de construction et de financement d'infrastructures, fondée en République de Djibouti. Elle est le fruit d'un joint-venture stratégique entre :</p>
            </div>
            <div class="col-md-7 col-12">
              <ul>
                <li class="mb-lg animate-item" style="--animate-delay: 0.1s">
                  <div class="halt col-12 row">
                    <div class="col-md-8 col-12">
                      <p><strong>Halt International Group,</strong> conglomérat djiboutien actif dans les secteurs du BTP, du génie civil, de la logistique et des services industriels.</p>
                    </div>
                    <div class="col-md-4 col-12 d-flex justify-content-end align-items-start">
                      <NuxtImg src="/halt.svg" alt="Halt" loading="eager" />
                    </div>
                  </div>
                </li>
                <li class="animate-item" style="--animate-delay: 0.2s">
                  <div class="halt col-12 row">
                    <div class="col-md-8 col-12">
                      <p><strong>Imaad Financial Group (IFG),</strong> banque d'affaires panafricaine de référence, basée à Abidjan, Côte d'Ivoire, spécialisée dans le financement d'infrastructures, les PPP, le conseil stratégique et la structuration financière.</p>
                    </div>
                    <div class="col-md-4 col-12 d-flex justify-content-end align-items-start">
                      <NuxtImg src="/imaad.svg" alt="IMAAD Financial Group" loading="eager" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Carousel des métiers avec Owl Carousel -->
      <div class="carousel-des-metiers">
        <!-- Flèches externes -->
        <button class="custom-arrow custom-prev" @click="prevSlide">
          <NuxtImg src="/slide1/arrowPrev.svg" alt="Précédent" loading="eager" />
        </button>
        
        <div class="carousel-wrapper">
          <div class="owl-carousel owl-theme" ref="owlCarousel">
            <div class="item">
              <div class="carousel-card">
                 <NuxtImg src="/slide1/01.jpg" alt="Construction" class="carousel-image" loading="lazy" />
              </div>
            </div>

            <div class="item">
              <div class="carousel-card">
                <NuxtImg src="/slide1/02.jpg" alt="Construction" class="carousel-image" loading="lazy" />
              </div>
            </div>

            <div class="item">
              <div class="carousel-card">
                 <NuxtImg src="/slide1/03.jpg" alt="Construction" class="carousel-image" loading="lazy" />
              </div>
            </div>
            
           
          </div>
        </div>
        
        <button class="custom-arrow custom-next" @click="nextSlide">
          <NuxtImg src="/slide1/arrowNext.svg" alt="Suivant" loading="eager" />
        </button>
      </div>
      <!-- Nos secteurs d'activité -->
      <div class="secteursactivite">
        <div class="container">
          <div class="who-content animate-section">
            <h2 class="animate-title">Nos secteurs d'activité</h2>
            
            <!-- Carousel secteurs d'activité -->
            <div class="secteurs-carousel-container">
              <button class="secteur-arrow secteur-prev" @click="prevSecteurSlide">
                <NuxtImg src="/slide2/prev.svg" alt="Précédent" loading="eager" />
              </button>
              
              <div class="owl-carousel owl-theme secteurs-owl-carousel" ref="secteursCarousel">
                <div class="item">
                  <div class="secteur-card" @click="openPopup('/slide2/secteur1.webp')">
                    <div class="imgwrapper">
                      <NuxtImg src="/slide2/secteur1.webp" alt="BTP et Génie Civil" class="secteur-image" loading="lazy" />
                    </div>
                    <div class="secteur-content">
                      <h3>Infrastructure routières 
& génie civil</h3>
                      <button class="btn-savoir-plus">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="item">
                  <div class="secteur-card" @click="openPopup('/slide2/secteur2.webp')">
                    <div class="imgwrapper">
                      <NuxtImg src="/slide2/secteur2.webp" alt="Infrastructures" class="secteur-image" loading="lazy" />
                    </div>
                    <div class="secteur-content">
                      <h3>Habitat & logement</h3>
                      <button class="btn-savoir-plus">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="item">
                  <div class="secteur-card" @click="openPopup('/slide2/secteur3.webp')">
                    <div class="imgwrapper">
                      <NuxtImg src="/slide2/secteur3.webp" alt="Services Financiers" class="secteur-image" loading="lazy" />
                    </div>
                    <div class="secteur-content">
                      <h3>Hydraulique et 
assainissement</h3>
                      <button class="btn-savoir-plus">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
                
          
              </div>
              
              <button class="secteur-arrow secteur-next" @click="nextSecteurSlide">
                <NuxtImg src="/slide2/next.svg" alt="Suivant" loading="eager" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Services section component
const owlCarousel = ref<HTMLElement>()
const secteursCarousel = ref<HTMLElement>()
let $owlCarousel: any = null
let $secteursCarousel: any = null

onMounted(() => {
  // Dynamically load jQuery and Owl Carousel
  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      document.head.appendChild(script)
    })
  }

  const loadCSS = (href: string) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }

  // Load CSS files
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css')
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css')
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css')

  // Load jQuery and then Owl Carousel and Magnific Popup
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
    .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'))
    .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js'))
    .then(() => {
      // Initialize Owl Carousel
      if (owlCarousel.value) {
        $owlCarousel = (window as any).$(owlCarousel.value).owlCarousel({
          items: 3,
          loop: true,
          margin: 20,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          nav: false, // Désactiver les flèches intégrées
          dots: false, // Désactiver les points de progression
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1024: {
              items: 3
            }
          }
        })
      }

      // Initialize Secteurs Carousel
      if (secteursCarousel.value) {
        $secteursCarousel = (window as any).$(secteursCarousel.value).owlCarousel({
          items: 3,
          loop: true,
          margin: 0,
          autoplay: true,
          autoplayTimeout: 6000,
          autoplayHoverPause: true,
          nav: false,
          dots: false,
          center: false,
          autoHeight: false,
          responsive: {
            0: {
              items: 1,
              margin: 0
            },
            768: {
              items: 2,
              margin: 0
            },
            1024: {
              items: 3,
              margin: 0
            }
          }
        })
      }
    })
})

// Fonction pour ouvrir le popup Magnific
const openPopup = (imageSrc: string) => {
  if ((window as any).$) {
    (window as any).$.magnificPopup.open({
      items: {
        src: imageSrc
      },
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile mfp-carousel-modal',
      image: {
        verticalFit: true
      },
      closeMarkup: '<button class="mfp-close-custom"><span></span><span></span></button>'
    })
  }
}

// Custom navigation functions
const nextSlide = () => {
  if ($owlCarousel) {
    $owlCarousel.trigger('next.owl.carousel')
  }
}

const prevSlide = () => {
  if ($owlCarousel) {
    $owlCarousel.trigger('prev.owl.carousel')
  }
}

// Navigation functions for secteurs carousel
const nextSecteurSlide = () => {
  if ($secteursCarousel) {
    $secteursCarousel.trigger('next.owl.carousel')
  }
}

const prevSecteurSlide = () => {
  if ($secteursCarousel) {
    $secteursCarousel.trigger('prev.owl.carousel')
  }
}

onUnmounted(() => {
  // Destroy Owl Carousel instances
  if ($owlCarousel) {
    $owlCarousel.trigger('destroy.owl.carousel')
  }
  if ($secteursCarousel) {
    $secteursCarousel.trigger('destroy.owl.carousel')
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.animate-section {
  animation: subtleFadeIn 0.9s ease-out;
}

.animate-title {
  animation: subtleSlideInUp 0.9s ease-out;
}

.animate-item {
  animation: subtleSlideInUp 0.8s ease-out both;
  animation-delay: var(--animate-delay, 0s);
}

.secteurs-owl-carousel{
  .imgwrapper{
    border-radius:12px;
    margin:2em 2em 0.5em 2em;
    img{
      border-radius:12px;
    }
  }

  .secteur-content{
    margin: 0em;
    h3{
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: $primary;
    }
  }
  .owl-item{
    margin:0 !important;
    margin-right: 0 !important;
    height:470px !important;
    min-height:470px !important;
  }
  .owl-item .item {
    height: 470px !important;
  }
}
.services {
  padding: var(--spacing-3xl) 0 0;
  background-color: #f8f8f8;
}

.who-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: flex-start;
  margin-bottom: var(--spacing-3xl);
}

/* Carousel des métiers avec Owl Carousel */
.carousel-des-metiers {
  padding: var(--spacing-2xl) 0;
  background:#f8f8f8; /* Fond blanc */
  margin-bottom: var(--spacing-3xl);
  position: relative; /* Pour le positionnement des flèches */
      max-width: 1400px;
    margin: 0 auto;
    min-width: 1200px;
}

.carousel-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* Owl Carousel Items */
.owl-carousel .item {
  padding: 0 var(--spacing-sm);
}

.carousel-card {
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 250px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Flèches personnalisées */
.custom-arrow {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  
  img {
    display: block;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
    
    img {
      opacity: 0.8;
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
}

.custom-prev {
  left: 10px;
}

.custom-next {
  right: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-des-metiers {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .carousel-card {
    height: 200px;
  }

  .custom-prev {
    left: 5px;
  }

  .custom-next {
    right: 5px;
  }
  
  .secteurs-owl-carousel {
    margin: 0 40px;
  }
  
  .secteur-card {
    height: 350px;
  }
  
  .secteur-image {
    height: 200px;
  }
  
  .secteur-prev {
    left: 5px;
  }
  
  .secteur-next {
    right: 5px;
  }
}

.who-logos {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
}

.logo-item {
  background: var(--color-bg-light);
  padding: var(--spacing-2xl);
  border-radius: 8px;
  text-align: center;
  transition: all var(--transition-speed);
}

.logo-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(27, 122, 126, 0.1);
}

.logo-item img {
  height: 60px;
  margin-bottom: var(--spacing-lg);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.logo-item h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

.logo-item p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

.expertise-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
  padding: var(--spacing-2xl);
  background: var(--color-bg-light);
  border-radius: 8px;
}

.expertise-box h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-size: 1.2rem;
}

.expertise-box ul {
  list-style-position: inside;
  color: var(--color-text-light);
}

.expertise-box li {
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-md);
}

.inline-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.inline-list li {
  list-style: none;
  padding: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  font-size: 0.9rem;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.solution-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 250px;
}

.solution-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.solution-item:hover img {
  transform: scale(1.05);
}

.solution-item p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  padding: var(--spacing-lg);
  margin: 0;
  font-weight: 600;
}

/* Secteurs d'activité carousel styles */
.secteursactivite {
  background-color: #F8F8F8;
  padding: var(--spacing-3xl) 0 1em 0;
  .who-content{
    padding-bottom:0em;
  }
}

.secteurs-carousel-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.secteurs-owl-carousel {
  margin: 0 60px;
}

.secteurs-owl-carousel .item {
  padding: 0 15px;
}

.secteur-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 450px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.secteur-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.secteur-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.secteur-content {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.secteur-content h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
}

.btn-savoir-plus {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: var(--font-weight-semibold);
  margin-top: auto;
}

.btn-savoir-plus:hover {
  background-color: var(--color-primary-dark);
}

.plus-icon {
  width: 16px;
  height: 16px;
}

/* Secteurs carousel arrows */
.secteur-arrow {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.secteur-arrow img {
  display: block;
  transition: opacity 0.3s ease;
}

.secteur-arrow:hover {
  transform: translateY(-50%) scale(1.1);
}

.secteur-arrow:hover img {
  opacity: 0.8;
}

.secteur-prev {
  left: -30px;
}

.secteur-next {
  right: -30px;
}

@media (max-width: 768px) {
  .services {
    padding: var(--spacing-2xl) 0;
  }

  .who-section {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .who-content h2 {
    font-size: 1.5rem;
  }

  .expertise-sections {
    grid-template-columns: 1fr;
  }

}
.secteurs-carousel-container{
  max-width: 1044px;
  margin: 0 auto;
  .owl-carousel{
    margin:0;
  }
}
</style>

<style lang="scss">
// Magnific Popup custom styles - non-scoped to override defaults
.mfp-carousel-modal {
  .mfp-bg {
    opacity: 0 !important;
    display: none !important;
  }

  .mfp-container {
    max-width: 1000px !important;
    max-height: 600px !important;
    margin: auto !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    position: fixed !important;
  }

  .mfp-img {
    max-width: 100% !important;
    max-height: 600px !important;
    width: auto !important;
    height: auto !important;
    border-radius: 20px !important;
  }

  .mfp-close-custom {
    position: absolute !important;
    top: 10px !important;
    right: 10px !important;
    width: 40px !important;
    height: 40px !important;
    background: white !important;
    border: none !important;
    border-radius: 50% !important;
    cursor: pointer !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease !important;
    z-index: 1000 !important;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
      transform: scale(1.1) !important;
    }

    span {
      position: absolute !important;
      width: 20px !important;
      height: 2px !important;
      background-color: transparent !important;

      &:nth-child(1) {
        transform: rotate(45deg) !important;
        background-color: rgba(0, 0, 0, 0.5) !important;
      }

      &:nth-child(2) {
        transform: rotate(-45deg) !important;
        background-color: rgba(0, 0, 0, 0.5) !important;
      }
    }
  }
}
</style>
