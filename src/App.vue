<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img src="cuttlery.svg" height="30" max-width="30" contain></v-img>
      <v-btn @click="showRecetteList=!showRecetteList">list</v-btn>
      <v-spacer></v-spacer>
      <v-text-field
            name="recipeInput"
            label="Nom de la Recette"
            v-model="recipeName.title"
            clearable
        ></v-text-field>  
    </v-app-bar>

    <v-main>
      {{JSON.stringify(this.recipeName)}}
      <recettelists v-model="recipeName" :maxResponseNumber="maxResponseNumber" v-if="showRecetteList"/>
      <recettes  v-model="recipeName" v-if="recipeName.link!=''"/>
    </v-main>
  </v-app>
</template>

<script>
  import recettes from './features/recette/recettes'
import Recettelists from './features/recette/recettelists'
  export default {
    name: 'App',

    components: {
      Recettelists,recettes
    },

    data: () => ({
      menu: "recettes",
      recipeName:{title:null,link:''},
      maxResponseNumber:10,
      showRecetteList:true
    }),
    watch: {
      recipeName(newValue) { // force refresh of recipeName if cleared
        if (newValue.title=="") this.recipeName={title:null,link:''}
      }
    },
  };
</script>