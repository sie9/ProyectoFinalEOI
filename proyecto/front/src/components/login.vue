<template>
    <div class="main">
        <div class="row login-box">
            <div class="logo-chat">
                <img src="../assets/img/chat2.png" alt="" class="center-block" id="logo">
            </div>
            <div class="grid--wrapper cabecera">
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
                        <input id="Texto" type="text" onfocus="this.value=''" value="" class="validate" v-model="msg" placeholder="MiCuenta">
                    </div>
                </div>
                <div class="grid--two-columns">
                    <div></div>
                    <!-- button -->
                    <router-link v-bind:to="msg">
                        <a class="waves-effect waves-light btn col s12">
                           <strong> CREATE ROOM </strong>
                        </a>
                    </router-link>
                </div>
            </div>
            <div class="texto">
              <h3>Métodos de uso:</h3>
            <ul class="list-inline">
                <li>
                  <div class="grid--two-columns">
                    <img src="../assets/user.png" alt="" class="icono">
                    <div>
                      <h4>1. Cómo empezar</h4>
                      <p>Haga clic en "Iniciar conversación", inicie sesión e introduzca su nombre y su idioma.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="grid--two-columns">
                    <img src="../assets/user.png" alt="" class="icono">
                    <div>
                      <h4>2. Comparta</h4>
                      <p>Comparta el código de la conversación con otros participantes para que puedan unirse a través de la aplicación Translator o a través del sitio web</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="grid--two-columns">
                    <img src="../assets/user.png" alt="" class="icono">
                    <div>
                      <h4>3. Hable</h4>
                      <p>Hable o escriba en su idioma para comunicarse con otros participantes que podrán ver sus mensajes en su propio idioma.</p>
                    </div>
                  </div>
                </li>
            </ul>
            
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



<style scoped>
p,
h3,
h4,
#imagen {
  margin: 0;
  padding: 0;
  color: black;
}

h3,
h4 {
  font-size: 1em;
  font-family: "Signika", sans-serif;
}

p,
h4 {
  text-align: left;
}
.texto {
  margin: 50px 0 0 0;
  padding: 30px;
}
.main {
  position: absolute;
  background-image: url("../assets/img/background-home.jpg");
  background-repeat: no-repeat;
  padding: 100px;
  width: 100vw;
  height: 150vh;

  -webkit-background-size: 100% 100%; /* Safari 3.0 */
  -moz-background-size: 100% 100%; /* Gecko 1.9.2 (Firefox 3.6) */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  background-size: 100% 100%; /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */
}

.login-box {
  background-color: white;
  padding-top: 10px;
  width: 500px;
  /* height: 800px; */
  border-radius: 10px;
  border-style: solid;
  border-color: silver;
  box-shadow: 2px 2px 5px black;
}

.icono {
  width: auto;
  height: 40px;
}

.instrucciones {
  color: black;
}

.grid--wrapper,
.grid--quarter-columns,
.grid--two-columns {
  display: grid;
}

.grid--wrapper {
  grid-template-columns: minmax(1em, 1fr) minmax(0, 75em) minmax(1em, 1fr);
}

.grid--wrapper > div {
  grid-column: 2;
}

.grid--quarter-columns {
  grid-template-columns: 10% 90%;
}

.grid--two-columns {
  grid-template-columns: 10% 90%;
}

/* button flags */

.lang {
  background-color: silver;
  height: 40px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 10px 10px 0;
}

.lang li {
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

.roundborders {
  border-radius: 5px;
}

.large:hover {
  height: 205px;
}

/* botones */

.btn {
  border-radius: 5px;
  background-color: silver;
  color: black;
  font-family: "Signika", sans-serif;
  font-size: 1.2em;
}

.btn:hover {
  background-color: grey;
  color: white;
}

.btn-copy {
  background-color: silver;
  box-shadow: none;
  height: 40px;
}

/* logo */

.logo-chat img {
  height: 200px;
}
</style>
