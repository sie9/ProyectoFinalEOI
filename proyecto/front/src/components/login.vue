<template>
  <div class="row contenedor">
    <div class="login-box">
        <div class="logo-chat">
            <img src="../assets/chat.png" alt="" class="center-block" id="logo">
        </div>
        <section class="grid--wrapper">
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
                <div>
                    <button type="button" onclick="copyToClipboard('#msg')" class="btn btn-copy">
                        <img src="../assets/copy.png" alt="" id="imagen" class="col s4">
                    </button>
                </div>
            </div>
            <div class="grid--two-columns">
                <div></div>
                <!-- button -->
                <router-link v-bind:to="msg">
                    <a class="waves-effect waves-light btn col s12">
                        CREATE ROOM
                    </a>
                </router-link>
            </div>
            <div class="instrucciones">
            <h3>Cómo funciona esto:</h3>
            <ul class="list-inline">
                <li>
                  <div class="grid--two-columns">
                    <i class="icon start-icon"></i>
                    <h4>
                        <span>1.</span> Cómo empezar</h4>
                  </div>
                    <p>Introduzca el nombre de la cuenta de "Chatty" que desea y haga clic en "CREATE ROOM".</p>
                </li>
                <li>
                  <div class="grid--two-columns">
                    <i class="icon share-icon"></i>
                    <h4><span>2.</span> Comparta</h4>
                  </div>
                    <p>Comparta el código de la conversación con otros participantes para que puedan unirse a través de
                        la aplicación Translator o a través del sitio web</p>
                </li>
                <li>
                  <div class="grid--two-columns">
                    <i class="icon speak-icon"></i>
                    <h4>
                        <span>3.</span> Hable</h4>
                  </div>
                    <p>Hable o escriba en su idioma para comunicarse con otros participantes que podrán ver sus mensajes
                        en su propio idioma.</p>
                </li>
            </ul>
          </div>
        </section>
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

* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}

p, h3, h4, #imagen {
  margin: 0;
  padding: 0;
}
.contenedor {
  background-color: midnightblue;
  margin: 50px 500px 50px 500px;
  border-radius: 10px;
}

/* .login-box {
} */

#imagen {
  width: auto;
  height: 20px;
}

.instrucciones {
  color: white;
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
  grid-template-columns: 10% 80% 10%;
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
  background-color: limegreen;
}

.btn:hover {
  background-color: lime;
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
