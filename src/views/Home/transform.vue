<template>
  <main>
    <section class="cta-container mt-7">
      <div class="cta-content">
        <!-- Heading -->
        <h1>Transform the way you acquire<br> design services</h1>
        <!-- Subtext -->
        <p>
          We streamline the design sourcing process, making it more efficient
          and accessible for your projects. Experience top-notch design
          solutions tailored to your unique vision and needs.
        </p>
        <!-- Email Input and Button -->
        <div class="form-container">
          <input type="email" v-model="email" placeholder="example@email.com" />
          <button class="submit-button">Submit Now</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "CtaComponent",
};
</script>

<style scoped>
/* Main Container with gradient on both sides */
.cta-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    #101010,
    #161616 20%,
    #161616 80%,
    #101010
  );
  padding: 60px 20px;
  border-radius: 20px;
}

/* Inner content */
.cta-content {
  text-align: center;
  max-width: 800px;
  padding: 20px;
  color: #fff;
}

/* Heading Styling */
.cta-content h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.1;
  color: #fff;
}

/* Subtext Styling */
.cta-content p {
  font-size: 1rem;
  color: #9e9e9e;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Form Styling */
.cta-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.form-container {
  display: flex;
  justify-content: center;
  max-width: 500px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 7px;
  margin: 0 auto;
}

input {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: white;
  outline: none;
  font-size: 0.9rem;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ddff00;
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #d4ff40;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cta-content h1 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 0.9rem;
  }

  .form-container {
    flex-direction: column;
  }

  .email-input,
  .submit-button {
    width: 100%;
  }

  .email-input {
    background-color: #000;
  }
}

@media (max-width: 480px) {
  .cta-container {
    padding: 40px 10px;
  }

  .cta-content h1 {
    font-size: 1.5rem;
  }

  .cta-content p {
    font-size: 0.8rem;
  }

  .cta-form {
    flex-direction: column;
  }

  .cta-form input,
  .cta-form button {
    width: 100%;
    max-width: none;
  }
}
</style>
