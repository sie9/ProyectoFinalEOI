<template>
<div class="userCard">
      <div class=" card darken-1 valign-wrapper " >
      <div class="userimage-border">
      </div>         
        <span>
          Id: {{conver.id}}
        </span>     
      </div>    
    </div>

</template>

<script>
export default {
  name: "UsuarioOnline",
  props: ["conver"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */

.userCard {
display:flex;
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
  padding:15px 5px;
  margin: 0px;
  border-collapse:collapse;
  border-radius:0px;
  width:100%

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
  word-break:break-all;
  
}

small{
  position:absolute;
  bottom:0;
  right:0;
  padding-right:5px;
  color:#808080d8; 
  
}

small a{
  text-decoration: none;
  color:#80808096;
  margin-right: 5px;
}

small a:hover{
  text-decoration: none;
  color:#808080
}

</style>