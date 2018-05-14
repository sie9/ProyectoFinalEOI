<template>
    <div class="main">
        <div class="row login-box">
          <div>
            <div class="logo-chat">
                <img src="../assets/img/chat2.png" alt="" class="center-block" id="logo">
            </div>
            <div class="grid--wrapper cabecera">
                    <!-- Input -->
                  <div class="login">
                        <input id="texto" type="text" class="validate" v-model="msg" placeholder="wwww.chatty/name-room.es" maxlength="60">
                  </div>
                <div>
                    <!-- button -->
                    <router-link v-bind:to="msg">
                        <div class="waves-effect waves-light btn col s12">
                           CREATE A NEW ROOM 
                        </div>
                    </router-link>
                </div>
            </div>
          </div>
        </div>
        <div class="row barra">
          <div class="grid-wrapper">
            <div class="grid--three-columns texto">
              <div class="grid--quarter-min-columns">
                <div class="icono"></div>
                <div>
                  <h3>CREATE A ROOM LINK</h3>
                  <p>It can be whatever you want (like your name or company name)</p>
                </div>
              </div>
              <div class="grid--quarter-min-columns">
                <div class="icono2"></div>
                <div>
                  <h3>SHARE THE LINK</h3>
                  <p>By email, chat. However you'd like really</p>
                </div>
              </div>
              <div class="grid--quarter-min-columns">
                <div class="icono3"></div>
                <div>
                  <h3>... THAT'S IT!</h3>
                  <p>Guests join instantly in the browser by clicking the link.</p>
                </div>
              </div>
            <div class="texto centrado">
              <a href="http://">Terms of Service</a>
            </div>
            <div class="texto centrado">
              <a href="http://">Cookies</a>
            </div>
            <div class="texto centrado">
              <a href="http://">©chatty</a>
            </div>
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
  watch: {
    msg() {
      this.msg = this.msg.toLowerCase();
    }
  },
  beforeRouteLeave(to, from, next) {
    firebase
      .database()
      .ref("Sala" + this.msg)
      .once("value", data => {
        console.log(data.val());
        if (data.val() != null) {
          this.isActive = false;
          next();
        } else {
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
* {
  font-family: "Montserrat", sans-serif;
}

.texto {
  padding-top: 30px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(73, 73, 73);
}

.centrado {
  text-align: center;
}

.icono {
  background-size: 80% 100%;
  background-image: url("../assets/img/icon.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.icono2 {
  background-size: 80% 100%;
  background-image: url("../assets/img/icon2.jpg");
  background-repeat: no-repeat;
  background-position: right;
}

.icono3 {
  background-size: 80% 100%;
  background-image: url("../assets/img/icon7.png");
  background-repeat: no-repeat;
  background-position: right;
}

.main {
  position: absolute;
  background-image: url("../assets/img/background3.jpg");
  background-repeat: no-repeat;
  /* z-index: -999; */
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  -webkit-background-size: 100% 100%; /* Safari 3.0 */
  -moz-background-size: 100% 100%; /* Gecko 1.9.2 (Firefox 3.6) */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  background-size: 100% 100%; /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */
}

.login-box {
  background-color: white;
  margin-top: 150px;
  padding-bottom: 20px;
  width: 500px;
  border-radius: 10px;
  border-style: solid;
  border-color: silver;
  box-shadow: 2px 2px 5px black;
}

.barra {
  background-color: #fff;
  height: 200px;
  width: auto;
  margin: 250px 0px 0px 0px;
  padding: 0;
  box-shadow: 0px -6px 9px 0px rgba(0, 0, 0, 0.5);
}

.grid--wrapper,
.grid--quarter-columns,
.grid--quarter-min-columns,
.grid--two-columns,
.grid--three-columns {
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

.grid--quarter-min-columns {
  grid-template-columns: 30% 70%;
  grid-gap: 10px;
}

.grid--two-columns {
  grid-template-columns: 10% 90%;
}

.grid--three-columns {
  grid-template-columns: repeat(3, calc(100%/3));
  margin: 50px;
}
/* botones */

.btn {
  border-radius: 5px;
  background-color: #fca331;
  color: white;
  font-size: 1.3em;
}

.btn:hover {
  background-color: #ce8c35;
  color: white;
}

.btn-copy {
  background-color: silver;
  box-shadow: none;
  height: 40px;
}

h3 {
  font-size: 1.5em;
  margin: 0px;
}

p {
  margin: 0px;
}

/* logo */

.logo-chat img {
  height: 200px;
}

input {
border-bottom: 10px solid red;
}
</style>
