<template>
  <div id="app">
    <PostUser conver="hola"/>
    
    <main-chat></main-chat>
  </div>
</template>

<script>
import PostUser from './components/PostUser'
import MainChat from './components/MainChat'

export default {
  name: 'App',
  data() {
    return {
      mensaje:"pruebade nac2ho"
    };
  },
  components: {
    PostUser,
    MainChat,
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
