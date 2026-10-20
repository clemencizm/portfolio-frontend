import tailwindcss from '@tailwindcss/vite'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'], 
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
      {
      name: 'Bricolage Grotesque',
      provider: 'google',
      weights: [400, 500, 600, 700]
    },
    {
      name: 'IBM Plex Mono',
      provider: 'google',
      weights: [400, 500]
    }
    ]
  },
  i18n: {
  defaultLocale: 'fr',
  strategy: 'prefix_except_default',
  locales: [
    { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
    { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' }
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root'
  }
}
})