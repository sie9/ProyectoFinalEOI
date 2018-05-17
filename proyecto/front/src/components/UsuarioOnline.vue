<template>
<div class="userCard">
      <div class=" card darken-1 valign-wrapper " >
      <div class="userimage-border">
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
  mounted(){
    console.log(this.conver.alias)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */

.userCard {
display:flex;
font-family: 'Amatic SC', cursive;
font-weight: 700;
font-size:1.5rem;
}
.userimage-border{
  border-radius: 50%;
  border:1px solid grey;
  width: 50px;
  height: 50px;
  background-image: url('https://source.unsplash.com/1600x900/?face');
  background-position:center;
  background-size: cover;
}

.card{
  padding:15px 5px 10px 5px;
  margin: 0px;
  border-collapse:collapse;
  border-radius:0px;
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
  margin-bottom:15px;
  margin-right:50px;
  margin-left:10px;
  word-break:break-all;
  
}


</style>