const express = require("express");
const app = express();

//TO-DO: Cuidado con el cors. Permite cualquier petición.
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));


const translateRouter = require('./google-translate');
app.use('/api/translate', translateRouter);

app.listen(8500, err => {
    console.log("Servidor listo en el puerto 8500");
});