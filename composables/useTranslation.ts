export const useTranslation = (locale: string = 'fr') => {
  const messages: Record<string, any> = {
    fr: {
      "hero": {
        "title": "Construction et financement d'infrastructures",
        "cta": "En savoir plus"
      },
      "services": {
        "title": "Qui sommes-nous ?",
        "description": "Africa Roads & Infrastructure Development Group (ARIDGE) est une entreprise panafricaine d'ingénierie, de construction et de financement d'infrastructures, fondée en République de Djibouti. Elle est le fruit d'un joint-venture stratégique entre :",
        "partners": {
          "halt": {
            "name": "Halt International Group",
            "description": "conglomérat djiboutien actif dans les secteurs du BTP, du génie civil, de la logistique et des services industriels."
          },
          "imaad": {
            "name": "Imaad Financial Group (IFG)",
            "description": "banque d'affaires panafricaine de référence, basée à Abidjan, Côte d'Ivoire, spécialisée dans le financement d'infrastructures, les PPP, le conseil stratégique et la structuration financière."
          }
        },
        "carouselTitle": "Nos secteurs d'activité",
        "sectors": {
          "sector1": "Infrastructure routières & génie civil",
          "sector2": "Habitat & logement",
          "sector3": "Hydraulique et assainissement"
        },
        "knowMore": "En savoir plus"
      },
      "expertise": {
        "title": "Notre expertise technique",
        "description": "Nous collaborons avec des bureaux d'études internationaux, des fournisseurs certifiés ISO, et des experts locaux pour garantir la qualité, la résilience et la durabilité de chaque projet.",
        "technicalStudies": "Études techniques et conception BIM",
        "skills": [
          "Maîtrise d'œuvre tous corps d'état (TCE)",
          "Construction modulaire et préfabriquée",
          "Gestion environnementale & conformité ESG",
          "Maintenance & gestion d'actifs infrastructurels"
        ]
      },
      "realizations": {
        "title": "Nos réalisations",
        "description": "Imaad Financial Group joue un rôle clé dans la réussite d'ARIDGE, en apportant :",
        "financialExpertise": "Notre expertise financière",
        "skills": [
          "Structuration de financements souverains et institutionnels (banques, fonds, assureurs)",
          "Montage et sécurisation de Partenariats Public-Privé (PPP) avec garanties d'État",
          "Levier de syndication panafricaine et internationale",
          "Gestion d'actifs liés aux infrastructures (routes à péage, résidences étudiantes, zones économiques spéciales)",
          "Structuration ESG pour attirer les financeurs à impact et green funds"
        ]
      },
      "news": {
        "title": "Nos Réalisations",
        "viewAll": "Voir toutes les actualités",
        "readMore": "Lire la suite →"
      },
      "contact": {
        "title": "Nous Contacter",
        "description": "Avez-vous des questions ? Contactez-nous dès maintenant.",
        "formLabels": {
          "name": "Nom complet",
          "email": "Email",
          "phone": "Téléphone",
          "message": "Message",
          "submit": "Envoyer"
        }
      },
      "header": {
        "nav": {
          "home": "Accueil",
          "services": "Services",
          "expertise": "Expertise",
          "realizations": "Réalisations",
          "news": "Actualités",
          "contact": "Contact"
        }
      },
      "footer": {
        "sections": {
          "aridge": {
            "title": "ARIDGE",
            "description": "Construction et financement d'infrastructures"
          },
          "haltGroup": {
            "title": "HALT GROUP",
            "address": "Halt International\nBuilding\nJ542+HC2, Avenue\nFranchet d'Esperey,\nPlateau Serpent,\nDjibouti"
          },
          "imaadFg": {
            "title": "IMAAD FG",
            "address": "Abidjan Cocody\nRiviera IV, Rue Sol Béni,\nImmeuble KAYOA"
          },
          "socialMedia": {
            "title": "Social media",
            "links": [
              "Linkedin",
              "Instagram",
              "Youtube",
              "X",
              "Facebook"
            ]
          }
        },
        "copyright": "© 2024 ARIDGE. Tous droits réservés."
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
