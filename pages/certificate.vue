<template>
  <div class="container text-center py-5">
    <!-- Certificate Container -->
    <div class="certificate-container position-relative mx-auto" id="certificate">
      <img class="certificate-img" src="/certificate.png" alt="Certificate">
      <div class="certificate-details position-absolute text-center">
        <h4>Brainobrain Skill Development Programme</h4>
        <h2>{{ name }}</h2>
        <p>Prize: {{ prize }}</p>
        <p>Date of Participation: {{ participationDate }}</p>
      </div>
    </div>




    <!-- Download Button -->
    <button class="btn btn-success my-4" @click="downloadCertificate">Download Certificate</button>

    <!-- Social Share Section -->
    <div class="social-share">
      <div class="d-flex justify-content-center gap-3">
        <!-- Facebook -->
        <a :href="facebookShareUrl" target="_blank" class="btn btn-primary" aria-label="Share on Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <!-- X (formerly Twitter) -->
        <a :href="xShareUrl" target="_blank" class="btn btn-dark" aria-label="Share on X">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <!-- LinkedIn -->
        <a :href="linkedinShareUrl" target="_blank" class="btn btn-info" aria-label="Share on LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <!-- WhatsApp -->
        <a :href="whatsappShareUrl" target="_blank" class="btn btn-success" aria-label="Share on WhatsApp">
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
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.currentUrl)}`;
    },
    xShareUrl() {
      return `https://x.com/intent/tweet?text=Check out this awesome certificate!&url=${encodeURIComponent(this.currentUrl)}`;
    },
    linkedinShareUrl() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    },
    whatsappShareUrl() {
      return `https://api.whatsapp.com/send?text=Check out this awesome certificate! ${encodeURIComponent(this.currentUrl)}`;
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
/* FontAwesome Import */
@import "@fortawesome/fontawesome-free/css/all.min.css";

/* Certificate Container Styling */
.certificate-container {
  max-width: 600px;
  width: 100%;
}

.certificate-img {
  width: 100%;
}

.certificate-details {
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  color: black;
  font-family: "Arial", sans-serif;
}

.certificate-details h4 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.certificate-details h2 {
  margin-bottom: 8px;
  font-size: 2rem;
}

.certificate-details p {
  margin: 5px 0;
  font-size: 1.2rem;
}

/* Button Styles */
button {
  padding: 10px 20px;
  font-size: 1.1rem;
}

/* Social Share Buttons */
.social-share .btn {
  font-size: 24px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.social-share .btn:hover {
  opacity: 0.8;
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  .certificate-details h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 992px) {
  .certificate-details h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .certificate-details h4 {
    font-size: 1.3rem;
  }
  .certificate-details h2 {
    font-size: 1.4rem;
  }
  .certificate-details p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .certificate-details h4 {
    font-size: 1.2rem;
  }
  .certificate-details h2 {
    font-size: 1.2rem;
  }
  .certificate-details p {
    font-size: 0.9rem;
  }
}
</style>
