<template>
  <div id="app">
    <!-- <navigator></navigator>
    <chatTitle></chatTitle>
    <chat-box></chat-box> -->
    <router-view></router-view>
  </div>
</template>

<script>
import navigator from './components/navigator'
import chatBox from './components/chatBox'
import chatTitle from './components/chatTitle'
import login from './components/login'

export default {
  name: 'App',
  components: {
    chatBox,chatTitle,navigator
  }
}
</script>

<style>
/* html {
  background-color: midnightblue;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
