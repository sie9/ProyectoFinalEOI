<template>
    <div>
       <ifError></ifError>
    </div>
</template>

<script>

import ifError from './ifError'

export default {
 name: "errorCompo",
 data() {
    return {
      
    };
  },
components:{
    ifError
}
 }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>