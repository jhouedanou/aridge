export const useTranslation = (locale: string = 'fr') => {
  const messages: Record<string, any> = {
    fr: {
      "hero": {
        "title": "Construction et financement d'infrastructures",
        "cta": "En savoir plus"
      },
      "underConstruction": {
        "title": "Page en construction",
        "subtitle": "Nous travaillons dur pour préparer cette section. Elle sera bientôt disponible !",
        "features": [
          "Contenu riche et informatif",
          "Design moderne et responsive",
          "Expérience utilisateur optimisée"
        ],
        "backHome": "Retour à l'accueil",
        "contactUs": "Nous contacter"
      }
    }
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
