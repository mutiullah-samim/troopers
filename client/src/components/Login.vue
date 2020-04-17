<template>
  <v-container class="mx-auto">
    <v-row no-gutters class="justify-center">
      <v-col col="12" sm="6" md="5">
        <v-card>
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
      </v-col>
    </v-row>
  </v-container>
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
          this.$router.push({ name: "profile" });
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
