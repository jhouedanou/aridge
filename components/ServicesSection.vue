<template>
  <section id="services" class="services">
    <div class="container">
        <div class="who-content">
          <h2>Qui sommes-nous ?</h2>
          <div class="row">
            <div class="col-md-5 col-12">
              <p>Africa Roads &amp; Infrastructure Development Group (ARIDGE) est une <strong>entreprise panafricaine d'ingénierie</strong>, de construction et de financement d'infrastructures, fondée en République de Djibouti. Elle est le fruit d'un joint-venture stratégique entre :</p>
            </div>
            <div class="col-md-7 col-12">
              <ul>
                <li class="mb-lg">
                  <div class="halt col-12 row">
                    <div class="col-md-8 col-12">
                      <p><strong>Halt International Group,</strong> conglomérat djiboutien actif dans les secteurs du BTP, du génie civil, de la logistique et des services industriels.</p>
                    </div>
                    <div class="col-md-4 col-12 d-flex justify-content-end align-items-start">
                      <img src="/halt.svg" alt="Halt" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="halt col-12 row">
                    <div class="col-md-8 col-12">
                      <p><strong>Imaad Financial Group (IFG),</strong> banque d'affaires panafricaine de référence, basée à Abidjan, Côte d'Ivoire, spécialisée dans le financement d'infrastructures, les PPP, le conseil stratégique et la structuration financière.</p>
                    </div>
                    <div class="col-md-4 col-12 d-flex justify-content-end align-items-start">
                      <img src="/imaad.svg" alt="IMAAD Financial Group" />
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
          <img :src="'/slide1/arrowPrev.svg'" alt="Précédent" />
        </button>
        
        <div class="carousel-wrapper">
          <div class="owl-carousel owl-theme" ref="owlCarousel">
            <div class="item">
              <div class="carousel-card">
                 <img src="/slide1/01.jpg" alt="Construction" class="carousel-image" />
              </div>
            </div>
            
            <div class="item">
              <div class="carousel-card">
                <img src="/slide1/02.jpg" alt="Construction" class="carousel-image" />
              </div>
            </div>
            
            <div class="item">
              <div class="carousel-card">
                 <img src="/slide1/03.jpg" alt="Construction" class="carousel-image" />
              </div>
            </div>
            
           
          </div>
        </div>
        
        <button class="custom-arrow custom-next" @click="nextSlide">
          <img :src="'/slide1/arrowNext.svg'" alt="Suivant" />
        </button>
      </div>

      <div class="container">
        <div class="solutions-grid">
        <div class="solution-item">
          <img src="/construction.jpg" alt="Construction" />
          <p>Solutions de construction intégrées</p>
        </div>
        <div class="solution-item">
          <img src="/workers.jpg" alt="Experts" />
          <p>Expertise technique éprouvée</p>
        </div>
        <div class="solution-item">
          <img src="/equipment.jpg" alt="Équipements" />
          <p>Équipements modernes et performants</p>
        </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Services section component
const owlCarousel = ref<HTMLElement>()
let $owlCarousel: any = null

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

  // Load jQuery and then Owl Carousel
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
    .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'))
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
    })
})

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

onUnmounted(() => {
  // Destroy Owl Carousel instance
  if ($owlCarousel) {
    $owlCarousel.trigger('destroy.owl.carousel')
  }
})
</script>

<style lang="scss" scoped>
.services {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg-white);
}

.who-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: flex-start;
  margin-bottom: var(--spacing-3xl);
}

.who-content {

    padding-top: 2em;
  padding-bottom: 5em;
  
  h2 {
    @include primary-button;
    margin-bottom: var(--spacing-lg);
    font-size: 22px !important;
    display: inline-block;
    padding: 0.75rem 2rem;
    border: none;
  }
}

/* Carousel des métiers avec Owl Carousel */
.carousel-des-metiers {
  padding: var(--spacing-2xl) 0;
  background: white; /* Fond blanc */
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
</style>
