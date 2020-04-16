<template>
  <v-container class="mx-auto">
    <v-row no-gutters class="justify-center">
      <v-col cols="12" sm="6" md="8">
        <v-alert dense text type="success" v-if="$store.state.registerRedirect">
          <strong>Your account has been created.</strong> Tell us a little more about yourself
        </v-alert>
        <v-card>
          <v-card-title>Create your profile</v-card-title>
          <v-card-text>
            <form name="update-profile-form">
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="First Name" v-model="first_name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Last Name" v-model="last_name"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Phone Number" v-model="phone"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="dob"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="dob" label="Date of Birth" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="dob" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(dob)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-textarea label="Address" v-model="address"></v-textarea>
            </form>
            <v-alert type="error" v-if="hasError">{{error}}</v-alert>
          </v-card-text>
          <v-card-actions class="flex-column">
            <v-btn dark class="cyan mb-3" @click="updateProfile()">Save</v-btn>
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
      first_name: "",
      last_name: "",
      phone: "",
      dob: new Date().toISOString().substr(0, 10),
      address: "",
      hasError: false,
      error: null,
      modal: false
    };
  },
  methods: {
    async updateProfile() {
      try {
        const response = await AuthenticationService.updateProfile({
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          dob: this.dob,
          address: this.address
        });
        if (response.data.status) {
          this.hasError = false;
          console.log(response.data.message);
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
