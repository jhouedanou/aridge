import fr from '~/locales/fr.json'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T

export const useTranslation = (locale: string = 'fr') => {
  const messages: Record<string, any> = {
    fr
  }

  const currentMessages = messages[locale] || messages.fr

  const t = (key: string, defaultValue: string = ''): any => {
    const keys = key.split('.')
    let value: any = currentMessages

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return defaultValue || key
      }
    }

    return value
  }

  const getNestedObject = (key: string): any => {
    const keys = key.split('.')
    let value: any = currentMessages

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return null
      }
    }

    return value
  }

  return {
    t,
    getNestedObject,
    messages: currentMessages
  }
}
