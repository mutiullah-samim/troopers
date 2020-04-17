<template>
  <v-container class="mx-auto">
    <v-row no-gutters class="justify-center">
      <v-col cols="12" sm="6" md="8">
        <v-card>
          <v-card-title>
            Users
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
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
      search: "",
      headers: [
        {
          text: "First Name",
          align: "start",
          sortable: true,
          value: "first_name"
        },
        { text: "Last Name", sortable: true, value: "last_name" },
        { text: "Phone", sortable: false, value: "phone" },
        { text: "Date of Birth", sortable: false, value: "dob" },
        { text: "Address", sortable: false, value: "address" }
      ],
      desserts: []
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await UserService.users();
        response.data.data.map(user => {
          this.desserts.push({
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            dob: new Date().toISOString(user.dob).substr(0, 10),
            address: user.address
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style scoped>
</style>
