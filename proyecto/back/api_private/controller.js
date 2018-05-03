const axios = require('axios');
const _= require('lodash');


module.exports.probarGet= probarGet;
module.exports.msgReceived=msgReceived;

function probarGet(req,res) {
    return res.json("Probando get");
    
}

function msgReceived (req,res) {
    let toTraslate = req.body
    let traduccion = {};
    axios.post('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ',{
        target : toTraslate.traslate,
	    q : toTraslate.msg ,
	    source : toTraslate.from
    })
    .then((response) => {
        traduccion=_.head(response.data.data.translations).translatedText;        
        return res.json(traduccion);               
    })
    .catch(err => {
        console.log(err);
        return res.json(err);        
    });
}