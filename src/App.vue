<template>
  <v-app>
    <v-layout row >
      <v-flex xs12>
        <alert text="An Error Occured" />
      </v-flex>
    </v-layout>

    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import Alert from "./components/Alert/Alert";

export default {
  name: "App",
  data() {
    return { errorMessage: null, textError: null };
  },
  components: {
    Alert
  },

};
</script>
