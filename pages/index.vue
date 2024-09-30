<template>
  <div class="container-fluid competition text-center">
<button
  class="btn custom-btn-attractive mb-4"
  style="font-family: 'Times New Roman', Times, serif; font-size: 35px; color: #ef8600; background-color: beige">
  BRAINOBRAIN SKILL DEVELOPMENT
</button>



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
        >Competition 1</router-link>
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 2 } }"
          class="btn btn-danger my-2 custom-btn"
        >Competition 2</router-link>
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 3 } }"
          class="btn btn-warning my-2 custom-btn"
        >Competition 3</router-link>
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 4 } }"
          class="btn btn-info my-2 custom-btn"
        >Competition 4</router-link>
      </h2>
      <h2>
        <router-link
          :to="{ path: '/login', query: { competition: 5 } }"
          class="btn btn-primary my-2 custom-btn"
        >Competition 5</router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped>
/* Styles for competition section */
.competition {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url('/public/home.jpg'); */
 
}

.competition::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/home1.jpg');
  /* background-color: #814b38; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 80%; /* Set the initial opacity of the background image */
  z-index: -1; /* Place the background behind the content */
}



.competition-links h2 {
  margin: 20px 0;
  
}

/* Custom Button Styles */
.custom-btn {
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: inline-block;
  width: 200px; 
}

.custom-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(242, 18, 18, 0.658);
}











/* Button color hover effects */
.btn-success {
  background-color: #218838; /* Default green for success */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-success:hover {
  background-color: #ff4000;  /* Darker on hover */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-danger {
  background-color: #218838; /* Default red for danger */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-danger:hover {
  background-color: #ff4000; /* Darker on hover */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-warning {
  background-color: #218838;  /* Default yellow for warning */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-warning:hover {
  background-color: #ff4000;  /* Darker on hover */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-info {
  background-color: #218838; /* Default light blue for info */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-info:hover {
  background-color: #ff4000;  /* Darker on hover */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-primary {
  background-color: #218838;  /* Default blue for primary */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}

.btn-primary:hover {
  background-color: #ff4000;  /* Darker on hover */
  font-size: larger;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bolder;
}
</style>
