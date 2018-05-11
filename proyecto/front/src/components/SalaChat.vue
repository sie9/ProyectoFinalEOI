<template>
  <div id="app" class="main-SalaChat grid">    
    <navigator @lang='changeLang' class="grid-fullview"></navigator>
    
    <listaUsuarioOnline class=""></listaUsuarioOnline>
    <chat-box :dato="lang" class="grid-contentview"></chat-box>
    
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

      firebase
        .database()
        .ref("Sala" + res)
        .child("usuariosOnline")
        .push({
          Conexion: Date(),
          id: usuario
        });
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
    cargarUsuario: function() {
      var comoString = localStorage.getItem("usuario");
      return JSON.parse(comoString);
    },
    s4: function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    guardarUsuario: function(usuario) {
      var comoString = JSON.stringify(usuario);

      localStorage.setItem("usuario", comoString);
    },
    cargarUsuario: function() {
      var comoString = localStorage.getItem("usuario");
      return JSON.parse(comoString);
    }
  },
  created() {
    var existeUsuario = this.cargarUsuario();

    if (existeUsuario == null) {
      this.privateId =
        this.s4() +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        this.s4() +
        this.s4();
      this.guardarUsuario(this.privateId);
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
}
</style>
