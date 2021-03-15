<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img src="cuttlery.svg" height="30" max-width="30" contain></v-img>
      <v-btn>list</v-btn>
        
    </v-app-bar>

    <v-main>
      <recettes  v-if="menu=='recettes'" />
    </v-main>
  </v-app>
</template>

<script>
  import recettes from './features/recette/recettes'

  export default {
    name: 'App',

    components: {
      recettes
    },

    data: () => ({
      menu: "recettes"
    }),
  };
</script>