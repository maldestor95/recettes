<template>
    <div>
        <v-text-field
            name="recipeInput"
            label="Nom de la Recette"
            v-model="recipeName"
            clearable
        ></v-text-field>
        <div v-for="recette in recetteslistfiltered" :key="recette.id">
            <a @click="selectRecipe(recette)">{{ recette.title }}</a>
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
                chosenRecipe:this.value,
                recipeName:null
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
        methods: {
            selectRecipe(recette) {
                this.$emit("input",recette)
                this.recipeName=recette.title
            }
        },
        computed: {
            recetteslistfiltered() {
                const maxListLength= 5

                if (this.recipeName==null|undefined) return this.recetteslist.slice(0,maxListLength)

                let convertRecipNameToFilter=this.recipeName[0].toUpperCase()
                for (let index = 1; index < this.recipeName.length; index++) {
                    convertRecipNameToFilter+= '(.*)'+this.recipeName[index].toUpperCase()
                }
                const regexFilter= new RegExp(convertRecipNameToFilter)
               
                const FullFilteredList= this.recetteslist.filter(item=>{
                    console.log (item.title, regexFilter.test(item.title.toUpperCase()))
                    return regexFilter.test(item.title.toUpperCase())
                })
                return FullFilteredList.slice(0,maxListLength)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>