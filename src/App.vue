<template>
  <v-app>
    <router-view></router-view>
    <!-- <v-footer> </v-footer> -->
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
html {
  overflow-y: auto !important;
}
</style>