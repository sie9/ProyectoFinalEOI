<template>
  <div class="container">
      <h1>Titulo chat</h1>
      <languageChoice></languageChoice>
      <PostUser v-for="mensaje in mensajes" :conver="mensaje"/>
      <inputComponent></inputComponent>
  </div>
</template>

<script>
import inputComponent from "./inputComponent";
import languageChoice from "./languageChoice";
import firebase from "firebase";
import PostUser from "./PostUser";
<<<<<<< HEAD
import axios from "axios"
import _ from "lodash"; 

=======
import axios from 'axios';
>>>>>>> d3455b8b204f2df7c1aaaa7ab9d9e00aaaf5aaf6

export default {
  name: "MainChat",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes: []
    };
  },
  created(){
<<<<<<< HEAD
      /* firebase.database().ref('Mensajes').remove(); */
      firebase.database().ref('Mensajes').on('child_added', (data) => {
        console.log(data.val());               
          axios.post('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
          target :'en',
	        q : data.val().text
      })
      .then((response) => {
        let traduccion=_.head(response.data.data.translations).translatedText;
        let txt = {
            msgTrslated : traduccion
        }
        console.log(txt.msgTrslated);
        this.mensajes.push(txt.msgTrslated);             
=======
    /* firebase.database().ref('Mensajes').remove(); */

    //Esta consulta solo hace falta hacerla una vez.... si veis la consola solo
    // esta devolviendo la lista de idiomas :S

    //si estais intentando traducir no se para que le pasais ese json de target y tal....
    // tendria mas sentido hacer un post para traducir no un get :S
    
    axios.get('https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
          target :'en',
	        q :'¿Como te llamas?',
	        source:'es'
    }).then((response) => {
        console.log("idiomas",response.data.data);             
    }).catch(err => console.log(err))


    firebase.database().ref('Mensajes').on('child_added', (data) => {
        console.log("val", data.val().text)
        axios.post('https://translation.googleapis.com/language/translate/v2/?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
          target :'en',
	        q : data.val().text,
	        source:'es'
        }).then((response) => {
          console.log("traduccion",JSON.stringify(response.data)); 
          this.mensajes.push(response.data.translations[0].translatedText);
                      
        }).catch(err => console.log(err))

        
>>>>>>> d3455b8b204f2df7c1aaaa7ab9d9e00aaaf5aaf6
    })
  },
                
                
                
                
                
                
                /* console.log(data.val()) */
                /*let objText = {
                    text: data.val().mensaje,
                    language: otherlanguage
                }*/
  
      
  
  components: {
    PostUser,
    inputComponent,
    languageChoice
  }
};

$(document).ready(function() {
  $("select").formSelect();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
