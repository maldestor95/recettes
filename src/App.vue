<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" 
          @click="menu='initial'"
          />
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="menu='diagramme'"> Diagramme </v-btn>
    </v-app-bar>

    <v-main>
      <diagrammeTendance v-if="menu=='diagramme'" />
      <fetchUrl v-if="menu=='initial'" />
    </v-main>
  </v-app>
</template>

<script>
  import diagrammeTendance from './components/diagramme';
  import fetchUrl from './components/fetchurl.vue';

  export default {
    name: 'App',

    components: {
      diagrammeTendance,
      fetchUrl
    },

    data: () => ({
      menu: "initial"
    }),
  };
</script>