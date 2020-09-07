<template>
  <v-app>
    <v-layout row >
      <v-flex  xs12>
        <custom-button btn-link="/">Start Here</custom-button>
        <Alert text="This is a custom text"/>
      </v-flex>
    </v-layout>

    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import Alert from "./components/Alert/Alert";
import CustomButton from "./components/CustomButton/Button"

export default {
  name: "App",
  data() {
    return { errorMessage: null, textError: null };
  },
  components: {
    Alert,
    CustomButton
  },

};
</script>
