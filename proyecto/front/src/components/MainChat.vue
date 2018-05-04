<template>
  <div class="container">
      <h1>Titulo chat</h1>
      <languageChoice></languageChoice>
      <PostUser v-for="mensaje in mensajes" :conver="mensaje" :key="mensaje"/>
      <inputComponent></inputComponent>
  </div>
</template>

<script>
import inputComponent from "./inputComponent";
import languageChoice from "./languageChoice";
import firebase from "firebase";
import PostUser from "./PostUser";
import axios from "axios";

export default {
  name: "MainChat",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes: []
    };
  },
  created() {
    /* firebase.database().ref('Mensajes').remove(); */

    //Esta consulta solo hace falta hacerla una vez.... si veis la consola solo
    // esta devolviendo la lista de idiomas :S

    //si estais intentando traducir no se para que le pasais ese json de target y tal....
    // tendria mas sentido hacer un post para traducir no un get :S

    axios
      .get(
        "https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",
        {
          target: "en",
          q: "¿Como te llamas?",
          source: "es"
        }
      )
      .then(response => {
        console.log("idiomas", response.data.data);
      })
      .catch(err => console.log(err));

    firebase
      .database()
      .ref("Mensajes")
      .on("child_added", data => {
        console.log("val", data.val().text);
        axios
          .post(
            "https://translation.googleapis.com/language/translate/v2/?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",
            {
              target: "en",
              q: data.val().text,
              source: "es"
            }
          )
          .then(response => {
            console.log("traduccion", JSON.stringify(response.data));
            this.mensajes.push(response.data.translations[0].translatedText);
          })
          .catch(err => console.log(err));
      });
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
