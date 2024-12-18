import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions from vue-router
import Home from '../views/Home/index.vue'; // Import your Home component

// Define the routes
const routes = [
  { path: '/', component: Home },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 history mode
  routes, // Pass the routes array
});

// Export the router instance
export default router;
