<template>
  <div class="container mt-5">
    <!-- Poster Header -->
    <div class="text-center mb-4">
      <h1>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</h1>
      <p>Join our competitions to develop your skills and win certificates of achievement!</p>
    </div>

    <!-- HTML Meta Tags -->
<title>Certificate of your Achievement</title>
<meta name="description" content="Check out this awesome certificate from Brainobrain! wishing you very all the best ... and join us regularly">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://brainobrain-mauve.vercel.app/">
<meta property="og:type" content="website">
<meta property="og:title" content="Certificate of your Achievement">
<meta property="og:description" content="Check out this awesome certificate from Brainobrain! wishing you very all the best ... and join us regularly">
<meta property="og:image" content="https://res.cloudinary.com/dx7k0yowh/image/upload/v1727947841/certificate_cloud_h2w1n6.png">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="brainobrain-mauve.vercel.app">
<meta property="twitter:url" content="https://brainobrain-mauve.vercel.app/">
<meta name="twitter:title" content="Certificate of your Achievement">
<meta name="twitter:description" content="Check out this awesome certificate from Brainobrain! wishing you very all the best ... and join us regularly">
<meta name="twitter:image" content="https://res.cloudinary.com/dx7k0yowh/image/upload/v1727947841/certificate_cloud_h2w1n6.png">

<!-- Meta Tags Generated via https://www.opengraph.xyz -->

    <!-- Cards Row -->
    <div class="row">
      <!-- Competition Cards -->
      <div class="col-md-6 mb-4" v-for="competition in competitions" :key="competition.name">
        <div class="card h-100 shadow-sm">
          <!-- Image -->
          <img src="/public/home1.jpg" class="card-img-top" alt="Brainobrain Skill Development" />

          <!-- Card Body -->
          <div class="card-body text-center">
            <h5 class="card-title">{{ competition.name }}</h5>
            <p class="card-text">{{ competition.description }}</p>

            <!-- Competition Button -->
            <div v-if="competition.result">
              <router-link
                :to="{ path: '/login', query: { competition: competition.name } }"
                class="btn btn-primary"
              >
                Result
              </router-link>
            </div>
            <div v-else>
              <button class="btn btn-secondary" @click="resultNotFound(competition.name)">
                Result not Published
              </button>
            </div>
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
        { name: "Competition ", description: "Develop your logical skills in Competition ", result: "Pass" },
        { name: "Competition ", description: "Challenge your creativity in Competition ", result: "" },
        { name: "Competition ", description: "Test your speed and accuracy in Competition ", result: "Pass" },
        { name: "Competition ", description: "Enhance your coding skills in Competition ", result: "" },
        { name: "Competition ", description: "Improve your problem-solving abilities in Competition ", result: "Pass" },
        { name: "Competition ", description: "Explore new skills in Competition ", result: "" },
        { name: "Competition ", description: "Engage in teamwork in Competition ", result: "" },
        { name: "Competition ", description: "Demonstrate your project management in Competition ", result: "" },
        { name: "Competition ", description: "Prove your leadership in Competition ", result: "Pass" },
        { name: "Competition ", description: "Master the ultimate challenge in Competition ", result: "" }
      ]
    };
  },
  methods: {
    resultNotFound(competitionName) {
      (`Result not found for ${competitionName}.`);
    }
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

.btn-secondary {
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
