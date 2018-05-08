<template>
  <div id="app">
    <navigator @lang='changeLang'></navigator>
    <chatTitle></chatTitle>
    <chat-box :dato="lang"></chat-box>
  </div>
</template>

<script>
import navigator from './navigator'
import chatBox from './chatBox'
import chatTitle from './chatTitle'

export default {
  name: 'App',
  components: {
    chatBox,chatTitle,navigator
  },
  data(){
    return {
      lang: ""
    }
  },
  methods : {
    changeLang (lang) {
      this.lang = lang;
    }
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
  margin-top: 0px;
}
</style>
