export default defineNuxtConfig({
  vite: { server: { hmr: { overlay: false } } },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nookuio/nuxt',
    '@nuxt/icon',
  ],
  future: {
    compatibilityVersion: 4,
  },
});
