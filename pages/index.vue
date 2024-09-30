<template>
  <div class="competition">
    <h1>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</h1>

    <div class="competition-links">
    <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</title>

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Certificate of Achievement" />
  <meta property="og:description" content="Check out this awesome certificate from Brainobrain!" />
  <meta property="og:image" content="/path/to/certificate-image.jpg" />
  <meta property="og:url" content="https://yourwebsite.com/certificate" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Certificate of Achievement" />
  <meta name="twitter:description" content="Check out this awesome certificate from Brainobrain!" />
  <meta name="twitter:image" content="/path/to/certificate-image.jpg" />

      <h2><router-link :to="{ path: '/login', query: { competition: 1 } }">Competition 1</router-link></h2>
      <h2><router-link :to="{ path: '/login', query: { competition: 2 } }">Competition 2</router-link></h2>
      <h2><router-link :to="{ path: '/login', query: { competition: 3 } }">Competition 3</router-link></h2>
      <h2><router-link :to="{ path: '/login', query: { competition: 4 } }">Competition 4</router-link></h2>
      <h2><router-link :to="{ path: '/login', query: { competition: 5 } }">Competition 5</router-link></h2>
    </div>

  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Times New Roman', Times, serif;
}

.competition {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: rgb(132, 94, 168);
  color: antiquewhite;
  padding: 40px;
  box-sizing: border-box; /* Ensure padding is included in the element's total width/height */
}

.competition h1 {
  margin-bottom: 30px;
}

.competition-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.competition-links h2 {
  margin: 20px 0;
}

.competition-links a {
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  display: inline-block;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #FF5733; /* Set default color */
}

.competition-links a:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive behavior */
@media (max-width: 768px) {
  .competition {
    padding: 20px;
  }

  .competition-links a {
    padding: 10px 20px;
  }
}
</style>


