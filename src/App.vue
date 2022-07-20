<template>
  <v-app :theme="theme">
    <v-app-bar v-if="loggedIn">Vuetify 3 Template</v-app-bar>
    <v-navigation-drawer permanent v-if="loggedIn">
      <!-- <template v-slot:prepend>
        <v-list-item
          two-line
          :prepend-avatar="user.avatar"
          :title="user.name"
          :subtitle="user.email"
        ></v-list-item>
      </template> -->
      <v-sheet class="pa-4">
        <v-avatar class="mb-4" size="64"> <v-img :src="user.avatar" /></v-avatar>
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div>
      </v-sheet>
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
          @click="
            loggedIn = false;
            $router.push('/');
          "
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
    theme: "dark",
    loggedIn: false,
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

    if(this.user.id) {
      this.loggedIn = true;
    }
  },
};
</script>
<style>
html {
  overflow-y: auto !important;
}
</style>