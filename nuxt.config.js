export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtWebb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/sakura-vader.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/api.js" },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  firebase: {
    config: {
      apiKey: 'AIzaSyDsF2uocryucjZlNFVZAxrPFFqxRSu0CIg',
      authDomain: 'webreviews-cb91a.firebaseapp.com',
      projectId: 'webreviews-cb91a',
      storageBucket: 'webreviews-cb91a.appspot.com',
      messagingSenderId: '552540050388',
      appId: '1:552540050388:web:91ee0afc4e9dfbd400bc41',
      measurementId: 'G-GN8Y0Y9MJ7'
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      //  messaging: true,
      //  performance: true,
      //analytics: true,
      // remoteConfig: true
    }

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
