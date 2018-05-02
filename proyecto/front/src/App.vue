<template>
  <div id="app">
    <PostUser :conver="hola"/>
  </div>
</template>

<script>
import PostUser from './components/PostUser'

export default {
  name: 'App',
  data() {
    return {
      hola:"pruebade nac2ho"
    };
  },
  components: {
    PostUser,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
