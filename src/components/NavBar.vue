<template>
  <div class="mobile-links" :class="{ 'mobile-links-visible': isMobileLinksVisible }">
    <button class="close" @click="toggleMobileLinks">
      <!-- <img src="/src/assets/icons/navbar/close-icon.png" alt="Close menu"> -->
    </button>
    <a href="#">Features</a>
    <a href="#">About</a>
    <a href="#">Testimonials </a>
    <a href="#">FAQs</a>
    <button class="signup-btn">Login</button>
  </div>

  <nav>
    <h2>Agen<span>cy</span></h2>

    <div class="links">
      <a href="#">Features</a>
      <a href="#">About</a>
      <a href="#">Testimonials </a>
      <a href="#">FAQs</a>
    </div>
    <button class="nav-button">Login</button>


    <button class="hamburger" @click="toggleMobileLinks">
      <img src="/src/assets/icons/navbar/menu-burger.png" alt="Open menu">
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileLinksVisible: false,
    };
  },
  methods: {
    toggleMobileLinks() {
      this.isMobileLinksVisible = !this.isMobileLinksVisible;
      if (this.isMobileLinksVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  position: sticky !important;
  width: 100%;
  padding: 20px 32px;
  justify-content: space-between !important;
  align-items: center;
  z-index: 99999999;
  max-width: 1600px;
  margin: 0 auto;
  background: #191919;
  backdrop-filter: blur(10px);
  
}


nav h2 {
  color: #fff;
}

nav .links {
  background-color: #272626;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  border: 0.5px solid #40413f;
}

nav .links a {
  color: #CCCCCC;
  font-size: 16px;
  font-weight: 300;
}

nav .links a:hover {
  color: #fff;
}

span{
  color: #DDFF00;
  /* font-size: 34px; */
}

nav button {
  display: flex;
  height: 38px;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  background-color: #DDFF00;
  border-radius: 23px;
  box-shadow: 0px 4px 4px 0px rgba(18, 18, 18, 0.08);
  color: #272222;
  font-size: 16px;
  font-weight: 600;
}

nav .hamburger {
  display: none;
  align-items: flex-end;
  background-color: transparent;
}

.mobile-links {
  display: none;
}

@media (max-width: 1000px) {
  nav h2 {
    font-size: 28px;
  }

  nav .links {
    display: none;
  }

  nav .hamburger{
    color: #fff;
  }

  .nav-button{
    display: none;
  }

  nav button{
    padding-top: 8px;
    padding-left: 0;
    padding-right: 0;
  }

  .backdrop {

    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .backdrop-visible {
    display: flex;
  }

  .mobile-links {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    background-color: #121212;
  }

  .mobile-links-visible {
    display: flex;
    z-index: 1000;
  }

  .mobile-links a {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .mobile-links button {
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
  }

  .mobile-links .close {
    align-self: flex-end !important;
    color: #fff !important;
    margin-top: 40px;
  }

  .mobile-links .close img{
    width: 30px;
    color: #fff;
    /* background-color: #fff; */
  }
  .mobile-links .signup-btn {
    color: #121212;
    background-color: #C6DD31;

    display: flex;
    padding: 12px 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
  }

  nav .hamburger {
    display: block;
  }
}
</style>