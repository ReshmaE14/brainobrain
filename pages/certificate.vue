<template>
  <div class="certificate-page">
    <div class="certificate-container" id="certificate">
      <img class="certificate-img" src="/certificate.png" alt="Certificate">
      <div class="certificate-details">
        <h4>Brainobrain Skill Development Programme</h4>
        <h2>{{ name }}</h2>
        <p>Prize: {{ prize }}</p>
        <p>Date of Participation: {{ participationDate }}</p>
      </div>
      <title>certificate</title>
    </div>

    <button @click="downloadCertificate">Download Certificate</button>

    <!-- Social Share Section at Bottom -->
    <div class="social-share">
      <!-- <h1>Share This Page</h1> -->

      <div class="social-icons">
        <!-- Facebook -->
        <a
          :href="facebookShareUrl"
          target="_blank"
          class="social-icon facebook"
          aria-label="Share on Facebook"
        >
          <i class="fab fa-facebook"></i>
        </a>

        <!-- X (replacing Twitter) -->
        <a
          :href="xShareUrl"
          target="_blank"
          class="social-icon x-logo"
          aria-label="Share on X"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>

        <!-- LinkedIn -->
        <a
          :href="linkedinShareUrl"
          target="_blank"
          class="social-icon linkedin"
          aria-label="Share on LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <!-- WhatsApp -->
        <a
          :href="whatsappShareUrl"
          target="_blank"
          class="social-icon whatsapp"
          aria-label="Share on WhatsApp"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import html2canvas from "html2canvas";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add Font Awesome icons to the library
library.add(faXTwitter)

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      name: this.$route.query.name || "",
      prize: this.$route.query.prize || "",
      participationDate: this.$route.query.participationDate || "",
    };
  },
  computed: {
    currentUrl() {
      return window.location.href;
    },

    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.currentUrl
      )}`;
    },
    xShareUrl() {
      return `https://x.com/intent/tweet?text=Check out this awesome certificate!&url=${encodeURIComponent(
        this.currentUrl
      )}`;
    },
    linkedinShareUrl() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        this.currentUrl
      )}`;
    },
    whatsappShareUrl() {
      return `https://api.whatsapp.com/send?text=Check out this awesome certificate! ${encodeURIComponent(
        this.currentUrl
      )}`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateMetaTags();
    });
  },
  methods: {

    downloadCertificate() {
      const certificate = document.getElementById("certificate");
      html2canvas(certificate, { scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    },


    updateMetaTags() {
      const titleMeta = document.querySelector('meta[property="og:title"]');
      const descriptionMeta = document.querySelector('meta[property="og:description"]');
      const urlMeta = document.querySelector('meta[property="og:url"]');

      // Check if the meta tags exist before setting attributes
      if (titleMeta) {
        titleMeta.setAttribute("content", `Certificate of Achievement for ${this.name}`);
      }
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", `Congratulations to ${this.name} for achieving the ${this.prize} prize!`);
      }
      if (urlMeta) {
        urlMeta.setAttribute("content", this.currentUrl);
      }
    },
  },
};
</script>


<style scoped>
@import "@fortawesome/fontawesome-free/css/all.min.css";

.certificate-page {
  position: relative; /* Make sure the container is positioned */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: rgb(152, 121, 181);  */
}

.certificate-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/last.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 80%; /* Set the initial opacity of the background image */
  z-index: -1; /* Place the background behind the content */
}

.certificate-container {
  position: relative;
  width: 80%;
  max-width: 600px;
}

.certificate-img {
  width: 100%;
}

.certificate-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2em;
  font-family: "Arial", sans-serif;
  color: #333;
}

.certificate-details h2 {
  margin-bottom: 10px;
}

.certificate-details p {
  margin: 5px 0;
  font-size: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* social media */
.social-share {
  margin-top: 40px;
  text-align: center;
}

.social-share h1 {
  font-size: 24px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-icon {
  font-size: 27px;
  color: white;
  text-decoration: none;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon.facebook {
  background-color: #4267b2;
}

.social-icon.x-logo {
  background-color: #000000;
}

.social-icon.linkedin {
  background-color: #0077b5;
}

.social-icon.whatsapp {
  background-color: #25d366;
}

.social-icon:hover {
  opacity: 0.8;
}


/* Medium devices (tablets, 768px and down) */
/* Small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .certificate-container {
    width: 100%; /* Make sure the container adapts to small screens */
  }

  .certificate-img {
    width: 100%; /* Ensure the image scales with the container */
    height: auto;
  }

  .certificate-details {
    font-size: 1em; /* Adjust the font size */
    width: 90%; /* Ensure the details don't overflow */
    top: 48%; /* Adjust positioning for better alignment */
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
  }

  .certificate-details h2 {
    font-size: 1.2em; /* Adjust the title size for small screens */
    margin-bottom: 5px;
  }

  .certificate-details p {
    font-size: 0.9em; /* Adjust paragraph text size */
    margin: 4px 0;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9em;
  }
}


/* Large devices (laptops, 1024px and down) */
@media only screen and (max-width: 1024px) {
  .certificate-container {
    width: 80%;
  }

  /* .certificate-details {
    font-size: 1.2em;
  } */

  button {
    padding: 10px 20px;
    font-size: 1.1em;
  }
}

/* Extra large devices (desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .certificate-container {
    width: 70%;
  }

  .certificate-details {
    font-size: 1.3em;
  }

  button {
    padding: 12px 24px;
    font-size: 1.2em;
}

}
</style>


