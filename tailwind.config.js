module.exports = {
  content: [
    './components/**/*.{vue,js}', // Watches the components folder
    './layouts/**/*.vue', // Watches the layouts folder
    './pages/**/*.vue', // Watches the pages folder
    './plugins/**/*.{js,ts}', // Watches the plugins folder
    './nuxt.config.{js,ts}', // Watches the config
    './app.vue', // Watches the app.vue file in the root directory
  ],
  theme: {
    extend: {}, // Add any custom theme options here
  },
  plugins: [], // Add Tailwind plugins here if necessary
};
