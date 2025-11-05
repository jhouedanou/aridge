import { ref, computed } from 'vue'

interface ContentData {
  [key: string]: any
}

const contentData = ref<ContentData | null>(null)
const currentLanguage = ref<string>('fr')

export const useContent = () => {
  const loadContent = async () => {
    try {
      const response = await fetch('/content.json')
      const data = await response.json()
      contentData.value = data
    } catch (error) {
      console.error('Error loading content:', error)
    }
  }

  const setLanguage = (lang: string) => {
    if (contentData.value && contentData.value[lang]) {
      currentLanguage.value = lang
    }
  }

  const getText = (path: string, fallback: string = ''): string => {
    if (!contentData.value) {
      return fallback
    }

    const keys = path.split('.')
    let value: any = contentData.value[currentLanguage.value]

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        return fallback
      }
    }

    return typeof value === 'string' ? value : fallback
  }

  const getContent = (path: string, fallback: any = null): any => {
    if (!contentData.value) {
      return fallback
    }

    const keys = path.split('.')
    let value: any = contentData.value[currentLanguage.value]

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        return fallback
      }
    }

    return value
  }

  const language = computed(() => currentLanguage.value)
  const isLoaded = computed(() => contentData.value !== null)

  return {
    loadContent,
    setLanguage,
    getText,
    getContent,
    language,
    isLoaded
  }
}
