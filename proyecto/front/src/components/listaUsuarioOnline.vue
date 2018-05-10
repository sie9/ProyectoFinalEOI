<template>
  <div class="app userList">
      <usuarioOnline v-for="usuario in usuarios" :conver="usuario" :key="usuario.id"/>
  </div>
</template>

<script>
import firebase from "firebase";
import UsuarioOnline from "./UsuarioOnline";


//hola
export default {
  name: "listaUsuarioOnline",

  data() {
    return {
        usuarios:[]
    };
  },
  created() {  
    var route = this.$route.path; 
    var res = route.substring(1, route.length);    
    firebase.database().ref('Sala'+res).child('usuariosOnline').on('child_added', (data) => {
        this.usuarios.push(data.val());
    })
      
  },
  components: {
    UsuarioOnline
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.userList{
  overflow-y:auto;
  max-height:92vh;
  background-color: rgba(240, 240, 240, 0.815);
}


</style>
