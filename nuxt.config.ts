export default defineNuxtConfig({
  vite: { server: { hmr: { overlay: false } } },
  modules: [
    '@nookuio/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  future: { compatibilityVersion: 4 },
});
