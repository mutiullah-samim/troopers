<template>
  <v-card class="mx-auto mt-10" max-width="344">
    <v-card-text>
      <v-flex>
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email"></v-text-field>
          <v-text-field label="Password" type="password" autocomplete="new-password"></v-text-field>
          <v-text-field
            label="Confirm password"
            type="password"
            autocomplete="confirm-new-password"
          ></v-text-field>
        </form>
      </v-flex>
    </v-card-text>
    <v-card-actions class="flex-column">
      <v-btn dark class="cyan">Register</v-btn>
      <p class="pt-3">
        Already have an account?
        <a>Login</a>
      </p>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
