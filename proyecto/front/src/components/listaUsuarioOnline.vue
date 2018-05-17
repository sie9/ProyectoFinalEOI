<template>
  <div class="app userList">
      <loaders class="loaders" :conver="this.cond"></loaders>
      <usuarioOnline v-for="usuario in usuarios" :conver="usuario" :key="usuario.id" v-if="cond"/>
  </div>
</template>

<script>
import firebase from "firebase";
import UsuarioOnline from "./UsuarioOnline";
import loaders from "./loaders";

//hola
export default {
  name: "listaUsuarioOnline",

  data() {
    return {
        usuarios:[],
        cond: false
    };
  },
  created() {  
    var route = this.$route.path; 
    var res = route.substring(1, route.length); 
    firebase.database().ref('Sala'+res).child('usuariosOnline').on('child_added', (data) => {
        
        this.usuarios.push(data.val());

        
        this.cond=true;
    })
         
    firebase.database().ref('Sala'+res).child('usuariosOnline').on('child_changed', (data) => {
        

        function buscaelemento(element) {
          return element > data.val().id;
        }

        console.log("usuarios", JSON.stringify(this.usuarios));
        var id=  this.usuarios.findIndex(buscaelemento);
        console.log("splice", this.usuarios.splice(id, 1, data.val()))
        //this.usuarios = this.usuarios.splice(id, 0, data.val());
        this.cond=true;

        console.log("usuarios despues", JSON.stringify(this.usuarios));
        console.log("data.val()", data.val());
        console.log("id", id);
    })
      
  },
  components: {
    UsuarioOnline,
    loaders
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.userList{
  overflow-y:auto;
  max-height:93vh;
  background-color: rgba(240, 240, 240, 0.815);
  box-shadow: 2px 10px 10px 5px rgba(14, 14, 14, 0.815)
}

.loaders{
  padding-top:50%;
  margin:auto;

}


</style>
