<template>
    <div class="main">
        <nav class="navegador">
            <ul>
                <li>HOME</li>
            </ul>
        </nav>
        <section class="row texto">
            <div class="grid--wrapper">
                <div class="grid--two-columns">
                    <div>
                        <h1>Oops!</h1>
                        <h2>WE CAN'T SEEM TO FIND THE PAGE YOU'RE LOOKING FOR.</h2>
                        <hr>
                        <p>ERROR 404</p>
                    </div>
                    <div class="imagen"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
  name: "ifError",
};

</script>

<style scoped>
    /* grid */
    .grid--wrapper,
    .grid--two-columns,
    .grid--three-columns {
        display: grid;
    }

    .grid--wrapper {
        grid-template-columns: minmax(1em, 1fr) minmax(0, 75em) minmax(1em, 1fr);
    }

    .grid--wrapper>div {
        grid-column: 2;
    }

    .grid--two-columns {
        grid-template-columns: 70% 30%;
    }

/* Clases propias */
* {
  font-family: "Montserrat", sans-serif;
  color: white;
}

nav {
    background-color: #fff;
    height: 80px;
}

nav ul li {
    /* background-color: #fff; */
    padding: 10px;
}

.main {
  background-color: #fca331;
  height: 100vh;
}

li {
    color: #fca331;
    padding: 10px;
    text-align: center;
}

li:hover {
    color: #ce8c35;
}

.texto {
    padding-top:150px;
}

.imagen {
    background-image: url("../assets/img/icon8.png");
    /* background-image: url("icon8.png"); */
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
}

hr {
    border: 2px solid white;
}

</style>