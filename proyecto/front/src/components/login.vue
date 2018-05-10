<template>
<div class="row">
        <div class="grid--wrapper">
            <div class="logo-chat">
                <img src="../assets/chat.png" alt="" class="center-block" id="logo">
            </div>
            <div class="grid--quarter-columns">
                <ul class="lang roundborders large">
                    <a href="#en">
                        <li>
                            <img src="http://i64.tinypic.com/fd60km.png" />
                        </li>
                    </a>
                    <a href="#de">
                        <li>
                            <img src="http://i63.tinypic.com/10zmzyb.png" />
                        </li>
                    </a>
                    <a href="#fr">
                        <li>
                            <img src="http://i65.tinypic.com/300b30k.png" />
                        </li>
                    </a>
                    <a href="#es">
                        <li>
                            <img src="http://i68.tinypic.com/avo5ky.png" />
                        </li>
                    </a>
                    <a href="#it">
                        <li>
                            <img src="http://i65.tinypic.com/23jl6bn.png" />
                        </li>
                    </a>
                </ul>
                <!-- Input -->
                <div class="login">
                    <input id="Texto" type="text" onfocus="this.value=''" value="" class="validate" v-model="msg" placeholder="Crea tu cuenta">
                </div>
            </div>
            <div class="grid--quarter-columns">
                <div>

                </div>
                <div>
                  <router-link v-bind:to= "msg">
                    <a class="waves-effect waves-light btn col s12">
                        CREATE ROOM
                    </a>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
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

.grid--wrapper,
.grid--quarter-columns {
  display: grid;
}

.grid--wrapper {
  grid-template-columns: minmax(1em, 1fr) minmax(0, 75em) minmax(1em, 1fr);
}

.grid--wrapper > div {
  grid-column: 2;
  /* margin: 50px auto 50px auto; */
  width: 100%;
}
/* .grid--three-columns {
  grid-template-columns: repeat(3, calc(100%/3));
} */

.grid--quarter-columns {
  grid-template-columns: 10% 90%;
}

.lang {
  background-color: silver;
  display: inline-block;
  padding: 0;
  height: 40px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 50px 10px 0;
  vertical-align: top;
  text-align: center;
}

.lang:hover {
  /* don't forget the 1px border */
  height: 81px;
}

.lang li {
  display: block;
  padding: 0px 20px;
  line-height: 40px;
  border-top: 1px solid #eee;
}

.lang li:hover {
  background-color: #eee;
}

.lang a:first-child li {
  border: none;
  background: silver;
}

.lang li img {
  margin-right: 5px;
}

.roundborders {
  border-radius: 5px;
}

.large:hover {
  height: 245px;
}

.btn {
  margin: 0px;
  border-radius: 10px;
  background-color: limegreen;
}

.btn:hover {
  background-color: lime;
}

.logo-chat {
  margin:0;
}
.logo-chat img {
  display: block;
  height: 200px;
}
</style>
