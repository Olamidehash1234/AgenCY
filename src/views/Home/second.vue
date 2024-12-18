<template>
    <main>
        <section class="features mt-7">
            <div class="content">
                <!-- Heading -->
                <div class="header">
                    <h3 class="small-title">WHAT YOU'LL RECEIVE</h3>
                    <h2 class="main-title">
                        We solve the challenges that come with <br /> creative processes.
                    </h2>
                </div>

                <!-- Grid Container -->
                <div class="grid-container">
                    <!-- Card 1 -->
                    <div class="card">
                        <div class="icon-container">
                            <div class="icon"><img src="../../assets/icons/Sectionthree/affordable.png" alt=""></div>
                        </div>
                        <h4>Affordable solution</h4>
                        <p>Receive top-quality design services without the high price tag.</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/design.png" alt=""></div>
                        <h4>Custom Design Solutions</h4>
                        <p>Our expertise ensures your vision becomes a reality.</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/grow.png" alt=""></div>
                        <h4>Scalable as You Grow</h4>
                        <p>We're prepared to adapt to your changing needs.</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/workflow.png" alt=""></div>
                        <h4>Integrated Workflow</h4>
                        <p>Effortlessly connect all your existing applications.</p>
                    </div>

                    <!-- Card 5 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/collaboration.png" alt=""></div>
                        <h4>Real-Time Collaboration</h4>
                        <p>
                            Work together effortlessly while staying connected to all your apps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "FeaturesSection",
};
</script>

<style scoped>
/* Section Styles */
.features {
    color: #fff;
    padding: 120px 1.5rem;
    padding-bottom: 0;
    font-family: Arial, sans-serif;
}

.content {
    max-width: 1200px;
    margin: 0 auto;
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

/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.card {
    background-color: #222;
    padding: 32px;
    border-radius: 18px;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    justify-content: space-between;
    border: 0.5px solid #40413f;

}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.icon {
    font-size: 30px;
    color: #b6ff00 !important;
    margin-bottom: 1rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    background-color: #2C2F15;
    border-radius: 50%;
}

.card h4 {
    font-size: 20px;
    margin-bottom: 0.5rem;
    font-weight: 300;
}

.card p {
    font-size: 16px;
    line-height: 1.5;
    color: #696969;
}

/* Grid Adjustments for 5 Items */
.card:nth-child(4),
.card:nth-child(5) {
    grid-template-columns: 50% 50%;

}

/* Responsive Design */
@media (max-width: 1024px) {
    .grid-container {
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

@media (max-width: 768px) {

    .features {
        padding: 10px;
    }

    .small-title {
        margin-right: 20%;
        margin-left: 20%;
        margin-bottom: 15px;
        font-size: 16px;
    }

    .grid-container {
        grid-template-columns: 1fr;
    }

    .main-title {
        font-size: 18px;
        margin-bottom: 0;
    }

    .card {
        padding: 20px;
    }

    .card h4 {
        font-size: 20px;
    }

    .card p {
        font-size: 18px;
    }
}
</style>