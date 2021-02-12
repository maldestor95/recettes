<template>
  <div id="app">  
    <DiagrammeTendance/>
  </div>
</template>

<script>
import DiagrammeTendance from './components/diagramme'

export default {
  name: 'App',
  components: {
    DiagrammeTendance
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
