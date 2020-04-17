<template>
  <v-container class="mx-auto">
    <v-row no-gutters class="justify-center">
      <v-col cols="12" sm="6" md="5">
        <v-card>
          <v-card-title class="justify-space-between">
            My profile
            <v-btn fab dark color="cyan" @click="editProfile()">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row align="center" class="mb-3" no-gutters>
              <v-col cols="4" sm="4" md="4">
                <strong class="mr-4">First Name:</strong>
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <strong class="grey--text">{{first_name}}</strong>
              </v-col>
            </v-row>
            <v-row align="center" class="mb-3" no-gutters>
              <v-col cols="4" sm="4" md="4">
                <strong class="mr-4">Last Name:</strong>
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <strong class="grey--text">{{last_name}}</strong>
              </v-col>
            </v-row>
            <v-row align="center" class="mb-3" no-gutters>
              <v-col cols="4" sm="4" md="4">
                <strong class="mr-4">Phone Number:</strong>
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <strong class="grey--text">{{phone}}</strong>
              </v-col>
            </v-row>
            <v-row align="center" class="mb-3" no-gutters>
              <v-col cols="4" sm="4" md="4">
                <strong class="mr-4">Date of Birth:</strong>
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <strong class="grey--text">{{dob}}</strong>
              </v-col>
            </v-row>
            <v-row align="center" class="mb-3" no-gutters>
              <v-col cols="4" sm="4" md="4">
                <strong class="mr-4">Address:</strong>
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <strong class="grey--text">{{address}}</strong>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="flex-column"></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "@/services/UserService";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      phone: "",
      dob: new Date().toISOString().substr(0, 10),
      address: ""
    };
  },
  methods: {
    editProfile() {
      this.$store.dispatch("setRegisterRedirect", false);
      this.$router.push("update-profile");
    }
  },
  async mounted() {
    try {
      const response = await UserService.profile();
      if (response.data.data.length > 0) {
        const userInfo = response.data.data[0];
        this.first_name = userInfo.first_name;
        this.last_name = userInfo.last_name;
        this.phone = userInfo.phone;
        this.dob = new Date(userInfo.dob).toISOString().substr(0, 10);
        this.address = userInfo.address;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
</style>
