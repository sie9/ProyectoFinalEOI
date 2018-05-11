<template>
    <div class="main">
        <div class="row login-box">
            <div class="logo-chat">
                <img src="../assets/img/chat2.png" alt="" class="center-block" id="logo">
            </div>
            <div class="grid--wrapper cabecera">
                    <!-- Input -->
                  <div class="grid--quarter-columns login">
                        <input id="Texto" type="text" v-on:keyup.enter="writetodB" onfocus="this.value=''" value="" class="validate" v-model="msg" placeholder="wwww.chatty/name-room.es" maxlength="60">
                        <div>
                          <i class="check_circle"></i>
                          <i class="do_not_disturb_alt" value="El nombre de la sala existe"></i>
                        </div>
                  </div>
                <div>
                    <!-- button -->
                    <router-link v-bind:to="msg">
                        <div class="waves-effect waves-light btn col s12">
                           <strong> CREATE ROOM </strong>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      msg: ""
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log("hola");
    console.log("Sala"+this.msg);
    firebase
      .database()
      .ref("Sala" +this.msg)
      .once("value", data => {
        console.log(data.val());
        if (data.val() != null){
          this.isActive = false 
          next()
        }else{
          //Cambiar el orden del if (Ya que si no existe una sala, te lleva a ella y te la crea)
          //Ahora esta como que si existe entra a la sala
          console.log("No existe esta sala!");
        }
      });
  }
};

$(document).ready(function() {
  $("select").formSelect();
});
</script>



<style scoped>
#imagen, .check_circle {
  margin: 0;
  padding: 0;
  color: black;
}

.main {
  position: absolute;
  background-image: url("../assets/img/background.png");
  background-repeat: no-repeat;
  padding: 100px;
  width: 100vw;
  height: 150vh;

  -webkit-background-size: 100% 100%; /* Safari 3.0 */
  -moz-background-size: 100% 100%; /* Gecko 1.9.2 (Firefox 3.6) */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  background-size: 100% 100%; /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */
}

.login-box {
  background-color: white;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 500px;
  /* height: 800px; */
  border-radius: 10px;
  border-style: solid;
  border-color: silver;
  box-shadow: 2px 2px 5px black;
}

.grid--wrapper,
.grid--quarter-columns,
.grid--two-columns {
  display: grid;
}

.grid--wrapper {
  grid-template-columns: minmax(1em, 1fr) minmax(0, 75em) minmax(1em, 1fr);
}

.grid--wrapper > div {
  grid-column: 2;
}

.grid--quarter-columns {
  grid-template-columns: 90% 10%;
}

.grid--two-columns {
  grid-template-columns: 10% 90%;
}

/* botones */

.btn {
  border-radius: 5px;
  background-color: silver;
  color: black;
  font-family: "Signika", sans-serif;
  font-size: 1.2em;
}

.btn:hover {
  background-color: grey;
  color: white;
}

.btn-copy {
  background-color: silver;
  box-shadow: none;
  height: 40px;
}

/* logo */

.logo-chat img {
  height: 200px;
}
</style>
