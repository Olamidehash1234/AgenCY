<!-- layouts/MainLayout.vue -->
<template>
    <div>
      <Hero />
    </div>
  </template>
  
  <script>
//   import Navbar from '../components/Navbar.vue';
import Hero from '../Home/Hero.vue'  

  export default {
    name: 'MainLayout',
    components: {
      Hero
    },
    data() {
      return {
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  