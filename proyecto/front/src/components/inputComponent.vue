<template>
    <div class="container">
        <div class="row">
           <!-- Input -->
            <div class="input-field col s10">
                <label for="Texto" v-if="!msg">Mensaje</label>
                <input id="Texto" type="text" v-on:keyup.enter="writetodB" onfocus="this.value=''" value="" class="validate" v-model="msg">
            </div>
            <!-- Boton enviar -->
            <a class="waves-effect waves-light btn col s1" v-on:click="writetodB">
                <i class="material-icons">send</i>
            </a>
            <!-- Boton audio -->
            <a class="btn btn2 col s1" v-on:click="recordtodB">
                <img src="../assets/audio.png" alt="" id="imagen" class="col s4">
            </a>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
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
      firebase
        .database()
        .ref("Mensajes")
        .push({
          text: this.msg,
          owner: "Christian"
        });
    },
    recordtodB: function() {
      firebase
        .database()
        .ref("audios")
        .push({});
    }
  }
};

/* function clear_textbox() {
  if (document.form1.text1.value == "Texto del formulario")
    document.form1.text1.value = "";
}

function myFunction() {
  var x = document.getElementById("Texto");
  x.value = x.value.toUpperCase();
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imagen {
  margin: 5px 0px 0px 0px;
  width: 50px;
  height: 25px;
}

.btn {
  border-radius: 20% 0 0 20%;
  background-color: limegreen;
}

.btn:hover {
  background-color: lime;
}

.btn2 {
  border-radius: 0 20% 20% 0;
}
</style>
