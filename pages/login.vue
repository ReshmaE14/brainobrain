<template >
<div class="logintemo">


  <div class="login-page" style="color: blue;">
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



.logintemo {
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/public/home1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
}

.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fcf9f9; /* Fallback background color */
 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  opacity: 100%;
  color: #171717;
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