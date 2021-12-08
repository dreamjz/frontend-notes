<template>
  <div id="app">
    <router-view />
    <count />
  </div>
</template>

<script>
import count from '@/views/count'

export default {
  name: 'App',
  components: {
    count
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
