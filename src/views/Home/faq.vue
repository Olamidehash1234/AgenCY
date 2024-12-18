<template>
    <main>
        <div class="container">
            <h1 class="text">Frequently Asked Questions</h1>

            <div class="content">
                <div 
                    class="card" 
                    v-for="(faq, index) in faqs" 
                    :key="index" 
                    @click="toggleFAQ(index, $event)"
                >
                    <div class="top">
                        <p :class="{ active: faq.open }">{{ faq.question }}</p>
                        <button>
                            <img 
                                :class="{ rotate: faq.open }" 
                                src="../../assets/icons/faq/plus.png" 
                                alt="" 
                            />
                        </button>
                    </div>

                    <div class="bottom mt-1" v-if="faq.open">
                        <p v-if="faq.answer">{{ faq.answer }}</p>
                        <ul v-else>
                            <li v-for="(answer, aIndex) in faq.answers" :key="aIndex">
                                {{ answer }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                {
                    question: "How does Boltcliq assess candidates?",
                    answer:
                        "Every candidate is screened for both technical proficiency and alignment with your company’s values, ensuring a perfect fit with your team.",
                    open: false,
                },
                {
                    question: "What roles can Boltcliq help us fill?",
                    answer:
                        "Boltcliq specializes in tech roles like software engineering, web development, cybersecurity, DevOps, and more. Whether you're seeking entry-level or senior professionals, we connect you with talent tailored to your requirements.",
                    open: false,
                },
                {
                    question: "How quickly can we expect to fill a position?",
                    answer:
                        "Our recruitment process allows us to match companies with candidates easily and fast, typically within 3-5 days, depending on the role’s requirements.",
                    open: false,
                },
                {
                    question: "What types of placements does Boltcliq offer?",
                    answer:
                        "We provide flexible recruitment solutions, including contract, contract-to-hire, and permanent placements.  This helps you to find the right candidate based on your company's needs and goals.",
                    open: false,
                },
                {
                    question: "What types of placements does Boltcliq offer?",
                    answer:
                        "We provide flexible recruitment solutions, including contract, contract-to-hire, and permanent placements.  This helps you to find the right candidate based on your company's needs and goals.",
                    open: false,
                },
                {
                    question: "What types of placements does Boltcliq offer?",
                    answer:
                        "We provide flexible recruitment solutions, including contract, contract-to-hire, and permanent placements.  This helps you to find the right candidate based on your company's needs and goals.",
                    open: false,
                },
                {
                    question: "What types of placements does Boltcliq offer?",
                    answer:
                        "We provide flexible recruitment solutions, including contract, contract-to-hire, and permanent placements.  This helps you to find the right candidate based on your company's needs and goals.",
                    open: false,
                },
            ],
        };
    },
    methods: {
        toggleFAQ(index, event) {
            this.faqs[index].open = !this.faqs[index].open;
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 0 !important;
    align-items: left;
    width: 100%;
    margin-top: 40px;
}

.container h1 {
    text-align: center !important;
    font-weight: 700 !important;
    color: #fff;
    margin-bottom: 20px;
    margin-top: 120px;
}

.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
    align-items: start; /* Ensures cards align to the top */
    /* grid-auto-rows: min-content; */
    margin-bottom: 60px;
}


.card {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    padding: 22px;
    border: 1px solid #3d3f3c;
    border-radius: 20px;
    background-color: #1c1c1c;
    transition: background-color 0.3s ease;
}

.card .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card .top p {
    color: #fff;
    font-size: 16px !important;
    font-weight: 200;
    letter-spacing: -0.28px;
    text-align: left !important;
    transition: color 0.3s ease;
}

.card .top p.active {
    color: #DDFF00; /* Change color to #DDFF00 when active */
}

.card .top img {
    transition: transform 0.3s ease;
}

.card .top .rotate {
    transform: rotate(45deg);
}

.bottom p, .bottom ul {
    color: #696969;
    font-size: 12px;
    text-align: left;
}

.bottom ul li {
    color: #fff;
    list-style: none;
    margin-bottom: 10px;
}
</style>
