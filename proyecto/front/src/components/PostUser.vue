<template>
<div class="container">
    <div class="row">
      <img src="../assets/user.png" alt="" id="imagen" class="col s4">    
      <div class=" card darken-1 col s4 valign-wrapper " >
        <span>
          {{conver.text}}
        </span>
      </div>
            
          
    </div>
</div>
</template>

<script>
export default {
  name: "PostUser",
  props: ["conver"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */
#imagen {
  margin: 0px;
  width: 70px;
  height: 50px;
}

span {
  height: 100px;
  line-height: 100px;
}
</style>