// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "~/assets/css/style.css"
  ],
  build: {
    transpile: ["primevue"]
  },
  modules: ['nuxt-icon', '@pinia/nuxt',],
  devtools: { enabled: true },
})
