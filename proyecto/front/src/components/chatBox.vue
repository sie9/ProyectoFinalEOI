<template>
  <div class="container maindiv">
      <button v-on:click= "clearAllFirebase">Limpiar Firebase</button>
      <div class="display">
        <PostUser v-for="mensaje in mensajes" :conver="mensaje" :key="mensaje.id"/>
      </div>
      
      <inputComponent></inputComponent>

  </div>
</template>

<script>
import login from "./login";
import inputComponent from "./inputComponent";
import languageChoice from "./languageChoice";
import firebase from "firebase";
import PostUser from "./PostUser";
import axios from "axios";
import _ from "lodash";

//hola
export default {
  name: "chatBox",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes: []
    };
  },
  watch:{
    'dato'() {
      let backUp = [];
      this.mensajes.forEach(element => {        
        axios.post('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
          target :this.dato,
	        q : element
        })
        .then((response) => {
          let traduccion=_.head(response.data.data.translations).translatedText;
          let txt = {
          msgTrslated : traduccion
        }        
         backUp.push(txt.msgTrslated);
        })
        .catch(err => console.log(err));    
      });

      this.mensajes=[];
      this.mensajes = backUp;

      
      
      
      }
    

  },
  methods: {
    clearAllFirebase() {
      console.log("He pasado por aquí");
      firebase.database().ref('Mensajes').remove();
      this.mensajes = []; 
    }

  },
  created() {       
       firebase.database().ref('Mensajes').on('child_added', (data) => {                     
          axios.post('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
          target :this.dato || "en",
	        q : data.val().text
        })
        .then((response) => {
          let traduccion=_.head(response.data.data.translations).translatedText;
          let txt = {
              msgTrslated : traduccion
          }
          $(".display").stop().animate({ scrollTop: $(".display")[0].scrollHeight}, 500);
          this.mensajes.push(txt.msgTrslated);
        })
        .catch(err => console.log(err));        
      })
      
  },
  components: {
    PostUser, inputComponent, languageChoice, login
  },
  props : ['dato']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container.maindiv {
  overflow-y:visible;
  height: 80vh;
  display:flex;
  flex-direction: column;
}

.display{
  flex:1;
  background: rgba(184, 184, 184, 0.5);
  margin-bottom:30px;
  overflow: auto;
}

.display::-webkit-scrollbar {
    width: 1em;
}
 
.display::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
.display::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
