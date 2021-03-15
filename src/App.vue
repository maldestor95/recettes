<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img src="cuttlery.svg" height="30" max-width="30" contain></v-img>
      <v-btn @click="showRecetteList=!showRecetteList">list</v-btn>
      <v-spacer></v-spacer>
      <v-text-field
            name="recipeInput"
            label="Nom de la Recette"
            v-model="recipeName"
            clearable
        ></v-text-field>  
    </v-app-bar>

    <v-main>
      <recettelists v-model="recipeName" 
      :maxResponseNumber="maxResponseNumber" 
      @choice="choicemade"
      v-if="showRecetteList" />

      <div v-if="currentRecette.link!=''">
        <h1  > {{currentRecette.title}}</h1>
        <recette v-model="currentRecette"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import recette from './features/recette/recette'
import Recettelists from './features/recette/recettelists'
  export default {
    name: 'App',

    components: {
      // eslint-disable-next-line vue/no-unused-components
      Recettelists,recette
    },

    data: () => ({
      recipeName:'',
      recetteList:null,
      currentRecette:{title:null,link:''},
      maxResponseNumber:10,
      showRecetteList:true
    }),
    watch: {
      recipeName(newValue) { // force refresh of recipeName if cleared
        if (newValue.title=="") this.recipeName={title:null,link:''}
      }
    },
    methods: {
      choicemade(e) {
        // this.$nextTick(function () {
        // console.log(this.$el.textContent) // => 'mis à jour'
          this.currentRecette=e
      // })
      }
    },
  };
</script>