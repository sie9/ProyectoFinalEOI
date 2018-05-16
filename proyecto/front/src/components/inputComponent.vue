<template>
    <div class="inputCont">
        <div class="input-container" style="position: relative;">
            <div class="emojis-btn" v-on:click="showIcons">😠</div>
            <picker set="twitter" title="Chattys" emoji="woman-with-bunny-ears-partying" @select="onClick" v-if="salir==true"></picker>
            <div class="input-field grid-input">
                <label for="Texto">Mensaje</label>
                <input id="Texto" type="text" v-on:keyup.enter="writetodB" value="" class="validate" v-model="msg">
            </div>
            <div class="flex-button">
                <a class="waves-effect waves-light btn " v-on:click="writetodB">
                    <i class="material-icons">send</i>
                </a>
                <a class="btn btn2 " v-on:click="recordtodB">
                    <i class="fas fa-microphone"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import moment from "moment";
import { Picker } from 'emoji-mart-vue';


export default {
  name: "inputComponent",
  components: {
    Picker
  },
  data() {
    return {
      msg: "",
      salir:false 
    };
  },
  methods: {
    showIcons: function () {
      this.salir=!this.salir;
    },

     onClick: function (emoji, event) {
      console.log(emoji.colons);
      this.msg = this.msg + emoji.native;
    },
    writetodB: function() {
      var privateId = this.cargarUsuario("usuario");
      if (privateId == null) {
        privateId == "WTF?";
      }
    var url = this.cargarUsuario("photo")
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      firebase
        .database()
        .ref("Sala" + res)
        .child("Mensajes")
        .push({
          text: this.msg,
          owner: privateId,
          time: Date.now(),
          id: (this.s4() + "-" + this.s4()),
          photo: url
        });
      this.msg = "";
    },
    s4: function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    recordtodB: function() {
      firebase
        .database()
        .ref("audios")
        .push({});
    },
    cargarUsuario: function(key) {
      var comoString = localStorage.getItem(key);
      return JSON.parse(comoString);
    },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputCont{
  background: #fff;
}

.row.flex{
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.95)
}

.input-container {
  padding: 10px 50px 30px 50px;
  border:1px solid rgb(110, 110, 110);
  box-shadow:10px 1px 20px 5px rgba(14, 14, 14, 0.815);
  display:flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.emoji-mart{
width: 355px;
position: absolute;
bottom: 100px;
left: 20px;
z-index: 1;
}

.emojis-btn{
  padding:10px;
  margin:5px;
  cursor:pointer;
  border:1px solid rgba(211, 211, 211, 0.856);
}

.emojis-btn:hover{
  background-color:rgba(241, 239, 239, 0.856);
  border:1px solid #fca331;
}

.emoji-mart-search[data-v-4ad41bb8] {
  padding:0;
  width:80%;
  display:none !important;
}

.input-field{
  width: 90%
}

.input-field input{
  word-break: break-all;
  overflow: scroll;
}
.flex-button {
  display: flex;
  justify-content: flex-end;
  margin-left:5px;
  
}

.btn {
  border-radius: 10px 0 0 10px;
  background-color: #fca331;
}

.btn:hover {
  background-color: #ce8c35;
}

.btn2 {
  border-radius: 0 20% 20% 0;
}
</style>
