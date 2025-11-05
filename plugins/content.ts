import { useContent } from '~/composables/useContent'

export default defineNuxtPlugin(async () => {
  const { loadContent } = useContent()
  await loadContent()
})
