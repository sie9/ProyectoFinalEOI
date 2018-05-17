<template>
    <div>
      <h1>{{title}}</h1>    
    </div>
</template>

<script>

export default {
 name: "chatTitle",
 data() {
    return {
      title: ""
    };
  },
 created(){
     var route = this.$route.path;
     this.title = route.substring(1, route.length);
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
    font-family: "Montserrat", sans-serif;
    /* text-shadow: black 0em 0em 0.4em; */
    text-transform: uppercase;
    letter-spacing: 15px;
    font-weight: 500;
    font-size: 2rem;
    color:#fff;
    margin:0px;
    padding-top:20px;
    padding-bottom:20px;
    background-color: rgba(105, 105, 105, 0.795);
}

</style>