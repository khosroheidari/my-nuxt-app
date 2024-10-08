import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Nuxt server configuration
  server: {
    port: process.env.PORT || 5003, // Set the port for Nuxt server
    host: '0.0.0.0', // Listen on all interfaces
  },

  // Register the Firebase plugin
  plugins: ['~/services/firebase.js'],

  // Nuxt-specific modules
  modules: ['@nuxtjs/tailwindcss'],

  // TailwindCSS configuration (customize if needed)
  tailwindcss: {
    // Add any TailwindCSS options here if necessary
  },

  // Runtime environment variables
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI, // Environment variable for MongoDB URI
  },

  // Nitro configuration (proxy setup for development)
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:5003', // Proxy to your backend (e.g., Express server)
        changeOrigin: true,
      },
    },
  },

  plugins: [
    '~/plugins/pinia.js',
  ],

  compatibilityDate: '2024-10-07',
});
