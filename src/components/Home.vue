<template>
  <v-main style="padding: 0px">
    <!-- <HelloWorld/> -->
    <v-app-bar absolute flat color="transparent">
      <v-app-bar-title style="color: white">
        Vuetify 3 Template
      </v-app-bar-title>
      <v-btn variant="outlined" color="white" @click="dialogActive = true"
        >LOGIN</v-btn
      >
    </v-app-bar>
    <v-img
      height="100vh"
      :src="logoUrl"
      gradient="to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)"
      cover
    >
      <div
        class="
          d-flex
          flex-column
          fill-height
          justify-center
          align-center
          text-white
        "
      >
        <h1 class="text-h4 font-weight-thin mb-4">Vuetify 3.0 Beta Template</h1>
        <h4 class="subheading">
          Simplistic template built from the ground up with Vuetify 3
        </h4>
      </div>
    </v-img>

    <v-dialog v-model="dialogActive">
      <v-card width="500px" v-if="dialogTab == 0" key="1">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-alert type="error" v-if="showError" class="mb-5"
            >Login or password incorrect!</v-alert
          >
          <v-text-field
            label="Emai"
            v-model="email"
            :rules="[(v) => !!v || 'Email is required']"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[(v) => !!v || 'Password is required']"
          ></v-text-field>
          <div @click="dialogTab = 1" style="cursor: pointer;">Register Instead</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" @click="dialogActive = false" text
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" @click="login" text>Login</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="500px" v-if="dialogTab == 1" key="2">
        <v-card-title>Register</v-card-title>
        <v-card-text>
          <v-alert type="error" v-if="showError" class="mb-5"
            >Registration failed!</v-alert
          >
          <v-text-field
            label="Name"
            v-model="name"
            :rules="[(v) => !!v || 'Name is required']"
          ></v-text-field>
          <v-text-field
            label="Emai"
            v-model="email"
            :rules="[(v) => !!v || 'Email is required']"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[(v) => !!v || 'Password is required']"
          ></v-text-field>
          <v-text-field
            label="Repeat Password"
            v-model="password_confirmation"
            type="password"
            :rules="[(v) => !!v || 'Password is required']"
          ></v-text-field>
          <div @click="dialogTab = 0" style="cursor: pointer;">Login Instead</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" @click="dialogActive = false" text
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" @click="register" text>Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>
<script>
import { useUserStore } from ".././stores/user";
export default {
  name: "Home",

  data: () => ({
    password_confirmation: "",
    name: "",
    dialogTab: 0,
    showError: false,
    dialogActive: false,
    email: "",
    password: "",
  }),
  emits: ["updateStatus"],
  methods: {
    async login() {
      this.showError = false;

      

      if (await this.userStore.login(this.email, this.password)) {
        this.dialogActive = false;
        this.$router.push("/dashboard");
        this.$emit("updateStatus", true);
      } else {
        this.showError = true;
        this.password = "";
        
      }
    },
    async register() {
      this.showError = false;
      if (await this.userStore.register(this.name, this.email, this.password)) {
        this.dialogActive = false;
        this.$router.push("/dashboard");
        this.$emit("updateStatus", true);
      } else {
        this.showError = true;
      }
    },
  },
};
</script>
