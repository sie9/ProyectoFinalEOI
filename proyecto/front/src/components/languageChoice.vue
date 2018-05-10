<template>
  <div class="row">
       <div class="input-field  offset-s5">
          <select id="select" class="icons" @change="cambiarIdioma(idioma)" v-model="idioma">
            <option value="" disable selected>Language</option>
            <option value="es" data-icon="http://i68.tinypic.com/avo5ky.png" selected class="circle">Spanish</option>
            <option value="en" data-icon="http://i64.tinypic.com/fd60km.png" class="circle">English</option>
            <option value="it" data-icon="http://i65.tinypic.com/23jl6bn.png" class="circle">Italian</option>
          </select>
        </div>
  </div>

</template>

<script>
export default {
  name: "languageChoice",
  data() {
    return {
      msg: "",
      idioma: ""
    };
  },
  methods: {
    cambiarIdioma(idioma) {
      this.$emit("lang",idioma);
    }
  }
};
$(document).ready(function() {
  $("#select").formSelect();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-field.offset-s5{
    background-color: white;
  }
</style>
