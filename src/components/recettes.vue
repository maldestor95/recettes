<template>
    <div>
        <h1>Recette</h1>
        <recettelists/>
        <recette/>
        <section></section>

    </div>
</template>

<script>
    import Recettelists from './recettelists.vue'
    import recette from './recette.vue'
    export default {
        components: {
            Recettelists,recette
        },
    }
</script>

<style lang="scss" scoped>

</style>