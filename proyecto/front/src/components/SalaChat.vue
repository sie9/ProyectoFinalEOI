<template>
  <div id="app">
    <navigator @lang='changeLang'></navigator>
    <chatTitle></chatTitle>
    <chat-box :dato="lang"></chat-box>
  </div>
</template>

<script>
import navigator from "./navigator";
import chatBox from "./chatBox";
import chatTitle from "./chatTitle";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    chatBox,
    chatTitle,
    navigator
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
          //console.log("obj.valu",JSON.stringify(Object.values(this.usuarios)));
          
          if (this.usuarios !== null) {
            var arrayUsers = Object.values(this.usuarios);

            const resultado = arrayUsers.find(usuario => usuario.id === pepe);

            if (typeof resultado === "undefined") {
              console.log("estoy aqui");
              this.writedbOnlineUsers(pepe);
            }
          }else{
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
