<template>
  <div id="app">
    <Pins />
  </div>
</template>

<script>
import Pins from './components/Pins.vue'

export default {
  name: 'App',
  components: {
    Pins
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
