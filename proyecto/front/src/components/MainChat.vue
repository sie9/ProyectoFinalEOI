<template>
  <div class="container maindiv">
      <PostUser v-for="mensaje in mensajes" :conver="mensaje" :key="mensaje.id"/>
      <inputComponent></inputComponent>
  </div>
</template>

<script>
import inputComponent from "./inputComponent";
import languageChoice from "./languageChoice";
import firebase from "firebase";
import PostUser from "./PostUser";
import axios from "axios";
import _ from "lodash";

//hola
export default {
  name: "MainChat",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes: []
    };
  },

  created() {
    //  firebase.database().ref('Mensajes').remove(); 
       firebase.database().ref('Mensajes').on('child_added', (data) => {                       
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
        })
        .catch(err => console.log(err));
        
      })
  },

  components: {
    PostUser, inputComponent, languageChoice
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.maindiv {
  overflow-y: hidden;
  min-height: vmax;
}
</style>
