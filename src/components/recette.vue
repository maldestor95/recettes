
<template>
    <div>
       <table>
        <tr v-for="ing in ingredients" :key="ing.id">
            <td>{{ ing.ingredient }}</td>
            <td>{{ ing.qty }}</td>
        </tr>
       </table>
        <div v-html="recipe"/>
    </div>
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
                fetch(urlToFetch, myInit)
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

</style>