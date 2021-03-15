<template>
    <div>
        ***{{value}}---
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
            // eslint-disable-next-line vue/no-unused-components
            recette
        },
        props: {
            value: {
                // type: String,
                // default: ()=>{ return "toto"}
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