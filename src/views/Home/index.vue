<!-- layouts/MainLayout.vue -->
<template>
    <div>
      <Hero />
      <second />
      <process />
    </div>
  </template>
  
  <script>
import Hero from '../Home/Hero.vue'  
import second from '../Home/second.vue'
import process from '../Home/process.vue';

  export default {
    name: 'MainLayout',
    components: {
      Hero,
      second,
      process
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
  