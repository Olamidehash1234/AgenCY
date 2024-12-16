<template>
    <main>
        <section class="features">
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
                        <div class="icon">&#9752;</div>
                        <h4>Affordable solution</h4>
                        <p>Receive top-quality design services without the high price tag.</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="card">
                        <div class="icon">&#9728;</div>
                        <h4>Custom Design Solutions</h4>
                        <p>Our expertise ensures your vision becomes a reality.</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="card">
                        <div class="icon">&#8599;</div>
                        <h4>Scalable as You Grow</h4>
                        <p>We're prepared to adapt to your changing needs.</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="card">
                        <div class="icon">&#9881;</div>
                        <h4>Integrated Workflow</h4>
                        <p>Effortlessly connect all your existing applications.</p>
                    </div>

                    <!-- Card 5 -->
                    <div class="card">
                        <div class="icon">&#128101;</div>
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
    font-size: 44px;
    margin-bottom: 0;
    font-weight: 400;
}

/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.card {
    background-color: #222;
    padding: 2rem;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.icon {
    font-size: 50px;
    color: #b6ff00;
    margin-bottom: 1rem;
}

.card h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.card p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #ddd;
}

/* Grid Adjustments for 5 Items */
.card:nth-child(4),
.card:nth-child(5) {
    grid-column: span 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }

    .main-title {
        font-size: 1.4rem;
    }
}
</style>