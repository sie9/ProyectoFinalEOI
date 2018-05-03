const axios = require('axios');


module.exports.probarGet= probarGet;
module.exports.msgReceived=msgReceived;

function probarGet(req,res) {
    return res.json("Probando get");
    
}

function msgReceived (req,res) {
    let objectReceivedToTraslate = req.body
    
    axios.post('https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
        
    })
    .then((response) => {
        console.log(response.data);        
    })
    .catch(err => console.log(err));

    return res.json("Recibido para traducir: "+ objectReceivedToTraslate.msg);
}