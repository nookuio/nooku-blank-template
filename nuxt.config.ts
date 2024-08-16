export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
                overlay: false,
            },
        }
    },
    modules: ['@vueuse/nuxt', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nooku/nuxt', '@nuxt/icon'],
});
