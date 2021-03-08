<template>
    <div>
        <h1>FETCH URL</h1>
        <v-text-field filled label="label" v-model="urlToFetch"></v-text-field>
        <v-btn color="success" @click="getUrl()">get URL</v-btn>
        <!-- <p>{{JSON.stringify(data)}}</p> -->
        <div v-html="data"/>
    </div>
</template>

<script>
import marked from 'marked'
    export default {
        data() {
            return {
                data: "",
                urlToFetch: "md/test.md"
            }
        },
        methods: {
            getUrl() {
                var myHeaders = new Headers();
                let url = this.urlToFetch
                var myInit = {
                    method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default'
                };
                let _this=this
                fetch(url, myInit)
                    .then(response => response.text())
                    .then(result => _this.data = marked(result));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>