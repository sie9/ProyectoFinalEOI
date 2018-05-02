<template>
  <div class="container">
      <h1>Titulo chat</h1>
      <languageChoice></languageChoice>
      <p v-for="mensaje in mensajes">{{mensaje.text}}</p>
      <inputComponent></inputComponent>
  </div>
</template>

<script>

import inputComponent from './inputComponent'
import languageChoice from './languageChoice'
import firebase from 'firebase'

export default {
  name: "MainChat",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes:[]
    };
  },
  created(){
      firebase.database().ref('Mensajes').on('child_added', (data) => {
                
                
                this.mensajes.push(data.val())
                console.log(data.val())
                /*let objText = {
                    text: data.val().mensaje,
                    language: otherlanguage
                }*/
            });
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
