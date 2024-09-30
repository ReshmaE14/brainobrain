<script>
import "./index.css";
</script>

<template>
  <div class="container-fluid competition">
    <h1>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</h1>

    <div class="competition-links">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BRAINOBRAIN SKILL DEVELOPMENT PROGRAMME</title>

      <!-- Open Graph Meta Tags -->
      <meta property="og:title" content="Certificate of Achievement" />
      <meta
        property="og:description"
        content="Check out this awesome certificate from Brainobrain!"
      />
      <meta property="og:image" content="/path/to/certificate-image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com/certificate" />
      <meta property="og:type" content="website" />

      <!-- Twitter Card Meta Tags -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Certificate of Achievement" />
      <meta
        name="twitter:description"
        content="Check out this awesome certificate from Brainobrain!"
      />
      <meta name="twitter:image" content="/path/to/certificate-image.jpg" />

      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 1 } }"
          class="btn btn-success my-2 custom-btn"
          >Competition 1</router-link
        >
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 2 } }"
          class="btn btn-danger my-2 custom-btn"
          >Competition 2</router-link
        >
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 3 } }"
          class="btn btn-warning my-2 custom-btn"
          >Competition 3</router-link
        >
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 4 } }"
          class="btn btn-info my-2 custom-btn"
          >Competition 4</router-link
        >
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 5 } }"
          class="btn btn-primary my-2 custom-btn"
          >Competition 5</router-link
        >
      </h2>
    </div>
  </div>
</template>
