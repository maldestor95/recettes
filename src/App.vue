<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img src="cuttlery.svg" height="30" max-width="30" contain></v-img>
      <v-btn @click="showlist">search</v-btn>
      <v-spacer></v-spacer>
      <v-text-field
            name="recipeInput"
            label="Nom de la Recette"
            v-model="recipeName"
            clearable
            @keydown="showRecetteList=true"
            v-show="showRecetteList"
        ></v-text-field>  
    </v-app-bar>

    <v-main>
      <div v-show="showRecetteList">
        <recettelists v-model="recipeName" 
        :maxResponseNumber="maxResponseNumber" 
        @choice="choicemade"
        />
      </div>
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
          this.currentRecette=e
          this.showRecetteList=false
      },
      showlist(){
        this.showRecetteList=!this.showRecetteList
        this.recipeName=''
      }
    },
  };
</script>