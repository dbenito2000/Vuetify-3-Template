<template>
  <v-main style="padding: 0px">
    <v-main>
      <v-row>
        <v-col>
          <v-card class="ma-3">
           <v-card-title>
            Card 1 Title
           </v-card-title>
            <v-card-text>
              Card 1
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="ma-3">
            <v-card-title>
              Card 2 Title
            </v-card-title>
            <v-card-text>
              Card 2
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-main>
</template>
<script>
/* import { useUserStore } from ".././stores/user"; */
import axios from 'axios';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default {
  name: "Dashboard",

  data: () => ({
  }),
  
  methods: {
  },
  emits: ["updateStatus"],
  async mounted() {

  }
};
</script>
