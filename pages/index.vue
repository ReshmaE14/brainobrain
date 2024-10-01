<template>
  <div class="container mt-5">
    <!-- Poster Header -->
    <div class="text-center mb-4">
      <h1>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</h1>
      <p>Join our competitions to develop your skills and win certificates of achievement!</p>
    </div>

<!-- metatags -->

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Certificate of Achievement" />
      <meta
        property="og:description"
        content="Check out this awesome certificate from Brainobrain!"
      />
      <meta property="og:image" content="https://res.cloudinary.com/dx7k0yowh/image/upload/v1727777985/certificate_mz20zm.png" />
      <meta property="og:url" content="https://brainobrain-mauve.vercel.app/" />
      <meta property="og:type" content="website" />

      <!-- Twitter Card Meta Tags -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Certificate of Achievement" />
      <meta
        name="twitter:description"
        content="Check out this awesome certificate from Brainobrain!"
      />
      <meta name="twitter:image" content="https://res.cloudinary.com/dx7k0yowh/image/upload/v1727777985/certificate_mz20zm.png"/>







    <!-- Cards Row -->
    <div class="row">
      <!-- Competition Cards -->
      <div class="col-md-6 mb-4" v-for="competition in competitions" :key="competition.id">
        <div class="card h-100 shadow-sm">
          <!-- Image -->
          <img src="/public/home1.jpg" class="card-img-top" alt="Brainobrain Skill Development" />

          <!-- Card Body -->
          <div class="card-body text-center">
            <h5 class="card-title">Competition {{ competition.id }}</h5>
            <p class="card-text">{{ competition.description }}</p>

            <!-- Competition Button -->
            <router-link
              :to="{ path: '/login', query: { competition: competition.id } }"
              class="btn btn-primary"
            >
              Login {{ competition.id }}
            </router-link>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      competitions: [
        { id: 1, description: "Develop your logical skills in Competition 1." },
        { id: 2, description: "Challenge your creativity in Competition 2." },
        { id: 3, description: "Test your speed and accuracy in Competition 3." },
        { id: 4, description: "Enhance your coding skills in Competition 4." },
        { id: 5, description: "Improve your problem-solving abilities in Competition 5." },
        { id: 6, description: "Explore new skills in Competition 6." },
        { id: 7, description: "Engage in teamwork in Competition 7." },
        { id: 8, description: "Demonstrate your project management in Competition 8." },
        { id: 9, description: "Prove your leadership in Competition 9." },
        { id: 10, description: "Master the ultimate challenge in Competition 10." },
      ]
    };
  }
};
</script>

<!-- Bootstrap Styles -->
<style scoped>
.container {
  max-width: 1200px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  border-radius: 15px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  font-size: 1.1rem;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
