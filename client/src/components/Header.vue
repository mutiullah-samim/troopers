<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Troopers</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="mr-5 cyan" @click="$router.push('login')" v-if="!$store.state.isLoggedIn">Login</v-btn>

      <v-btn class="cyan" @click="$router.push('register')" v-if="!$store.state.isLoggedIn">Register</v-btn>
      <v-menu left bottom v-if="$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="$router.push('profile')">
            <v-list-item-title>My profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('users')">
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
</style>
