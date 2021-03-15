<template>
    <div>
        <div v-if="chosenRecipe.title!=''">
            <h1  > {{chosenRecipe.title}}</h1>
            <recette v-model="chosenRecipe"/>
        </div>
    </div>
</template>

<script>
    
    import recette from './recette.vue'
    export default {
        components: {
            recette
        },
        props: {
            value: {
                type: Object,
                default: ()=>{ return {title:"",link:""}}
            },
        },
        data() {
            return {
                chosenRecipe: this.value
            }
        },
    }
</script>

<style lang="scss" scoped>
h1 {
    text-align: center
}
</style>