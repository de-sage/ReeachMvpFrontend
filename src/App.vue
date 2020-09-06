<template>
  <v-app>
    <v-layout row >
      <v-flex  xs12>
        <reeach-button btn-link="/">Start Here</reeach-button>
      </v-flex>
    </v-layout>

    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import Alert from "./components/Alert/Alert";
import ReeachButton from "./components/Button/Button"

export default {
  name: "App",
  data() {
    return { errorMessage: null, textError: null };
  },
  components: {
    Alert,
    ReeachButton
  },

};
</script>
