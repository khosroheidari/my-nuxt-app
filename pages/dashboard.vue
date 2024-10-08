<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4">
      <h1 class="text-4xl font-bold mb-8">Welcome to Your Dashboard!</h1>
      <button 
        @click="signOut" 
        class="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
        Sign Out
      </button>
      <span v-if="error" class="text-red-500 mt-2">{{ error }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '~/store/useAuthStore';
  import { useRouter } from 'vue-router';
  import { auth } from '@/services/firebase'; // Ensure this path is correct
  import { signOut as firebaseSignOut } from 'firebase/auth';
  
  const authStore = useAuthStore();
  const router = useRouter();
  const error = ref(''); // Reactive variable to hold error messages
  
  // Function to sign out and redirect to the registration page
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      authStore.logUserOut(); // Update your auth store to reflect the sign-out
      router.push('/register'); // Redirect to registration page
    } catch (err) {
      console.error('Error signing out:', err);
      error.value = 'Sign out failed. Please try again.'; // Set error message
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  