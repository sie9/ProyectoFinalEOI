const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.json());
app.use(cors());

const translateRouter = require('./api/google-translate');
app.use('/api/translate', translateRouter);

app.listen(5600, err => {
  console.log("Servidor listo en el puerto 5600");
});
