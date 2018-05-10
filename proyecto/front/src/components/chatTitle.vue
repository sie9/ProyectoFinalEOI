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
    font-family: 'Amatic SC', cursive;
    font-weight: 100;
}

</style>