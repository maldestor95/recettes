<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Menu
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title @click="menu='recettes'">Recettes</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title @click="menu='initial'">Home</v-list-item-title>
                </v-list-item>
              </v-list>
          </v-menu>
    </v-app-bar>

    <v-main>
      <diagrammeTendance v-if="menu=='diagramme'" />
      <recettes  v-if="menu=='recettes'" />
    </v-main>
  </v-app>
</template>

<script>
  import diagrammeTendance from './components/diagramme';
  import recettes from './features/recette/recettes'

  export default {
    name: 'App',

    components: {
      diagrammeTendance,
      recettes
    },

    data: () => ({
      menu: "initial"
    }),
  };
</script>