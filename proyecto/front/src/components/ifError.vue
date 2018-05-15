<template>
    <div class="main">
        <section class="row">
            <div class="grid--wrapper">
                <div class="texto grid--two-columns">
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
  background-color: #fca331;
  color: white;
}

.main {
    display: block;
    padding-top:250px;
}
.imagen {
    background-image: url("../assets/img/icon8.png");
    /* background-image: url("icon8.png"); */
    background-size: 70% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
}

hr {
    border: 2px solid white;
}
</style>