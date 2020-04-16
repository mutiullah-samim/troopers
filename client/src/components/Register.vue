<template>
  <v-container class="mx-auto">
    <v-row no-gutters class="justify-center">
      <v-col col="12" sm="6" md="5">
        <v-card>
          <v-card-text>
            <v-flex>
              <form name="register-form" autocomplete="off">
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
              <router-link to="/login">Login</router-link>
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
          this.$store.dispatch("setRegisterRedirect", true);
          this.$router.push("update-profile");
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
