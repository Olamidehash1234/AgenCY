<template>
    <main>
        <section class="testimonial-section">
            <div class="header">
                <h3 class="small-title">TESTIMONIALS</h3>
                <h2 class="main-title">
                    What our clients say about us
                </h2>
            </div>
            <div class="testimonial-grid">
                <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="profile">
                        <img :src="testimonial.image" alt="Profile" class="profile-img" />
                        <div class="profile-info">
                            <h3>{{ testimonial.name }}</h3>
                            <p><em>{{ testimonial.title }}</em></p>
                        </div>
                    </div>
                    <p class="testimonial-content">{{ testimonial.content }}</p>
                    <p class="testimonial-date">{{ testimonial.date }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { reactive } from "vue";
import img1 from '../../assets/images/testimonial/img1.jpg'
import img2 from '../../assets/images/testimonial/img2.jpg'
import img3 from '../../assets/images/testimonial/img3.jpg'
import img4 from '../../assets/images/testimonial/img4.jpg'
import img5 from '../../assets/images/testimonial/img5.jpg'
import img6 from '../../assets/images/testimonial/img6.jpg'

const testimonials = reactive([
    {
        name: "John Smith",
        title: "CEO of ChicBoutique",
        image: img1, 
        content:
            "AgenCY has been instrumental in transforming our online presence. Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        date: "03 January 2024",
    },
    {
        name: "Jason Williams",
        title: "Sales Director at CRM",
        image: img2,
        content:
            "Our website was slow and buggy, costing us sales. AgenCY fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!",
        date: "16 October 2024",
    },
    {
        name: "Jessica Thompson",
        title: "CEO of Event Masters",
        image: img3, 
        content:
            "AgenCY developed a comprehensive booking and reservation system for our event management company. Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project.",
        date: "10 July 2024",
    },
    {
        name: "Michael Anderson",
        title: "Founder of Dreams",
        image: img4,
        content:
            "Our website was sluggish and full of glitches, causing us to lose sales. AgenCY completely overhauled the code, optimized everything, and now it's lightning-fast and converting exceptionally well.",
        date: "22 June 2024",
    },
    {
        name: "Mark Thompson",
        title: "CEO of Event Masters",
        image: img5, 
        content:
            "AgenCY has played a pivotal role in revolutionizing our online presence. Their team's proficiency in web development and design led to a visually impressive and easy-to-navigate e-commerce platform.",
        date: "03 November 2024",
    },
    {
        name: "Tonya P Weldon",
        title: "Sales Director at CRM",
        image: img6, 
        content:
            "Our website was slow and buggy, costing us sales. AgenCY fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!",
        date: "16 February 2024",
    },
]);
</script>

<style scoped>
.testimonial-section {
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    /* background-color: #121212; */
    color: #fff;
}

.header {
    text-align: center !important;
    margin-bottom: 2.5rem;
}

.small-title {
    color: #DDFF00;
    font-size: 14px;
    border: 1px solid #3d3f3c;
    border-radius: 50px;
    background-color: #272626;
    font-weight: 200 !important;
    padding: 10px !important;
    margin-bottom: 30px;
    margin-right: 42%;
    margin-left: 42%;
}

.main-title {
    font-size: 40px;
    margin-bottom: 0;
    font-weight: 300;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.testimonial-card {
    background-color: #1c1c1c;
    padding: 1.5rem;
    border-radius: 18px;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 0.5px solid #40413f;
    display: flex;
    flex-direction: column;
}

.testimonial-card:hover{
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.profile {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
}

.profile-info h3 {
    margin: 0;
    font-size: 1rem;
    margin-bottom: 5px;
}

.profile-info p {
    margin: 0;
    font-size: 0.875rem;
    color: #696969;
}

.testimonial-content {
    flex-grow: 1;
    margin: 1rem 0;
    font-size: 0.9rem;
    line-height: 1.4;
    color: #696969;

}

.testimonial-date {
    font-size: 0.75rem;
    color: #fff;
}

@media screen and (max-width: 1024px) {
    .testimonial-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .small-title {
        margin-right: 20%;
        margin-left: 20%;
        margin-bottom: 15px;
        font-size: 22px;
    }

    .main-title {
        font-size: 36px;
        margin-bottom: 0;
    }
}

@media screen and (max-width: 768px) {
    .testimonial-grid {
        grid-template-columns: 1fr;
    }

    .small-title {
        margin-right: 20%;
        margin-left: 20%;
        margin-bottom: 15px;
        font-size: 16px;
    }

    .main-title {
        font-size: 18px;
        margin-bottom: 0;
    }
}
</style>