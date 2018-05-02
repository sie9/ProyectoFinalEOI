<template>
  <div class="container">
      <h1>Titulo chat</h1>
      <languageChoice></languageChoice>
      <p>{{msg}}</p>
      <inputComponent></inputComponent>
  </div>
</template>

<script>

import inputComponent from './inputComponent'
import languageChoice from './languageChoice'

export default {
  name: "MainChat",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    inputComponent,
    languageChoice,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    languageChoice {
        background-color:black;
    }
    .container {
        background-color: aqua;
    }
</style>
