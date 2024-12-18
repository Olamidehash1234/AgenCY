<template>
    <main>
        <section class="features mt-5">
            <div class="content">
                <!-- Heading -->
                <div class="header">
                    <h3 class="small-title">OUR WORK PROCESS</h3>
                    <h2 class="main-title">
                        Top-notch designs,<br> delivered at your doorstep.
                    </h2>
                </div>

                <!-- Grid Container -->
                <div class="grid-container">
                    <!-- Card 1 -->
                    <div class="card">
                        <div class="icon-container">
                            <div class="icon"><img src="../../assets/icons/Sectionthree/share.png" alt=""></div>
                        </div>
                        <h4>Share Your Vision</h4>
                        <p>Select a plan and tell us about your design project - we are ready to listen and bring it to
                            life</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/transformation.png" alt=""></div>
                        <h4>Experience the transformation</h4>
                        <p>We specialize in turning your ideas into exceptional, tailor-made designs</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="card">
                        <div class="icon"><img src="../../assets/icons/Sectionthree/donation.png" alt=""></div>
                        <h4>Receive Continuous Support</h4>
                        <p>We deliver innovative, high-quality design solutions that bring your vision to life .</p>
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
.features {
    color: #fff;
    padding: 120px 1.5rem;
    padding-top: 0;
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
    border: 0.5px solid #40413f;

    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    justify-content: space-between;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.icon {
    font-size: 40px;
    color: #b6ff00 !important;
    margin-bottom: 50px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    background-color: #2C2F15;
    border-radius: 50%;
}

.card h4 {
    font-size: 20px;
    margin-bottom: 20px;
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