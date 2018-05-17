<template>
    <div class="row" id="languageChoice">
       <div class="input-field">
          <select id="drop-select" class="icons" @change="cambiarIdioma(idioma)" v-model="idioma">
            
            <option value="es" data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spain_flag_icon.svg/600px-Spain_flag_icon.svg.png" selected class="circle">Spanish</option>
            <option value="en" disabled selecteddata-icon="https://media.schemeserve.com/user_images/ACCOUNT_ID_15040/GB_Flag.png" class="circle">English</option>
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
  created() {},
  mounted() {
    $(document).ready(function() {
      $("#drop-select").formSelect();
    });
  },
  methods: {
    cambiarIdioma(idioma) {
      this.$emit("lang", idioma);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

* {
  font-family: "Montserrat", sans-serif;
}

#languageChoice .input-field {
  width: 150px;
  text-align: right;
  /* border-radius: 10px; */
}

#languageChoice .dropdown-content li > a, .dropdown-content li > span {
    font-size: 16px;
    color: #fca331;
    display: block;
    line-height: 22px;
    padding: 14px 16px;
}

.select-wrapper input.select-dropdown {
  border-bottom: none;
  color: white;
  font-weight: 100;
  border: solid 1px white;
  padding-left: 5px;
  margin-top: 5px;
  height: 30px;
}

#drop-select .select-wrapper input.select-dropdown:focus {
  border-bottom: none;
  color: white;
  margin: 0 !important ;
}

.select-wrapper input.select-dropdown:focus {
  border: solid 1px white;
  padding-left: 5px;
}
</style>
