<template>
    <div>
        {{recetteslist}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recetteslist: "string"
            }
        },
        mounted () {
            const url="test.md"
            var myHeaders = new Headers();
                var myInit = {
                    method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default'
                };
                let _this=this
                fetch(url, myInit)
                    .then(response => response.text())
                    .then(result => _this.recetteslist = result)
        },
    }
</script>

<style lang="scss" scoped>

</style>