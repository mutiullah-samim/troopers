<template>
  <v-card class="mx-auto mt-10" max-width="344">
    <v-card-text>
      <v-flex>
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
          <v-text-field
            label="Confirm password"
            type="password"
            autocomplete="confirm-new-password"
            v-model="confirm_password"
          ></v-text-field>
        </form>
      </v-flex>
      <v-alert type="error" v-if="hasError">{{error}}</v-alert>
    </v-card-text>
    <v-card-actions class="flex-column">
      <v-btn dark class="cyan" @click="register()">Register</v-btn>
      <p class="pt-3">
        Already have an account?
        <a>Login</a>
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
      confirm_password: "",
      hasError: false,
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password
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
