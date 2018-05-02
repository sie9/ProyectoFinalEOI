<template>
 <div class="container">
   <div class="row">
      <div class="input-field col s11">
          <input id="Texto" type="text" class="validate" v-model="msg">
          <label for="Texto" v-if="!msg">Mensaje</label>
      </div>
      <a class="waves-effect waves-light btn col s1"><i class="material-icons">send</i></a>
  </div>
 </div>
  
</template>

<script>
export default {
  name: "inputComponent",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
