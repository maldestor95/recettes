<template>
    <div>
        <div v-for="recette in recetteslist" :key="recette.id">
            <a @click='$emit("input",recette)'>{{ recette.title }}</a>
        </div>
    </div>
</template>

<script>
    import yaml from 'js-yaml';
    export default {
        props: {
            value: {
                type: Object,
                default: ()=>{ return {title:"",link:""}}
            },
        },
        data() {
            return {
                recetteslist: "string",
                chosenRecipe:this.value
            }
        },
        mounted() {
            const url = "recettes/recettelist.md"
            var myHeaders = new Headers();
            var myInit = {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            };
            let _this = this
            fetch(url, myInit)
                .then(response => response.text())
                .then(result => _this.recetteslist = yaml.load(result))
        },
    }
</script>

<style lang="scss" scoped>

</style>