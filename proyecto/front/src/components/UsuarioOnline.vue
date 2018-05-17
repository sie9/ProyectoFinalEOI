<template>
<div class="userCard" >
      <div class=" card darken-1 valign-wrapper " >
      <div class="userimage-border" :id="conver.id">
      </div>         
        <span>
          {{conver.alias}}
        </span>     
      </div>    
    </div>

</template>

<script>
export default {
  name: "UsuarioOnline",
  props: ["conver"],
  methods:{
    cargarUsuario: function(key) {
        var comoString = localStorage.getItem(key);
        return JSON.parse(comoString);
      },
  }, 
  mounted(){
      var url = this.conver.photo
      $('#'+this.conver.id).css("background-image","url("+ur7l+")")

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */

.userCard {
display:flex;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size:1rem;
}

.userimage-border {
  border-radius: 50%;
  border: 2px solid #fca331;
  width: 50px;
  height: 50px;
  background-position:center;
  background-size: cover;
}

.card{
  padding: 15px 5px 15px 10px;
  margin: 0px;
  border-collapse:collapse;
  width:100%;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}

 .card.darken-1.valign-wrapper{
  margin:0px;
  width:100%
 }

.row{
  display:flex;
  justify-content: flex-start;
  align-items:initial;
}

.row .col.s4 {
  max-width: 100%;
  text-align:initial;
  margin-left:10px;
  width:auto;
}

span {
  line-height: 30px;
  margin: 0 50px 0 20px;
  word-break:break-all;
  
}


</style>