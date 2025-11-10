import { onMounted, onUnmounted } from 'vue'

export const useIntersectionAnimation = () => {
  let observer: IntersectionObserver | null = null

  const animationMap: Record<string, string> = {
    'fade-in': 'animate__fadeIn',
    'slide-in-up': 'animate__slideInUp',
    'slide-in-down': 'animate__slideInDown',
    'slide-in-left': 'animate__slideInLeft',
    'slide-in-right': 'animate__slideInRight',
    'zoom-in': 'animate__zoomIn',
    'bounce-in': 'animate__bounceIn',
    'flip-in-x': 'animate__flipInX',
  }

  const initializeObserver = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute('data-animate')

          if (animationType && animationMap[animationType]) {
            element.classList.add('animate__animated', animationMap[animationType])
            // Optionnel: désabonner après animation
            observer?.unobserve(element)
          }
        }
      })
    }, {
      threshold: 0.1
    })
  }

  const observeElements = (selector: string) => {
    if (!observer) initializeObserver()

    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      observer?.observe(element)
    })
  }

  onMounted(() => {
    initializeObserver()
    // Observer tous les éléments avec data-animate au montage
    observeElements('[data-animate]')
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observeElements,
    animationMap
  }
}
