<template>
  <div id="app" class="main-SalaChat grid"> 
    <audio id="myAudio">      
      <source src="../assets/zumbido.mp3" type="audio/mp3">      
    </audio>
       
    <navigator @lang='changeLang' class="grid-fullview"></navigator>
    
    <listaUsuarioOnline class="listaUsuarioOnline"></listaUsuarioOnline>
    
    <chat-box :dato="lang" class="grid-contentview chatBox" id="chatbox"></chat-box> 

    <div id="Alias" class="modal modal-alias">
      <div class="modal-content">
        <h3>Choose your nickname</h3>
        <div class="input-field col s12" >
            <input id="Alias" type="text" class="validate" v-model="alias">
            <label for="email">Nickname</label>
        </div>        
       
        <div class="row">
            <div @click="afterModal()" class="card-panel flow-text email-button">Aceptar</div>
        </div>
      </div>
    </div>   
  </div>
  
</template>

<script>
import navigator from "./navigator";
import chatBox from "./chatBox";
import chatTitle from "./chatTitle";

import listaUsuarioOnline from "./listaUsuarioOnline";
import inputComponent from "./inputComponent";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    chatBox,
    chatTitle,
    navigator,
    listaUsuarioOnline,
    inputComponent
  },
  data() {
    return {
      lang: "",
      privateId: "",
      usuarios: [],
      alias: ""
    };
  },
  methods: {
    changeLang(lang) {
      this.lang = lang;
    },
    getUsers: function(user) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      firebase
        .database()
        .ref("Sala" + res)
        .child("usuariosOnline")
        .once("value", data => {
          this.usuarios = data.val();

          if (this.usuarios !== null) {
            var arrayUsers = Object.values(this.usuarios);

            const resultado = arrayUsers.find(usuario => usuario.id === user);
            console.log(resultado);
            console.log(user);
            if (typeof resultado === "undefined") {
              this.writedbOnlineUsers(user);
            }
          } else {
            this.writedbOnlineUsers(user);
          }
        });
    },
    writedbOnlineUsers: function(userPrivateID) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      var urlPhoto = this.cargarUsuario("photo");
      console.log("wrdb", urlPhoto);
      var key = firebase
        .database()
        .ref("Sala" + res)
        .child("usuariosOnline")
        .push({
          Conexion: Date(),
          id: userPrivateID,
          photo: urlPhoto
        }).key;

      console.log(key);

      var existekey = this.cargarUsuario("key");

      if (existekey == null) {
        this.guardarUsuario("key", key);
      }
    },
    updatedbOnlineUsers: function(usuario) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      firebase
        .database()
        .ref("Sala" + res)
        .child("usuariosOnline")
        .update({
          id: usuario
        });
    },
    cargarUsuario: function(key) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      var comoString = localStorage.getItem(key+res);
      return JSON.parse(comoString);
    },
    s4: function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    guardarUsuario: function(key, value) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      var comoString = JSON.stringify(value);
      localStorage.setItem(key+res, comoString);
    },
    showRequestAlias() {
      var modalAlias = document.getElementById("Alias");
      modalAlias.style.display = "block";
      $('.main-SalaChat').addClass("blur")
    },
    hideRequestAlias() {
      var modalAlias = document.getElementById("Alias");
      modalAlias.style.display = "none";
      $('.main-SalaChat').removeClass("blur")
    },
    afterModal() {   
      if (this.alias != ''){
        var route = this.$route.path;
      var res = route.substring(1, route.length);

      var key = this.cargarUsuario('key');
      console.log("key", key);
      var user = this.cargarUsuario('usuario');

      firebase.database().ref("Sala" + res+"/usuariosOnline/"+key).update({
        alias: this.alias                 
      })
      .then(()=>{
        this.guardarUsuario("alias", this.alias);
        this.hideRequestAlias();
      })
      }
      
        
    }
  },

  beforeRouteEnter(to, from, next) {
    var route = to.fullPath;
    var res = route.substring(1, route.length);
    console.log(to.fullPath);
    firebase
      .database()
      .ref("Sala" + res)
      .once("value", data => {
        console.log(data.val());
        if (data.val() == null) {
          window.location.href = to.fullPath + "/notFound";
        } else {
          next();
        }
      });
  },
  created() {
    var existeUsuario = this.cargarUsuario("usuario");
    var existePhoto = this.cargarUsuario("photo");
    console.log("existepho", existePhoto);

    if (existePhoto == null) {
      $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: data => {
          this.guardarUsuario("photo", data.results[0].picture.thumbnail);
          if (existeUsuario == null) {
            console.log("entra?");
            this.privateId = "Guest" + "-" + this.s4() + this.s4() + this.s4();
            this.guardarUsuario("usuario", this.privateId);
            existeUsuario = this.privateId;
          }

          this.getUsers(existeUsuario);
        }
      });
    } else {
      if (existeUsuario == null) {
        console.log("entra?");
        this.privateId = "Guest" + "-" + this.s4() + this.s4() + this.s4();
        this.guardarUsuario("usuario", this.privateId);
        existeUsuario = this.privateId;
      }

      this.getUsers(existeUsuario);
    }

    var route = this.$route.path;
    var res = route.substring(1, route.length);
    firebase
      .database()
      .ref("Sala" + res)
      .child("Zumbido")
      .on("child_changed", data => {
                
        var existeUsuario = this.cargarUsuario("usuario");
        console.log("existeusuario en firebase", existeUsuario);
        console.log("to firebase", data.val().to);
        if (data.val().to == existeUsuario) {

          var zumbar = document.getElementById("myAudio");
          zumbar.play();

          $("#chatbox").addClass("shake-horizontal shake-constant");
          setTimeout(() => {
            $("#chatbox").removeClass("shake-horizontal shake-constant");
          }, 1000);
        }
      });
     
  },
  mounted() {
    var existeAlias = this.cargarUsuario("alias");

    if(existeAlias == null){

      this.showRequestAlias();
    }
  },
  destroyed() {}
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.subgrid {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.col-aside {
  grid-column: 1/2;
}
.col-chatbox {
  grid-column: 2/3;
}
.grid-contentview {
  grid-column: 2/5;
}
.grid-aside {
  grid-column: 1/2;
}
.grid-fullview {
  grid-column: 1/5;
}
.container.maindiv.col.s12 {
  display: flex;
  justify-content: flex-end;
}
.col.s12 {
  padding: 0px;
}
.col.s3 {
  padding: 0px;
}
.col.s9 {
  padding: 0px;
}
.chatTitle {
  height: 10vh;
}
.main-SalaChat {
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: url("../assets/img/background.png") no-repeat center center fixed;
}

.modal {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  width: 100vw;
  height: 100vh;
  display: none;
  padding: 10% 0;
  max-height: 100%;
}
/* Modal Content */
.modal-content {
  font-family: "Montserrat", sans-serif;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 35%;
  min-height: 60%;
  height: auto;
  padding-bottom: 10px;
  border: 2px inset #fca331;
  box-shadow: 0px 10px 20px 5px rgb(85, 85, 85);
}

.blur> *:not(.modal){
  filter:blur(5px)
}

@media only screen and (min-device-width: 180px) and (max-device-width: 720px) {
  .listaUsuarioOnline {
    display: none;
  }

  .grid-contentview.chatBox {
    grid-column: 1/5;
  }
}
</style>
