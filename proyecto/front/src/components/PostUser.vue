<template>
<div class="container">
    <div class="row" v-bind:class="{'rightMsg': conver.owner== this.cargarUsuario()}">
      <div class="userimage-border">
      </div>         
      <div class=" card darken-1 col s4 valign-wrapper " >
        <span>
          {{conver.Texto}}
        </span>
        <small>
          <div title="Talk to me!" @click="talk()">
            <i class="fas fa-microphone"></i>
          </div>
          <div class="reverse" title="See the original message" @click="undo()">
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

export default {
  name: "PostUser",
  props: ['conver'],
  data() {
    return {
      fecha: "",
      mensaje:"",
      angle:""
      
    };
  },
  watch:{
    'conver'(){
      console.log("cambio", this.conver);
    }

  }, 
  created() {
    this.fecha = moment(this.conver.Fecha).fromNow();
    //this.mensaje= this.conver.Texto;
  },
  methods:{
    cargarUsuario() {
      var comoString = localStorage.getItem("usuario");
      return JSON.parse(comoString);
    },
    undo() {
      
      if ( this.conver.cond ){
        var aux = this.conver.Texto;
        this.conver.Texto= this.conver.original;
        this.conver.original = aux;
        this.conver.cond = false;
      }else{
        var aux = this.conver.Texto;
        this.conver.Texto= this.conver.original;
        this.conver.original = aux;
        this.conver.cond = true;
      }  
      
    this.angle -= -180;
    $('.reverse').css ({
        'transform': 'rotate(' + this.angle + 'deg)',
    });
    },
    talk() {
      
      var h = new SpeechSynthesisUtterance();
      h.lang = "es-ES";
      h.text = this.mensaje;
    
      speechSynthesis.speak(h);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */

.container{
  font-family: 'Montserrat', sans-serif;
}
.userimage-border{
  border-radius: 50%;
  border:1px solid grey;
  width: 50px;
  height: 50px;
  background-image: url('../assets/img/user_ex2.jpg');
  background-position:center;
  background-size: cover;
}

.row{
  display:flex;
  justify-content: flex-start;
  align-items:initial;
}

.row .col.s4 {
  max-width: 66%;
  min-width: 25%;
  text-align:initial;
  margin-left:10px;
  width:auto;
}

span {
  line-height: 30px;
  margin-bottom:15px;
  margin-right:50px;
  word-break:break-all;
  
}

small{
  display:flex;
  justify-content: space-around;
  position:absolute;
  bottom:0;
  right:0;
  padding-right:5px;
  color:#808080d8; 
  
}

small div{
  text-decoration: none;
  color:#80808096;
  margin-right: 5px;
  cursor: pointer;
  transition:transform .3s ease-in;
}

small div:hover{
  text-decoration: none;
  color:#808080
}

.rightMsg{
 float:none;
 justify-content: flex-end;
}


</style>