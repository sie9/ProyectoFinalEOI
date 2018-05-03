const axios = require('axios');


module.exports.probarGet= probarGet;
module.exports.msgReceived=msgReceived;

function probarGet(req,res) {
    return res.json("Probando get");
    
}

function msgReceived (req,res) {
    let objectReceivedToTraslate = req.body
    
    axios.post('https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
        target :'en',
	    q :'¿Como te llamas?',
	    source:'es'
    })
    .then((response) => {
        console.log(response.data.data);        
    })
    .catch(err => console.log(err));

    return res.json("Recibido para traducir: "+ objectReceivedToTraslate.msg);
}