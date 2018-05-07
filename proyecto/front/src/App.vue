<template>
  <div id="app">
    <chatTitle></chatTitle>
    <chat-box></chat-box>
  </div>
</template>

<script>
import chatBox from './components/chatBox'
import chatTitle from './components/chatTitle'

export default {
  name: 'App',
  components: {
    chatBox,chatTitle
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
