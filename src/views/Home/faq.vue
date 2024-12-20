<template>
    <main>
        <div class="container">
            <div class="header">
                <h3 class="small-title">FAQs</h3>
                <h2 class="main-title">
                    We've got the answers
                </h2>
            </div>

            <div class="content">
                <div
                    class="card"
                    v-for="(faq, index) in faqs"
                    :key="index"
                    @click="toggleFAQ(index, $event)"
                    :class="{ open: faq.open }"
                >
                    <div class="top">
                        <p :class="{ active: faq.open }">{{ faq.question }}</p>
                        <button>
                            <img :class="{ rotate: faq.open }" src="../../assets/icons/faq/plus.png" alt="plus icon" />
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
                    question: "What services does AgenCY offer?",
                    answer:
                        "AgenCY specializes in innovative design solutions, including UI/UX design, branding, and tailored design strategies for technology firms and growing businesses.",
                    open: false,
                },
                {
                    question: "Who can benefit from AgenCY's services?",
                    answer:
                        "We primarily cater to tech startups, SaaS companies, and emerging businesses looking to elevate their visual identity and stand out in competitive markets.",
                    open: false,
                },
                {
                    question: "How is AgenCY different from other design agencies?",
                    answer:
                        "Unlike traditional agencies, we prioritize unique, forward-thinking designs that break away from conventional aesthetics to help your business make a lasting impression.",
                    open: false,
                },
                {
                    question: "What is the typical project timeline?",
                    answer:
                        "Timelines depend on the project's scope, but most design projects are completed within 2-6 weeks. We ensure an efficient yet thorough process tailored to your needs.",
                    open: false,
                },
                {
                    question: "Can I request revisions during the design process?",
                    answer:
                        "Yes, we work closely with you throughout the process and provide opportunities for revisions to ensure the final design aligns with your vision.",
                    open: false,
                },
                {
                    question: "How do we get started with AgenCY?",
                    answer:
                        "Simply reach out to us via our contact form or email, and we’ll schedule a consultation to understand your design needs and project goals.",
                    open: false,
                },
                {
                    question: "What industries do you specialize in?",
                    answer:
                        "Our focus is primarily on the technology sector, but we are open to collaborating with businesses from other industries looking for innovative design solutions.",
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
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 40px;
}

.header {
    text-align: center !important;
    margin-bottom: 10px;
}

.small-title {
    color: #DDFF00;
    font-size: 14px;
    border: 1px solid #3d3f3c;
    border-radius: 50px;
    background-color: #272626;
    font-weight: 200 !important;
    padding: 10px !important;
    margin-bottom: 10px;
    margin-right: 46%;
    margin-left: 46%;
}

.main-title {
    font-size: 40px;
    margin-bottom: 0;
    font-weight: 300;
    color: #fff;
}

.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
    align-items: start;
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
    transition: background-color 0.3s ease;
}

.card.open {
    background-color: #161616;
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
    color: #ddff00;
}

.card .top img {
    transition: transform 0.3s ease;
}

.card .top .rotate {
    transform: rotate(45deg);
}

.bottom p,
.bottom ul {
    color: #696969;
    font-size: 14px;
    text-align: left;
}

.bottom ul li {
    color: #fff;
    list-style: none;
    margin-bottom: 10px;
}

@media (max-width:1024px){
    .content{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 0;
    }

    .small-title {
        margin-right: 42%;
        margin-left: 42%;
        margin-bottom: 15px;
        font-size: 22px;
    }

    .main-title {
        font-size: 36px;
        margin-bottom: 0;
    }
}

@media (max-width:768px){
    .small-title {
        margin-right: 39%;
        margin-left: 39;
        margin-bottom: 15px;
        font-size: 16px;
    }

    .main-title {
        font-size: 18px;
        margin-bottom: 0;
    }
}
</style>
