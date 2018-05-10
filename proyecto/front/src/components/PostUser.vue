<template>
<div class="container">
    <div class="row">
      <div class="userimage-border">
        <!-- <img src="../assets/img/user_ex2.jpg" alt="" class="userimg col s4"> -->
      </div>         
      <div class=" card darken-1 col s4 valign-wrapper " >
        <span>
          {{conver.Texto}}
        </span>
        <small><a href="#" title="See the original message"><i class="fas fa-redo"></i></a> {{fecha}} </small>
        
      </div>
            
          
    </div>
</div>
</template>

<script>


import moment from "moment";

export default {
  name: "PostUser",
  props: ["conver"],
  data() {
    return {
      fecha: ""
    };
  }, 
  created() {
    this.fecha = moment(this.conver.Fecha).fromNow();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */
.userimage-border{
  border-radius: 50%;
  border:1px solid grey;
  width: 50px;
  height: 50px;
  background-image: url('../assets/img/user_ex2.jpg');
  background-position:center;
  background-size: cover;
}

/* .userimg {
  margin: 0px;
  width: 70px;
  height: 50px;
  border-radius: 50%
} */
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