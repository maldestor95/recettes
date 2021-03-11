<template>
    <div>
        <h1> Recettes disponibles</h1>
        <recettelists v-model="chosenRecipe"/>
        <div v-if="chosenRecipe.title!=''">
            <h1  > {{chosenRecipe.title}}</h1>
            <recette v-model="chosenRecipe"/>
        </div>
    </div>
</template>

<script>
    import Recettelists from './recettelists.vue'
    import recette from './recette.vue'
    export default {
        components: {
            Recettelists,recette
        },
        data() {
            return {
                chosenRecipe: {title:"",link:""}
            }
        },
    }
</script>

<style lang="scss" scoped>
h1 {
    text-align: center
}
</style>