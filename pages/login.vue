<template>
  <div class="logintemo container-fluid d-flex justify-content-center align-items-center">
    <div class="row w-100 justify-content-center align-items-center">
      <!-- Login Form -->
      <div class="col-md-3 d-flex justify-content-center">
        <div class="login-page">
          <h2 class="text-center">Login for Competition {{ competition }}</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="hallTicket">Hall Ticket Number</label>
              <input
                type="text"
                id="hallTicket"
                v-model="hallTicket"
                placeholder="Enter your Hall Ticket Number"
                required
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                v-model="dob"
                required
                class="form-control"
              />
            </div>

            <button type="submit" class="btn btn-success w-100">Submit</button>

            <!-- Display error message if input is invalid -->
            <div v-if="errorMessage" class="error text-danger mt-2 text-center">{{ errorMessage }}</div>
          </form>
        </div>
      </div>

      <!-- Image next to form -->
      <div class="col-md-4 d-none d-md-flex justify-content-center">
        <div class="image-container">
          <img src="/public/home1.jpg" alt="Login Image" class="img-fluid rounded reduced-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hallTicket: '',
      dob: '',
      errorMessage: '',
      competition: null,
      participants: [
        {
          hallTicket: "12345",
          dob: "2000-05-15",
          name: "John Doe",
          prize: "1st - Champion",
          participationDate: "2024-01-20"
        },
        {
          hallTicket: "67890",
          dob: "2001-07-22",
          name: "Jane Smith",
          prize: "2nd - Gold",
          participationDate: "2024-01-20"
        },
        {
          hallTicket: "11223",
          dob: "1999-08-10",
          name: "Alice Brown",
          prize: "3rd - Silver",
          participationDate: "2024-01-20"
        },
        {
          hallTicket: "44556",
          dob: "2002-09-05",
          name: "Bob Green",
          prize: "Participant",
          participationDate: "2024-01-20"
        }
      ]
    };
  },
  mounted() {
    // Fetch the competition number from query params
    this.competition = this.$route.query.competition;
  },
  methods: {
    handleSubmit() {
      // Check if Hall Ticket and DOB match any participant
      const participant = this.participants.find(
        (p) => p.hallTicket === this.hallTicket && p.dob === this.dob
      );

      if (participant) {
        // Redirect to the certificate page with participant's details
        this.$router.push({
          path: '/certificate',
          query: {
            name: participant.name,
            prize: participant.prize,
            participationDate: participant.participationDate
          }
        });
      } else {
        this.errorMessage = 'Invalid Hall Ticket Number or Date of Birth!';
      }
    }
  }
};
</script>

<!-- CSS Styles -->
<style scoped>
.logintemo {
  min-height: 100vh;
  padding: 20px;
}

.login-page {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #fcf9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.reduced-img {
  max-width: 70%; /* Reduce image width to 70% of its container */
}

.form-group {
  margin-bottom: 20px;
}

.error {
  margin-top: 10px;
}

/* Remove padding and margin to eliminate the gap between form and image */
.row {
  margin-left: 0;
  margin-right: 0;
}

.col-md-5,
.col-md-4 {
  padding-left: 0;
  padding-right: 0;
}

/* Centering content */
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
