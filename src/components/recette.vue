
<template>
    <v-container>
       <v-row class="d-flex">
           <v-col class="col-md-2 ingredients">
            <v-row v-for="ing in ingredients" :key="ing.id">
                <v-col >{{ ing.ingredient }}</v-col>
                <v-col>{{ ing.qty }}</v-col>
            </v-row>
           </v-col>
           <v-col class="col-md-10">
                <div v-html="recipe"/>
           </v-col>
       </v-row>
    </v-container>
</template>
<script>
    import marked from 'marked'
    import yaml from 'js-yaml';
    export default {
        props: {
            value: {
                type: Object,
                default: () => {
                    return {
                        title: "",
                        link: ""
                    }
                }
            },
        },
        data() {
            return {
                recipeLink: this.value,
                recipe:"",
                ingredients:""
            }
        },
        watch: {
            value(newValue) {
                this.recipeLink=newValue
                this.getUrl(this.recipeLink.link)
            }
        },
        methods: {
            getUrl(urlToFetch) {
                var myHeaders = new Headers();
                var myInit = {
                    method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default'
                };
                let _this=this
                fetch('recettes/'+urlToFetch, myInit)
                    .then(response => response.text())
                    .then(result => {
                        const endYamlPosition=result.indexOf('...')
                        _this.ingredients=yaml.load(result.substring(0,endYamlPosition+3))
                        _this.recipe = marked(result.substring(endYamlPosition+3))
                    })
            }
        }
    }
</script>
<style lang="scss" scoped>
.ingredients {
    border: black solid 2px;
    border-radius: 10px;
}
</style>