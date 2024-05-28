export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
                overlay: false,
            },
        }
    },
    modules: ['nuxt-icon', '@vueuse/nuxt', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nooku/nuxt'],
});
