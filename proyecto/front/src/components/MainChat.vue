<template>
  <div class="container">
      <h1>Titulo chat</h1>
      <languageChoice></languageChoice>
      <PostUser v-for="mensaje in mensajes" :conver="mensaje"/>
      <inputComponent></inputComponent>
  </div>
</template>

<script>

import inputComponent from './inputComponent'
import languageChoice from './languageChoice'
import firebase from 'firebase'
import PostUser from './PostUser'

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
    PostUser,
    inputComponent,
    languageChoice,
  }
};
    
    $(document).ready(function(){
    $('select').formSelect();
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
