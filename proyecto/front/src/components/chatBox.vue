<template>
  <div class="maindiv">
      <chatTitle class="chatTitle"></chatTitle>
      <div class="display">
        <loaders class="loaders" :conver="this.cond"></loaders>
        <PostUser class="postUser" v-for="mensaje in mensajes" :conver="mensaje" :key="mensaje.id" v-if="cond"/>
      </div>      
      <inputComponent class="alinear"></inputComponent>
      
  </div>
</template>

<script>
import login from "./login";
import chatTitle from "./chatTitle";
import inputComponent from "./inputComponent";
import languageChoice from "./languageChoice";
import firebase from "firebase";
import PostUser from "./PostUser";
import loaders from "./loaders";
import axios from "axios";
import _ from "lodash";

export default {
  name: "chatBox",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mensajes: [],
      cond: false
    };
  },
  watch: {
    'dato'() {

      let backUp = [];
      this.mensajes.forEach(element => {
        axios
          .post(
            "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",
            {
              target: this.dato,
              q: element.Texto,
              format: "text"
            }
          )
          .then(response => {
            let traduccion = _.head(response.data.data.translations)
              .translatedText;
            let txt = {
              msgTrslated: traduccion
            };
            element.Texto = txt.msgTrslated;
          })
          .catch(err => console.log(err));
      });
    }
  },
  methods: {
    clearAllFirebase() {
      firebase
        .database()
        .ref("Mensajes")
        .remove();
      this.mensajes = [];
    },

    cargarUsuario(key) {

    var route = this.$route.path;
      var res = route.substring(1, route.length);
      var comoString = localStorage.getItem(key+res);
      return JSON.parse(comoString);
    }
  },

  created() {
    
    var route = this.$route.path;
    var res = route.substring(1, route.length);
    var prueba = true;


    firebase
      .database()
      .ref("Sala" + res)
      .child("Mensajes")
      .on("child_added", data => {
        var prueba = false;
        if (data.val() == null) {
          
        }
        axios.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",
            {
              target: this.dato || "en",
              q: data.val().text
            }
          ).then(response => {
              let traduccion = _.head(response.data.data.translations).translatedText;
              let txt = {
                msgTrslated: traduccion
              };

              $(".display").stop().animate({ scrollTop: $(".display")[0].scrollHeight }, 500);
              this.mensajes.push({
                Texto: txt.msgTrslated,
                Fecha: data.val().time,
                owner: data.val().owner,
                original: data.val().text,
                id: data.val().id,
                cond: true,
                photo: data.val().photo
              });
              this.cond = true;
              if(this.mensajes.length > 0){
            this.mensajes=this.mensajes.sort(function(a, b) {
              return a.Fecha - b.Fecha;
            });
            console.log('pene');
            console.log(JSON.parse(JSON.stringify(this.mensajes)));
          }
          }).catch(err => console.log(err));

          console.log(this.mensajes)

          
      });
      setTimeout(() => { 
        if (prueba == true){
          this.cond=true;
        }
      }, 3000);
      
  
  
  },

  components: {
    PostUser,
    inputComponent,
    languageChoice,
    login,
    chatTitle,
    loaders
  },
  props: ['dato']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maindiv {
  overflow-y: visible;
  height: 93vh;
  display: flex;
  flex-direction: column;
  background: rgba(184, 184, 184, 0.5);
}


.chatTitle {
  border-bottom: 1px solid #fff;
  box-shadow: 0 4px 2px -2px rgb(65, 64, 64);
}

.loaders{
  padding-top:15%;
  margin:auto;
}

.display {
  flex: 1;
  padding-top: 10px;
  overflow: auto;
}

.display::-webkit-scrollbar {
  width: 1em;
}

.display::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.display::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

@media only screen and (min-device-width : 180px) and (max-device-width : 720px){

  .postUser{
    min-width:700px
  }

}

</style>
