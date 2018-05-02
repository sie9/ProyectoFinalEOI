<template>
<div class="postUser">
    <div class="grid--wrapper">
        <div class="grid--quarter-columns">
            <img src="../assets/user.png" alt="" id="imagen">
            <textarea>
              {{conver}}
            </textarea>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "PostUser",
  props: ['conver']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid--wrapper,
.grid--quarter-columns {
  display: grid;
}

.grid--wrapper {
  grid-template-columns: minmax(1em, 1fr) minmax(0, 75em) minmax(1em, 1fr);
}

.grid--wrapper > div {
  grid-column: 2;
  margin: 50px auto 50px auto;
  width: 100%;
}

.grid--quarter-columns {
  grid-template-columns: 10% 90%;
}

/* ------------------------ clases -------------------------- */

textarea {
  resize: none;
  border-style: solid;
  border-radius: 10px;
  height: 100px;
}

#imagen {
  margin: 20px;
  width: 50px;
  height: 50px;
  border: solid;
  border-color: silver;
  border-radius: 100%;
}
</style>