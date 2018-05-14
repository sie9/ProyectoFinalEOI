<template>
    <div class="inputCont">
        <div class="input-container" style="position: relative;">
            <picker set="twitter" style="position: absolute; bottom: 20px; left: 20px;"></picker>
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
import {Picker} from 'emoji-mart-vue';

export default {
  name: "inputComponent",
  components: {
    Picker
  },
  data() {
    return {
      msg: ""
    };
  },
  created() {},
  methods: {
    writetodB: function() {
      var privateId = this.cargarUsuario();
      if (privateId == null) {
        privateId == "WTF?";
      }

      var route = this.$route.path;
      var res = route.substring(1, route.length);
      console.log(res);
      firebase
        .database()
        .ref("Sala" + res)
        .child("Mensajes")
        .push({
          text: this.msg,
          owner: privateId,
          time: Date(),
          id: (this.s4() + "-" + this.s4())
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
    cargarUsuario: function() {
      var comoString = localStorage.getItem("usuario");
      return JSON.parse(comoString);
    }
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
}

.input-field{
  width: 90%
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
