<template>
    <div class="row" id="languageChoice">
       <div class="input-field">
          <select id="drop-select" class="icons" @change="cambiarIdioma(idioma)" v-model="idioma">
            <option disabled value="" selected>Lenguage</option>            
            <option value="es" data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spain_flag_icon.svg/600px-Spain_flag_icon.svg.png" selected class="circle">Spanish</option>
            <option value="en" data-icon="https://www.elitetranslingo.com/wp-content/uploads/2014/09/english.png" class="circle">English</option>
            <option value="it" data-icon="http://iconbug.com/download/size/256/icon/7949/button-flag-italy/" class="circle">Italian</option>
            <option value="fr" data-icon="http://iconbug.com/data/6c/256/4076746a20b3b22be8ac91102db4a9ab.png" class="circle">French</option>
            <option value="de" data-icon="http://iconbug.com/data/92/256/91947f0d356af9434050f4e3a9797ffd.png" class="circle">German</option>
            <option value="zh-CN" data-icon="https://blog.iefa.org/wp-content/uploads/2013/11/China-1.png" class="circle">Chino</option>
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
