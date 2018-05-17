<template>
<div class="container">
    <div class="row" v-bind:class="{'rightMsg': conver.owner== this.cargarUsuario('usuario')}" >
      
      <div class="userimage-border" v-bind:style="{ 'background-image': 'url(' + conver.photo + ')' }" @click="zumbido()">
        <i class="fas fa-bolt"></i>
      </div>         
      <div class=" card darken-1 col s4 valign-wrapper" v-bind:class="{'userMsg': conver.owner== this.cargarUsuario('usuario')}" >
        <span>
          {{conver.Texto}}
        </span>
        <small>
          <div title="Talk to me!" @click="talk()">
            <i class="fas fa-volume-up"></i>
          </div>
          <div class="reverse" title="See the original message" @click="undo(conver.id)" :id="conver.id">
            <i class="fas fa-redo"></i>
          </div>
           {{fecha}} 
        </small>       
      </div>         
    </div>
</div>
</template>

<script>
import moment from "moment";
import { Emoji } from "emoji-mart-vue";
import firebase from "firebase";

export default {
  name: "PostUser",
  props: ["conver"],
  data() {
    return {
      fecha: "",
      mensaje: "",
      angle: ""
    };
  },
  watch: {
    conver() {
      console.log("cambio", this.conver);
    }
  },
  created() {
    this.fecha = moment(this.conver.Fecha).fromNow();
    console.log(this.conver.photo);
    if (typeof this.conver.photo == "undefined")
      this.conver.photo =
        "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg";
  },
  // mounted(){
  //     var url = this.conver.photo
  //     console.log("url",url)
  //     $('#'+this.conver.id).css("background-image","url("+url+")")

  // },
  components: {
    Emoji
  },
  methods: {
    cargarUsuario(key) {
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      var comoString = localStorage.getItem(key+res);
      return JSON.parse(comoString);
    },
    undo(id) {
      console.log(id);
      if (this.conver.cond) {
        var aux = this.conver.Texto;
        this.conver.Texto = this.conver.original;
        this.conver.original = aux;
        this.conver.cond = false;
      } else {
        var aux = this.conver.Texto;
        this.conver.Texto = this.conver.original;
        this.conver.original = aux;
        this.conver.cond = true;
      }

      this.angle -= -180;
      $("#" + id).css({
        transform: "rotate(" + this.angle + "deg)"
      });
    },
    talk() {
      var h = new SpeechSynthesisUtterance();
      h.lang = "es-ES";
      h.text = this.conver.Texto;

      speechSynthesis.speak(h);
    },
    zumbido() {
      var fromPhoto = this.cargarUsuario("photo");
      var fromUser = this.cargarUsuario("usuario");
      var to = this.conver.owner;
      
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      

      firebase
        .database()
        .ref("Sala" + res)
        .child("Zumbido").child('hijo')
        .set({
          to: this.conver.owner,
          photo: fromPhoto,
          from: fromUser
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */

.container {
  font-family: "Montserrat", sans-serif;
}
.userimage-border {
  border-radius: 50%;
  border: 1px solid grey;
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: cover;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: initial;
}

.row .col.s4 {
  max-width: 66%;
  min-width: 25%;
  text-align: initial;
  margin-left: 10px;
  width: auto;
}

.card {
  margin-right: 10px;
  box-shadow: 7px 7px 5px 0px rgba(94, 94, 94, 0.75);
  background-color: #ffffffe7;
  border: 1px solid rgba(49, 49, 49, 0.651);
}

span {
  line-height: 30px;
  margin-bottom: 15px;
  margin-right: 50px;
  word-break: break-all;
}

small {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 5px;
  color: #616060fd;
}

small div {
  text-decoration: none;
  color: #616060fd;
  margin-right: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in;
}

small div:hover {
  text-decoration: none;
  color: #808080;
}

.rightMsg {
  float: none;
  justify-content: flex-start;
  flex-direction: row-reverse;
}

.userMsg {
  background-color: #ff9100c4;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.534);
  box-shadow: 7px 7px 5px 0px rgba(94, 94, 94, 0.75);
}
</style>