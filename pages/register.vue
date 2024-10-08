<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4">
    <div class="w-full max-w-2xl p-4 bg-blue-600 rounded-md mb-6"> 
      <p class="text-center">
        New here? Please register by filling out the form below. 
        Already have an account? Use the sign-in form. 
        You can also sign up or sign in with your Google account.
      </p>
    </div>

    <h1 class="text-4xl font-bold mb-4">Register</h1>
    <form @submit.prevent="registerUser" class="flex flex-col w-full max-w-md">
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Email"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Password"
      />
      <span v-if="error" class="text-red-500 mb-2">{{ error }}</span>
      <button
        type="submit"
        class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
        :disabled="loading"
      >
        <span v-if="loading">Registering...</span>
        <span v-else>Register</span>
      </button>
      <button
        @click.prevent="signInWithGoogle"
        class="mt-2 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
      >
        Sign in with Google
      </button>
      <span v-if="success" class="text-green-500 mt-4">{{ success }}</span>
    </form>

    <h2 class="mt-6 text-xl">Or Sign In</h2>
    <form @submit.prevent="signIn" class="flex flex-col w-full max-w-md">
      <input
        type="email"
        v-model="signInEmail"
        placeholder="Email"
        class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Email"
      />
      <input
        type="password"
        v-model="signInPassword"
        placeholder="Password"
        class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Password"
      />
      <span v-if="signInError" class="text-red-500 mb-2">{{ signInError }}</span>
      <button
        type="submit"
        class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
        :disabled="loading"
      >
        <span v-if="loading">Signing In...</span>
        <span v-else>Sign In</span>
      </button>
    </form>

    <div class="mt-6">
      <nuxt-link
        to="/"
        class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
      >
        Back to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/services/firebase';

const googleProvider = new GoogleAuthProvider();
const email = ref('');
const password = ref('');
const signInEmail = ref('');
const signInPassword = ref('');
const error = ref('');
const signInError = ref('');
const success = ref('');
const loading = ref(false);
const router = useRouter();

const registerUser = async () => {
  if (!email.value || !password.value) {
    error.value = 'Email and password are required.';
    return;
  }

  error.value = '';
  success.value = '';
  loading.value = true;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    success.value = 'Registration successful! Redirecting...';
    email.value = '';
    password.value = '';

    // Redirect only after registration is complete
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
    console.error('Registration error:', err);
  } finally {
    loading.value = false;
  }
};

const signIn = async () => {
  if (!signInEmail.value || !signInPassword.value) {
    signInError.value = 'Email and password are required.';
    return;
  }

  signInError.value = '';
  loading.value = true;

  try {
    await signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value);
    success.value = 'Sign in successful! Redirecting...';
    signInEmail.value = '';
    signInPassword.value = '';

    // Redirect after successful sign-in
    router.push('/dashboard');
  } catch (err) {
    signInError.value = err.message;
    console.error('Sign in error:', err);
  } finally {
    loading.value = false;
  }
};

const signInWithGoogle = async () => {
  error.value = '';
  success.value = '';
  loading.value = true;

  try {
    const result = await signInWithPopup(auth, googleProvider);
    success.value = 'Signed in with Google! Redirecting...';
    console.log('Google sign-in result:', result); // Log the result for debugging

    // Redirect after successful Google sign-in
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
    console.error('Google Sign-in error:', err);
    console.error('Error details:', err); // Log error details for debugging
  } finally {
    loading.value = false;
  }
};


onMounted(() => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        // Redirect only if user is already authenticated
        router.push('/dashboard');
      }
    });
  } catch (error) {
    console.error('Error in onAuthStateChanged:', error);
  }
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
