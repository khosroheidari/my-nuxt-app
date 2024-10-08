// store/useAuthStore.js
import { defineStore } from 'pinia';
import { useNuxtApp } from '#app'; // This will allow you to access the provided `auth`

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    logUserOut() {
      this.user = null;
    },
    // Example of using auth in an action
    async login(email, password) {
      const { auth } = useNuxtApp(); // Get the auth instance
      // Use auth for logging in...
    },
  },
});
