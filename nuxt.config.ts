import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  vite: { server: { hmr: { overlay: false } }, plugins: [tailwindcss()] },
  modules: ['@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon', '@nookuio/nuxt'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-02-05',
});
