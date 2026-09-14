// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'SOB Plastics  | Industrial Plastics & Catering Equipment',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://googleapis.com'}
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth'
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/eslint', '@nuxt/image']
})