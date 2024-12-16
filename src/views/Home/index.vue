<!-- layouts/MainLayout.vue -->
<template>
    <div>
      <Hero />
      <second />
    </div>
  </template>
  
  <script>
import Hero from '../Home/Hero.vue'  
import second from '../Home/second.vue'

  export default {
    name: 'MainLayout',
    components: {
      Hero,
      second
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
  