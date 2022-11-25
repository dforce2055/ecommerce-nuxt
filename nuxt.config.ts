// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // charset: 'utf-16',
      // viewport: 'width=500, initial-scale=1',
      title: 'My Amazing Store',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Headless E-Commerce' },
        { name: 'author', content: 'Diego Pérez' },
        { name: 'dev', content: 'dforce2055 dperez2055@gmail.com' },
        { name: 'keywords', content: 'javascript, typescript, nuxt, vue, node, tailwindcss' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    // pageTransition: {
    //   name: 'fade',
    //   mode: 'out-in' // default
    // },
    // layoutTransition: {
    //   name: 'slide',
    //   mode: 'out-in' // default
    // }
  },
  // DOCS: https://nuxt.com/docs/api/composables/use-runtime-config
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: process.env.NUXT_API_SECRET || '123',

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  // https://nuxt.com/modules/tailwindcss
  // https://v8.i18n.nuxtjs.org/getting-started/setup
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: '',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        name: 'Español',
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.json'
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json'
      }
    ], // used in URL path prefix
    lazy: false, // TRUE Read this => https://i18n.nuxtjs.org/lazy-load-translations/
    langDir: 'lang',
    defaultLocale: 'en',
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    // vueI18n: {
    //   legacy: false,
    //   locale: 'en',
    //   messages: {
    //     en: {
    //       welcome: 'Welcome'
    //     },
    //     fr: {
    //       welcome: 'Bienvenue'
    //     }
    //   }
    // }
  }
})
