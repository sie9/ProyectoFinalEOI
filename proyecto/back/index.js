


const express = require("express");
const axios = require("axios");
const app = express();


//TO-DO: Cuidado con el cors. Permite cualquier petición.Configurar.
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRouter = require('./api_private');
//Obligatorio para el entendimiento de rutas
app.use(express.json());

/* axios.get('https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ')
    .then((response) => {
        console.log(response.data);        
    })
    .catch(err => console.log(err)); */

app.use('/api', apiRouter);

/* app.route('/').get((req,res,next)=>{
    res.json("");
});

app.route('/').post(function(req, res, next) {    
    let objetReceived = req.body;
    res.json(objetReceived.msg);
}); */



/* const translateRouter = require('./api/google-translate');
app.use('/api/translate', translateRouter); */

app.listen(8500, err => {
    console.log("Servidor listo en el puerto 8500");
});