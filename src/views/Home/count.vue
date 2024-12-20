<template>
    <main>
        <section ref="statsSection" class="stats-section">
            <div class="stats-container">
                <!-- Stat 1 -->
                <div class="div">
                    <div class="stat">
                        <h2>{{ animatedNumbers.customers }}+</h2>
                        <p>Happy customers</p>
                    </div>
                </div>

                <div class="divider"></div>

                <!-- Stat 2 -->
                <div class="div">
                    <div class="stat">
                        <h2>{{ formattedHours }}</h2>
                        <p>Hours spent on craft</p>
                    </div>
                </div>

                <div class="divider"></div>

                <!-- Stat 3 -->
                <div class="div">
                    <div class="stat">
                        <h2>{{ animatedNumbers.rating }}/5</h2>
                        <p>Review rate</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            numbers: {
                customers: 30,
                hours: 5000,
                rating: 4.8,
            },
            animatedNumbers: {
                customers: 0,
                hours: 0,
                rating: 0,
            },
            observer: null,
        };
    },
    computed: {
        // Format the hours stat to show "5k+" after finishing
        formattedHours() {
            return this.animatedNumbers.hours >= this.numbers.hours ? "5k+" : this.animatedNumbers.hours;
        },
    },
    methods: {
        startCountAnimation() {
            const commonDuration = 1500;

            this.animateNumber("customers", this.numbers.customers, commonDuration);
            this.animateNumber("hours", this.numbers.hours, commonDuration);
            this.animateNumber("rating", this.numbers.rating, commonDuration);
        },
        animateNumber(key, target, duration) {
            const step = Math.ceil(target / (duration / 16)); // Step size for ~60fps
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                this.animatedNumbers[key] = key === "rating" ? current.toFixed(1) : current;
            }, 16); // Run roughly every 16ms
        },
        observeSection() {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.startCountAnimation();
                            this.observer.disconnect();
                        }
                    });
                },
                { threshold: 0.5 }
            );
            this.observer.observe(this.$refs.statsSection);
        },
    },
    mounted() {
        this.observeSection();
    },
};
</script>

<style scoped>
/* General container styles */
.stats-section {
    max-width: 1200px;
    margin-left: 60px;
    margin-right: 60px;
    padding: 60px 110px;
    border: 1px solid #3d3f3c;
    border-radius: 28px;
    box-shadow: 0px 10px 20px rgba(46, 45, 45, 0.4);
}

.stats-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;
    color: #fff;
    text-align: center;
}

.stat h2 {
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
    color: #fff;
}

.stat p {
    font-size: 1rem;
    font-weight: 400;
    color: #9e9e9e;
    margin: 10px 0 0 0;
}

.divider {
    height: 60px;
    width: 1px;
    background-color: #2c2c2c;
}

/* Responsive Design */
@media (max-width: 768px) {
    .stats-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* Center-align stats */
        gap: 20px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .stat h2 {
        font-size: 2rem;
    }

    .stats-section {
        padding: 0;
    }

    .stat p {
        font-size: 14px;
    }

    .divider {
        display: block;
        transform: rotate(90deg);
    }
}
</style>
