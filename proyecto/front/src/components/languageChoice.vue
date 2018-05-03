<template>
  <div class="row">
       <div class="input-field col s2 offset-s5">
          <select id="select" class="icons">
            <option value="" data-icon="https://source.unsplash.com/random" class="circle" selected>Idioma 1</option>
            <option value="" data-icon="https://source.unsplash.com/random" class="circle">Idioma 2</option>
            <option value="" data-icon="https://source.unsplash.com/random" class="circle">Idioma 3</option>
          </select>
          <label>Idiomas</label>
        </div>
  </div>

</template>

<script>
export default {
  name: "languageChoice",
  data() {
    return {
      msg: ""
    };
  }
};
$(document).ready(function() {
  $("select").formSelect();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
