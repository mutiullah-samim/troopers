<template>
  <v-card class="mx-auto mt-10" max-width="344">
    <v-card-text>
      <v-flex>
        <form name="login-form">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        </form>
      </v-flex>
      <v-alert type="error" v-if="hasError">{{error}}</v-alert>
    </v-card-text>
    <v-card-actions class="flex-column">
      <v-btn dark class="cyan" @click="login()">Login</v-btn>
      <p class="pt-3">
        Dont have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      hasError: false,
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        if (response.data.status) {
          this.hasError = false;
          this.$store.dispatch("setToken", response.data.token);
        } else {
          this.hasError = true;
          this.error = response.data.error;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>
