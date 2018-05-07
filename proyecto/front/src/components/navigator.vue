<template>
<div>
     <nav>
    <div class="nav">
      <a href="#" class="left brand-logo">Logo</a>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><a href="#">Yeah</a></li>
        <li><a href="#">Add Users</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
            
          
    </div>

</template>

<script>
export default {
  name: "PostUser",
  props: ["conver"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */
#imagen {
  margin: 0px;
  width: 70px;
  height: 50px;
}

nav{
    background:rgba(110, 240, 240, 0.87);
}
.brand-logo{
    margin-left:20px;
    position:initial;
}
span {
  height: 100px;
  line-height: 100px;
}
</style>
