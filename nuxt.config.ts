export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
  ],
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
  css: ["./assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/base/normalize" as *;
            @use "~/assets/scss/base/mixins" as *;
            @use "~/assets/scss/base/globals" as *;
            @use "~/assets/scss/base/media" as *;
            @use "~/assets/scss/base/units" as *;
            @use "~/assets/scss/base/variables" as *;
            @use "~/assets/scss/base/fonts" as *;
          `
        },
      },
    },
  },
});