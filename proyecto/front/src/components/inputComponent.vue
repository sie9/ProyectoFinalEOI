<template>
    <div class="inputCont">
        <div class="input-container">
            <div class="input-field grid-input">
                <label for="Texto">Mensaje</label>
                <input id="Texto" type="text" v-on:keyup.enter="writetodB" onfocus="this.value=''" value="" class="validate" v-model="msg">
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

export default {
  name: "inputComponent",
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
          time: Date()
        });
      this.msg = "";
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

.btn {
  border-radius: 10px 0 0 10px;
  background-color: #fca331;
}

.btn:hover {
  background-color: #fca331;
}

.btn2 {
  border-radius: 0 20% 20% 0;
}
.input-container {
  padding: 10px 50px 10px 50px;
}
.flex-button {
  display: flex;
  justify-content: flex-end;
  
}
</style>
