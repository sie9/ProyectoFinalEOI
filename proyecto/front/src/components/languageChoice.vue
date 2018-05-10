<template>
  <div class="row">
       <div class="input-field  offset-s5">
          <select id="select" class="icons" @change="cambiarIdioma(idioma)" v-model="idioma">
            <option value="es" data-icon="https://source.unsplash.com/random" selected class="circle">Español</option>
            <option value="en" data-icon="https://source.unsplash.com/random" class="circle">Ingles</option>
            <option value="it" data-icon="https://source.unsplash.com/random" class="circle">Italiano</option>
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
