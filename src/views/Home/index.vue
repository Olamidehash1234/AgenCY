<!-- layouts/MainLayout.vue -->
<template>
    <div>
      <Hero />
      <second />
      <process />
      <testimonial />
    </div>
  </template>
  
  <script>
import Hero from '../Home/Hero.vue'  
import second from '../Home/second.vue'
import process from '../Home/process.vue';
import testimonial from '../Home/testimonial.vue'

  export default {
    name: 'MainLayout',
    components: {
      Hero,
      second,
      process,
      testimonial
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
  