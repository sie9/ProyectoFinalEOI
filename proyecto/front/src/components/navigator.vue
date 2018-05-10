<template>
<div>
     <nav>
       <div class="left brand-logo">
      <a href="#"><img src="../assets/img/chat.png" alt=""></a>
       </div>
      <share-link></share-link>
      <language-choice @lang="changeLang" ></language-choice>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><a href="#">Yeah</a></li>
        <li><a href="#">Add Users</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    
    </nav>
            
          
    </div>

</template>

<script>

import languageChoice from './languageChoice'
import shareLink from './shareLink'

export default {
  name: "navigator",
  components: {
    languageChoice,shareLink
  },
  data(){
    return {
      /* lang:"" */
    }
  },
  methods: {
    changeLang(lang) {
      this.$emit('lang', lang);

      /* this.lang = lang; */
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

nav{
    background:rgb(36, 49, 77);
    display:flex;
    flex-wrap: nowrap;
}

.brand-logo{
    margin-left:20px;
    position:initial;
    width: 10%;
    text-align:left;
}

img{
  width:40%;
  filter: grayscale(100%);
  transition:filter .3s ease-out;
  padding-top:5px
}

img:hover{
  transition:filter .5s ease-in;
  filter: grayscale(0%);
}

share-link{
  width:80%
}

</style>
