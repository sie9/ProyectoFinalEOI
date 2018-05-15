<template>
  <div class="row">
       <div class="input-field">
          <select id="select" class="icons" @change="cambiarIdioma(idioma)" v-model="idioma">
            <option value="" disable selected>Language</option>
            <option value="es" data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spain_flag_icon.svg/600px-Spain_flag_icon.svg.png" selected class="circle">Spanish</option>
            <option value="en" data-icon="https://media.schemeserve.com/user_images/ACCOUNT_ID_15040/GB_Flag.png" class="circle">English</option>
            <option value="it" data-icon="http://iconbug.com/download/size/256/icon/7949/button-flag-italy/" class="circle">Italian</option>
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
.input-field{
    background-color: white;
  }
  
.input-field select{
    background-color: white;
    border-color:orange;
    border-bottom:none;
  }

.select-wrapper input.select-dropdown.dropdown-trigger{
  border-bottom:0px solid orange;
}

.select-wrapper input.select-dropdown:focus{
  border-bottom:none;
}

select{
  border:none;
}


</style>
