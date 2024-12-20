<!-- layouts/MainLayout.vue -->
<template>
    <div>
      <Hero />
      <second />
      <process />
      <testimonial />
      <faq />
      <count />
    </div>
  </template>
  
  <script>
import Hero from '../Home/Hero.vue'  
import second from '../Home/second.vue'
import process from '../Home/process.vue';
import testimonial from '../Home/testimonial.vue'
import faq from '../Home/faq.vue'
import count from '../Home/count.vue'

  export default {
    name: 'MainLayout',
    components: {
      Hero,
      second,
      process,
      testimonial,
      faq,
      count
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
  