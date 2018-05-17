<template>
    <div class="main">
        <section class="row login-box">
          <div class="grid--wrapper">
            <div class="logo-chat">
                <img src="../assets/img/chat2.png" alt="" class="center-block" id="logo">
            </div>
            <div class="cabecera">
                  <div class="login">
                        <input id="texto" type="text" class="validate" v-model="msg" @keyup.enter=""  placeholder="wwww.chatty/name-room.es" maxlength="60">
                  </div>
                <div>
                    <router-link v-bind:to="msg" >
                      <alert dato="Esta sala existe" v-if="(aux==false)"></alert>
                        <div class="btn col s12">
                           CREATE A NEW ROOM 
                        </div>
                    </router-link>
                </div>
            </div>
          </div>
        </section>
        <section class="row barra">
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
                  <p>By email, chat, in Slack. However you'd like really</p>
                </div>
              </div>
              <div class="grid--quarter-min-columns">
                <div class="icono3"></div>
                <div>
                  <h3>... THAT'S IT!</h3>
                  <p>Guests join instantly in the browser by clicking the link.</p>
                </div>
              </div>
            </div>
              <div class="links">
                <a href="http://">Terms of Service</a> 
                |
                <a href="http://">Cookies</a> 
                |
                <a href="http://">©chatty</a>
              </div>
          </div>
        </section>
    </div>
</template>

<script>
import firebase from "firebase";
import alert from "./alert";

export default {
  name: "login",
  data() {
    return {
      msg: "",
      aux: true
    };
  },
  watch: {
    msg() {
      this.msg = this.msg.toLowerCase();
      if ( this.msg == ""){
        this.aux=true;
      }
    }
  },
  beforeRouteLeave(to, from, next) {

    

    
    firebase.database().ref("Sala" + this.msg).once("value", data => {
        console.log(data.val());
        
        if (data.val() != null) {
          this.aux = false;
          
        } else {
          firebase.database().ref("Sala" + this.msg).child("creada").set({x:"holita"}).then(()=> {
          this.isActive = false;
          console.log("No existe esta sala!");
          next();
          });          
        }
      });
  },
  methods: {
    goto() {

      location.href = "/"+this.msg;
    }
  },
  components: {
    alert
  }
};

$(document).ready(function() {
  $("select").formSelect();
});
</script>



<style scoped>
/* general   */
* {
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(73, 73, 73);
}

.main {
  position: absolute;
  background-image: url("../assets/img/background3.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background-position: center center; */
  background-attachment: fixed;
  background-size: cover;
  
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
  background-color: white;
  /* height: 150px; */
  width: 100%;
  height: auto;
  padding: 0;
  box-shadow: 0px -6px 9px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -20px;
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
  margin: 20px 20px 0px 20px;
}

/* imagenes */

.logo-chat img {
  height: 200px;
  min-height: 50px;
}

.icono,
.icono2,
.icono3 {
  padding: 50px;
  background-repeat: no-repeat;
  background-position: center;
}

.icono {
  background-size: 80% 90%;
  background-image: url("../assets/img/icon.jpg");
}

.icono2 {
  background-size: 65% 90%;
  background-image: url("../assets/img/icon2.png");
}

.icono3 {
  background-size: 60% 90%;
  background-image: url("../assets/img/icon7.png");
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

.links {
  text-align: center;
  background-color: #fca331;
  border-top: solid 1px black;
}
</style>
