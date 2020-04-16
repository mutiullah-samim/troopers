<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Troopers</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="mr-5 cyan" @click="changeRoute('login')">Login</v-btn>

      <v-btn class="cyan" @click="changeRoute('register')">Register</v-btn>
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
