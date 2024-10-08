<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto text-center">
        <ClientOnly>
          <div class="flex justify-center mb-4 space-x-4">
            <a href="#" aria-label="Our Facebook page">
              <FAIcon :icon="['fab', 'facebook']" size="xl" />
            </a>
            <a href="#" aria-label="Our Twitter page">
              <FAIcon :icon="['fab', 'twitter']" size="xl" />
            </a>
            <a href="#" aria-label="Our Instagram page">
              <FAIcon :icon="['fab', 'instagram']" size="xl" />
            </a>
            <a href="#" aria-label="Contact us">
              <FAIcon :icon="['far', 'envelope']" size="xl" />
            </a>
          </div>
        </ClientOnly>
        <p>&copy; 2023 Sarafi. All rights reserved.</p>
        <p class="text-sm mt-2">
          Sarafi - Your trusted partner for seamless currency exchange.
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>