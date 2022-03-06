export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Megan Filo - Fullstack Web Developer",
    titleTemplate: " %s | Megan Filo - Fullstack Web Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The digital portfolio of Megan Filo, a fullstack web developer and software engineer." },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>" }],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/normalize.scss',
    '~/assets/styles/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '@/plugins/vue-gtag.js',
      mode: 'client'
    }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    "~/components",
    { path: "~/components/ui", extensions: ["vue"] },
    { path: "~/components/layout", extensions: ["vue"] },
    { path: "~/components/home", extensions: ["vue"] },
    { path: "~/components/about", extensions: ["vue"] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
