<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-lg font-bold">Sarafi</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" exact-active-class="font-bold" active-class="text-blue-400" aria-label="Go to home page">Home</NuxtLink></li>
          <li><NuxtLink to="/about" exact-active-class="font-bold" active-class="text-blue-400" aria-label="Learn more about us">About</NuxtLink></li>
          <li><NuxtLink to="/services" exact-active-class="font-bold" active-class="text-blue-400" aria-label="View our services">Services</NuxtLink></li>
          <li>
            <NuxtLink 
              to="/register" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              aria-label="Register an account"
            >
              Register
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped></style>