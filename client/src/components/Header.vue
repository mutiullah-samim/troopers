<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Troopers</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="mr-5 cyan" @click="changeRoute('login')" v-if="!$store.state.isLoggedIn">Login</v-btn>

      <v-btn class="cyan" @click="changeRoute('register')" v-if="!$store.state.isLoggedIn">Register</v-btn>
      <v-menu left bottom v-if="$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>My profile</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>All users</v-list-item-title>
          </v-list-item>
          <v-list-item>
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
    changeRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
</style>
