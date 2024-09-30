<template>
  <div class="login-page">
    <h1>Login for Competition {{ competition }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="hallTicket">Hall Ticket Number</label>
        <input
          type="text"
          id="hallTicket"
          v-model="hallTicket"
          placeholder="Enter your Hall Ticket Number"
          required
        />
      </div>

      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          v-model="dob"
          required
        />
      </div>

      <button type="submit">Submit</button>

      <!-- Display error message if input is invalid -->
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
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
    }
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
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0; /* Fallback background color */
  background-image: url('public/baby.jpg'); /* Replace with the actual path to your image */
  background-size: cover; /* Make the image cover the entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  border-radius: 8px;
  opacity: 100%;
  color: #ffffff;
}



.form-group {
  margin-bottom: 20px;
}
input {
  width: 94%;
  padding: 10px;
  margin-top: 10px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #4cae4c;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
