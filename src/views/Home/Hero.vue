<template>
    <Navbar />
    <div class="hero-container">
        <div class="gradient-overlay"></div>
        <div class="content-wrapper">
            <h1 class="title">
                Design work,<br />
                the efficient way
            </h1>

            <p class="subtitle">
                Innovative design solutions for technology firms and emerging businesses weary of<br />
                the typical aesthetic methodology. Arriving shortly.
            </p>

            <div class="form-container">
                <input type="email" v-model="email" placeholder="example@email.com" class="email-input">
                <button class="submit-button">Submit Now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../../components/Navbar.vue';

const email = ref('')
</script>

<style scoped>
.hero-container {
    background-color: #0D0D0D;
    background-image: radial-gradient(circle at center,
            rgba(50, 50, 50, 0.3) 1px,
            transparent 2px);
    background-size: 30px 20px;
    position: relative;
    display: flex;
    max-width: 1600px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
        rgba(13, 13, 13, 0) 0%,
        rgba(13, 13, 13, 0.2) 15%,
        rgba(13, 13, 13, 0.5) 30%,
        rgba(13, 13, 13, 0.8) 50%,
        rgba(13, 13, 13, 0.95) 75%,
        #0D0D0D 100%
    );
    z-index: 1;
    pointer-events: none;
}

.hero-container::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -26%);
    width: 900px;
    height: 800px;
    border: 3px solid #F4FE00;
    border-radius: 49%;
    z-index: 0;
}

.content-wrapper {
    text-align: center;
    z-index: 2;
    padding: 2rem;
    padding-top: 9rem;
}

.title {
    color: white;
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.subtitle {
    color: #888;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.form-container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}

.email-input {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.9rem;
}

.email-input:active {
    border: none !important;
    outline: none !important;
}

.email-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.submit-button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #DDFF00;
    color: black;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.submit-button:hover {
    background-color: #d4ff40;
}

@media (max-width: 1024px) {
    .hero-container{
        min-height: 60vh;
    }

}

@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .form-container {
        flex-direction: column;
    }

    .hero-container::before{
        width: 700px;
        height: 700px;
    }

    .email-input,
    .submit-button {
        width: 100%;
    }
}
</style>