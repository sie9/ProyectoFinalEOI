<template>
    <div class="inputCont">
        <div class="input-container" style="position: relative;">
            <div class="emojis-btn" v-on:click="showIcons">😠</div>
            <picker set="twitter" title="Chattys" emoji="woman-with-bunny-ears-partying" @select="onClick" v-if="salir==true"></picker>
            <div class="input-field grid-input">
                <label for="Texto">Mensaje</label>
                <input id="Texto" type="text" @change="concatena" v-on:keyup.enter="writetodB"  class="validate" v-model="msg">
            </div>
            <div class="flex-button">
                <a class="waves-effect waves-light btn " v-on:click="writetodB">
                    <i class="material-icons">send</i>
                </a>
                <a class="btn btn2 " v-on:click="voicetospeech">
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
      msg: " ",
      salir:false 
    };
  },
  watch: {
    msg: function() {
        this.msg=this.jsUcfirst()
    }
  },
  methods: {
    showIcons: function () {
      this.salir=!this.salir;
    },
    concatena: function () {
    },
    jsUcfirst: function (string) {
      return this.msg.charAt(0).toUpperCase() + this.msg.slice(1);
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
      var route = this.$route.path;
      var res = route.substring(1, route.length);
      var comoString = localStorage.getItem(key+res);
      return JSON.parse(comoString);
    },
    metodoAuxiliar: function (event, self){
      var speechResult = event.results[0][0].transcript;
        
        console.log(self);
        console.log("resultado:", speechResult);
        self.msg = speechResult;
        var texto = $('#Texto').val() + " ";
        $('#Texto').val(texto + speechResult);
        $('#Texto').focus();
    },
    voicetospeech: () => {
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
      var SpeechRecognitionEvent =
        SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
      

      var grammar =
        "#JSGF V1.0; grammar phrase; public <phrase> =  ;";
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = (event) =>  this.a.methods.metodoAuxiliar(event, this) ;

      recognition.onspeechend = function() {
        recognition.stop();
      };

      recognition.onerror = function(event) {
      };

      recognition.onaudiostart = function(event) {
        //Fired when the user agent has started to capture audio.
      };

      recognition.onaudioend = function(event) {
        //Fired when the user agent has finished capturing audio.
      };

      recognition.onend = function(event) {
        //Fired when the speech recognition service has disconnected.
      };

      recognition.onnomatch = function(event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        
      };

      recognition.onsoundstart = function(event) {
        //Fired when any sound — recognisable speech or not — has been detected.
      };

      recognition.onsoundend = function(event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
      };

      recognition.onspeechstart = function(event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      };
      recognition.onstart = function(event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      };
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
  padding: 30px 50px 30px 50px;
  border: 1px solid rgb(110, 110, 110);
  box-shadow: 10px 1px 20px 5px rgba(14, 14, 14, 0.815);
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
  padding: 10px;
  margin: 15px 15px 15px 0;
  cursor:pointer;
  border: 1px solid rgba(211, 211, 211, 0.856);
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
