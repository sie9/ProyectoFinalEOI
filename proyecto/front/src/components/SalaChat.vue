<template>
  <div id="app" class="main-SalaChat grid">    
    <navigator @lang='changeLang' class="grid-fullview"></navigator>
    
    <listaUsuarioOnline class="listaUsuarioOnline"></listaUsuarioOnline>
    
    <chat-box :dato="lang" class="grid-contentview chatBox"></chat-box>
    
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
      usuarios: []
    };
  },
  methods: {
    changeLang(lang) {
      this.lang = lang;
    },
    getUsers: function(pepe) {
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

            const resultado = arrayUsers.find(usuario => usuario.id === pepe);

            if (typeof resultado === "undefined") {
              this.writedbOnlineUsers(pepe);
            }
          } else {
            this.writedbOnlineUsers(pepe);
          }
        });
    },
    writedbOnlineUsers: function(usuario) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      var key = firebase
        .database()
        .ref("Sala" + res)
        .child("usuariosOnline")
        .push({
          Conexion: Date(),
          id: usuario
        }).key;

      console.log(key);

      var existekey = this.cargarUsuario("key");
      console.log("existekey?", existekey);

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
      var comoString = localStorage.getItem(key);
      return JSON.parse(comoString);
    },
    s4: function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    guardarUsuario: function(key, value) {
      var comoString = JSON.stringify(value);

      localStorage.setItem(key, comoString);
    }
  },
  created() {
    
    var existeUsuario = this.cargarUsuario("usuario");

    console.log("existe?", existeUsuario);
    if (existeUsuario == null) {
      console.log("entra?");
      this.privateId = "Guest" + "-" + this.s4() + this.s4() + this.s4();
      this.guardarUsuario("usuario", this.privateId);
      existeUsuario = this.privateId;
    }

    this.getUsers(existeUsuario);
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: url('../assets/img/background.png') no-repeat center center fixed; 
}

@media only screen and (min-device-width : 180px) and (max-device-width : 720px){
  .listaUsuarioOnline{
    display:none;
  }

  .grid-contentview.chatBox{
    grid-column: 1/5;
  }


}
</style>
