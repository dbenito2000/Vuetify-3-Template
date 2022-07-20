<template>
  <v-app theme="dark">
    <v-app-bar v-if="loggedIn">Vuetify 3 Template</v-app-bar>
    <v-navigation-drawer permanent v-if="loggedIn">
      <template v-slot:prepend>
        <v-list-item
          two-line
          :prepend-avatar="user.avatar"
          :title="user.name"
          :subtitle="user.email"
        ></v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Profile"
          value="profile"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Configuration"
          value="configuration"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value="logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view @updateStatus="updateStatus"></router-view>
  </v-app>
</template>

<script>
import { useUserStore } from "./stores/user";
export default {
  name: "App",
  components: {},

  data: () => ({
    loggedIn: true,
    user: {},
  }),
  methods: {
    updateStatus(status) {
      this.loggedIn = status;
    },
  },
  async mounted() {
    const store = useUserStore();
    this.user = await store.getUser();
  },
};
</script>
<style>
html {
  overflow-y: auto !important;
}
</style>