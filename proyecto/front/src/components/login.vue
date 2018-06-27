<template>
    <div class="main">
      <section class="container">
        <div class="row login-box">
          <div class="grid--wrapper">
            <div class="logo-chat">
                <img src="../assets/img/chat3.png" alt="" class="center-block" id="logo">
            </div>
            <div class="cabecera">
                  <div class="login">
                        <input id="texto" type="text" v-on:keyup.enter="writetodB" class="validate" v-model="msg" placeholder="Name-room" maxlength="60">
                  </div>
                <div>
                    <router-link v-bind:to="msg" >
                      <alert dato="Esta sala existe" v-if="(aux==false)"></alert>
                        <button class="btn col s12">
                           CREATE A NEW ROOM 
                        </button>
                    </router-link>
                </div>
            </div>
          </div>
        </div>
      </section>
        
      <section class="barra">
        <div class="grid--three-columns instrucciones">
          <div class="grid--two-columns columns">
            <div class="icono"></div>
            <div class="texto">
                <h3>CREATE A ROOM LINK</h3>
                <p>It can be whatever you want.</p>
            </div>
          </div>
          <div class="grid--two-columns columns">
            <div class="icono2"></div>
            <div class="texto">
              <h3>SHARE THE LINK</h3>
              <p>By email or chat. However you'd like really</p>
            </div>
          </div>
          <div class="grid--two-columns columns">
            <div class="icono3"></div>
            <div class="texto">
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
      if (this.msg == "") {
        this.aux = true;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    firebase
      .database()
      .ref("Sala" + this.msg)
      .once("value", data => {
        console.log(data.val());

        if (data.val() != null) {
          this.aux = false;
        } else {
          firebase
            .database()
            .ref("Sala" + this.msg)
            .child("creada")
            .set({ x: "holita" })
            .then(() => {
              this.isActive = false;
              console.log("No existe esta sala!");
              next();
            });
        }
      });
  },
  methods: {
    goto() {
      location.href = "/" + this.msg;
    },
    writetodB: function() {
      if (this.msg != ''){
        if (this.tamaño < 400){s
        
            var privateId = this.cargarUsuario("usuario");
      if (privateId == null) {
        privateId == "WTF?";
      }
      
      firebase
        .database()
        .ref("Sala" + res)
      this.msg = "";
        }
      }
    },
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
h3,
p {
  margin: 0;
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
  background-image: url("../assets/img/fondo.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
  border-color: #fca331;
  box-shadow: 2px 2px 5px black;
  opacity: 0.9;
}

.barra {
  margin: 150px 0 0 0;
  background-color: white;
  width: 100%;
  box-shadow: 0px -6px 9px 0px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  border-top: solid #fca331;
  position: fixed;
  bottom: 0;
}

.texto {
  margin: 0 20px 0 20px;
}

.columns {
  float: left;
  min-width: 50%;
  display: block;
}

@media all and (max-width: 1200px) {
    .grid--two-columns {
        display: inline-block;
        padding:0px 6px;
        margin:0px 4px;
    }
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

.grid--two-columns {
  grid-template-columns: 30% 70%;
}

.grid--three-columns {
  grid-template-columns: repeat(3, calc(100% / 3));
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
  /* padding: 50px; */
  background-repeat: no-repeat;
  min-height: 10%;
  height: 100px;
  min-height: 50px;
  width: auto;
  background-position: right;
}

.icono {
  background-size: auto 90%;
  background-image: url("../assets/img/icon.jpg");
}

.icono2 {
  background-size: auto 90%;
  background-image: url("../assets/img/icon2.png");
}

.icono3 {
  background-size: auto 90%;
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
